"""Generate a static 1200x630 Open Graph card for SNS Solutions."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import os

W, H = 1200, 630
PAD = 80

BG = (6, 8, 15)
WHITE = (237, 238, 244)
MUTED = (139, 149, 172)
FAINT = (113, 123, 148)
ACCENT = (143, 160, 255)   # light indigo
GREEN = (52, 211, 153)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

FONTS = r"C:\Windows\Fonts"
def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

f_brand = font("seguisb.ttf", 30)    # semibold
f_head  = font("segoeuib.ttf", 78)   # bold
f_body  = font("segoeui.ttf", 30)
f_foot  = font("segoeui.ttf", 24)

# ── base ────────────────────────────────────────────────────────────────
img = Image.new("RGB", (W, H), BG)

# ── glow layer (indigo top-left + cyan bottom-right), blurred ───────────
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([-300, -360, 620, 360], fill=(99, 102, 241, 105))     # indigo
gd.ellipse([820, 380, 1500, 900], fill=(34, 211, 238, 70))       # cyan
glow = glow.filter(ImageFilter.GaussianBlur(190))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
draw = ImageDraw.Draw(img)

# ── brand row ───────────────────────────────────────────────────────────
logo = Image.open(os.path.join(ROOT, "public", "sns-icon.png")).convert("RGBA")
logo = logo.resize((76, 76), Image.LANCZOS)
img.paste(logo, (PAD, 66), logo)

bx = PAD + 76 + 20
by = 66 + 38 - 16
draw.text((bx, by), "SNS ", font=f_brand, fill=WHITE)
w_sns = draw.textlength("SNS ", font=f_brand)
draw.text((bx + w_sns, by), "SOLUTIONS", font=f_brand, fill=MUTED)

# ── headline (single line, two colours) ─────────────────────────────────
hx, hy = PAD, 232
draw.text((hx, hy), "Simplicity", font=f_head, fill=ACCENT)
w_simpl = draw.textlength("Simplicity", font=f_head)
draw.text((hx + w_simpl, hy), " is the solution.", font=f_head, fill=WHITE)

# ── body (wrapped) ──────────────────────────────────────────────────────
body = ("AI-powered software studio. We build the automation "
        "infrastructure — you take the credit.")
max_w = 900
words, line, lines = body.split(), "", []
for word in words:
    trial = (line + " " + word).strip()
    if draw.textlength(trial, font=f_body) <= max_w:
        line = trial
    else:
        lines.append(line)
        line = word
lines.append(line)

ty = 232 + 78 + 34
for ln in lines:
    draw.text((PAD, ty), ln, font=f_body, fill=MUTED)
    ty += 42

# ── footer row ──────────────────────────────────────────────────────────
fy = H - PAD - 6
draw.ellipse([PAD, fy + 8, PAD + 13, fy + 21], fill=GREEN)
draw.text((PAD + 24, fy), "Vienna, Austria — always building", font=f_foot, fill=FAINT)
right = "sns-solutions"
rw = draw.textlength(right, font=f_foot)
draw.text((W - PAD - rw, fy), right, font=f_foot, fill=MUTED)

out = os.path.join(ROOT, "public", "og.png")
img.save(out, "PNG")
print("wrote", out, img.size)
