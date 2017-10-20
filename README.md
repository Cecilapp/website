Source code of https://phpoole.org, generated with [PHPoole-library](https://github.com/PHPoole/PHPoole-library).

The website is automatically built and deployed through [Travis CI](https://travis-ci.org/PHPoole/phpoole.github.io).

[![Build Status](https://travis-ci.org/PHPoole/phpoole.github.io.svg?branch=master)](https://travis-ci.org/PHPoole/phpoole.github.io)

## Install, build & deploy
```bash
composer install
php build.php -e=prod
export GH_TOKEN=GITHUB_TOKEN
sh deploy.sh
```

## Build & run locally
```bash
php build.php -e=dev
```
