<!--
title: "Deploy"
description: "Deploy your Cecil site to Jamstack platforms, through continuous deployment or to a static hosting service."
date: 2020-12-19
updated: 2026-11-01
weight: 7
alias:
  - documentation/publish
  - documentation/deploy/jamstack-platforms
  - documentation/deploy/continuous-deployment
  - documentation/deploy/static-hosting
-->
# Deploy

By default, your static site is built in the **`_site`** directory, and **can be deployed as is**.

Below are some recipes to automate the build and/or the deployment of a Cecil site. They rely on the build script and the GitHub Action described in the [`build` command documentation](/documentation/commands/build/#deploy).

## Jamstack platforms

Jamstack platforms can build and deploy your Cecil site automatically on each push to your Git repository.

The build script deduces the build context (`production` or `preview`) and the base URL from the platform. A `CECIL_ENV` environment variable you define takes precedence over the deduced build context.

### Netlify

> A powerful serverless platform with an intuitive git-based workflow. Automated deployments, shareable previews, and much more.

➡️ <https://www.netlify.com>

_netlify.toml_:

```toml
[build]
  publish = "_site"
  command = "curl -sSOL https://cecil.app/build.sh && bash ./build.sh"
[context.production.environment]
  CECIL_ENV = "production"
[context.deploy-preview.environment]
  CECIL_ENV = "preview"
```

[Official documentation](https://docs.netlify.com/build/configure-builds/overview/)

### Vercel

> Vercel combines the best developer experience with an obsessive focus on end-user performance.

➡️ <https://vercel.com>

_vercel.json_:

```json
{
  "buildCommand": "curl -sSOL https://cecil.app/build.sh && bash ./build.sh",
  "outputDirectory": "_site"
}
```

[Official documentation](https://vercel.com/docs/builds/configure-a-build)

### statichost

> Modern static site hosting with European servers and absolutely no personal data collection!

➡️ <https://statichost.eu>

_statichost.yml_:

```yml
image: wordpress:cli-php8.4
command: curl -sSOL https://cecil.app/build.sh && bash ./build.sh
public: _site
```

[Official documentation](https://www.statichost.eu/docs/)

### Cloudflare Pages

:::info
Cloudflare Pages doesn’t provide PHP: the build script uses the Cecil [standalone binary](/documentation/getting-started/installation/#standalone-binary) instead, and installs themes from `composer.lock`.

In production (`main` or `master` branch), the `baseurl` of the site configuration is used: preview deployments use their own URL.
:::

> Cloudflare Pages is a Jamstack platform for frontend developers to collaborate and deploy websites.

➡️ <https://www.cloudflare.com/products/pages/>

Build configurations:

- Framework preset: `None`
- Build command: `curl -sSOL https://cecil.app/build.sh && bash ./build.sh`
- Build output directory: `_site`

[Official documentation](https://developers.cloudflare.com/pages/)

### Render

:::info
Render only provides PHP 7.3: the build script uses the Cecil [standalone binary](/documentation/getting-started/installation/#standalone-binary) instead, and installs themes from `composer.lock`.

In production, the `baseurl` of the site configuration is used: pull request previews use their own URL.
:::

> Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.

➡️ <https://render.com>

_render.yaml_:

```yml
services:
  - type: web
    runtime: static
    name: Cecil
    buildCommand: curl -sSOL https://cecil.app/build.sh && bash ./build.sh
    staticPublishPath: ./_site
    autoDeployTrigger: commit
    previews:
      generation: automatic
```

[Official documentation](https://render.com/docs/static-sites)

## Continuous build & deploy

Continuous integration services can build your site with Cecil and deploy it on each change to your repository.

### GitHub Pages

> Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.

➡️ <https://pages.github.com>

_.github/workflows/build-and-deploy.yml_:

```yml
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
        uses: actions/checkout@v7
      - name: Restore Cecil cache
        uses: actions/cache/restore@v6
        with:
          path: ./.cache
          key: cecil-cache-
          restore-keys: |
            cecil-cache-
      - name: Build site
        uses: Cecilapp/Cecil-Action@v4
      - name: Save Cecil cache
        uses: actions/cache/save@v6
        with:
          path: ./.cache
          key: cecil-cache-${{ hashFiles('./.cache/**/*') }}
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

[Official documentation](https://docs.github.com/en/pages)

:::tip
See also: [Deploy to GitHub Pages with GitHub Actions](/how-to/deploy-github-pages/).
:::

### GitLab CI

> With GitLab Pages, you can publish static websites directly from a repository in GitLab.

➡️ <https://about.gitlab.com/solutions/continuous-integration/>

_.gitlab-ci.yml_:

```yml
image: wordpress:cli-php8.4
test:
  stage: test
  variables:
    CECIL_OUTPUT_DIR: test
  script:
    - curl -sSOL https://cecil.app/build.sh && bash ./build.sh
  artifacts:
    paths:
      - test
  rules:
    - if: $CI_COMMIT_BRANCH != $CI_DEFAULT_BRANCH
pages:
  stage: deploy
  variables:
    CECIL_ENV: production
    CECIL_OUTPUT_DIR: public
  script:
    - curl -sSOL https://cecil.app/build.sh && bash ./build.sh
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
cache:
  paths:
    - composer-cache/
    - vendor/
    - .cache/
```

[Official documentation](https://docs.gitlab.com/user/project/pages/)

## Static hosting

The built site can be uploaded as is to any static hosting service.

### Surge

> Shipping web projects should be fast, easy, and low risk. Surge is static web publishing for Front-End Developers, right from the CLI.

➡️ <https://surge.sh>

Terminal:

```bash
npm install -g surge
surge _site/
```

[Official documentation](https://surge.sh/help/)
