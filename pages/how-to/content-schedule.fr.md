---
title: Programmer la publication d’une page
description: Publier ou dépublier une page Cecil à une date donnée avec la variable de front matter schedule.
path: comment-faire/contenu-programmation
date: 2026-10-17
updated: 2026-10-18
schedule:
  publish: 2026-10-17
---
Avec la variable `schedule`, une page peut être rédigée à l’avance et publiée plus tard, ou retirée du site après une date donnée.

## Publier une page à une date

La page n’est publiée que si la date de génération est égale ou postérieure à la date `publish` :

```yaml
---
title: Lancement du produit
schedule:
  publish: 2026-11-15
---
```

## Dépublier une page après une date

La page n’est publiée que si la date de génération est antérieure à la date `expiry`. Une date sans heure correspondant à minuit, la page est déjà dépubliée le jour même de l’expiration (ajoutez une heure, par exemple `2026-08-31 23:59:59`, pour la conserver ce jour-là) :

```yaml
---
title: Soldes d’été
schedule:
  expiry: 2026-08-31
---
```

## Publier une page entre deux dates

Combinez les deux dates : la page est publiée uniquement si la date `publish` est atteinte **et** que la date `expiry` n’est pas dépassée :

```yaml
---
title: Black Friday
schedule:
  publish: 2026-11-27
  expiry: 2026-12-01
---
```

## Régénérer le site régulièrement

Un site statique ne change pas tout seul : la programmation est évaluée **au moment de la génération**. Une page prévue pour le 15 novembre n’apparaîtra qu’après une génération lancée à partir de cette date.

Pour l’automatiser, régénérez le site chaque jour. Par exemple, avec [GitHub Pages](/fr/documentation/deployer/deploiement-continu/#github-pages), ajoutez un déclencheur `schedule` à la section `on` de votre workflow :

```yaml
# .github/workflows/build-and-deploy.yml
on:
  push:
    branches: [master, main]
  schedule:
    - cron: '0 6 * * *' # tous les jours à 6h00 UTC
  workflow_dispatch:
```

Sur les dépôts publics, GitHub désactive les workflows programmés après 60 jours sans activité sur le dépôt.

La plupart des plateformes Jamstack proposent une fonctionnalité similaire (générations programmées ou _build hooks_ déclenchés par une tâche cron).

:::tip
Pour vérifier le résultat en local, lancez `php cecil.phar build --show-pages` et cherchez votre page dans la liste des pages générées.
:::

:::info
Consultez la documentation de la [variable `schedule`](/fr/documentation/contenu/front-matter/#planification) et du [déploiement continu](/fr/documentation/deployer/deploiement-continu/#github-pages).
:::
