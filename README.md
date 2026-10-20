# Tarang & Muskan: Wedding Invitation

A single-page digital wedding invitation. It's plain HTML, CSS and JavaScript with no build step.

**Live:** https://muskanmittal02.github.io/wedding-invitation/ (all guests) and https://muskanmittal02.github.io/wedding-invitation/family/ (close family)

## What's inside

- **Opening:** a full-screen maroon envelope with embossed leaves and a gold wax seal. Tapping the seal lifts it off, all four flaps unfold, and the card grows to fill the screen.
- **Home:** a cream and gold card with Ganesh ji, the couple's names in gold foil, the date, and a countdown to 2 Dec 2026, 11:00 PM. Fireworks start once the countdown ends; add `?celebrate` to the link to preview them.
- **The Couple:** both families' lines over a faded couple photo.
- **One page per function**, each in its own colours with a map link.
  - The family link also includes Ganesh Puja and Shri Shyam Ji Kirtan.
- **Closing page:** the message, Warm Regards, an Instagram link, and contact numbers with call buttons.
- **Our Moments:** the reel, with tap-for-sound and full screen.
- **Extras:**
  - English and Hindi.
  - A background song on repeat.
  - Auto-advance every 8 seconds.
  - A hidden shower of hearts when the names are tapped three times.

## Files

| Path | What |
|---|---|
| `index.html` | Main invitation (all guests) |
| `family/index.html` | Family invitation, generated from `index.html` by `build-family.py` |
| `script.js` | All content and behaviour. Names, dates, venues and contacts are in `CONFIG` at the top. |
| `style.css` | All styling |
| `assets/images/` | Couple photo, Ganesh ji, wax seal, paper texture |
| `assets/music/` | The background song (`background-2.m4a`; `background.m4a` is no longer used) |
| `assets/video/` | Reel and its cover image |
| `og-invite*.jpg` | Link-preview images for WhatsApp and other apps |

## Editing

1. Change the text, dates or contacts in `CONFIG` at the top of `script.js`.
2. If you edit `index.html`, run `python3 build-family.py` to regenerate the family page.
3. To preview locally, serve the folder at a `/wedding-invitation/` path, or just open `index.html`.

```bash
python3 -m http.server 8000   # from this folder, then open http://localhost:8000/
```

## Printable card

`print/Muskan-Tarang-Invitation-hi.pdf` (Hindi) and `print/Muskan-Tarang-Invitation-en.pdf` (English) are an 8-page A5 booklet: cover with the wax seal, the invitation, the couple and families, one page per celebration, and a back page with regards, venue, contacts and a QR code to the website. The words live in `print/build-print.py` (separate from `CONFIG`). After editing, run `python3 print/build-print.py`, open `print/invitation-hi.html` or `invitation-en.html` in Chrome, and Print → Save as PDF (A5, margins None, Background graphics on).

## Hosting

The site is fully static, so you can upload the folder to GitHub Pages, Netlify or Vercel. The link-preview tags in `index.html` point to `https://muskanmittal02.github.io/wedding-invitation/`. If you host it somewhere else, update those URLs.

## Image and music notes

- **Free to use:**
  - Ganesh ji line art (Pixabay).
  - Paper texture (Pexels).
- **Page illustrations (`assets/images/art/`), by Invitique Studio. Taken from screenshots of their samples for a local preview; not licensed for publishing.**
- **Sourced from Google or YouTube, licence unknown:**
  - The gold rose wax seal.
  - The background song.
