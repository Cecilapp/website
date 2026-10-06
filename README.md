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

### Fetch themes, components and starters data

Data are fetched from the GitHub API (requires [jq](https://jqlang.org)):

```bash
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme-component+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/components.json
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-starter+org:Cecilapp+fork:true' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/starterkits.json
```

## Search

The documentation search engine is selected in `cecil.yml`:

```yaml
search:
  engine: flexsearch # 'algolia' (hosted) or 'flexsearch' (client side)
```

The search box is displayed in the header by [`partials/search-box.html.twig`](layouts/partials/search-box.html.twig), which dispatches to the configured engine.

|           | `flexsearch` (current)                                                                                                                                          | `algolia`                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Index     | `/search.json`, served as a static file                                                                                                                         | `/algolia.json`, pushed by the `netlify-plugin-refresh-algolia` Netlify plugin                         |
| Query     | in the browser, works offline                                                                                                                                   | Algolia API (network required)                                                                         |
| UI        | icon button or `Ctrl`/`⌘` + `K` opening a modal, fullscreen on mobile ([`partials/search-flexsearch.html.twig`](layouts/partials/search-flexsearch.html.twig)) | inline autocomplete ([`partials/search-algolia.html.twig`](layouts/partials/search-algolia.html.twig)) |
| Languages | English and French                                                                                                                                              | English only (`algolia.enabled: false` in the French config)                                           |

Both indexes are generated at build time by [`list.flexsearch.twig`](layouts/list.flexsearch.twig) and [`list.algolia.twig`](layouts/list.algolia.twig), which share the same extraction logic ([`partials/search-index.json.twig`](layouts/partials/search-index.json.twig)): every documentation page (sub-sections included) is split on its `<h2>` and `<h3>` headings, and its introduction is indexed under the page title.

As long as `flexsearch` is used, the `netlify-plugin-refresh-algolia` plugin and the `algolia` output format can be removed from `netlify.toml` and `cecil.yml`.
