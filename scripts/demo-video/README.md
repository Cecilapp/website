# Demo video

Generates the home page terminal demo videos (`layouts/partials/terminal-demo.html.twig`), in two themes:

- `static/videos/cecil-demo-dark.mp4` and `static/videos/cecil-demo-dark-poster.png`
- `static/videos/cecil-demo-light.mp4` and `static/videos/cecil-demo-light-poster.png`

The home page displays the one matching the current site theme.

Files:

- `terminal.html`: animated terminal (prompt, typed commands and Cecil output), driven frame by frame by `render(t)`, light theme with `?theme=light`
- `capture.cjs`: captures the terminal frames, then the site served by `cecil serve` (with a smooth scroll), at 30 fps and 2x (1860×1036)
- `build.sh`: full pipeline (create demo site, serve, capture, encode with ffmpeg)

## Requirements

- Cecil
- Node.js with Playwright (`npm i -g playwright`), or set `PW` to a `playwright-core` path and `CHROME` to a Chromium executable
- ffmpeg

## Usage

```bash
bash scripts/demo-video/build.sh                # builds both themes
bash scripts/demo-video/build.sh light          # builds the light theme only
bash scripts/demo-video/build.sh dark preview   # captures 1 frame/s in scripts/demo-video/preview/dark/ to check rendering
```

To change the scenario (commands, answers, timings), edit the timeline in `terminal.html`. If the answers change, update them in `build.sh` too, so that the served site matches.
