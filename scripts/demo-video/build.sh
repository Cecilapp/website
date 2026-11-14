#!/bin/bash

# Builds static/videos/cecil-demo-<theme>.mp4 (and its poster) from scratch:
# creates a demo site with Cecil, serves it, captures frames with Playwright and encodes them with ffmpeg.
# Requires: cecil, node (with playwright, see PW/CHROME env in capture.cjs), ffmpeg.
# Usage: scripts/demo-video/build.sh [dark|light] [preview] (both themes by default)

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$DIR/../.." && pwd)"
WORK="$(mktemp -d)"
FPS=30
FADE=0.5
PORT=8765
export URL="http://localhost:$PORT/"

case "$1" in
  dark|light) THEMES="$1"; shift ;;
  *) THEMES="dark light" ;;
esac
PREVIEW="$1"

if curl -s -o /dev/null "$URL"; then
  echo "Port $PORT is already in use" >&2
  exit 1
fi

# demo site (same answers as typed in terminal.html)
mkdir -p "$WORK/www"
printf 'My Blog\nThoughts, notes and stories\n\n\n\n\ny\nn\n' | cecil new:site "$WORK/www/demo" --no-ansi > /dev/null
cecil serve "$WORK/www/demo" --port=$PORT --no-watch > /dev/null 2>&1 &
SERVER=$!
cleanup() {
  kill $SERVER 2> /dev/null || true
  # on Windows (Git Bash), the PHP built-in server is detached from the cecil process: kill the port listener
  if command -v taskkill > /dev/null; then
    for pid in $(netstat -ano | awk -v p=":$PORT" '$2 ~ p"$" && $4 == "LISTENING" { print $5 }' | sort -u); do
      taskkill //F //T //PID "$pid" > /dev/null 2>&1 || true
    done
    sleep 1
  fi
  rm -rf "$WORK" || true
}
trap cleanup EXIT
until curl -s -o /dev/null "$URL"; do sleep 1; done

for THEME in $THEMES; do
  echo "# $THEME"
  FRAMES="$WORK/frames-$THEME"
  THEME=$THEME node "$DIR/capture.cjs" "$FRAMES" "$PREVIEW"
  if [ "$PREVIEW" = "preview" ]; then
    rm -rf "$DIR/preview/$THEME" && mkdir -p "$DIR/preview" && cp -r "$FRAMES" "$DIR/preview/$THEME"
    echo "Preview frames: scripts/demo-video/preview/$THEME"
    continue
  fi

  # video: terminal, crossfade to browser, fade out to background color (smooth loop)
  [ "$THEME" = "light" ] && COLOR=white || COLOR=black
  TERM_FRAMES=$(ls "$FRAMES/term" | wc -l)
  WEB_FRAMES=$(ls "$FRAMES/web" | wc -l)
  OFFSET=$(awk "BEGIN { print $TERM_FRAMES / $FPS - $FADE }")
  END=$(awk "BEGIN { print ($TERM_FRAMES + $WEB_FRAMES) / $FPS - 2 * $FADE }")
  ffmpeg -v error -y \
    -framerate $FPS -i "$FRAMES/term/%05d.png" \
    -framerate $FPS -i "$FRAMES/web/%05d.png" \
    -filter_complex "[0:v]format=yuv420p,settb=AVTB[a];[1:v]format=yuv420p,settb=AVTB[b];[a][b]xfade=transition=fade:duration=$FADE:offset=$OFFSET,fade=t=out:st=$END:d=$FADE:color=$COLOR,format=yuv420p[v]" \
    -map "[v]" -c:v libx264 -profile:v high -preset veryslow -crf 22 -tune stillimage -movflags +faststart -an \
    "$ROOT/static/videos/cecil-demo-$THEME.mp4"
  cp "$FRAMES/term/00000.png" "$ROOT/static/videos/cecil-demo-$THEME-poster.png"
  echo "Done: static/videos/cecil-demo-$THEME.mp4"
done
