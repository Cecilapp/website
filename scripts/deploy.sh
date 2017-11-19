#!/bin/bash
set -e

REPO="PHPoole/phpoole.github.io"
SOURCE_BRANCH="source"
TARGET_BRANCH="master"
SITE_DIR="_site"

echo "Starting to update GitHub pages..."

cp -R $SITE_DIR $HOME/$SITE_DIR
cd $HOME
git config --global user.name "Travis"
git config --global user.email "contact@travis-ci.org"
git clone --quiet --branch=$TARGET_BRANCH https://${GH_TOKEN}@github.com/${REPO}.git gh-pages > /dev/null
cp -R gh-pages/.git $HOME/.git
rm -rf gh-pages/*
cp -R $HOME/.git gh-pages/.git
cd gh-pages
cp -Rf $HOME/$SITE_DIR/* .
git add -Af .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to $TARGET_BRANCH"
git push -fq origin $TARGET_BRANCH > /dev/null
exit 0
