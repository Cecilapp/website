#!/bin/bash

# This script is used to build the site with the Cecil standalone binary on Cloudflare Pages.
# No PHP required: themes are installed from composer.lock without Composer.
#
# Cloudflare Pages settings:
# - Build command: bash ./scripts/cloudflare-build.sh
# - Build output directory: _site
# - Environment variables (optional):
#   - CECIL_VERSION: Cecil release to use (latest by default)
#   - CECIL_BASEURL: base URL of the production deployment (deployment URL by default)

set -o pipefail

# Build context
if [[ $CF_PAGES_BRANCH == "main" ]]; then
  export CECIL_ENV="production"
else
  export CECIL_ENV="preview"
fi
BASEURL=${CECIL_BASEURL:-$CF_PAGES_URL}

# Download the Cecil standalone binary
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) CECIL_BIN="cecil-linux-x64" ;;
  Linux-aarch64 | Linux-arm64) CECIL_BIN="cecil-linux-arm64" ;;
  Darwin-x86_64) CECIL_BIN="cecil-macos-x64" ;;
  Darwin-arm64) CECIL_BIN="cecil-macos-arm64" ;;
  MINGW* | MSYS* | CYGWIN*) CECIL_BIN="cecil-windows-x64.exe" ;;
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

# Adapt Netlify files to Cloudflare Pages
# _redirects: domain-level redirects and the force flag ("301!") are not supported
sed -i -E -e '/^https?:\/\//d' -e 's/[[:space:]]+(30[1278])!$/    \1/' _site/_redirects
# _headers: this is a mirror, so *.pages.dev must not be indexed
cat >> _site/_headers <<'EOF'

# Cloudflare Pages mirror
https://:project.pages.dev/*
  X-Robots-Tag: noindex
EOF

echo "Finished build"; exit 0
