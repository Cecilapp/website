---
title: Programmer la publication d’une page
description: Publier ou dépublier une page Cecil à une date donnée avec la variable de front matter schedule.
path: comment-faire/content-schedule
date: 2026-10-17
schedule:
  publish: 2026-10-17
---
Avec la variable `schedule`, une page peut être rédigée à l’avance et publiée plus tard, ou retirée du site après une date donnée.

## Publier une page à une date

La page n’est publiée que si la date du build est égale ou postérieure à la date `publish` :

```yaml
---
title: Lancement du produit
schedule:
  publish: 2026-11-15
---
```

## Dépublier une page après une date

La page n’est publiée que si la date du build est égale ou antérieure à la date `expiry` :

```yaml
---
title: Soldes d’été
schedule:
  expiry: 2026-08-31
---
```

:::warning
Utilisez `publish` **ou** `expiry` dans une page, pas les deux : la page est publiée dès que l’une des deux conditions est remplie.
:::

## Reconstruire le site régulièrement

Un site statique ne change pas tout seul : la programmation est évaluée **au moment du build**. Une page prévue pour le 15 novembre n’apparaîtra qu’après un build exécuté à cette date ou après.

Pour l’automatiser, reconstruisez le site chaque jour. Par exemple, avec [GitHub Pages](/documentation/deploy/#github-pages), ajoutez un déclencheur `schedule` à la section `on` de votre workflow :

```yaml
# .github/workflows/build-and-deploy.yml
on:
  push:
    branches: [master, main]
  schedule:
    - cron: '0 6 * * *' # tous les jours à 6h00 UTC
  workflow_dispatch:
```

La plupart des plateformes Jamstack proposent une fonctionnalité similaire (builds programmés ou build hooks déclenchés par une tâche cron).

:::tip
Pour vérifier le résultat en local, lancez `php cecil.phar build --show-pages` et cherchez votre page dans la liste des pages générées.
:::

:::info
Consultez la documentation de la [variable `schedule`](/documentation/content/#schedule) et du [déploiement continu](/documentation/deploy/#github-pages).
:::
