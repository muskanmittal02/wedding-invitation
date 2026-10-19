"""Generate family/index.html (the /wedding/family/ link) from index.html.

Run after editing index.html:  python3 build-family.py
"""
from pathlib import Path

root = Path(__file__).parent
html = (root / "index.html").read_text()

replacements = [
    ('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n  <base href="../" />\n  <meta name="robots" content="noindex" />'),
    ('<body class="locked">', '<body class="locked" data-audience="family">'),
    ('content="https://muskanmittal02.github.io/wedding/" />', 'content="https://muskanmittal02.github.io/wedding/family/" />'),
]
for old, new in replacements:
    assert old in html, f"missing: {old}"
    html = html.replace(old, new, 1)

# Separate share preview (title, description, image) for the family link.
replace_all = [
    ("Muskan weds Tarang · Wedding Invitation", "Muskan weds Tarang · Family Invitation"),
    ("/wedding/og-image-mt.jpg", "/wedding/og-image-family-mt.jpg"),
    (
        'content="With hearts full of love and joy, we warmly invite you to celebrate our special day · 1–2 December 2026 · Ranchi"',
        'content="26 November – 2 December 2026 · Ganesh Puja, Shri Shyam Ji Kirtan &amp; Wedding Celebrations · Ranchi"',
    ),
    (
        'content="You are invited to the wedding of Muskan weds Tarang · 1–2 December 2026 · The Langkawi Resort, Ranchi"',
        'content="Family invitation to the wedding of Muskan weds Tarang · 26 November – 2 December 2026 · Ranchi"',
    ),
    (
        'content="Muskan weds Tarang wedding invitation, 1–2 December 2026, Ranchi"',
        'content="Muskan weds Tarang family invitation, 26 November – 2 December 2026, Ranchi"',
    ),
]
for old, new in replace_all:
    assert old in html, f"missing: {old}"
    html = html.replace(old, new)

(root / "family").mkdir(exist_ok=True)
(root / "family" / "index.html").write_text(html)
print("wrote family/index.html")
