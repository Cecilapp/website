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
vendor/bin/tailwind-builder assets/css/tailwind.css -o assets/styles.css --watch
php cecil.phar serve -v --config=config/dev.yml
```

### Build for production

```bash
vendor/bin/tailwind-builder assets/css/tailwind.css -o assets/styles.css --minify
php cecil.phar build
```

### Build CSS

```bash
composer run css:build
```

### Build translations

French strings live in `translations/messages.fr.po` (edited with Poedit). The
compiled `.mo` can be regenerated without gettext tools:

```bash
composer run i18n:build
```

## Search

The documentation search engine is selected in `cecil.yml`:

```yaml
search:
  engine: algolia # 'algolia' (hosted) or 'flexsearch' (client side)
```

|           | `algolia`                                                                                              | `flexsearch`                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Index     | `/algolia.json`, pushed by the `netlify-plugin-refresh-algolia` Netlify plugin                         | `/search.json`, served as a static file                                                                          |
| Query     | Algolia API (network required)                                                                         | in the browser, works offline                                                                                    |
| UI        | inline autocomplete ([`partials/search-algolia.html.twig`](layouts/partials/search-algolia.html.twig)) | `Ctrl`/`⌘` + `K` modal ([`partials/search-flexsearch.html.twig`](layouts/partials/search-flexsearch.html.twig)) |
| Languages | English only (`algolia.enabled: false` in the French config)                                           | English and French                                                                                               |

Both indexes are generated at build time from the documentation sections (`<h3>` blocks) by [`list.algolia.twig`](layouts/list.algolia.twig) and [`list.flexsearch.twig`](layouts/list.flexsearch.twig).

When switching to `flexsearch`, the `netlify-plugin-refresh-algolia` plugin and the `algolia` output format can be removed from `netlify.toml` and `cecil.yml`.
