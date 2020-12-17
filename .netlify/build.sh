CECIL_PHAR_URL=https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
CSS_INPUT=./static/tailwind.css
CSS_OUPUT=./static/styles.css
CACHE_PATH=/opt/build/cache

echo "Downloading Cecil"
curl -sSOL $CECIL_PHAR_URL
php cecil.phar --version

if [ -f $CACHE_PATH/hash/css.sha1 ]; then
  sha1sum -c $CACHE_PATH/hash/css.sha1 --status
fi;
if [ $? = 0 ]; then
  echo "Started CSS build"
  npm install tailwindcss --silent
  npm install @tailwindcss/typography --silent
  npx tailwindcss-cli build $CSS_INPUT -o $CSS_OUPUT
  sha1sum $CSS_OUPUT > $CACHE_PATH/hash/css.sha1
  if [ $? = 0 ]; then echo "Finished CSS build"; else echo "CSS build fail..."; exit 1; fi
fi

echo "Started Cecil build"
if [[ $1 == "preview" ]]; then
  php cecil.phar build -v --baseurl=$DEPLOY_PRIME_URL --drafts || { sleep 30; false; };
else
  php cecil.phar build -v --baseurl=$URL --postprocess;
fi
if [ $? = 0 ]; then echo "Finished Cecil build"; else echo "Cecil build fail..."; exit 1; fi

echo "Started Algolia index import"
npm install -g @algolia/cli
algolia import -s _site/algolia.json -a $ALGOLIA_APP_ID -k $ALGOLIA_APP_KEY -n $ALGOLIA_INDEX_NAME
if [ $? = 0 ]; then echo "Finished Algolia index import"; else echo "Algolia index import fail..."; exit 1; fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished build"; exit 0; fi

echo "Interrupted build"; exit 1
