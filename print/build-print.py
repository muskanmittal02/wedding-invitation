"""Build the printable invitation: print/invitation-hi.html and print/invitation-en.html.

An 8-page A5 booklet in the website's style: cover, invitation, the couple, one page per
celebration, and a back page with the venue, regards, contacts and a QR code to the site.
Run:  python3 print/build-print.py   then open a file in Chrome and Print → Save as PDF
(paper A5, margins None, Background graphics on). The text here is separate from CONFIG
in script.js, so keep both in step.
"""
import re
from pathlib import Path

here = Path(__file__).parent
root = here.parent
SITE = "https://muskanmittal02.github.io/wedding-invitation/"

# ---------- words, in both languages ----------
T = {
    "hi": dict(
        lang="hi", title="मुस्कान संग तरंग · निमंत्रण",
        families="सपरिवार शुभ आशीर्वाद सहित",
        bride="मुस्कान", groom="तरंग", weds="संग",
        invite="अपने नवजीवन के शुभारंभ पर<br />आपकी गरिमामयी उपस्थिति के आकांक्षी हैं",
        date="बुधवार, 2 दिसंबर 2026", city="राँची, झारखंड", cover_date="1 – 2 दिसंबर 2026",
        elders="बड़ों के आशीर्वाद से",
        bride_full="मुस्कान मित्तल", groom_full="तरंग खेतान",
        bride_lines=[("सुपुत्री", "श्रीमती विनीता एवं श्री राज कुमार अग्रवाल"), ("पौत्री", "स्व. श्रीमती चन्द्रपति एवं स्व. श्री बिशम्बर दयाल अग्रवाल")],
        groom_lines=[("सुपुत्र", "श्रीमती शीला एवं श्री संजय खेतान"), ("पौत्र", "स्व. श्रीमती सीता एवं स्व. श्री संतूलाल खेतान")],
        count="उत्सव {i} / {n}", l_date="दिनांक", l_time="समय", l_venue="स्थान",
        events=[
            ("मायरा", "ननिहाल पक्ष का स्नेहाशीर्वाद", "मंगलवार, 1 दिसंबर 2026", "सुबह 11:00 बजे से"),
            ("संगीत संध्या", "गीत, नृत्य और उल्लास की एक शाम", "मंगलवार, 1 दिसंबर 2026", "शाम 6:00 बजे से"),
            ("सुनहरी हल्दी एवं कार्निवल", "हल्दी का रंग, कार्निवल की मस्ती और ढेर सारी हँसी", "बुधवार, 2 दिसंबर 2026", "सुबह 11:00 बजे से"),
            ("विवाह संस्कार एवं प्रीतिभोज", "सात फेरे, सात वचन, जन्मों का साथ", "बुधवार, 2 दिसंबर 2026", "शाम 7:00 बजे से"),
        ],
        venue="द लंकावी रिज़ॉर्ट", address="बरियातू, राँची 834009", venue_title="विवाह स्थल",
        closing="हर्ष और स्नेह से भरे हृदय से हम आपको इस शुभ अवसर पर सादर आमंत्रित करते हैं। पधारकर नवदम्पति को अपना आशीर्वाद प्रदान करें।",
        regards_title="विनीत", presence="आपकी उपस्थिति और आशीर्वाद हमारे उत्सव को और भी विशेष बना देंगे।", regards="बागोतिया मित्तल परिवार",
        queries="किसी भी जानकारी हेतु संपर्क करें",
        contacts=[("राज कुमार अग्रवाल", "+91 70045 76735"), ("रितेश मित्तल", "+91 88253 97368")],
        qr="डिजिटल निमंत्रण देखने के लिए स्कैन करें",
    ),
    "en": dict(
        lang="en", title="Muskan & Tarang · Invitation",
        families="Together with their families",
        bride="Muskan", groom="Tarang", weds="weds",
        invite="request the pleasure of your company<br />as they begin their journey together",
        date="Wednesday, 2 December 2026", city="Ranchi, Jharkhand", cover_date="1 – 2 December 2026",
        elders="With the blessings of our elders",
        bride_full="Muskan Mittal", groom_full="Tarang Khetan",
        bride_lines=[("Daughter of", "Mrs. Vinita &amp; Mr. Raj Kumar Agarwal"), ("Granddaughter of", "Late Mrs. Chandrapati &amp; Late Mr. Bishamber Dayal Agarwal")],
        groom_lines=[("Son of", "Mrs. Sheela &amp; Mr. Sanjay Khetan"), ("Grandson of", "Late Mrs. Sita &amp; Late Mr. Santulal Khetan")],
        count="Celebration {i} of {n}", l_date="Date", l_time="Time", l_venue="Venue",
        events=[
            ("Mayra", "Blessings from the maternal family", "Tuesday, 1 December 2026", "11:00 AM onwards"),
            ("Sangeet Evening", "An evening of song, dance &amp; celebration", "Tuesday, 1 December 2026", "6:00 PM onwards"),
            ("Sunkissed Haldi &amp; Carnival", "A splash of turmeric, carnival fun &amp; a lot of laughter", "Wednesday, 2 December 2026", "11:00 AM onwards"),
            ("Wedding Ceremony &amp; Reception", "Seven pheras, seven vows, one forever", "Wednesday, 2 December 2026", "7:00 PM onwards"),
        ],
        venue="The Langkawi Resort", address="Bariatu, Ranchi, 834009", venue_title="The Venue",
        closing="With hearts full of love and joy, we warmly invite you to celebrate our special day and bless us as we begin our forever together.",
        regards_title="Warm Regards", presence="Your presence and blessings will make our celebration even more special.", regards="Bagotiya Mittal Family",
        queries="For any queries",
        contacts=[("Raj Kumar Agarwal", "+91 70045 76735"), ("Ritesh Mittal", "+91 88253 97368")],
        qr="Scan to open the digital invitation",
    ),
}

