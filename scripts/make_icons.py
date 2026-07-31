"""Cut the SNS mark out of its delivered artwork and emit every icon the site
serves.

The brand artwork arrives from the generator as a 1024x1024 PNG with the mark
sat on an opaque, faintly textured cream field. Everything here exists because
the site needs a *transparent* mark instead:

 1. SOFT ALPHA over a distance ramp, not a binary cut. The disc edge is
    antialiased over ~2px. A hard threshold keeps those blend pixels at full
    opacity and rings the mark with a cream halo, which is very visible at
    32px. Alpha is ramped over colour distance from the cream reference
    instead, so the edge stays clean at favicon sizes.

 2. THE DISC IS REBUILT OPAQUE afterwards, and this is the part worth reading.
    The mark is a disc with the S/N monogram knocked out of it, and the
    knocked-out counters are the same cream as the background. They are also
    not enclosed: the monogram's strokes run out to the disc edge, so a flood
    fill from the border -- the usual trick for keeping counters -- reaches
    straight into them and punches them out too. The result renders as a ring
    with see-through letters, which looks fine on the porcelain nav and bad
    everywhere else: on the dark og.png card the counters go navy and the
    monogram all but disappears, and a browser tab is whatever colour the
    user's theme says it is.

    So the transparency is re-limited to a circle. Inside the disc the artwork
    is only ever blue or cream, so compositing the cut-out over a cream circle
    of the same radius restores the delivered mark exactly, while everything
    outside the circle stays transparent. The mark is then a solid disc that
    looks the same on every surface -- which is what a favicon has to be.

 3. TRIM TO THE MARK. The artwork carries ~4% dead margin. Left in, every
    rendered size is silently smaller than the box it was given -- most
    noticeably in the 16px favicon. The mark is trimmed to its bounding box
    (which is the disc, the outermost element) and re-padded to a square with a
    small, known margin.

Note the ICO is built from real downsampled bitmaps rather than by handing Pillow
one large frame, because its internal ICO downscaler is nearest-neighbour and
turns the monogram to mush at 16px.

    python scripts/make_icons.py [--src PATH]

Re-run after replacing the artwork, then bump the ?v= cache-buster on the icon
links in app/layout.tsx -- browsers cache favicons past all reason. Run
scripts/make_og.py afterwards too: it composites public/sns-icon.png into the
share card.
"""
import argparse
import os
from collections import deque

from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PUBLIC = os.path.join(ROOT, "public")
DEFAULT_SRC = os.path.join(
    ROOT, "..", "Gemini_Generated_Image_y7f80uy7f80uy7f8.png"
)

# Alpha ramps from 0 to 255 as a pixel's RGB distance from the cream reference
# runs from LO to HI. FLOOD is deliberately above HI so the flood always reaches
# past the end of the ramp -- if it stopped inside it, the alpha would step
# discontinuously at the flood boundary and re-introduce the halo.
LO, HI, FLOOD = 30.0, 110.0, 150.0

# Fraction of the trimmed mark's width left as breathing room on each side.
MARGIN = 0.02

PNG_SIZES = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}
ICO_SIZES = [16, 32, 48, 64, 128, 256]
SVG_EMBED = 128


def cream_reference(px, w, h):
    """Median-ish sample of the border, which is entirely background."""
    pts = [(x, 0) for x in range(0, w, 16)] + [(x, h - 1) for x in range(0, w, 16)]
    pts += [(0, y) for y in range(0, h, 16)] + [(w - 1, y) for y in range(0, h, 16)]
    rs, gs, bs = [], [], []
    for x, y in pts:
        r, g, b = px[x, y][:3]
        rs.append(r)
        gs.append(g)
        bs.append(b)
    mid = len(rs) // 2
    return (sorted(rs)[mid], sorted(gs)[mid], sorted(bs)[mid])


