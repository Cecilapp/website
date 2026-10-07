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

The site is searched client side with the [FlexSearch component theme](https://github.com/Cecilapp/theme-flexsearch) (`cecil/theme-flexsearch`): no service, works offline, in English and French.

Search is configured in `cecil.yml`, under the `flexsearch` key; the indexed sections are listed in the order of the result groups:

```yaml
flexsearch:
  enabled: true # display the search box
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

See the [theme documentation](https://github.com/Cecilapp/theme-flexsearch#configuration) for all the options.

- **Index**: `/flexsearch.json` (and `/fr/flexsearch.json`), generated at build time by the theme.
- **UI**: the search box is included in the header ([`page.html.twig`](layouts/page.html.twig)); its colors and the header trigger button are customized in [`assets/css/search.css`](assets/css/search.css).