# page colours per celebration (as on the website) and its illustration
EVENT_LOOK = [
    dict(bg1="#9b3a8c", bg2="#3b0a3a", accent="#f5cf7a", ink="#fdf3fb", art="mayra"),
    dict(bg1="#4b2391", bg2="#170833", accent="#f7c873", ink="#f7efff", art="sangeet"),
    dict(bg1="#fbe06b", bg2="#f0a020", accent="#8a4300", ink="#4a2600", art="haldi"),
    dict(bg1="#16305e", bg2="#040a1a", accent="#d9b45a", ink="#eef2ff", art="wedding"),
]

# ---------- shared drawings ----------
css_site = (root / "style.css").read_text()
CORNER = re.search(r'\.corner \{.*?background: (url\("data:image/svg\+xml,[^"]+"\))', css_site, re.S).group(1)


def mandala(color):
    petals = "".join(
        f'<ellipse cx="100" cy="45" rx="10" ry="40" transform="rotate({i * 22.5} 100 100)"/>'
        f'<ellipse cx="100" cy="22" rx="5" ry="16" transform="rotate({i * 22.5 + 11.25} 100 100)"/>'
        for i in range(16))
    return (f'<svg class="mandala" viewBox="0 0 200 200" fill="none" stroke="{color}" stroke-width="0.8">{petals}'
            '<circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="88" stroke-dasharray="2 3"/>'
            f'<circle cx="100" cy="100" r="28"/><circle cx="100" cy="100" r="18"/><circle cx="100" cy="100" r="6" fill="{color}"/></svg>')


def frame(color="#b8862b"):
    return (f'<div class="frame" style="--line:{color}"></div>'
            '<i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>')


def qr_svg():
    try:
        import io
        import segno
    except ImportError:
        return ""
    buf = io.BytesIO()
    segno.make(SITE, error="m").save(buf, kind="svg", dark="#5b0f1a", light=None, scale=1, border=0, xmldecl=False, nl=False)
    return buf.getvalue().decode().replace("<svg ", '<svg class="qr-code" ', 1)


GANESH = '<img class="ganesh" src="../assets/images/ganesh-gold.png" alt="" />'

