# Kaggle GPU script (run 5): one painting -> camera-dive clips with Wan 2.2 I2V-A14B (GGUF Q4_K_M, diffusers)
# + lightx2v 4-step Lightning LoRAs (high + low noise), guidance 1, 4 passes, on two T4s.
# Layout: orchestrator (never touches CUDA) downloads weights, then every generation runs in its OWN forked
# process (one OOM cannot poison the next). Ladder:
#   enc    encode prompts A and B once with the UMT5 text encoder, save embeds, delete the encoder from disk
#   smoke  33 frames, prompt A, seed 11: proves the model fits, times one pass
#   a      81 frames, prompt A, seed 11  (retry variant q3 = Q3_K_M weights if the Q4 run fails)
#   b      81 frames, prompt B, seed 22
#   fb     Wan 2.1 I2V-14B-480P GGUF + lightx2v 2.1 LoRA, only if clip a failed
# Device plan: high-noise transformer on cuda:0 (moved there only after the VAE has encoded the image),
# low-noise transformer on cuda:1, VAE decode at the end on cuda:0 after both transformers are freed.
import os, sys, glob, json, time, subprocess, traceback, gc, shutil
import multiprocessing as mp

os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")
os.environ["HF_HOME"] = "/tmp/hf"
OUT = "/kaggle/working"
T0 = float(os.environ.get("AIF_T0", time.time()))
os.environ["AIF_T0"] = str(T0)
LOGF = open(os.path.join(OUT, "run.log"), "a", buffering=1)
HARD = 9900  # seconds since T0: never start work that cannot end before this (kernel timeout is 10800)

REPO22 = "Wan-AI/Wan2.2-I2V-A14B-Diffusers"
D22 = "/tmp/wan22"
GG22 = "QuantStack/Wan2.2-I2V-A14B-GGUF"
GG22_FILES = {
    "q4": ("HighNoise/Wan2.2-I2V-A14B-HighNoise-Q4_K_M.gguf", "LowNoise/Wan2.2-I2V-A14B-LowNoise-Q4_K_M.gguf"),
    "q3": ("HighNoise/Wan2.2-I2V-A14B-HighNoise-Q3_K_M.gguf", "LowNoise/Wan2.2-I2V-A14B-LowNoise-Q3_K_M.gguf"),
}
LORA22 = "lightx2v/Wan2.2-Distill-Loras"
LORA22_HI = "wan2.2_i2v_A14b_high_noise_lora_rank64_lightx2v_4step_1022.safetensors"
LORA22_LO = "wan2.2_i2v_A14b_low_noise_lora_rank64_lightx2v_4step_1022.safetensors"
REPO21 = "Wan-AI/Wan2.1-I2V-14B-480P-Diffusers"
D21 = "/tmp/wan21"
GG21 = ("city96/Wan2.1-I2V-14B-480P-gguf", "wan2.1-i2v-14b-480p-Q3_K_M.gguf")
LORA21 = ("Kijai/WanVideo_comfy", "Lightx2v/lightx2v_I2V_14B_480p_cfg_step_distill_rank64_bf16.safetensors")
SIGMAS = [1.0, 0.75, 0.5, 0.25]  # shift 5 turns these into 1000, 937, 833, 625 (the lightx2v 4-step schedule)
BOUNDARY = 0.9

REST = ("Thin mist drifts over the dark water, waves move and reflections shimmer, the fire at the top of the "
        "lighthouse flickers, lamp lights glimmer, clouds drift. Hand-painted 3D animation film style, rich detail, "
        "stable architecture.")
PROMPT_A = ("The camera flies slowly forward and descends past the ancient stone lighthouse toward the harbour city "
            "at night, smooth continuous aerial tracking shot with clear parallax between the near tower and the far "
            "city. " + REST)
PROMPT_B = ("Smooth crane shot: the camera glides forward and sinks down along the side of the ancient stone "
            "lighthouse, the tower sliding past on the left and growing larger, the harbour city rising into view "
            "at night. " + REST)
