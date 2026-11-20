# Pausa landing page

A single static page for Pausa, a small macOS companion for mindful pauses at work. It explains what Pausa is
and invites people to join the closed beta. It does not offer a download.

Plain HTML and CSS, no framework and no build step. Fonts (Fredoka and Nunito, SIL Open Font License) are
self-hosted in `fonts/`, so the page makes no requests to third parties. The only JavaScript is the icon and
companion sprites in `js/`.

## Before publishing

Search for these placeholders and replace them:

- `[CONTACT EMAIL]` (two `mailto:` links)
- `[LOCAL HELP RESOURCES LINK]`
- `[A PERSONAL LINE FROM THE MAKER]` and `[MAKER NAME]`
- the footer "Privacy note" link (`href="#"`)

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Hosting on GitHub Pages

Settings, Pages, Source: Deploy from a branch, branch `main`, folder `/ (root)`. `.nojekyll` keeps GitHub from
processing the files.

Fonts: see `fonts/OFL.txt` for the licence.
