# cecil.app

Source code of [cecil.app](https://cecil.app) website, generated with [Cecil](https://github.com/Cecilapp/Cecil) (obviously) and hosted by [Netlify](https://www.netlify.com).

> [!IMPORTANT]
> **Archive branch.** This branch keeps the last state of the website supporting the [Algolia](https://www.algolia.com) search engine, which has been removed from `master` in favor of [FlexSearch](https://github.com/nextapps-de/flexsearch) (client side). It is not deployed and not maintained. See [Search > Algolia (archive)](#algolia-archive) to bring it back.

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

### Algolia (archive)

The Algolia integration is made of:

| File                                                                                   | Role                                                                                     |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`layouts/list.algolia.twig`](layouts/list.algolia.twig)                               | renders the `algolia` output format of the home page (`/algolia.json`)                   |
| [`layouts/partials/search-algolia.html.twig`](layouts/partials/search-algolia.html.twig) | search box: Algolia client and Autocomplete.js, loaded from jsDelivr                     |
| [`assets/css/algolia.css`](assets/css/algolia.css)                                     | Autocomplete styles, imported by `assets/css/tailwind.css`                               |
| [`static/images/search-by-algolia.svg`](static/images/search-by-algolia.svg)           | "Search by Algolia" logo, displayed in the results footer                                |
| `cecil.yml`                                                                            | `algolia` section (application ID, search-only API key, index name), `algolia` output format, disabled in French (`algolia.enabled: false`) |
| `netlify.toml` / `package.json`                                                        | `netlify-plugin-refresh-algolia` plugin, pushing `_site/algolia.json` to the `documentation` index on production deploys |

To bring it back on `master`:

1. restore the files above from this branch: `git checkout archive/algolia-search -- layouts/list.algolia.twig layouts/partials/search-algolia.html.twig assets/css/algolia.css static/images/search-by-algolia.svg`
2. re-add the `algolia` section, output format and home page format in `cecil.yml`, the `@import './algolia.css';` line in `assets/css/tailwind.css`, then rebuild the CSS (`composer css:build`)
3. re-add the `netlify-plugin-refresh-algolia` plugin (`npm i -D netlify-plugin-refresh-algolia`, and its `[[context.production.plugins]]` block in `netlify.toml`), with the Algolia admin API key it expects set in the Netlify environment variables
4. restore the dispatch on `search.engine` in `partials/search-box.html.twig`, and set `search.engine: algolia`