NEG = ("static camera, still image, people, figures, text, letters, watermark, morphing, warping buildings, smoke, "
       "flicker, jitter, cuts, lens flare, light beam")  # ignored at guidance 1, kept in the settings
PROMPTS = {"A": PROMPT_A, "B": PROMPT_B}


def log(*a):
    msg = "[%6.0fs] " % (time.time() - T0) + " ".join(str(x) for x in a)
    print(msg, flush=True)
    LOGF.write(msg + "\n")


def sh(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return (r.stdout + r.stderr).strip()


def lat_tokens(w, h, frames):
    return (h // 16) * (w // 16) * ((frames - 1) // 4 + 1)


def flops_pass(w, h, frames):
    L = lat_tokens(w, h, frames)
    return 2 * 14e9 * L + 4 * L * L * 5120 * 40


# ======================================================================= WORKERS (one config, one process)
def worker_main(cfg):
    try:
        {"enc": _enc, "gen": _gen}[cfg["kind"]](cfg)
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
    from diffusers import WanImageToVideoPipeline
    t = time.time()
    pipe = WanImageToVideoPipeline.from_pretrained(D22, transformer=None, transformer_2=None, vae=None,
                                                   torch_dtype=torch.bfloat16)
    dev = torch.device("cuda:0")
    pipe.text_encoder.to(dev)
    log("text encoder on gpu, %.0fs" % (time.time() - t))
    for key, text in PROMPTS.items():
        with torch.no_grad():
            pe, _ = pipe.encode_prompt(prompt=text, negative_prompt=None, do_classifier_free_guidance=False,
                                       num_videos_per_prompt=1, max_sequence_length=512, device=dev)
        torch.save(pe.to("cpu", torch.bfloat16), "/tmp/pe-%s.pt" % key)
        log("embeds", key, tuple(pe.shape), "finite", bool(torch.isfinite(pe).all()))


def _gen(cfg):
    import numpy as np
    import torch
    import torch.nn.functional as Fn
    from PIL import Image
    from diffusers import (AutoencoderKLWan, WanImageToVideoPipeline, WanTransformer3DModel,
                           GGUFQuantizationConfig, FlowMatchEulerDiscreteScheduler)
    from diffusers.utils import export_to_video

    name = cfg["name"]
    w, h, F, seed, route = cfg["w"], cfg["h"], cfg["frames"], cfg["seed"], cfg["route"]
    CH = cfg.get("chunk", 512)
    t_start = time.time()
    log("worker %s start: %dx%d f=%d seed=%d route=%s prompt=%s" % (name, w, h, F, seed, route, cfg["pkey"]))

    # bounded attention memory: split the query axis so a math-kernel L x L score matrix never gets built whole
    orig = Fn.scaled_dot_product_attention
    cnt = {"calls": 0, "chunked": 0}

    def sdpa_chunked(*args, **kw):
        a = list(args[:3])
        for n in ("query", "key", "value")[len(a):]:
            a.append(kw.pop(n))
        rest = args[3:]
        q, k, v = a
        cnt["calls"] += 1
        if (q.dim() == 4 and q.shape[2] > CH and q.shape[2] == k.shape[2] and not rest
                and kw.get("attn_mask") is None and not kw.get("is_causal", False)):
            cnt["chunked"] += 1
            return torch.cat([orig(q[:, :, i:i + CH], k, v, **kw) for i in range(0, q.shape[2], CH)], dim=2)
        return orig(q, k, v, *rest, **kw)

    Fn.scaled_dot_product_attention = sdpa_chunked

    cands = glob.glob("/kaggle/input/**/pharos-dark.jpg", recursive=True)
    SRC = Image.open(cands[0]).convert("RGB")
    ch = min(SRC.size[1], int(round(SRC.size[0] * h / w)))
    cw = int(round(ch * w / h))
    img = SRC.crop((0, 0, cw, ch)).resize((w, h), Image.LANCZOS)  # top-aligned: keeps tower top and fire
    log("source", SRC.size, "crop", (cw, ch), "->", (w, h))

    dev0, dev1 = torch.device("cuda:0"), torch.device("cuda:1")
    two = route != "w21"
    gq = GGUFQuantizationConfig(compute_dtype=torch.float16)
    from huggingface_hub import hf_hub_download
    vae = AutoencoderKLWan.from_pretrained(D21 if route == "w21" else D22, subfolder="vae", torch_dtype=torch.float32)

    def load_tr(path, cfg_repo, sub):
        m = WanTransformer3DModel.from_single_file(path, quantization_config=gq, config=cfg_repo, subfolder=sub,
                                                   torch_dtype=torch.float16)
        log("loaded", sub, os.path.basename(path), "dtype", m.dtype, "%.0fs" % (time.time() - t_start))
        return m

    if route == "w21":
        tr = load_tr(cfg["gguf"], REPO21, "transformer")
        tr2 = None
        pipe = WanImageToVideoPipeline.from_pretrained(D21, transformer=tr, vae=vae, text_encoder=None,
                                                       torch_dtype=torch.bfloat16)
        pipe.load_lora_weights(cfg["lora_hi"], adapter_name="lx")
    else:
        tr2 = load_tr(cfg["gguf_lo"], REPO22, "transformer_2")
        tr = load_tr(cfg["gguf_hi"], REPO22, "transformer")
        pipe = WanImageToVideoPipeline.from_pretrained(D22, transformer=tr, transformer_2=tr2, vae=vae,
                                                       text_encoder=None, torch_dtype=torch.bfloat16)
        pipe.register_to_config(boundary_ratio=BOUNDARY)
        pipe.load_lora_weights(cfg["lora_hi"], adapter_name="hi")
        pipe.load_lora_weights(cfg["lora_lo"], adapter_name="lo", load_into_transformer_2=True)
    for m in (tr, tr2):
        if m is not None:
            n_l = 0
            for n, p in m.named_parameters():
                if "lora_" in n and p.dtype != torch.float16:
                    p.data = p.data.to(torch.float16)
                    n_l += 1
            log("lora tensors cast to fp16:", n_l)
    m = None  # the loop variable would keep a transformer alive past the later del
    log("lora loaded, %.0fs" % (time.time() - t_start))

    sched = FlowMatchEulerDiscreteScheduler(num_train_timesteps=1000, shift=5.0)
    o_set = sched.set_timesteps
    sched.set_timesteps = lambda num_inference_steps=None, device=None, **kw: o_set(sigmas=SIGMAS, device=device)
    pipe.scheduler = sched
    type(pipe)._execution_device = property(lambda self: dev0)

    # device plumbing: inputs follow each transformer, the output returns to cuda:0
    def to_dev(x, d):
        if torch.is_tensor(x):
            return x.to(d)
        if isinstance(x, (list, tuple)):
            return type(x)(to_dev(i, d) for i in x)
        if isinstance(x, dict):
            return {k: to_dev(v, d) for k, v in x.items()}
        return x

    state = {"moved": False}
    pe = torch.load("/tmp/pe-%s.pt" % cfg["pkey"]).to(dev0)

    def wrap(m, d, first):
        f0 = m.forward

        def f(*a, **k):
            if first and not state["moved"]:
                # VAE (and CLIP in the 2.1 route) have finished encoding the image: free cuda:0 for the big weights
                pipe.vae.to("cpu")
                if getattr(pipe, "image_encoder", None) is not None:
                    pipe.image_encoder.to("cpu")
                gc.collect()
                torch.cuda.empty_cache()
                m.to(d)
                state["moved"] = True
                log("high/main transformer moved to", d, "free GiB", round(torch.cuda.mem_get_info(0)[0] / 2**30, 2))
            out = f0(*to_dev(a, d), **to_dev(k, d))
            return to_dev(out, dev0)

        m.forward = f

    wrap(tr, dev0, True)
    if tr2 is not None:
        tr2.to(dev1)
        wrap(tr2, dev1, False)
    pipe.vae.to(dev0)
    if getattr(pipe, "image_encoder", None) is not None:
        pipe.image_encoder.to(dev0)
    load_s = time.time() - t_start
    log("pipeline ready, load %.0fs" % load_s)

    times, last = [], [time.time()]

    def cb(p, i, t, kw):
        now = time.time()
        times.append(now - last[0])
        last[0] = now
        log("  %s pass %d/4 t=%.0f, %.1fs  gpu free GiB %s" % (name, i + 1, float(t), times[-1],
            [round(torch.cuda.mem_get_info(g)[0] / 2**30, 1) for g in range(2)]))
        return kw

    gen = torch.Generator("cpu").manual_seed(seed)
    kwargs = dict(image=img, prompt_embeds=pe, height=h, width=w, num_frames=F, guidance_scale=1.0,
                  num_inference_steps=4, generator=gen, output_type="latent", callback_on_step_end=cb)
    if two:
        kwargs["guidance_scale_2"] = 1.0
    t = time.time()
    last[0] = t
    lat = pipe(**kwargs).frames
    den_s = time.time() - t
    log("%s denoise done in %.0fs, passes %s, latent shape %s finite %s" % (
        name, den_s, [round(x, 1) for x in times], tuple(lat.shape), bool(torch.isfinite(lat).all())))

    # free both transformers, then decode on cuda:0 with tiling
    lat = lat.to("cpu")
    pipe.register_modules(transformer=None, transformer_2=None)
    del tr, tr2
    gc.collect()
    for g in range(2):
        with torch.cuda.device(g):
            torch.cuda.empty_cache()
    t = time.time()
    pipe.vae.to(dev0)
    pipe.vae.enable_tiling()
    with torch.no_grad():
        z = pipe.vae.config.z_dim
        mean = torch.tensor(pipe.vae.config.latents_mean).view(1, z, 1, 1, 1).to(dev0, torch.float32)
        std = 1.0 / torch.tensor(pipe.vae.config.latents_std).view(1, z, 1, 1, 1).to(dev0, torch.float32)
        video = pipe.vae.decode(lat.to(dev0, torch.float32) / std + mean, return_dict=False)[0]
    fr = pipe.video_processor.postprocess_video(video, output_type="np")[0]
    decode_s = time.time() - t
    log("decode %.0fs, frames %s" % (decode_s, fr.shape))

    def u8(x):
        x = np.asarray(x)
        return (np.clip(x, 0, 1) * 255).astype("uint8") if x.dtype != np.uint8 else x

    f32 = np.stack([u8(fr[0]), u8(fr[len(fr) // 2]), u8(fr[-1])]).astype("float32")
    ok = bool(np.isfinite(f32).all() and f32.std() > 8.0 and f32.mean() > 3.0)
    diff_fl = float(np.abs(u8(fr[0]).astype("float32") - u8(fr[-1]).astype("float32")).mean())
    base = "ai-film-big-%s" % name if cfg["final"] else "bigsmoke-%s" % name
    path = os.path.join(OUT, base + ("" if ok else "-BAD") + ".mp4")
    export_to_video([Image.fromarray(u8(x)) for x in fr], path, fps=16)  # PIL frames: uint8 ndarray gets *255 and wraps (run 5 bug)
    for tag, idx in (("first", 0), ("mid", len(fr) // 2), ("last", len(fr) - 1)):
        Image.fromarray(u8(fr[idx])).save(os.path.join(OUT, "frame-%s-%s.png" % (name, tag)))
    mem = [round(torch.cuda.max_memory_allocated(i) / 2**30, 2) for i in range(2)]
    steady = float(np.mean(times[1:])) if len(times) > 1 else float(times[0]) if times else 0.0
    st = {"name": name, "route": route, "model": REPO21 if route == "w21" else REPO22,
          "gguf": cfg.get("gguf") or [cfg.get("gguf_hi"), cfg.get("gguf_lo")], "lora": [cfg.get("lora_hi"), cfg.get("lora_lo")],
          "w": w, "h": h, "frames": F, "fps": 16, "steps": 4, "sigmas": SIGMAS, "shift": 5.0, "boundary_ratio": BOUNDARY,
          "guidance_scale": 1.0, "guidance_scale_2": 1.0, "seed": seed, "compute_dtype": "fp16", "attn_chunk": CH,
          "prompt": PROMPTS[cfg["pkey"]], "negative_prompt_unused": NEG, "load_s": load_s, "denoise_s": den_s,
          "pass_seconds": times, "mean_pass_s_after_first": steady, "decode_s": decode_s, "peak_gpu_gib": mem,
          "sdpa_calls": cnt, "frames_ok": ok, "mean_abs_diff_first_last_0_255": diff_fl,
          "file": os.path.basename(path), "bytes": os.path.getsize(path), "total_worker_s": time.time() - t_start}
    with open(os.path.join(OUT, "settings-%s.json" % name), "w") as f:
        json.dump(st, f, indent=2)
    log("saved", path, "ok=%s" % ok, "first-last diff %.1f" % diff_fl, "peak GiB", mem)
    if not ok:
        raise SystemExit(3)


# ======================================================================= ORCHESTRATOR
def run_cfg(cfg, timeout):
    log("=== launching %s in a fresh process, timeout %.0fs" % (cfg["name"], timeout))
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
    ok = p.exitcode == 0
    log("=== worker %s exit=%s in %.0fs" % (cfg["name"], p.exitcode, time.time() - t))
    gc.collect()
    time.sleep(5)  # let the driver release the GPU
    return ok


def read_json(path):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return None


def left():
    return HARD - (time.time() - T0)


def dl(repo, fname, tag):
    from huggingface_hub import hf_hub_download
    t = time.time()
    p = hf_hub_download(repo, fname)
    log("downloaded %s %.1f GB in %.0fs" % (tag, os.path.getsize(p) / 1e9, time.time() - t))
    return p


def skeleton22():
    from huggingface_hub import snapshot_download
    t = time.time()
    snapshot_download(REPO22, allow_patterns=["model_index.json", "scheduler/*", "tokenizer/*", "text_encoder/*", "vae/*"],
                      local_dir=D22)
    log("wan2.2 skeleton downloaded %.0fs; du:" % (time.time() - t), sh("du -sh " + D22 + "/*"))


def fetch22(q):
    return dict(gguf_hi=dl(GG22, GG22_FILES[q][0], "high " + q), gguf_lo=dl(GG22, GG22_FILES[q][1], "low " + q),
                lora_hi=dl(LORA22, LORA22_HI, "lora hi"), lora_lo=dl(LORA22, LORA22_LO, "lora lo"))


def main():
    log("nvidia-smi:", sh("nvidia-smi --query-gpu=name,memory.total,memory.used --format=csv"))
    log("free RAM:", sh("free -g | head -2"))
    log("disk:", sh("df -h /kaggle/working /tmp / 2>&1 | head -6"))
    log(sh("pip install -q -U diffusers transformers accelerate sentencepiece ftfy imageio imageio-ffmpeg "
           "opencv-python-headless gguf peft huggingface_hub 2>&1 | tail -3"))
    log(sh("pip uninstall -y torchao 2>&1 | tail -2"))  # old preinstalled torchao breaks new diffusers (run 1)
    log(sh("pip list 2>/dev/null | grep -i -E '^(torch|diffusers|transformers|accelerate|gguf|peft) '"))

    W, H = 832, 480
    skeleton22()
    log("disk after skeleton:", sh("df -h /tmp | tail -1"))

    if not run_cfg(dict(kind="enc", name="enc"), 1500):
        log("prompt encoding failed; nothing else can run")
    else:
        shutil.rmtree(D22 + "/text_encoder", ignore_errors=True)  # embeds are on disk now; free 11 GB
        log("text encoder deleted from disk;", sh("df -h /tmp | tail -1"))

    files = fetch22("q4")
    log("disk after weights:", sh("df -h /tmp | tail -1"))
    base = dict(kind="gen", w=W, h=H, route="a14b", final=True, **files)
    results = {}
    # ---- smoke: 33 frames, proves fit and times a pass
    smoke_ok = False
    if os.path.exists("/tmp/pe-A.pt"):
        smoke_ok = run_cfg(dict(base, name="smoke", frames=33, seed=11, pkey="A", final=False), min(2400, left() - 60))
    sm = read_json(os.path.join(OUT, "settings-smoke.json")) if smoke_ok else None
    if sm:
        log("SMOKE measured: first pass %.0fs, later passes mean %.0fs, load %.0fs, decode %.0fs, peak GiB %s" % (
            sm["pass_seconds"][0], sm["mean_pass_s_after_first"], sm["load_s"], sm["decode_s"], sm["peak_gpu_gib"]))
        r = flops_pass(W, H, 81) / flops_pass(W, H, 33)
        pass81 = sm["mean_pass_s_after_first"] * r
        dec81 = sm["decode_s"] * 81 / 33
        pred = 1.1 * (sm["load_s"] + 4 * pass81 + dec81 + 120)
        log("PREDICT 81 frames: pass %.0fs (x%.2f), decode %.0fs, total %.0fs, time left %.0fs" % (pass81, r, dec81, pred, left()))
    else:
        pred = 5400
        log("smoke gave no settings; main attempts use a blind 5400 s estimate")

    # ---- main clips
    a_ok = False
    if pred <= left() - 60 and (sm or not smoke_ok):
        variants = [("a", "q4")] + ([("a", "q3")] if True else [])
        for nm, q in variants:
            cfg = dict(base, name="a", frames=81, seed=11, pkey="A")
            if q == "q3":
                if left() < pred + 600:
                    break
                f3 = {"gguf_hi": dl(GG22, GG22_FILES["q3"][0], "high q3"), "gguf_lo": dl(GG22, GG22_FILES["q3"][1], "low q3")}
                cfg.update(f3, chunk=256)
            if run_cfg(cfg, min(6000, left() - 60)):
                a_ok = True
                break
    else:
        log("MAIN A skipped: prediction %.0fs vs time left %.0fs" % (pred, left()))
    if a_ok:
        sa = read_json(os.path.join(OUT, "settings-a.json"))
        pb = 1.05 * (sa["total_worker_s"] + 60) if sa else pred
        if pb <= left() - 60:
            cfg = dict(base, name="b", frames=81, seed=22, pkey="B")
            if sa and "q3" in str(sa.get("gguf")):
                cfg.update(gguf_hi=sa["gguf"][0], gguf_lo=sa["gguf"][1], chunk=256)
            run_cfg(cfg, min(6000, left() - 60))
        else:
            log("MAIN B skipped: need %.0fs, left %.0fs" % (pb, left()))
    else:
        # ---- fallback: Wan 2.1 I2V 14B 480P
        log("clip a failed or was skipped; trying fallback Wan 2.1")
        if left() > 3600:
            try:
                from huggingface_hub import snapshot_download
                snapshot_download(REPO21, allow_patterns=["model_index.json", "scheduler/*", "tokenizer/*", "vae/*",
                                  "image_encoder/*", "image_processor/*"], local_dir=D21)
                cfg = dict(kind="gen", w=W, h=H, route="w21", final=True, name="fb", frames=81, seed=11, pkey="A",
                           gguf=dl(*GG21, "wan2.1 gguf"), lora_hi=dl(*LORA21, "wan2.1 lora"), chunk=256)
                run_cfg(cfg, min(6000, left() - 60))
            except BaseException as e:
                log("fallback setup failed:", repr(e)[:400])
        else:
            log("fallback skipped: time left %.0fs" % left())

    summary = {"elapsed_s": time.time() - T0,
               "settings": {k: read_json(os.path.join(OUT, "settings-%s.json" % k)) for k in ("smoke", "a", "b", "fb")}}
    with open(os.path.join(OUT, "settings-all.json"), "w") as f:
        json.dump(summary, f, indent=2)
    log("done; outputs:", sorted(os.listdir(OUT)))


main()  # unconditional: Kaggle may exec the script under another module name; forked children never reach this line
