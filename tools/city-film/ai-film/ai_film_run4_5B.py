# Kaggle GPU script (run 4): one painting -> camera-dive clips with Wan 2.2 TI2V-5B (diffusers).
# Orchestrator (this process, never touches CUDA) runs every generation config in its OWN forked child process,
# so one out-of-memory failure cannot poison the next config. Each finished clip is written to /kaggle/working
# at once, together with its own settings-<name>.json.
#   a = SAFE   832x480  81f 30 steps  seed 101  prompt A
#   b =        832x480  81f 30 steps  seed 202  prompt B (strong camera)
#   c = REACH 1280x704  81f 30 steps  seed 303  prompt B, transformer group-offloaded, prompts pre-encoded
import os, sys, glob, json, time, subprocess, traceback, gc
import multiprocessing as mp

os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")
os.environ["HF_HOME"] = "/tmp/hf"
OUT = "/kaggle/working"
T0 = float(os.environ.get("AIF_T0", time.time()))
os.environ["AIF_T0"] = str(T0)
LOGF = open(os.path.join(OUT, "run.log"), "a", buffering=1)
WAN_ID = "Wan-AI/Wan2.2-TI2V-5B-Diffusers"
PARAMS, LAYERS, DIM = 5.0e9, 30, 3072
HARD = 7500  # seconds since T0: never start work that cannot end before this (kernel timeout is 8400)


def log(*a):
    msg = "[%6.0fs] " % (time.time() - T0) + " ".join(str(x) for x in a)
    print(msg, flush=True)
    LOGF.write(msg + "\n")


