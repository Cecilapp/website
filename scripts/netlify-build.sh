CECIL_CACHE_DIR=${CECIL_CACHE_DIR%/}
CECIL_CACHE_DIR="$CECIL_CACHE_DIR/$BRANCH"

echo "Downloading Cecil..."
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

# Build CSS
#sha1sum -c "${CECIL_CACHE_DIR}/${CSS_INPUT}.sha1" --status
#if [ $? = 0 ]; then
#  echo "Loads CSS from cache"
#  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
#  cp $CECIL_CACHE_DIR/$CSS_OUPUT $CSS_OUPUT
#else
#  echo "Started CSS build"
#  npx @tailwindcss/cli -i $CSS_INPUT -o $CSS_OUPUT
#  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
#  # cache
#  echo "Caches CSS file."
#  mkdir -p $(dirname "${CECIL_CACHE_DIR}/${CSS_OUPUT}")
#  cp $CSS_OUPUT $CECIL_CACHE_DIR/$CSS_OUPUT
#  sha1sum $CSS_INPUT > "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
#  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
#fi

echo "Fetches themes data"
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json
echo "Fetches component themes data"
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme-component+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/components.json
echo "Fetches starters data"
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-starter+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/starterkits.json

if [[ $CECIL_ENV == "production" ]]; then
  php cecil.phar build -v --baseurl=$URL --optimize
else
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; }
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi


# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
