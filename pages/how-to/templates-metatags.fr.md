---
title: Appliquer les fonctionnalités SEO dans les templates
description: Ajouter les fonctionnalités SEO de Cecil aux templates avec le partial metatags.
path: comment-faire/templates-metatags
date: 2026-06-09
---
Cecil expose sa feature SEO via le template `partials/metatags.html.twig`. Il suffit de l’inclure dans le `<head>` du template de base pour que chaque page bénéficie automatiquement **des balises meta, des liens canoniques, des cartes sociales et des données structurées**.

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

Le partial lit d’abord le front matter de la page, puis reprend les options du site si nécessaire. Consultez la [documentation de configuration des metatags](/documentation/configuration/#metatags) pour voir toutes les options disponibles.

Si vous devez surcharger le titre ou l’image, passez des valeurs directement au partial :

```twig
{{ include('partials/metatags.html.twig', {title: 'Custom title', image: og_image}) }}
```
