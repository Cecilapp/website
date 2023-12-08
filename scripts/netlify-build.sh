CECIL_CACHE_DIR=${CECIL_CACHE_DIR%/}
CECIL_CACHE_DIR="$CECIL_CACHE_DIR/$BRANCH"

echo "Downloading Cecil"
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

# Build CSS
sha1sum -c "${CECIL_CACHE_DIR}/${CSS_INPUT}.sha1" --status
if [ $? = 0 ]; then
  echo "Loads CSS from cache"
  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
  cp $CECIL_CACHE_DIR/$CSS_OUPUT $CSS_OUPUT
else
  echo "Started CSS build"
  npx tailwindcss -i $CSS_INPUT -o $CSS_OUPUT
  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
  # cache
  echo "Caches CSS file."
  mkdir -p $(dirname "${CECIL_CACHE_DIR}/${CSS_OUPUT}")
  cp $CSS_OUPUT $CECIL_CACHE_DIR/$CSS_OUPUT
  sha1sum $CSS_INPUT > "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
  cat "$CECIL_CACHE_DIR/$CSS_INPUT.sha1"
fi

echo "Fetches themes data"
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=theme+in:name+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, url: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json

if [[ $CECIL_ENV == "production" ]]; then
  php cecil.phar build -v --baseurl=$URL --optimize
else
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; }
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi

# Import Algolia index
#if [[ $CECIL_ENV == "production" ]]; then
#  sha1sum -c "${CECIL_CACHE_DIR}/${ALGOLIA_INDEX}.sha1" --status
#  if [ $? = 0 ]; then
#    echo "Loads Algolia index from cache"
#    cat "$CECIL_CACHE_DIR/$ALGOLIA_INDEX.sha1"
#    cp $CECIL_CACHE_DIR/$ALGOLIA_INDEX $ALGOLIA_INDEX
#  else
#    echo "Started Algolia index import"
#    npm install -g @algolia/cli
#    algolia import -s $ALGOLIA_INDEX -a $ALGOLIA_APP_ID -k $ALGOLIA_APP_KEY -n $ALGOLIA_INDEX_NAME
#    if [ $? = 0 ]; then echo "Finished Algolia index import"; else echo "Algolia index import fail..."; exit 1; fi
#    # cache
#    echo "Caches index file."
#    mkdir -p $(dirname "${CECIL_CACHE_DIR}/${ALGOLIA_INDEX}")
#    cp $ALGOLIA_INDEX $CECIL_CACHE_DIR/$ALGOLIA_INDEX
#    sha1sum $ALGOLIA_INDEX> "$CECIL_CACHE_DIR/$ALGOLIA_INDEX.sha1"
#    cat "$CECIL_CACHE_DIR/$ALGOLIA_INDEX.sha1"
#  fi
#fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
