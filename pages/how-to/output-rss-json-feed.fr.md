---
title: Publier un flux RSS ou JSON
description: Publier des flux RSS, Atom ou JSON de votre site Cecil avec les formats de sortie et les templates intégrés.
path: comment-faire/sortie-flux-rss-json
date: 2026-10-06
updated: 2026-10-16
schedule:
  publish: 2026-10-06
---
Cecil génère les flux grâce aux **formats de sortie** : par défaut, la page d’accueil, les sections et les termes de taxonomie sont déjà publiés en HTML **et en Atom** (par exemple `/atom.xml`, `/blog/atom.xml`). Ajoutez les formats `rss` ou `jsonfeed` pour publier aussi des fichiers RSS 2.0 ou [JSON Feed](https://www.jsonfeed.org).

## Activer les flux pour toutes les pages de liste

Définissez les formats appliqués à chaque type de page avec `output.pagetypeformats` :

```yaml
output:
  pagetypeformats:
    homepage: [html, atom, rss, jsonfeed]
    section: [html, atom, rss, jsonfeed]
```

Cecil génère alors `rss.xml` et `feed.json` à côté de chaque `index.html` de la page d’accueil et des sections (par exemple `/blog/rss.xml`, `/blog/feed.json`).

:::info
Les formats sont remplacés, pas fusionnés : conservez `html` dans la liste. Voir [`output.pagetypeformats`](/fr/documentation/configuration/sortie/#output-pagetypeformats) et la liste des [formats par défaut](/fr/documentation/configuration/sortie/#formats-par-defaut).
:::

## Activer un flux pour une seule section

Pour publier un flux pour une seule section, utilisez la variable [`output`](/fr/documentation/contenu/front-matter/#output) dans le front matter de la page d’index de la section. Comme elle remplace les formats par défaut de la section, conservez `atom` dans la liste pour garder le flux Atom :

```yaml
---
title: Blog
output: [html, atom, rss]
---
```

## Signaler le flux

Si vos templates incluent le [partial metatags](/fr/comment-faire/templates-metatags/) (voir la [configuration `metatags`](/fr/documentation/configuration/site/#metatags)), les balises `<link rel="alternate">` pointant vers les flux de la page courante sont ajoutées automatiquement dans le `<head>`.

Sinon, ajoutez le lien vous-même avec la fonction `url()` et son option `format` :

```twig
<link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ url(page, {canonical: true, format: 'rss'}) }}">
```

## Personnaliser le template du flux

Les flux sont générés par les [templates intégrés](/fr/documentation/templates/regles-de-recherche/#templates-integres) `_default/list.rss.twig`, `_default/list.atom.twig` et `_default/list.jsonfeed.twig`. Selon les [règles de recherche](/fr/documentation/templates/regles-de-recherche/#regles-de-recherche), créez `layouts/list.rss.twig` (page d’accueil et sections) ou `layouts/blog/list.rss.twig` (section `blog` uniquement) pour les surcharger.

Vous pouvez étendre le template intégré et redéfinir uniquement le bloc `item`, par exemple pour publier un extrait plutôt que le contenu complet :

```twig
{% extends '_default/list.rss.twig' %}

{% block item %}
      <guid>{{ url(item, {canonical: true}) }}</guid>
      <title>{{ item.title|e }}</title>
      <pubDate>{{ item.date|date('r') }}</pubDate>
      <link>{{ url(item, {canonical: true}) }}</link>
      <description><![CDATA[{{ item.content|excerpt_html }}]]></description>
{% endblock %}
```

:::tip
Définissez [`baseurl`](/fr/documentation/configuration/site/#baseurl) dans `cecil.yml` : les flux utilisent des URL absolues.

Le flux RSS peut aussi être mis en forme dans les navigateurs en activant la [page par défaut](/fr/documentation/configuration/pages/#pages-default) `xsl/rss` :

```yaml
pages:
  default:
    xsl/rss:
      published: true
```

:::
