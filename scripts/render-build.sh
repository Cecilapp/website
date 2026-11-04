#!/bin/bash

# This script is used to build the site with the Cecil standalone binary on Render.
# No PHP required: themes are installed from composer.lock without Composer.
#
# Render settings: see render.yaml (Blueprint)
# - Environment variables (optional):
#   - CECIL_VERSION: Cecil release to use (latest by default)
#   - CECIL_BASEURL: base URL of the production deployment (onrender.com URL by default)
#   - GITHUB_TOKEN: GitHub API token, to avoid rate limit when fetching data

set -o pipefail

# Build context
if [[ $IS_PULL_REQUEST == "true" ]]; then
  export CECIL_ENV="preview"
  BASEURL=$RENDER_EXTERNAL_URL
else
  export CECIL_ENV="production"
  BASEURL=${CECIL_BASEURL:-$RENDER_EXTERNAL_URL}
fi

# Download the Cecil standalone binary
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) CECIL_BIN="cecil-linux-x64" ;;
  Linux-aarch64 | Linux-arm64) CECIL_BIN="cecil-linux-arm64" ;;
  *) echo "Unsupported platform: $(uname -s) $(uname -m)"; exit 1 ;;
esac
if [[ -z $CECIL_VERSION ]]; then
  CECIL_BIN_URL="https://github.com/Cecilapp/Cecil/releases/latest/download"
else
  CECIL_BIN_URL="https://github.com/Cecilapp/Cecil/releases/download/$CECIL_VERSION"
fi
echo "Downloading Cecil ($CECIL_BIN)..."
curl -sSfLO "$CECIL_BIN_URL/$CECIL_BIN" && curl -sSfLO "$CECIL_BIN_URL/cecil-binaries.sha256" || { echo "Unable to download Cecil"; exit 1; }
grep " $CECIL_BIN\$" cecil-binaries.sha256 | sha256sum -c - || { echo "Checksum verification failed"; exit 1; }
chmod +x "$CECIL_BIN"
"./$CECIL_BIN" --version

# Install themes from composer.lock (Composer requires PHP)
echo "Installing themes..."
node -e '
const lock = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
for (const p of lock.packages.filter(p => p.type === "cecil-theme")) {
  console.log(p.extra.name, p.source.url.replace(/^https:\/\/github\.com\/|\.git$/g, ""), p.source.reference);
}' composer.lock | while read -r name repo ref; do
  echo "- $name ($repo@${ref:0:7})"
  rm -rf "themes/$name" && mkdir -p "themes/$name"
  curl -sSfL "https://codeload.github.com/$repo/tar.gz/$ref" | tar -xz --strip-components=1 -C "themes/$name" || exit 1
done || { echo "Unable to install themes"; exit 1; }

# Fetch data from GitHub API
bash ./scripts/fetch-data.sh

# Build the site with Cecil
if [[ $CECIL_ENV == "production" ]]; then
  "./$CECIL_BIN" build -v ${BASEURL:+--baseurl=$BASEURL}
else
  "./$CECIL_BIN" build -vv ${BASEURL:+--baseurl=$BASEURL} --drafts
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi

# Netlify files are not used by Render (headers and routes are defined in render.yaml, HTML pages redirects are handled by Cecil)
rm -f _site/_headers _site/_redirects
# Non-HTML redirects: Cecil generates HTML redirect pages, which curl doesn't follow
rm -f _site/build.sh # see routes in render.yaml
CECIL_PHAR_VERSION=$(tr -d '[:space:]' < static/VERSION)
cp "_site/download/$CECIL_PHAR_VERSION/cecil.phar" _site/cecil.phar && cp "_site/download/$CECIL_PHAR_VERSION/cecil.phar.sha1" _site/cecil.phar.sha1 || { echo "Unable to copy cecil.phar"; exit 1; }

echo "Finished build"; exit 0
