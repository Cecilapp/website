---
title: Deploy to GitHub Pages with GitHub Actions
description: Build and deploy a Cecil site to GitHub Pages automatically with the Cecil GitHub Action.
date: 2026-10-07
schedule:
  publish: 2026-10-07
---
With the [Cecil Action](https://github.com/Cecilapp/Cecil-Action), every push to your repository builds the site and publishes it to **GitHub Pages**, with no server to manage.

## Enable GitHub Pages

In your repository, go to **Settings** → **Pages** and, under **Build and deployment**, set **Source** to **GitHub Actions**.

## Add the workflow

Create the file `.github/workflows/build-and-deploy.yml`:

```yaml
name: Build and deploy to GitHub Pages
on:
  push:
    branches: [master, main]
  workflow_dispatch:
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout source
        uses: actions/checkout@v6
      - name: Build site
        uses: Cecilapp/Cecil-Action@v4
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

The `build` job downloads Cecil, installs themes (if a `composer.json` file exists), builds the site and uploads the output directory as a Pages artifact. The `deploy` job then publishes it.

## Base URL

You don’t need to change `baseurl` in `cecil.yml`: the action builds the site with the URL provided by GitHub Pages (e.g. `https://<user>.github.io/<repository>/`), using the `--baseurl` option.

## Customize the build

The action accepts the following optional inputs:

```yaml
      - name: Build site
        uses: Cecilapp/Cecil-Action@v4
        with:
          version: '9.6.2'       # Cecil version (latest by default)
          install_themes: 'no'   # skip themes installation (`yes` by default)
          options: '-v --drafts' # build command options (`-v` by default)
```

:::tip
To speed up builds, you can also restore and save the `.cache` directory between runs: see the full workflow in the [GitHub Pages deployment documentation](/documentation/deploy/#github-pages), and the list of [build options](/documentation/commands/#build).
:::
