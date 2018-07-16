# phpoole.org [![Build Status](https://travis-ci.org/PHPoole/phpoole.github.io.svg?branch=master)](https://travis-ci.org/PHPoole/phpoole.github.io)

> Source code of https://phpoole.org, generated with [PHPoole](https://github.com/PHPoole/) (obviously!), automatically built and deployed through [Travis CI](https://travis-ci.org/PHPoole/phpoole.github.io).

## Install, build & deploy

```bash
composer install
php scripts/build.php -e=prod
export GH_TOKEN=GITHUB_TOKEN
sh scripts/deploy.sh
```

## Build & run locally

```bash
php scripts/build.php -e=dev
```
