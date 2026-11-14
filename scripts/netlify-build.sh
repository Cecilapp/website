# !/bin/bash

# This script is used to build the site with Cecil on Netlify.

# Set cache directory for Cecil
CECIL_CACHE_DIR=${CECIL_CACHE_DIR%/}
CECIL_CACHE_DIR="$CECIL_CACHE_DIR/$BRANCH"

# Get Cecil
# The latest release is bundled in the repository by the Cecil release workflow, *before* the Phar is attached
# to the GitHub release: using it avoids a 404 when a build is triggered by the release commit itself.
# The download is only used if `CECIL_PHAR_URL` targets a specific version, or if the bundled Phar is unusable.
CECIL_VERSION=$(tr -d '[:space:]' < static/VERSION 2>/dev/null)
CECIL_PHAR_BUNDLED="static/download/$CECIL_VERSION/cecil.phar"
rm -f cecil.phar
if [[ $CECIL_PHAR_URL == */releases/latest/* && -n $CECIL_VERSION && -f $CECIL_PHAR_BUNDLED ]]; then
  if [[ "$(sha1sum "$CECIL_PHAR_BUNDLED" | cut -d ' ' -f 1)" == "$(tr -d '[:space:]' < "$CECIL_PHAR_BUNDLED.sha1" 2>/dev/null)" ]]; then
    echo "Using bundled Cecil $CECIL_VERSION..."
    cp "$CECIL_PHAR_BUNDLED" cecil.phar
  else
    echo "Warning: checksum mismatch for $CECIL_PHAR_BUNDLED"
  fi
fi
if [ ! -f cecil.phar ]; then
  echo "Downloading Cecil..."
  curl -sSfLO --retry 5 --retry-delay 15 --retry-all-errors "$CECIL_PHAR_URL"
fi
php cecil.phar --version || { echo "Cecil is not available..."; exit 1; }

# Fetch data from GitHub API
bash ./scripts/fetch-data.sh

# Build the site with Cecil
if [[ $CECIL_ENV == "production" ]]; then
  php cecil.phar build -v --baseurl=$URL #--optimize
else
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; }
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
