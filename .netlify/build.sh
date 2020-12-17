CACHE_PATH="$CACHE_PATH/$BRANCH"

echo "Downloading Cecil"
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

# Build CSS
if [ -f $CACHE_PATH/$CSS_OUPUT ] && [0 = $(sha1sum -c "${CACHE_PATH}/${CSS_OUPUT}.sha1" --status)]; then
  echo "Loads CSS from cache"
  cp $CACHE_PATH/$CSS_OUPUT $CSS_OUPUT
else
  echo "Started CSS build"
  npm install tailwindcss --silent
  npm install @tailwindcss/typography --silent
  npx tailwindcss-cli build $CSS_INPUT -o $CSS_OUPUT
  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
  # cache
  mkdir -p $(dirname "${CACHE_PATH}/${CSS_OUPUT}")
  cp $CSS_OUPUT $CACHE_PATH/$CSS_OUPUT
  sha1sum $CSS_OUPUT > "$CACHE_PATH/$CSS_OUPUT.sha1"
fi

if [[ $CECIL_ENV != "production" ]]; then
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; }
else
  php cecil.phar build -v --baseurl=$URL --postprocess
fi
if [ $? != 0 ]; then echo "Cecil build fail..."; exit 1; fi

# Import Algolia index
if [[ $CECIL_ENV == "production" ]]; then
  if [ -f $CACHE_PATH/$ALGOLIA_INDEX ] && [0 = $(sha1sum -c "${CACHE_PATH}/${ALGOLIA_INDEX}.sha1" --status)]; then
    echo "Loads Algolia index from cache"
    cp $CACHE_PATH/$ALGOLIA_INDEX $ALGOLIA_INDEX
  else
    echo "Started Algolia index import"
    npm install -g @algolia/cli
    algolia import -s $ALGOLIA_INDEX -a $ALGOLIA_APP_ID -k $ALGOLIA_APP_KEY -n $ALGOLIA_INDEX_NAME
    if [ $? = 0 ]; then echo "Finished Algolia index import"; else echo "Algolia index import fail..."; exit 1; fi
    # cache
    mkdir -p $(dirname "${CACHE_PATH}/${ALGOLIA_INDEX}")
    cp $ALGOLIA_INDEX $CACHE_PATH/$ALGOLIA_INDEX
    sha1sum $ALGOLIA_INDEX > "$CACHE_PATH/$ALGOLIA_INDEX.sha1"
  fi
fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