def sh(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return (r.stdout + r.stderr).strip()


REST = ("Thin mist drifts over the dark water, waves move and reflections shimmer, the fire at the top of the "
        "lighthouse flickers, lamp lights glimmer, clouds drift. Hand-painted 3D animation film style, rich detail, "
        "stable architecture.")
PROMPT_A = ("The camera flies slowly forward and descends past the ancient stone lighthouse toward the harbour city "
            "at night, smooth continuous aerial tracking shot with clear parallax between the near tower and the far "
            "city. " + REST)
PROMPT_B = ("Dynamic drone shot: the camera sweeps forward and down in an arc around the ancient stone lighthouse, "
            "the tower passing close by on the left, then on toward the harbour city at night, smooth continuous "
            "aerial tracking shot with clear parallax between the near tower and the far city. " + REST)
NEG = ("static camera, still image, people, figures, text, letters, watermark, morphing, warping buildings, flicker, "
       "jitter, cuts, lens flare, light beam")


def flops_step(w, h, frames):
    L = (h // 32) * (w // 32) * ((frames - 1) // 4 + 1)
    return 2 * (2 * PARAMS * L + 4 * L * L * DIM * LAYERS), L


# ======================================================================= WORKER (one config, one process)
def worker_main(cfg):
    try:
        _worker(cfg)
    except SystemExit:
        raise
    except BaseException as e:
        log("WORKER %s FAILED:" % cfg["name"], repr(e)[:400])
        log(traceback.format_exc()[-2500:])
        err = {"name": cfg["name"], "variant": cfg.get("variant"), "error": repr(e)[:600]}
        with open(os.path.join(OUT, "error-%s-%s.json" % (cfg["name"], cfg.get("variant", "x"))), "w") as f:
            json.dump(err, f, indent=2)
        raise SystemExit(1)


def _worker(cfg):
    import numpy as np
    import torch
    import torch.nn.functional as Fn
    from PIL import Image
    from diffusers import AutoencoderKLWan, WanImageToVideoPipeline, WanTransformer3DModel
    from diffusers.utils import export_to_video

    name, variant = cfg["name"], cfg.get("variant", "x")
    w, h, F, steps, seed = cfg["w"], cfg["h"], cfg["frames"], cfg["steps"], cfg["seed"]
    tdtype = torch.float16 if cfg["tdtype"] == "fp16" else torch.bfloat16
    mode = cfg["mode"]
    t_start = time.time()
    log("worker %s/%s start: %dx%d f=%d steps=%d seed=%d tdtype=%s mode=%s" % (name, variant, w, h, F, steps, seed, cfg["tdtype"], mode))

    # --- bounded attention memory: the math SDPA kernel on a T4 builds an L x L matrix per head (run 3 OOM).
    # Split the query axis into chunks of 1024 so the transient stays under about 1 GB even at 18k tokens.
    CH = 1024
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

    # --- source image
    cands = glob.glob("/kaggle/input/**/pharos-dark.jpg", recursive=True)
    SRC = Image.open(cands[0]).convert("RGB")
    ch = min(SRC.size[1], int(round(SRC.size[0] * h / w)))
    cw = int(round(ch * w / h))
    img = SRC.crop((0, 0, cw, ch)).resize((w, h), Image.LANCZOS)  # top-aligned: keeps tower top and fire
    log("source", SRC.size, "crop", (cw, ch), "->", (w, h))

    # --- build the pipeline
    ngpu = torch.cuda.device_count()
    dev0 = torch.device("cuda:0")
    pe = ne = None
    if mode == "std":
        vae = AutoencoderKLWan.from_pretrained(WAN_ID, subfolder="vae", torch_dtype=torch.float32)
        from transformers import UMT5EncoderModel
        te = UMT5EncoderModel.from_pretrained(WAN_ID, subfolder="text_encoder", torch_dtype=torch.bfloat16)
        tr = WanTransformer3DModel.from_pretrained(WAN_ID, subfolder="transformer", torch_dtype=tdtype)
        pipe = WanImageToVideoPipeline.from_pretrained(WAN_ID, vae=vae, text_encoder=te, transformer=tr, torch_dtype=torch.bfloat16)
        pipe.enable_model_cpu_offload()
        pipe.vae.enable_tiling()
    else:
        # reach: encode the prompts first (text encoder alone on the GPU, second T4 if there is one), free it,
        # then load the transformer and group-offload it block by block; host RAM never holds both at once.
        ted = torch.device("cuda:1") if ngpu > 1 else dev0
        log("encoding prompts on", ted)
        pipe_te = WanImageToVideoPipeline.from_pretrained(WAN_ID, transformer=None, vae=None, torch_dtype=torch.bfloat16)
        pipe_te.text_encoder.to(ted)
        with torch.no_grad():
            pe, ne = pipe_te.encode_prompt(prompt=cfg["prompt"], negative_prompt=NEG, do_classifier_free_guidance=True,
                                           num_videos_per_prompt=1, max_sequence_length=512, device=ted)
        pe, ne = pe.to("cpu"), ne.to("cpu")
        log("prompt embeds", tuple(pe.shape), tuple(ne.shape))
        del pipe_te
        gc.collect()
        for i in range(ngpu):
            with torch.cuda.device(i):
                torch.cuda.empty_cache()
        vae = AutoencoderKLWan.from_pretrained(WAN_ID, subfolder="vae", torch_dtype=torch.float32)
        tr = WanTransformer3DModel.from_pretrained(WAN_ID, subfolder="transformer", torch_dtype=tdtype)
        pipe = WanImageToVideoPipeline.from_pretrained(WAN_ID, vae=vae, text_encoder=None, transformer=tr, torch_dtype=torch.bfloat16)
        pipe.vae.to(dev0)
        pipe.vae.enable_tiling()
        from diffusers.hooks import apply_group_offloading
        try:
            apply_group_offloading(pipe.transformer, onload_device=dev0, offload_device=torch.device("cpu"),
                                   offload_type="block_level", num_blocks_per_group=2, use_stream=True)
            log("group offload: block_level x2, streamed")
        except Exception as e:
            log("streamed group offload failed, retry unstreamed:", repr(e)[:300])
            apply_group_offloading(pipe.transformer, onload_device=dev0, offload_device=torch.device("cpu"),
                                   offload_type="block_level", num_blocks_per_group=1, use_stream=False)
        type(pipe)._execution_device = property(lambda self: dev0)
    load_s = time.time() - t_start
    log("pipeline ready, load %.0fs" % load_s)

    # --- generate
    times = []
    last = [time.time()]

    def cb(p, i, t, kw):
        now = time.time()
        times.append(now - last[0])
        last[0] = now
        if i % 3 == 0:
            log("  %s step %d/%d, %.1fs" % (name, i + 1, steps, times[-1]))
        return kw

    gen = torch.Generator("cpu").manual_seed(seed)
    kwargs = dict(image=img, height=h, width=w, num_frames=F, guidance_scale=5.0, num_inference_steps=steps,
                  generator=gen, callback_on_step_end=cb)
    if mode == "std":
        kwargs.update(prompt=cfg["prompt"], negative_prompt=NEG)
    else:
        kwargs.update(prompt_embeds=pe, negative_prompt_embeds=ne)
    t = time.time()
    last[0] = t
    fr = pipe(**kwargs).frames[0]
    total = time.time() - t
    steady = float(np.mean(times[1:])) if len(times) > 2 else float(np.mean(times))
    decode_s = max(1.0, total - sum(times))
    log("%s generated in %.0fs, steady step %.1fs, post-step (VAE decode) %.0fs" % (name, total, steady, decode_s))

    # --- check, save at once
    arr = np.asarray(fr)
    f32 = np.stack([np.asarray(fr[0]), np.asarray(fr[len(fr) // 2]), np.asarray(fr[-1])]).astype("float32")
    if np.isfinite(f32).all() and f32.max() <= 1.5:
        f32 = f32 * 255.0
    ok = bool(np.isfinite(f32).all() and f32.std() > 8.0 and f32.mean() > 3.0)

    def u8(x):
        x = np.asarray(x)
        return (np.clip(x, 0, 1) * 255).astype("uint8") if x.dtype != np.uint8 else x

    fa, fb = u8(fr[0]).astype("float32"), u8(fr[-1]).astype("float32")
    diff_fl = float(np.abs(fa - fb).mean())
    path = os.path.join(OUT, "ai-film-%s.mp4" % name if ok else "ai-film-%s-BAD.mp4" % name)
    export_to_video(list(fr), path, fps=24)
    for tag, idx in (("first", 0), ("mid", len(fr) // 2), ("last", len(fr) - 1)):
        Image.fromarray(u8(fr[idx])).save(os.path.join(OUT, "frame-%s-%s.png" % (name, tag)))
    mem = [round(torch.cuda.max_memory_allocated(i) / 2**30, 2) for i in range(ngpu)]
    st = {"name": name, "variant": variant, "model": WAN_ID, "w": w, "h": h, "frames": F, "fps": 24, "steps": steps,
          "guidance_scale": 5.0, "seed": seed, "transformer_dtype": cfg["tdtype"], "mode": mode, "prompt": cfg["prompt"],
          "negative_prompt": NEG, "gpus": ngpu, "load_s": load_s, "gen_seconds": total, "steady_step_s": steady,
          "decode_s": decode_s, "peak_gpu_gib": mem, "sdpa_calls": cnt, "frames_ok": ok,
          "mean_abs_diff_first_last_0_255": diff_fl, "file": os.path.basename(path), "bytes": os.path.getsize(path)}
    with open(os.path.join(OUT, "settings-%s.json" % name), "w") as f:
        json.dump(st, f, indent=2)
    log("saved", path, "ok=%s" % ok, "first-last diff %.1f" % diff_fl, "peak GiB", mem, "sdpa", cnt)
    if not ok:
        raise SystemExit(3)


# ======================================================================= ORCHESTRATOR
def run_cfg(cfg, timeout):
    log("=== launching %s/%s in a fresh process, timeout %.0fs" % (cfg["name"], cfg.get("variant", "x"), timeout))
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
    ok = os.path.exists(os.path.join(OUT, "ai-film-%s.mp4" % cfg["name"]))
    log("=== worker %s/%s exit=%s clip_exists=%s in %.0fs" % (cfg["name"], cfg.get("variant", "x"), p.exitcode, ok, time.time() - t))
    gc.collect()
    time.sleep(5)  # let the driver release the GPU
    return ok


def read_json(path):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return None


def main():
    log("nvidia-smi:", sh("nvidia-smi --query-gpu=name,memory.total,memory.used --format=csv"))
    log("GPU list:", sh("nvidia-smi -L"))
    log("free RAM:", sh("free -g | head -2"))
    log("disk:", sh("df -h /kaggle/working /tmp 2>&1 | head -4"))
    log("pip install ...")
    log(sh("pip install -q -U diffusers transformers accelerate sentencepiece ftfy imageio imageio-ffmpeg opencv-python-headless 2>&1 | tail -3"))
    # preinstalled torchao is too old for the new diffusers ('FqnToConfig' import error, run 1)
    log(sh("pip uninstall -y torchao 2>&1 | tail -2"))
    log(sh("pip list 2>/dev/null | grep -i -E '^(torch|diffusers|transformers|accelerate) '"))

    base = dict(w=832, h=480, frames=81, steps=30, tdtype="fp16", mode="std")
    results = {}

    # ---- a: SAFE. fallbacks only if it produced no good clip (each also in its own fresh process)
    a_chain = [dict(base, name="a", variant="main", seed=101, prompt=PROMPT_A),
               dict(base, name="a", variant="bf16", seed=101, prompt=PROMPT_A, tdtype="bf16"),
               dict(base, name="a", variant="f49", seed=101, prompt=PROMPT_A, frames=49)]
    for cfg in a_chain:
        left = HARD - (time.time() - T0)
        if left < 900:
            break
        if run_cfg(cfg, min(3000, left - 60)):
            results["a"] = cfg
            break
        # fp16 black frames -> try bf16 next; any other failure -> try shorter clip next
        err = read_json(os.path.join(OUT, "error-a-%s.json" % cfg["variant"]))
        if cfg["variant"] == "main" and err is not None:
            a_chain.pop(1)  # error (not black frames): skip the bf16 retry, bf16 is the slow/hungry kernel on a T4
    a_set = read_json(os.path.join(OUT, "settings-a.json"))

    # ---- b: same size, other seed, strong-camera prompt
    left = HARD - (time.time() - T0)
    if left > 1500:
        cfg = dict(base, name="b", variant="main", seed=202, prompt=PROMPT_B)
        if "a" in results and a_set:
            cfg.update(frames=a_set["frames"], tdtype="fp16" if a_set["transformer_dtype"] == "fp16" else "bf16")
        if run_cfg(cfg, min(3000, left - 60)):
            results["b"] = cfg

    # ---- c: REACH, only if the time prediction says it finishes before HARD
    ngpu = len([l for l in sh("nvidia-smi -L").splitlines() if l.startswith("GPU")])
    for steps in (30, 24):
        cfg = dict(base, name="c", variant="s%d" % steps, w=1280, h=704, frames=81, steps=steps, seed=303, prompt=PROMPT_B, mode="offload")
        fl_c, Lc = flops_step(1280, 704, 81)
        if a_set:
            fl_a, _ = flops_step(a_set["w"], a_set["h"], a_set["frames"])
            step_s = a_set["steady_step_s"] * fl_c / fl_a * 1.35  # 35% for group-offload transfers
            dec_s = a_set["decode_s"] * (1280 * 704 * 81) / (a_set["w"] * a_set["h"] * a_set["frames"])
            load_s = a_set["load_s"] + 60
        else:
            step_s = fl_c / 14e12 * 1.35
            dec_s = 1.08e-5 * 1280 * 704 * 81
            load_s = 310
        pred = 1.15 * (load_s + steps * step_s + dec_s + 90)
        left = HARD - (time.time() - T0)
        log("REACH check: tokens=%d steps=%d predicted %.0fs (step %.0fs, decode %.0fs, load %.0fs), time left %.0fs" % (Lc, steps, pred, step_s, dec_s, load_s, left))
        if pred <= left - 60:
            if run_cfg(cfg, left - 30):
                results["c"] = cfg
            break
        log("REACH %d steps does not fit" % steps)
    else:
        log("REACH skipped: no step count fits in the kernel time")

    summary = {"clips": {k: v.get("variant") for k, v in results.items()}, "elapsed_s": time.time() - T0,
               "settings": {k: read_json(os.path.join(OUT, "settings-%s.json" % k)) for k in ("a", "b", "c")}}
    with open(os.path.join(OUT, "settings-all.json"), "w") as f:
        json.dump(summary, f, indent=2)
    log("done; outputs:", sorted(os.listdir(OUT)))


main()  # unconditional: Kaggle may exec the script under another module name; forked children never reach this line
