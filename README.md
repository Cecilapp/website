# cecil.app

Source code of [cecil.app](https://cecil.app) website, generated with [Cecil](https://github.com/Cecilapp/Cecil) (obviously) and hosted by [Netlify](https://www.netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/2353ad5a-611d-4236-9542-183fe0d585c7/deploy-status)](https://app.netlify.com/sites/cecilapp/deploys)

## Install

Download Cecil

```bash
curl -LO https://cecil.app/cecil.phar
```

Install dependencies

```bash
composer install
npm install
```

## Usage

### Contribute to the documentation

The documentation is available in `docs` at [github.com/Cecilapp/Cecil](https://github.com/Cecilapp/Cecil/).

### Create a _news_ entry

```bash
php cecil.phar new:page --name=news/cecil-X.Y.0-released --prefix
```

### Preview locally

```bash
npx @tailwindcss/cli -i ./tailwind.css -o ./assets/styles.css --watch
php cecil.phar serve -v --config=config/dev.yml
```

### Build for production

```bash
CECIL_ENV=production npx @tailwindcss/cli -i ./tailwind.css -o ./assets/styles.css
php cecil.phar build
```
