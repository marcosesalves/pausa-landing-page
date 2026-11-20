# Pausa landing page

A single static page for Pausa, a small macOS companion for mindful pauses at work. It explains what Pausa is
and invites people to join the closed beta. It does not offer a download.

Plain HTML and CSS, no framework and no build step. Fonts (Fredoka and Nunito, SIL Open Font License) are
self-hosted in `fonts/`, so the page makes no requests to third parties. The only JavaScript is the icon and
companion sprites in `js/`.

## Contact address

The page uses `pausa.companion.app@gmail.com` (three `mailto:` links: Join the beta, the privacy note and the
footer). Search for it if you ever need to change it.

The Instagram account is `@pausa.companion` (links in the footer, the Join the beta section and the privacy
note). It is also linked from the Pausa app, in `src/lib/links.ts` and `src-tauri/src/tray.rs`.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Hosting on GitHub Pages

Settings, Pages, Source: Deploy from a branch, branch `main`, folder `/ (root)`. `.nojekyll` keeps GitHub from
processing the files.

Fonts: see `fonts/OFL.txt` for the licence.
