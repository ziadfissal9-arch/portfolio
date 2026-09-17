"""Capture and compress the project screenshots used on the work section.

Re-run after redeploying a project to refresh its shot:
    python scripts/shots.py            # compress whatever PNGs are present
    python scripts/shots.py --capture  # re-screenshot every live site first
"""
import os, subprocess, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "images", "projects")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

SITES = {
    "dar-al-asalah": "https://dar-al-asalah.vercel.app",
    "nexacommerce": "https://nexacommerce-alpha.vercel.app",
    "industryos": "https://industryos-dashboard.vercel.app",
    "auratech-store": "https://auratech-store.vercel.app",
    "luminous": "https://luminous-landing.vercel.app",
}

QUALITY = 86
MAX_WIDTH = 1440


def capture():
    for name, url in SITES.items():
        dest = os.path.join(OUT, name + ".png")
        subprocess.run(
            [CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
             "--window-size=1440,900", "--virtual-time-budget=12000",
             "--screenshot=" + dest, url],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        print("captured %-18s %s" % (name, "ok" if os.path.exists(dest) else "FAILED"))


def compress():
    os.makedirs(OUT, exist_ok=True)
    total_before = total_after = 0

    for name in SITES:
        src = os.path.join(OUT, name + ".png")
        if not os.path.exists(src):
            print("skip %-18s (no png)" % name)
            continue

        before = os.path.getsize(src)
        img = Image.open(src).convert("RGB")
        if img.width > MAX_WIDTH:
            img = img.resize(
                (MAX_WIDTH, round(img.height * MAX_WIDTH / img.width)),
                Image.LANCZOS,
            )

        dest = os.path.join(OUT, name + ".webp")
        img.save(dest, "WEBP", quality=QUALITY, method=6)
        after = os.path.getsize(dest)
        os.remove(src)

        total_before += before
        total_after += after
        print("%-18s %6.0f KB -> %5.0f KB  (-%d%%)"
              % (name, before / 1024, after / 1024,
                 round(100 - after * 100 / before)))

    if total_before:
        print("\ntotal %.1f MB -> %.0f KB  (-%d%%)"
              % (total_before / 1048576, total_after / 1024,
                 round(100 - total_after * 100 / total_before)))


if __name__ == "__main__":
    if "--capture" in sys.argv:
        capture()
    compress()