STYLE = """
@page { size: A5; margin: 0; }
* { box-sizing: border-box; margin: 0; }
html, body { background: #d8d2c8; }
body { font-family: "Cormorant Garamond", Georgia, serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page {
  position: relative; width: 148mm; height: 210mm; margin: 8mm auto; overflow: hidden;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 18mm 14mm; break-after: page; page-break-after: always;
}
@media print { html, body { background: none; } .page { margin: 0; } }
.frame { position: absolute; inset: 5mm; border: 1.2pt solid var(--line); opacity: 0.9; }
.frame::before { content: ""; position: absolute; inset: 1.6mm; border: 0.6pt solid var(--line); opacity: 0.55; }
.corner { position: absolute; width: 17mm; height: 17mm; background: CORNER no-repeat center / contain; }
.corner.tl { top: 2.5mm; left: 2.5mm; } .corner.tr { top: 2.5mm; right: 2.5mm; transform: scaleX(-1); }
.corner.bl { bottom: 2.5mm; left: 2.5mm; transform: scaleY(-1); } .corner.br { bottom: 2.5mm; right: 2.5mm; transform: scale(-1, -1); }
.mandala { position: absolute; width: 135mm; left: 50%; top: 50%; transform: translate(-50%, -50%); opacity: 0.09; }
.content { position: relative; width: 100%; }
.ganesh { display: block; height: 14mm; margin: 0 auto 2mm; }
.caps { font-family: Cinzel, serif; text-transform: uppercase; letter-spacing: 0.18em; font-size: 8pt; }
:lang(hi) .caps { font-family: "Tiro Devanagari Hindi", serif; letter-spacing: 0; text-transform: none; font-size: 10.5pt; }
.script { font-family: "Great Vibes", cursive; font-weight: 400; }
:lang(hi) .script { font-family: "Tiro Devanagari Hindi", serif; }
/* Solid gold, not a gradient clipped to the text: PDF viewers such as macOS Preview
   draw clipped gradients, soft text shadows and CSS masks as solid blocks. */
.foil { color: #a3741c; }
.foil.light { color: #ecc871; }
.divider { display: flex; align-items: center; justify-content: center; gap: 3mm; margin: 4mm auto; color: var(--div, #b8862b); }
.divider::before, .divider::after { content: ""; width: 24mm; height: 0.6pt; background: linear-gradient(90deg, transparent, currentColor); }
.divider::after { transform: scaleX(-1); }
.divider span { width: 2.2mm; height: 2.2mm; background: currentColor; transform: rotate(45deg); }

/* 1 · cover: deep maroon, gold seal */
.cover { color: #f3dc9a; background: radial-gradient(circle at 50% 45%, #8e1a2a 0%, #5e0d19 50%, #33070d 100%); }
.cover .mandala { opacity: 0.14; width: 150mm; }
.cover .invocation { font-family: "Tiro Devanagari Hindi", serif; font-size: 12pt; color: #e9c46a; }
/* the cover is Ganesh ji alone, large, in a gold double ring, with "Shubh Vivah" below */
.cover { --div: #d9b45a; }
.cover .halo { width: 92mm; height: 92mm; margin: 0 auto 7mm; border-radius: 50%; display: grid; place-items: center;
  border: 1pt solid #d9b45a; box-shadow: 0 0 0 2.2mm #5e0d19, 0 0 0 2.6mm rgba(217, 180, 90, 0.6);
  background: radial-gradient(circle, rgba(233, 196, 106, 0.16) 0%, rgba(233, 196, 106, 0.05) 60%, transparent 72%); }
.cover .ganesh-big { height: 70mm; width: auto; }
.cover .invocation { font-size: 16pt !important; }
.cover .shubh { font-family: "Tiro Devanagari Hindi", serif; font-size: 26pt; color: #ecc871; }
.cover .names { font-size: 44pt; line-height: 1.05; }
:lang(hi) .cover .names { font-size: 36pt; line-height: 1.3; }
.cover .names em { display: block; font-style: normal; font-size: 0.5em; }
.cover .when { font-family: Cinzel, serif; letter-spacing: 0.2em; font-size: 10pt; color: #e9c46a; margin-top: 6mm; }
:lang(hi) .cover .when { font-family: "Tiro Devanagari Hindi", serif; letter-spacing: 0; font-size: 12pt; }

/* cream pages: the invitation and the back */
.cream { color: #5b0f1a; background: radial-gradient(ellipse at 50% 42%, rgba(255,255,255,0.8), transparent 62%), linear-gradient(160deg, #fffaf0 0%, #f7ecd4 55%, #eedcb6 100%); }
.cream .caps { color: #8a5a1c; }
.invite .invocation { font-family: "Tiro Devanagari Hindi", serif; color: #8a1c2b; font-size: 11pt; margin-bottom: 4mm; }
.invite .shloka { font-family: "Tiro Devanagari Hindi", serif; color: #8a1c2b; font-size: 11pt; line-height: 1.6; margin: -2mm 0 4mm; }
.invite .names { font-size: 46pt; line-height: 1.05; margin: 5mm 0 2mm; }
:lang(hi) .invite .names { font-size: 40pt; line-height: 1.3; }
.invite .names em { display: block; font-style: normal; font-size: 0.5em; }
.invite .line { font-style: italic; font-size: 13.5pt; line-height: 1.55; margin: 3mm 0; }
:lang(hi) .invite .line { font-family: "Tiro Devanagari Hindi", serif; font-style: normal; font-size: 12.5pt; }
.invite .date { font-family: Cinzel, serif; color: #7a1424; font-size: 12.5pt; letter-spacing: 0.08em; }
:lang(hi) .invite .date, :lang(hi) .back .when { font-family: "Tiro Devanagari Hindi", serif; letter-spacing: 0; font-size: 13pt; }
.invite .city { font-size: 12pt; opacity: 0.8; margin-top: 1mm; }

/* 3 · the couple, on their photo under a maroon wash */
.couple { color: #f6ead2; background: linear-gradient(170deg, rgba(74, 10, 21, 0.8), rgba(46, 5, 12, 0.88)), url("../assets/images/couple-bg.jpg") center 40% / cover, #2e050c; }
.couple .caps { color: #e9c46a; }
.couple h2 { font-size: 34pt; line-height: 1.2; margin-top: 4mm; }
:lang(hi) .couple h2 { font-size: 28pt; }
.couple .rel { display: block; font-family: Cinzel, serif; text-transform: uppercase; letter-spacing: 0.1em; font-size: 7pt; color: #e9c46a; margin-top: 2.2mm; }
:lang(hi) .couple .rel { font-family: "Tiro Devanagari Hindi", serif; text-transform: none; letter-spacing: 0; font-size: 9.5pt; }
.couple .who { font-size: 11.5pt; white-space: nowrap; }
.couple .who.gp { font-style: italic; font-size: 10.5pt; }
:lang(hi) .couple .who { font-family: "Tiro Devanagari Hindi", serif; font-style: normal; font-size: 10.5pt; }
.couple .weds { font-size: 26pt; color: #e9c46a; margin: 3mm 0 -1mm; }
:lang(hi) .couple .weds { font-size: 18pt; }

/* 4–7 · the celebrations: page colours of the website, the illustration standing at the bottom */
/* the page colour and the faded illustration are one ready-made image (see bake_backgrounds) */
.event { color: var(--ink); justify-content: flex-start; padding-top: 20mm; background: var(--bg2) var(--page) center / cover no-repeat; }
.event .caps { color: var(--accent); }
.event h2 { font-size: 38pt; line-height: 1.12; margin: 2mm 0; color: var(--accent); }
:lang(hi) .event h2 { font-size: 26pt; line-height: 1.35; }
.event .tag { font-style: italic; font-size: 12.5pt; opacity: 0.92; }
:lang(hi) .event .tag { font-family: "Tiro Devanagari Hindi", serif; font-style: normal; font-size: 11.5pt; }
.event dl { margin-top: 1mm; }
.event dt { font-family: Cinzel, serif; text-transform: uppercase; letter-spacing: 0.16em; font-size: 7.5pt; color: var(--accent); margin-top: 2.6mm; }
:lang(hi) .event dt { font-family: "Tiro Devanagari Hindi", serif; letter-spacing: 0; font-size: 9.5pt; }
.event dd { font-size: 13.5pt; font-weight: 600; }
:lang(hi) .event dd { font-family: "Tiro Devanagari Hindi", serif; font-weight: 400; font-size: 12.5pt; }
.event .ganesh { height: 11mm; }

/* 8 · back: message, regards, venue, contacts, QR */
.back { justify-content: center; padding-block: 14mm; }
.back .msg { font-style: italic; font-size: 12.5pt; line-height: 1.55; }
:lang(hi) .back .msg { font-family: "Tiro Devanagari Hindi", serif; font-style: normal; font-size: 11.5pt; }
.back .msg.note { font-size: 11pt; margin-top: 2mm; opacity: 0.85; }
:lang(hi) .back .msg.note { font-size: 10.5pt; }
.back .regards { font-size: 32pt; line-height: 1.2; }
:lang(hi) .back .regards { font-size: 24pt; }
.back .venue { font-size: 24pt; color: #7a1424; line-height: 1.2; }
:lang(hi) .back .venue { font-size: 18pt; }
.back .addr { font-size: 11.5pt; }
.back .when { font-family: Cinzel, serif; color: #b8862b; font-size: 9pt; letter-spacing: 0.12em; margin-top: 0.6mm; }
.back .contacts { display: grid; grid-template-columns: auto auto; gap: 0.6mm 4mm; justify-content: center; font-size: 11pt; margin-top: 1.5mm; }
:lang(hi) .back .contacts { font-family: "Tiro Devanagari Hindi", serif; font-size: 10.5pt; }
.back .contacts span:nth-child(odd) { text-align: right; }
.back .qr { display: flex; align-items: center; justify-content: center; gap: 4mm; margin-top: 5mm; }
.back .qr-code { width: 20mm; height: 20mm; padding: 1.6mm; background: rgba(255,255,255,0.7); border: 0.6pt solid #b8862b; }
.back .qr p { font-size: 10pt; font-style: italic; max-width: 44mm; text-align: left; line-height: 1.35; }
:lang(hi) .back .qr p { font-family: "Tiro Devanagari Hindi", serif; font-style: normal; font-size: 9.5pt; }
""".replace("CORNER", CORNER)


