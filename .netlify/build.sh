CECIL_PHAR_URL=https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
CACHE_PATH=/opt/build/cache
CSS_INPUT=static/tailwind.css
CSS_OUPUT=static/styles.css
ALGOLIA_INDEX=_site/algolia.json


echo "Downloading Cecil"
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

# Build CSS
build_css=1
if [ -f $CACHE_PATH/$CSS_OUPUT ]; then
  cp $CACHE_PATH/$CSS_OUPUT $CSS_OUPUT
  sha1sum -c "$CACHE_PATH/$CSS_OUPUT.sha1" --status
  build_css=$?
fi;
if [ $build_css = 1 ]; then
  echo "Started CSS build"
  npm install tailwindcss --silent
  npm install @tailwindcss/typography --silent
  npx tailwindcss-cli build $CSS_INPUT -o $CSS_OUPUT
  mkdir -p $(dirname "${CACHE_PATH}/${CSS_OUPUT}")
  cp $CSS_OUPUT $CACHE_PATH/$CSS_OUPUT
  sha1sum $CSS_OUPUT > "$CACHE_PATH/$CSS_OUPUT.sha1"
  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
fi

echo "Started Cecil build"
if [[ $1 == "preview" ]]; then
  php cecil.phar build -v --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; };
else
  php cecil.phar build -v --baseurl=$URL --postprocess;
fi
if [ $? = 0 ]; then echo "Finished Cecil build"; else echo "Cecil build fail..."; exit 1; fi

# Import Algolia index
import_index=1
if [ -f $CACHE_PATH/$ALGOLIA_INDEX ]; then
  cp $CACHE_PATH/$ALGOLIA_INDEX $ALGOLIA_INDEX
  sha1sum -c "$CACHE_PATH/$ALGOLIA_INDEX.sha1" --status
  import_index=$?
fi;
if [ $import_index = 1 ]; then
  echo "Started Algolia index import"
  npm install -g @algolia/cli
  algolia import -s _site/algolia.json -a $ALGOLIA_APP_ID -k $ALGOLIA_APP_KEY -n $ALGOLIA_INDEX_NAME
  mkdir -p $(dirname "${CACHE_PATH}/${ALGOLIA_INDEX}")
  cp $ALGOLIA_INDEX $CACHE_PATH/$ALGOLIA_INDEX
  sha1sum $ALGOLIA_INDEX > "$CACHE_PATH/$ALGOLIA_INDEX.sha1"
  if [ $? = 0 ]; then echo "Finished Algolia index import"; else echo "Algolia index import fail..."; exit 1; fi
fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
