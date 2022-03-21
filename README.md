# cecil.app

> Source code of <https://cecil.app>, generated with [Cecil](https://github.com/Cecilapp/Cecil) (obviously!) and hosted by [Netlify](https://www.netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/2353ad5a-611d-4236-9542-183fe0d585c7/deploy-status)](https://app.netlify.com/sites/cecilapp/deploys)

## Install

```bash
npm install
curl -LO https://cecil.app/cecil.phar
```

## Development

```bash
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css --watch
php cecil.phar serve -v --config=config/dev.yml
```

## Production

```bash
CECIL_ENV=production npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css
php cecil.phar build
```
