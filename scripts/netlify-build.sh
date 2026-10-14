# !/bin/bash

# This script is used to build the site with Cecil on Netlify.

# Set cache directory for Cecil
CECIL_CACHE_DIR=${CECIL_CACHE_DIR%/}
CECIL_CACHE_DIR="$CECIL_CACHE_DIR/$BRANCH"

# Download the latest version of Cecil
echo "Downloading Cecil..."
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

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
