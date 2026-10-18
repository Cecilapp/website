---
title: Appliquer les fonctionnalités SEO dans les templates
description: Ajouter les fonctionnalités SEO de Cecil aux templates avec le partial metatags.
path: comment-faire/templates-metatags
date: 2026-06-09
updated: 2026-10-18
---
Cecil expose ses fonctionnalités SEO via le template `partials/metatags.html.twig`. Il suffit de l’inclure dans le `<head>` du template de base pour que chaque page bénéficie automatiquement **du titre, des balises meta, des liens canoniques et des cartes sociales**. Les données structurées (JSON-LD) peuvent aussi être ajoutées, en passant l’option `metatags.data` à `true`.

```twig
<html lang="{{ site.language }}">
  <head>
    <meta charset="utf-8">
    {{ include('partials/metatags.html.twig') }}
  </head>
  <body>
    ...
  </body>
</html>
```

:::important
Le partial génère déjà l’élément `<title>` : n’ajoutez pas le vôtre.
:::

Le partial lit d’abord le front matter de la page, puis reprend la configuration du site si nécessaire. Consultez la [documentation de configuration des metatags](/fr/documentation/configuration/site/#metatags) pour voir toutes les options disponibles.

Si vous devez surcharger le titre ou l’image par défaut, passez des valeurs directement au partial (`image` accepte un chemin de fichier ou un asset) :

```twig
{{ include('partials/metatags.html.twig', {title: 'Custom title', image: 'images/social-card.png'}) }}
```
