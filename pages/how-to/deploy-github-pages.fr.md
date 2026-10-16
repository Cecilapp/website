---
title: Déployer sur GitHub Pages avec GitHub Actions
description: Générer et déployer automatiquement un site Cecil sur GitHub Pages avec la GitHub Action de Cecil.
path: comment-faire/deploiement-github-pages
date: 2026-10-07
schedule:
  publish: 2026-10-07
---
Avec la [Cecil Action](https://github.com/Cecilapp/Cecil-Action), chaque push sur votre dépôt génère le site et le publie sur **GitHub Pages**, sans serveur à gérer.

## Activer GitHub Pages

Dans votre dépôt, allez dans **Settings** → **Pages** puis, dans **Build and deployment**, choisissez **GitHub Actions** comme **Source**.

## Ajouter le workflow

Créez le fichier `.github/workflows/build-and-deploy.yml` :

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

Le job `build` télécharge Cecil, installe les thèmes (si un fichier `composer.json` existe), génère le site et envoie le répertoire de sortie en tant qu’artefact Pages. Le job `deploy` le publie ensuite.

## URL de base

Inutile de modifier `baseurl` dans `cecil.yml` : l’action génère le site avec l’URL fournie par GitHub Pages (par exemple `https://<user>.github.io/<repository>/`), via l’option `--baseurl`.

## Personnaliser la génération

L’action accepte les paramètres optionnels suivants :

```yaml
      - name: Build site
        uses: Cecilapp/Cecil-Action@v4
        with:
          version: '9.6.2'       # version de Cecil (la dernière par défaut)
          install_themes: 'no'   # ne pas installer les thèmes (`yes` par défaut)
          options: '-v --drafts' # options de la commande build (`-v` par défaut)
```

:::tip
Pour accélérer la génération, vous pouvez aussi restaurer et sauvegarder le répertoire `.cache` entre deux exécutions : consultez le workflow complet dans la [documentation du déploiement sur GitHub Pages](/documentation/deploy/#github-pages), ainsi que la liste des [options de build](/documentation/commands/#build).
:::
