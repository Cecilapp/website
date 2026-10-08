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
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme+org:Cecilapp+fork:true+is:public+archived:false' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-theme-component+org:Cecilapp+fork:true+is:public+archived:false' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/components.json
curl -s -H 'Accept: application/vnd.github.v3+json' 'https://api.github.com/search/repositories?q=topic:cecil-starter+org:Cecilapp+fork:true+is:public+archived:false' | jq '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/starterkits.json
```

## Search

The site is searched client side with [FlexSearch](https://github.com/nextapps-de/flexsearch): no service, works offline, in English and French.

Search is configured in `cecil.yml`, under the `search` key; the indexed sections are listed in the order of the result groups:

```yaml
search:
  enabled: true # display the search box
  flexsearch:
    version: '0.8.212' # FlexSearch library version, loaded from jsDelivr
    tokenize: forward
    encoder: Normalize
    fields:
      title: 9
      page: 7
      description: 5
      content: 3
  sections:
    documentation:
      limit: 5 # maximum number of results in the group
    how-to:
      limit: 3
      split: false # one record per post, not one per heading
    news:
      limit: 3
      split: false
      date: true
```

FlexSearch options (`search.flexsearch`):

| Option       | Default     | Description                                                                          |
| ------------ | ----------- | ------------------------------------------------------------------------------------ |
| `version`    | `0.8.212`   | FlexSearch library version, loaded from jsDelivr                                     |
| `tokenize`   | `forward`   | tokenizer: `strict`, `forward`, `reverse` or `full`                                  |
| `encoder`    | `Normalize` | `FlexSearch.Charset` encoder: `Exact`, `Normalize`, `LatinBalance`, `LatinAdvanced`… |
| `fields`     | see above   | indexed fields and their resolution, from `1` to `9` (`0` to not index the field)    |
| `suggest`    | `true`      | fall back to fuzzy matching when nothing matches strictly                            |
| `min_length` | `1`         | minimum length of the query to start searching                                       |
| `delay`      | `120`       | delay (ms) after typing before searching                                             |
| `boundary`   | `160`       | maximum length of a highlighted snippet                                              |
| `snippet`    | `180`       | maximum length of a non highlighted snippet                                          |

Section options:

| Option   | Default | Description                                                            |
| -------- | ------- | ---------------------------------------------------------------------- |
| `limit`  | `5`     | maximum number of results displayed in the group                       |
| `split`  | `true`  | one record per `<h2>`/`<h3>` heading, or a single record per page      |
| `date`   | `false` | add the page date to its records (displayed instead of the breadcrumb) |
| `length` | `1000`  | maximum length of the indexed text of an unsplit page                  |

- **Index**: `/search.json` (and `/fr/search.json`), generated at build time by [`list.flexsearch.twig`](layouts/list.flexsearch.twig) from [`partials/search-index.json.twig`](layouts/partials/search-index.json.twig). The root page of each section is skipped; split pages are cut on their `<h2>` and `<h3>` headings, and their introduction is indexed under the page title.
- **UI**: icon button or `Ctrl`/`⌘` + `K` opening a modal, fullscreen on mobile ([`partials/search-flexsearch.html.twig`](layouts/partials/search-flexsearch.html.twig)). Results are grouped by section, each section having its own index, so a group is ranked and limited on its own.