def cut_background(img):
    """Knock the cream out of the artwork. Returns (image, cream reference).

    This punches out the counters as well as the surrounding field -- see the
    module docstring -- which `restore_disc` then puts back.
    """
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    cr, cg, cb = cream_reference(px, w, h)

    # Distance from cream for every pixel, flat-indexed.
    dist = [0.0] * (w * h)
    for y in range(h):
        row = y * w
        for x in range(w):
            r, g, b, _ = px[x, y]
            dr, dg, db = r - cr, g - cg, b - cb
            dist[row + x] = (dr * dr + dg * dg + db * db) ** 0.5

    # Flood inward from the border across everything cream-ish. What it reaches
    # is background; what it cannot reach is the mark, counters included.
    outer = bytearray(w * h)
    q = deque()

    def push(i):
        if not outer[i] and dist[i] < FLOOD:
            outer[i] = 1
            q.append(i)

    for x in range(w):
        push(x)
        push((h - 1) * w + x)
    for y in range(h):
        push(y * w)
        push(y * w + w - 1)

    while q:
        i = q.popleft()
        x, y = i % w, i // w
        if x > 0:
            push(i - 1)
        if x < w - 1:
            push(i + 1)
        if y > 0:
            push(i - w)
        if y < h - 1:
            push(i + w)

    span = HI - LO
    for y in range(h):
        row = y * w
        for x in range(w):
            i = row + x
            if not outer[i]:
                continue  # inside the mark: leave fully opaque
            a = (dist[i] - LO) / span
            a = 0 if a < 0 else (1 if a > 1 else a)
            r, g, b, _ = px[x, y]
            px[x, y] = (r, g, b, int(a * 255 + 0.5))
    return img, (cr, cg, cb)


def trim(img):
    """Crop to the visible mark and square it up. That bbox is the disc."""
    box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    if box:
        img = img.crop(box)
    side = max(img.size)
    out = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    out.paste(img, ((side - img.width) // 2, (side - img.height) // 2))
    return out


def restore_disc(img, cream):
    """Put the cream back everywhere inside the disc, so the mark is opaque.

    The circle is drawn at 4x and downsampled: PIL's ellipse is hard-edged, and
    a hard circle under an antialiased mark leaves a jagged rim.
    """
    side = img.width
    ss = 4
    mask = Image.new("L", (side * ss, side * ss), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, side * ss - 1, side * ss - 1], fill=255)
    mask = mask.resize((side, side), Image.LANCZOS)

    backing = Image.new("RGBA", (side, side), cream + (255,))
    backing.putalpha(mask)
    return Image.alpha_composite(backing, img)


def pad(img, margin=MARGIN):
    """Add even breathing room around a squared mark."""
    p = int(img.width * margin)
    out = Image.new("RGBA", (img.width + 2 * p, img.height + 2 * p), (0, 0, 0, 0))
    out.paste(img, (p, p))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default=DEFAULT_SRC)
    args = ap.parse_args()

    src = os.path.abspath(args.src)
    print("source", src)
    cut, cream = cut_background(Image.open(src))
    print("cream ", cream)
    mark = pad(restore_disc(trim(cut), cream))
    print("mark  ", mark.size)

    master = os.path.join(PUBLIC, "sns-icon.png")
    mark.save(master, "PNG")
    print("wrote", master, mark.size)

    for name, size in PNG_SIZES.items():
        out = os.path.join(PUBLIC, name)
        mark.resize((size, size), Image.LANCZOS).save(out, "PNG")
        print("wrote", out, (size, size))

    ico = os.path.join(PUBLIC, "favicon.ico")
    frames = [mark.resize((s, s), Image.LANCZOS) for s in ICO_SIZES]
    frames[-1].save(ico, format="ICO", sizes=[(s, s) for s in ICO_SIZES],
                    append_images=frames[:-1])
    print("wrote", ico, ICO_SIZES)

    # The SVG is a wrapper around an embedded bitmap: the artwork is a raster,
    # so there is no real vector to emit, but browsers prefer an SVG icon link
    # and it scales cleanly between the raster sizes above.
    import base64
    import io

    buf = io.BytesIO()
    mark.resize((SVG_EMBED, SVG_EMBED), Image.LANCZOS).save(buf, "PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    svg = os.path.join(PUBLIC, "icon.svg")
    with open(svg, "w", encoding="utf-8") as fh:
        fh.write(
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{SVG_EMBED}" '
            f'height="{SVG_EMBED}" viewBox="0 0 {SVG_EMBED} {SVG_EMBED}">'
            f'<image width="{SVG_EMBED}" height="{SVG_EMBED}" '
            f'href="data:image/png;base64,{b64}"/></svg>'
        )
    print("wrote", svg)


if __name__ == "__main__":
    main()