def bake_backgrounds():
    """One A5 background per celebration: the page colour with the illustration standing at
    the bottom, its top fading into the colour. Baked into a JPG because PDF viewers don't
    reliably draw CSS masks. Needs Pillow (pip install pillow)."""
    from PIL import Image
    W, H = 874, 1240  # A5 at 150 dpi
    for look in EVENT_LOOK:
        hex2 = lambda h: tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))
        c1, c2 = hex2(look["bg1"]), hex2(look["bg2"])
        page = Image.new("RGB", (W, H))
        px = page.load()
        for y in range(H):
            k = y / (H - 1)
            row = tuple(round(a + (b - a) * k) for a, b in zip(c1, c2))
            for x in range(W):
                px[x, y] = row
        art = Image.open(root / f"assets/images/art/{look['art']}.jpg").convert("RGB")
        ah = round(H * 135 / 210)
        scale = max(W / art.width, ah / art.height)
        art = art.resize((round(art.width * scale), round(art.height * scale)), Image.LANCZOS)
        art = art.crop(((art.width - W) // 2, art.height - ah, (art.width - W) // 2 + W, art.height))
        # fade: transparent at the top of the picture, fully in by 62% of its height; 66% strength
        stops = [(0, 0), (0.25, 0.25), (0.45, 0.7), (0.62, 1), (1, 1)]
        mask = Image.new("L", (W, ah))
        mp = mask.load()
        for y in range(ah):
            t = y / (ah - 1)
            for (t0, v0), (t1, v1) in zip(stops, stops[1:]):
                if t0 <= t <= t1:
                    v = v0 + (v1 - v0) * (t - t0) / (t1 - t0)
                    break
            for x in range(W):
                mp[x, y] = round(255 * 0.66 * v)
        page.paste(art, (0, H - ah), mask)
        page.save(here / f"bg-{look['art']}.jpg", quality=86, optimize=True, progressive=True)


def build(code):
    w = T[code]
    n = len(w["events"])
    pages = []
    # 1 · cover
    pages.append(f'''<section class="page cover">{mandala("#e9c46a")}{frame("#d9b45a")}
  <div class="content">
    <div class="halo"><img class="ganesh-big" src="../assets/images/ganesh-gold.png" alt="" /></div>
    <p class="invocation">॥ श्री गणेशाय नमः ॥</p>
    <div class="divider"><span></span></div>
    <p class="shubh">शुभ विवाह</p>
  </div></section>''')
    # 2 · the invitation
    pages.append(f'''<section class="page cream invite">{mandala("#b8862b")}{frame()}
  <div class="content">
    {GANESH}
    <p class="invocation">॥ श्री गणेशाय नमः ॥</p>
    <p class="shloka">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥</p>
    <p class="caps">{w["families"]}</p>
    <h1 class="names script foil">{w["bride"]}<em>{w["weds"]}</em>{w["groom"]}</h1>
    <p class="line">{w["invite"]}</p>
    <div class="divider"><span></span></div>
    <p class="date">{w["date"]}</p>
    <p class="city">{w["city"]}</p>
  </div></section>''')
    # 3 · the couple
    lines = lambda ls: "".join(f'<span class="rel">{r}</span><p class="who{" gp" if k else ""}">{p}</p>' for k, (r, p) in enumerate(ls))
    pages.append(f'''<section class="page couple">{frame("#d9b45a")}
  <div class="content">
    {GANESH}
    <p class="caps">{w["elders"]}</p>
    <h2 class="script foil light">{w["bride_full"]}</h2>{lines(w["bride_lines"])}
    <p class="weds script">{w["weds"]}</p>
    <h2 class="script foil light">{w["groom_full"]}</h2>{lines(w["groom_lines"])}
  </div></section>''')
    # 4–7 · the celebrations
    for i, ((name, tag, date, time), look) in enumerate(zip(w["events"], EVENT_LOOK), 1):
        style = f'--bg2:{look["bg2"]};--accent:{look["accent"]};--ink:{look["ink"]};--div:{look["accent"]};--page:url(bg-{look["art"]}.jpg)'
        pages.append(f'''<section class="page event" style="{style}">{mandala(look["accent"])}{frame(look["accent"])}
  <div class="content">
    {GANESH}
    <p class="caps">{w["count"].format(i=i, n=n)}</p>
    <h2 class="script">{name}</h2>
    <p class="tag">{tag}</p>
    <div class="divider"><span></span></div>
    <dl><dt>{w["l_date"]}</dt><dd>{date}</dd><dt>{w["l_time"]}</dt><dd>{time}</dd><dt>{w["l_venue"]}</dt><dd>{w["venue"]}</dd></dl>
  </div></section>''')
    # 8 · back
    contacts = "".join(f"<span>{a}</span><span>{b}</span>" for a, b in w["contacts"])
    pages.append(f'''<section class="page cream back">{mandala("#b8862b")}{frame()}
  <div class="content">
    {GANESH}
    <p class="msg">{w["closing"]}</p>
    <p class="msg note">{w["presence"]}</p>
    <div class="divider"><span></span></div>
    <p class="caps">{w["regards_title"]}</p>
    <p class="regards script foil">{w["regards"]}</p>
    <div class="divider"><span></span></div>
    <p class="caps">{w["venue_title"]}</p>
    <p class="venue script">{w["venue"]}</p>
    <p class="addr">{w["address"]}</p>
    <p class="when">{w["cover_date"]}</p>
    <div class="divider"><span></span></div>
    <p class="caps">{w["queries"]}</p>
    <div class="contacts">{contacts}</div>
    <div class="qr">{qr_svg()}<p>{w["qr"]}</p></div>
  </div></section>''')

    html = f'''<!doctype html>
<html lang="{w["lang"]}">
<head>
<meta charset="utf-8" />
<title>{w["title"]}</title>
<!-- Generated by print/build-print.py; edit that file, not this one. -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&family=Tiro+Devanagari+Hindi&display=block" rel="stylesheet" />
<style>{STYLE}</style>
</head>
<body>
{chr(10).join(pages)}
</body>
</html>
'''
    (here / f"invitation-{code}.html").write_text(html)
    print("wrote", here / f"invitation-{code}.html")


bake_backgrounds()
for code in T:
    build(code)
