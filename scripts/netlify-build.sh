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
# On failure (network, rate limit, invalid or empty response), existing data file is kept and build continues.
fetch_repos() {
  local topic=$1
  local file=$2
  local tmp
  tmp=$(mktemp)
  if curl -sf -H 'Accept: application/vnd.github.v3+json' "https://api.github.com/search/repositories?q=topic:$topic+org:Cecilapp+fork:true+is:public+archived:false" \
    | jq -e '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse | if length > 0 then . else error("empty") end' > "$tmp" 2>/dev/null; then
    mv "$tmp" "$file"
  else
    echo "Warning: unable to fetch \"$topic\" data, keeping existing $file"
    rm -f "$tmp"
  fi
}
echo "Fetches themes data"
fetch_repos cecil-theme data/themes.json
echo "Fetches component themes data"
fetch_repos cecil-theme-component data/components.json
echo "Fetches starters data"
fetch_repos cecil-starter data/starterkits.json

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
