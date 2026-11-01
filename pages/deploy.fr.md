---
title: Déployer
description: "Déployez votre site Cecil sur des plateformes Jamstack, via le déploiement continu ou sur un hébergement statique."
date: 2020-12-19
updated: 2026-11-01
slug: deployer
alias:
  - documentation/deployer
  - documentation/deployer/plateformes-jamstack
  - documentation/deployer/deploiement-continu
  - documentation/deployer/hebergement-statique
  - documentation/publier
---
Par défaut, votre site statique est généré dans le répertoire **`_site`** et **peut être déployé tel quel**.

Vous trouverez ci-dessous quelques recettes pour automatiser la génération et/ou le déploiement d’un site Cecil. Elles s’appuient sur le script de build et la GitHub Action décrits dans la [documentation de la commande `build`](/fr/documentation/commandes/build/#deploy).

## Plateformes Jamstack

Les plateformes Jamstack peuvent générer et déployer automatiquement votre site Cecil à chaque push dans votre dépôt Git.

Le script de build déduit le contexte de build (`production` ou `preview`) et l’URL de base à partir de la plateforme. Une variable d’environnement `CECIL_ENV` que vous définissez est prioritaire sur le contexte de build déduit.

### Netlify

> Une puissante plateforme serverless avec un flux de travail intuitif basé sur Git. Déploiements automatisés, aperçus partageables, et bien plus encore.

➡️ <https://www.netlify.com>

_netlify.toml_ :

```toml
[build]
  publish = "_site"
  command = "curl -sSOL https://cecil.app/build.sh && bash ./build.sh"
[context.production.environment]
  CECIL_ENV = "production"
[context.deploy-preview.environment]
  CECIL_ENV = "preview"
```

[Documentation officielle](https://docs.netlify.com/build/configure-builds/overview/)

### Vercel

> Vercel associe une excellente expérience développeur à une attention obsessionnelle portée aux performances côté utilisateur final.

➡️ <https://vercel.com>

_vercel.json_ :

```json
{
  "buildCommand": "curl -sSOL https://cecil.app/build.sh && bash ./build.sh",
  "outputDirectory": "_site"
}
```

[Documentation officielle](https://vercel.com/docs/builds/configure-a-build)

### statichost

> Hébergement moderne de sites statiques avec des serveurs européens et absolument aucune collecte de données personnelles !

➡️ <https://statichost.eu>

_statichost.yml_ :

```yml
image: wordpress:cli-php8.4
command: curl -sSOL https://cecil.app/build.sh && bash ./build.sh
public: _site
```

[Documentation officielle](https://www.statichost.eu/docs/)

### Cloudflare Pages

:::info
Cloudflare Pages ne fournit pas PHP : le script de build utilise alors le [binaire autonome](/fr/documentation/bien-demarrer/installation/#standalone-binary) de Cecil, et installe les thèmes à partir de `composer.lock`.

En production (branche `main` ou `master`), le `baseurl` de la configuration du site est utilisé : les déploiements de prévisualisation utilisent leur propre URL.
:::

> Cloudflare Pages est une plateforme Jamstack qui permet aux développeurs frontend de collaborer et de déployer des sites web.

➡️ <https://www.cloudflare.com/products/pages/>

Configuration du build :

- Préréglage de framework : `None`
- Commande de build : `curl -sSOL https://cecil.app/build.sh && bash ./build.sh`
- Répertoire de sortie du build : `_site`

[Documentation officielle](https://developers.cloudflare.com/pages/)

### Render

:::info
Render ne fournit que PHP 7.3 : le script de build utilise alors le [binaire autonome](/fr/documentation/bien-demarrer/installation/#standalone-binary) de Cecil, et installe les thèmes à partir de `composer.lock`.

En production, le `baseurl` de la configuration du site est utilisé : les prévisualisations de pull request utilisent leur propre URL.
:::

> Render est un cloud unifié pour créer et exécuter toutes vos applications et tous vos sites web, avec certificats TLS gratuits, CDN global, réseaux privés et déploiements automatiques depuis Git.

➡️ <https://render.com>

_render.yaml_ :

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

[Documentation officielle](https://render.com/docs/static-sites)

## Génération et déploiement continus

Les services d’intégration continue peuvent générer votre site avec Cecil et le déployer à chaque modification de votre dépôt.

### GitHub Pages

> Des sites web pour vous et vos projets, hébergés directement depuis votre dépôt GitHub. Il suffit de modifier, pousser, et vos changements sont en ligne.

➡️ <https://pages.github.com>

_.github/workflows/build-and-deploy.yml_ :

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

[Documentation officielle](https://docs.github.com/en/pages)

:::tip
Voir aussi : [Déployer sur GitHub Pages avec GitHub Actions](/fr/comment-faire/deploiement-github-pages/).
:::

### GitLab CI

> Avec GitLab Pages, vous pouvez publier des sites web statiques directement depuis un dépôt GitLab.

➡️ <https://about.gitlab.com/solutions/continuous-integration/>

_.gitlab-ci.yml_ :

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

[Documentation officielle](https://docs.gitlab.com/user/project/pages/)

## Hébergement statique

Le site généré peut être envoyé tel quel vers n’importe quel service d’hébergement statique.

### Surge

> Publier des projets web doit être rapide, simple et peu risqué. Surge est un service de publication de sites statiques pour les développeurs frontend, directement depuis la CLI.

➡️ <https://surge.sh>

Terminal :

```bash
npm install -g surge
surge _site/
```

[Documentation officielle](https://surge.sh/help/)
