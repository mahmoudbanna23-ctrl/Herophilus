# Kaggle GPU script: paint plates from a JSON job list, in the style of a reference painting.
# Inputs (flat in /kaggle/input/<dataset>/): jobs.json + every reference image the jobs name.
#
# jobs.json = {"jobs": [{"name": "shot1-sky-dark-k1", "prompt": "...", "prompt_short": "...(optional, SDXL, <77 tokens)",
#                        "negative": "photo, 3d render", "ref": "city-dark-3.png", "seed": 1,
#                        "w": 1536, "h": 1024, "steps": 4}, ...]}
#   name   -> output file <name>.png (RGB, exactly w x h)
#   ref    -> style reference image (basename of an input file), or null for text only
#   steps  -> klein steps (default 4). SDXL uses sdxl_steps (default 30).
#   same_as -> optional: take every key the job does not set itself from the named job (seed variants).
#
# Rung ladder (every config in its OWN forked process, so one OOM / NaN cannot poison the next):
#   enc          prompts -> Qwen3 embeddings (bf16 text encoder), saved to disk, encoder freed
#   klein-fp16   FLUX.2 [klein] 4B, transformer fp16, VAE fp16, reference passed as image=
#   klein-vae32  same, VAE decoded in fp32
#   klein-bf16   same, transformer bf16 (slow on T4, but no fp16 overflow)
#   sdxl         SDXL 1.0 + IP-Adapter (InstantStyle style-only scales), fp16 -> generated 1248x832 -> LANCZOS to w x h
# A rung only re-runs the jobs that no earlier rung finished OK. Which rung made each image is in settings-all.json.
import os, sys, glob, json, time, subprocess, traceback, gc, shutil
import multiprocessing as mp

os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")
os.environ["HF_HOME"] = "/tmp/hf"
OUT = "/kaggle/working"
T0 = time.time()
LOGF = open(os.path.join(OUT, "run.log"), "a", buffering=1)
HARD = float(os.environ.get("PAINT_HARD_S", 1600))  # seconds after start: never begin work that cannot end before this

KLEIN = "black-forest-labs/FLUX.2-klein-4B"
DK = "/tmp/klein"
SDXL = "stabilityai/stable-diffusion-xl-base-1.0"
SDXL_VAE = "madebyollin/sdxl-vae-fp16-fix"
IPA = "h94/IP-Adapter"
RUNGS = [("klein-fp16", dict(dtype="fp16", vae32=False)),
         ("klein-vae32", dict(dtype="fp16", vae32=True)),
         ("klein-bf16", dict(dtype="bf16", vae32=True))]


def log(*a):
    msg = "[%6.0fs] " % (time.time() - T0) + " ".join(str(x) for x in a)
    print(msg, flush=True)
    LOGF.write(msg + "\n")


