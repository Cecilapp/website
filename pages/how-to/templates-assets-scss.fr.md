---
title: Compiler, minifier et ajouter une empreinte aux fichiers CSS et JavaScript
description: Traiter les fichiers Sass, CSS et JavaScript dans les templates Cecil avec la fonction asset et ses filtres.
path: comment-faire/templates-assets-scss
date: 2026-10-11
updated: 2026-10-16
schedule:
  publish: 2026-10-11
---
Cecil peut compiler des fichiers [Sass](https://sass-lang.com), minifier le CSS et le JavaScript, et ajouter une empreinte du contenu aux noms de fichiers (_cache busting_) directement depuis vos templates, sans outil de build externe.

## Configurer le traitement des assets

Les fichiers sources sont stockés dans le répertoire `assets/`. Le traitement est activé par défaut et peut être ajusté dans `cecil.yml` :

```yaml
assets:
  compile:
    style: compressed                  # `expanded` (par défaut) ou `compressed`
    import: [sass, scss, node_modules] # répertoires d’import (par défaut)
  minify: true                         # minifie le CSS et le JS
  fingerprint: true                    # ajoute l’empreinte du contenu aux noms de fichiers
```

## Charger une feuille de style

Créez un _asset_ à partir d’un fichier Sass et générez l’élément `<link>` avec la fonction `html`. Le fichier Sass est compilé en CSS, puis minifié et doté d’une empreinte selon la configuration :

```twig
{{ html(asset('css/styles.scss')) }}
```

Les filtres peuvent être chaînés pour appliquer chaque étape explicitement, ce qui est utile si une fonctionnalité (comme `minify` ou `fingerprint`) est désactivée globalement :

```twig
{{ asset('css/styles.scss')|to_css|minify|fingerprint }}
```

## Regrouper des fichiers JavaScript

Passez un tableau de chemins pour créer un bundle unique, avec un nom de fichier personnalisé :

```twig
{{ html(asset(['js/menu.js', 'js/search.js'], {filename: 'scripts.js'})) }}
```

Les options peuvent aussi être définies par asset, par exemple pour ne pas minifier un fichier distant déjà minifié :

```twig
{{ html(asset('https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.3.1/anchor.min.js', {minify: false})) }}
```

## Ajouter l’intégrité des sous-ressources

Utilisez la fonction `integrity` (ou l’attribut `integrity` de l’asset) pour générer une empreinte (_hash_) `sha384` :

```twig
{% set styles = asset('css/styles.scss') %}
<link rel="stylesheet" href="{{ url(styles) }}" integrity="{{ integrity(styles) }}" crossorigin="anonymous">
```

## Intégrer le CSS critique

Affichez le contenu d’un asset avec le filtre `inline` :

```twig
<style>{{ asset('css/critical.scss')|to_css|minify|inline }}</style>
```

Pour quelques lignes de styles écrites directement dans le template, utilisez les filtres `scss_to_css` et `minify_css` :

```twig
<style>
{% apply scss_to_css|minify_css %}
  $color: #fcfcfc;
  body {
    background-color: $color;
  }
{% endapply %}
</style>
```

:::info
Consultez la documentation de la [fonction `asset`](/fr/documentation/assets/#asset), de la [fonction `integrity`](/fr/documentation/assets/#integrity), des [filtres de traitement](/fr/documentation/assets/traitements/) et de la [configuration des assets](/fr/documentation/configuration/assets/).
:::
