#!/bin/bash -e

echo "Downloading Cecil"
curl -sSOL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
php cecil.phar --version

echo "Started Cecil build"
if [ -z "$1" ]; then
  php cecil.phar build -v --postprocess;
else
  echo "URL: $1" && php cecil.phar build -v --baseurl=$1 --drafts || { sleep 30; false; };
fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished Cecil build"; exit 0; fi

echo "Interrupted Cecil build"; exit 1