def sh(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return (r.stdout + r.stderr).strip()


def left():
    return HARD - (time.time() - T0)


def find_input(name):
    c = glob.glob("/kaggle/input/**/" + name, recursive=True)
    if not c:
        raise FileNotFoundError(name)
    return c[0]


def klein_prompt(job):
    # the distilled klein ignores a negative prompt, so the avoid list is appended as plain text
    neg = job.get("negative")
    return job["prompt"] + ((" Avoid: " + neg + ".") if neg else "")


def check_pil(img, w, h):
    """exists-level check only: right size, finite, not blank, not black. Returns (ok, stats)."""
    import numpy as np
    a = np.asarray(img.convert("RGB")).astype("float32")
    st = {"size": list(img.size), "mean": float(a.mean()), "std": float(a.std())}
    ok = bool(img.size == (w, h) and np.isfinite(a).all() and a.std() > 8.0 and a.mean() > 3.0)
    return ok, st


# ======================================================================= WORKERS (one config, one process)
def worker_main(cfg):
    try:
        {"enc": _enc, "klein": _klein, "sdxl": _sdxl}[cfg["kind"]](cfg)
    except SystemExit:
        raise
    except BaseException as e:
        log("WORKER %s FAILED:" % cfg["name"], repr(e)[:500])
        log(traceback.format_exc()[-3000:])
        with open(os.path.join(OUT, "error-%s.json" % cfg["name"]), "w") as f:
            json.dump({"name": cfg["name"], "error": repr(e)[:800]}, f, indent=2)
        raise SystemExit(1)


def _enc(cfg):
    import torch
    from diffusers import Flux2KleinPipeline
    t = time.time()
    pipe = Flux2KleinPipeline.from_pretrained(DK, transformer=None, vae=None, torch_dtype=torch.bfloat16)
    dev = torch.device("cuda:0")
    pipe.text_encoder.to(dev)
    log("text encoder on gpu %.0fs; pipe is_distilled=%s" % (time.time() - t, pipe.config.get("is_distilled")))
    embs = {}
    for job in cfg["jobs"]:
        ntok = len(pipe.tokenizer(klein_prompt(job))["input_ids"])
        log("prompt tokens", job["name"], ntok, "(limit 512 incl. chat template)")
        with torch.no_grad():
            pe, _ = pipe.encode_prompt(prompt=klein_prompt(job), device=dev, max_sequence_length=512)
        fin = bool(torch.isfinite(pe).all())
        mx = float(pe.float().abs().max())
        log("embeds", job["name"], tuple(pe.shape), "finite", fin, "max abs %.1f" % mx)
        if not fin:
            raise RuntimeError("non-finite prompt embeds for " + job["name"])
        embs[job["name"]] = pe.to("cpu", torch.bfloat16)
    torch.save(embs, "/tmp/embeds.pt")


def _klein(cfg):
    import numpy as np
    import torch
    from PIL import Image
    from diffusers import Flux2KleinPipeline
    t_start = time.time()
    dt = torch.float16 if cfg["dtype"] == "fp16" else torch.bfloat16
    dev = torch.device("cuda:0")
    embs = torch.load("/tmp/embeds.pt")
    pipe = Flux2KleinPipeline.from_pretrained(DK, text_encoder=None, torch_dtype=dt)
    pipe.to(dev)
    if cfg["vae32"]:
        pipe.vae.to(torch.float32)
    load_s = time.time() - t_start
    log("klein %s loaded %.0fs; transformer %s vae %s is_distilled=%s" % (
        cfg["name"], load_s, pipe.transformer.dtype, pipe.vae.dtype, pipe.config.get("is_distilled")))
    allset = []
    for job in cfg["jobs"]:
        t0 = time.time()
        w, h, steps = job["w"], job["h"], job.get("steps", 4)
        names = job.get("ref") or []
        names = [names] if isinstance(names, str) else names
        refs = [Image.open(find_input(n)).convert("RGB") for n in names]  # klein takes several; each is cut to <= 1 MP
        pe = embs[job["name"]].to(dev, dt)
        gen = torch.Generator("cpu").manual_seed(job["seed"])
        times = []
        last = [time.time()]

        def cb(p, i, t, kw):
            now = time.time()
            times.append(now - last[0])
            last[0] = now
            return kw

        res = {"name": job["name"], "rung": cfg["name"], "model": KLEIN, "prompt": klein_prompt(job), "ref": job.get("ref"),
               "seed": job["seed"], "w": w, "h": h, "steps": steps, "guidance_scale": 1.0,
               "transformer_dtype": cfg["dtype"], "vae_dtype": "fp32" if cfg["vae32"] else "fp16", "ok": False}
        try:
            with torch.no_grad():
                lat = pipe(image=refs or None, prompt_embeds=pe, height=h, width=w,
                           num_inference_steps=steps, guidance_scale=1.0, generator=gen, output_type="latent",
                           callback_on_step_end=cb).images
            fin = bool(torch.isfinite(lat).all())
            log("%s denoise %.0fs steps %s latent %s finite %s" % (job["name"], time.time() - t0,
                [round(x, 1) for x in times], tuple(lat.shape), fin))
            res["denoise_s"] = time.time() - t0
            res["pass_seconds"] = times
            res["latent_finite"] = fin
            if not fin:
                raise RuntimeError("non-finite latents")
            # decode with the transformer parked on the CPU so an fp32 decode has the whole GPU
            pipe.transformer.to("cpu")
            gc.collect()
            torch.cuda.empty_cache()
            vdt = torch.float32 if cfg["vae32"] else dt
            with torch.no_grad():
                pipe.vae.enable_tiling() if hasattr(pipe.vae, "enable_tiling") else None
                img = pipe.vae.decode(lat.to(dev, vdt), return_dict=False)[0]
            img = pipe.image_processor.postprocess(img, output_type="pt")
            res["decode_finite"] = bool(torch.isfinite(img).all())
            arr = (torch.nan_to_num(img.float(), 0.0).clamp(0, 1)[0].permute(1, 2, 0).cpu().numpy() * 255).round().astype("uint8")
            pil = Image.fromarray(arr)
            if pil.size != (w, h):
                res["resized_from"] = list(pil.size)
                pil = pil.resize((w, h), Image.LANCZOS)
            ok, st = check_pil(pil, w, h)
            res.update(st)
            res["ok"] = ok and res["decode_finite"]
            pil.save(os.path.join(OUT, job["name"] + ("" if res["ok"] else "-BAD") + ".png"))
        except BaseException as e:
            res["error"] = repr(e)[:400]
            log("job", job["name"], "ERROR", repr(e)[:400])
            log(traceback.format_exc()[-1500:])
        pipe.transformer.to(dev)
        res["total_s"] = time.time() - t0
        res["peak_gpu_gib"] = round(torch.cuda.max_memory_allocated(0) / 2**30, 2)
        with open(os.path.join(OUT, "settings-%s.json" % job["name"]), "w") as f:
            json.dump(res, f, indent=2)
        log("job", job["name"], "ok=%s" % res["ok"], "%.0fs" % res["total_s"], "mean/std", res.get("mean"), res.get("std"))
        allset.append(res)
        gc.collect()
        torch.cuda.empty_cache()
    if not all(r["ok"] for r in allset):
        raise SystemExit(3)


def _sdxl(cfg):
    import numpy as np
    import torch
    from PIL import Image
    from diffusers import StableDiffusionXLPipeline, AutoencoderKL
    t_start = time.time()
    dev = torch.device("cuda:0")
    vae = AutoencoderKL.from_pretrained(SDXL_VAE, torch_dtype=torch.float16)
    pipe = StableDiffusionXLPipeline.from_pretrained(SDXL, vae=vae, torch_dtype=torch.float16, variant="fp16",
                                                     use_safetensors=True)
    pipe.load_ip_adapter(IPA, subfolder="sdxl_models", weight_name="ip-adapter_sdxl.bin")
    # InstantStyle: only the style-carrying attention block receives the reference
    pipe.set_ip_adapter_scale({"up": {"block_0": [0.0, 1.0, 0.0]}})
    pipe.to(dev)
    log("sdxl loaded %.0fs" % (time.time() - t_start))
    GW, GH = 1248, 832  # 3:2, multiples of 8; upscaled to the job size afterwards
    allset = []
    for job in cfg["jobs"]:
        t0 = time.time()
        w, h = job["w"], job["h"]
        steps = job.get("sdxl_steps", 30)
        r0 = job["ref"][0] if isinstance(job["ref"], list) else job["ref"]  # SDXL adapter takes the first reference only
        ref = Image.open(find_input(r0)).convert("RGB")
        prompt = job.get("prompt_short") or job["prompt"]
        neg = job.get("negative", "")
        gen = torch.Generator("cpu").manual_seed(job["seed"])
        res = {"name": job["name"], "rung": "sdxl", "model": SDXL, "adapter": IPA + "/sdxl_models/ip-adapter_sdxl.bin",
               "ip_scale": {"up": {"block_0": [0.0, 1.0, 0.0]}}, "prompt": prompt, "negative": neg, "ref": job["ref"],
               "seed": job["seed"], "gen_size": [GW, GH], "w": w, "h": h, "steps": steps, "guidance_scale": 7.0, "ok": False}
        try:
            with torch.no_grad():
                img = pipe(prompt=prompt, negative_prompt=neg, ip_adapter_image=ref, width=GW, height=GH,
                           num_inference_steps=steps, guidance_scale=7.0, generator=gen).images[0]
            pil = img.convert("RGB").resize((w, h), Image.LANCZOS)
            ok, st = check_pil(pil, w, h)
            res.update(st)
            res["ok"] = ok
            pil.save(os.path.join(OUT, job["name"] + ("" if ok else "-BAD") + ".png"))
        except BaseException as e:
            res["error"] = repr(e)[:400]
            log("job", job["name"], "ERROR", repr(e)[:400])
        res["total_s"] = time.time() - t0
        with open(os.path.join(OUT, "settings-%s.json" % job["name"]), "w") as f:
            json.dump(res, f, indent=2)
        log("job", job["name"], "ok=%s" % res["ok"], "%.0fs" % res["total_s"])
        allset.append(res)
        gc.collect()
        torch.cuda.empty_cache()
    if not all(r["ok"] for r in allset):
        raise SystemExit(3)


# ======================================================================= ORCHESTRATOR
def run_cfg(cfg, timeout):
    log("=== launching %s in a fresh process, timeout %.0fs, jobs %s" % (cfg["name"], timeout, [j["name"] for j in cfg["jobs"]]))
    ctx = mp.get_context("fork")
    p = ctx.Process(target=worker_main, args=(cfg,))
    t = time.time()
    p.start()
    p.join(timeout)
    if p.is_alive():
        log("TIMEOUT, killing worker", cfg["name"])
        p.terminate()
        p.join(30)
        if p.is_alive():
            p.kill()
            p.join()
    log("=== worker %s exit=%s in %.0fs" % (cfg["name"], p.exitcode, time.time() - t))
    gc.collect()
    time.sleep(5)  # let the driver release the GPU
    return p.exitcode == 0


def read_json(path):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return None


def pending(jobs):
    out = []
    for j in jobs:
        s = read_json(os.path.join(OUT, "settings-%s.json" % j["name"]))
        if not (s and s.get("ok")):
            out.append(j)
    return out


def main():
    log("nvidia-smi:", sh("nvidia-smi --query-gpu=name,memory.total,memory.used --format=csv"))
    log("free RAM:", sh("free -g | head -2"))
    log(sh("pip install -q -U diffusers transformers accelerate sentencepiece ftfy peft huggingface_hub 2>&1 | tail -3"))
    log(sh("pip uninstall -y torchao 2>&1 | tail -2"))  # old preinstalled torchao breaks new diffusers (ai-film run 1)
    log(sh("pip list 2>/dev/null | grep -i -E '^(torch|diffusers|transformers|accelerate|peft) '"))
    spec = json.load(open(find_input("jobs.json")))
    jobs = spec["jobs"]
    byname = {j["name"]: j for j in jobs}
    for j in jobs:  # "same_as": take every key the job does not set itself from the named job (seed variants)
        if j.get("same_as"):
            for k, v in byname[j["same_as"]].items():
                j.setdefault(k, v)
    only = spec.get("rungs")  # optional: list of rung names to try, e.g. ["klein-fp16", "sdxl"]
    log("jobs:", [j["name"] for j in jobs])

    from huggingface_hub import snapshot_download
    t = time.time()
    snapshot_download(KLEIN, allow_patterns=["model_index.json", "scheduler/*", "tokenizer/*", "text_encoder/*",
                                             "transformer/*", "vae/*"], local_dir=DK)
    log("klein downloaded %.0fs; du:" % (time.time() - t), sh("du -sh " + DK + "/*"))

    if run_cfg(dict(kind="enc", name="enc", jobs=jobs), min(900, left() - 60)) and os.path.exists("/tmp/embeds.pt"):
        for rname, rcfg in RUNGS:
            todo = pending(jobs)
            if not todo:
                break
            if only and rname not in only:
                continue
            if left() < 300:
                log("no time left for", rname)
                break
            run_cfg(dict(kind="klein", name=rname, jobs=todo, **rcfg), min(900, left() - 60))
    else:
        log("prompt encoding failed; klein rungs skipped")

    todo = pending(jobs)
    if todo and (not only or "sdxl" in only) and left() > 400 and all(j.get("ref") for j in todo):
        log("falling back to SDXL for", [j["name"] for j in todo])
        run_cfg(dict(kind="sdxl", name="sdxl", jobs=todo), left() - 30)

    summary = {"elapsed_s": time.time() - T0,
               "jobs": {j["name"]: read_json(os.path.join(OUT, "settings-%s.json" % j["name"])) for j in jobs}}
    with open(os.path.join(OUT, "settings-all.json"), "w") as f:
        json.dump(summary, f, indent=2)
    log("done; outputs:", sorted(os.listdir(OUT)))


main()  # unconditional: Kaggle may exec the script under another module name; forked children never reach this line
