#!/usr/bin/env python3
"""Convert a raw generated image to web spec: WebP 1920x1080, under 500 KB.

If the source aspect ratio is not 16:9, the frame is filled by extending the
background (a blurred, scaled-to-cover copy of the image) rather than
stretching the subject; the original image is fitted and centered on top.

Usage: python3 convert_to_web.py out/raw/<name>.png out/web/<name>.webp
"""
import sys
from PIL import Image, ImageFilter

TARGET_W, TARGET_H = 1920, 1080
MAX_BYTES = 500 * 1024


def convert(src_path, dst_path):
    img = Image.open(src_path).convert("RGB")
    src_ratio = img.width / img.height
    target_ratio = TARGET_W / TARGET_H

    if abs(src_ratio - target_ratio) < 0.01:
        canvas = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)
    else:
        # Background: scale to cover, blur heavily (extended, not stretched).
        cover_scale = max(TARGET_W / img.width, TARGET_H / img.height)
        bg = img.resize(
            (round(img.width * cover_scale), round(img.height * cover_scale)),
            Image.LANCZOS,
        )
        bg = bg.crop((
            (bg.width - TARGET_W) // 2,
            (bg.height - TARGET_H) // 2,
            (bg.width - TARGET_W) // 2 + TARGET_W,
            (bg.height - TARGET_H) // 2 + TARGET_H,
        )).filter(ImageFilter.GaussianBlur(40))
        # Foreground: fit inside, centered.
        fit_scale = min(TARGET_W / img.width, TARGET_H / img.height)
        fg = img.resize(
            (round(img.width * fit_scale), round(img.height * fit_scale)),
            Image.LANCZOS,
        )
        canvas = bg
        canvas.paste(fg, ((TARGET_W - fg.width) // 2, (TARGET_H - fg.height) // 2))

    for quality in (85, 80, 75, 70, 65, 60, 55, 50, 45, 40):
        canvas.save(dst_path, "WEBP", quality=quality, method=6)
        import os
        if os.path.getsize(dst_path) <= MAX_BYTES:
            return quality
    raise SystemExit(f"could not get {dst_path} under {MAX_BYTES} bytes")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    q = convert(sys.argv[1], sys.argv[2])
    import os
    print(f"{sys.argv[2]}: {os.path.getsize(sys.argv[2])} bytes (quality {q})")
