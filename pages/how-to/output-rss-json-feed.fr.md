---
title: Publier un flux RSS ou JSON
description: Publier des flux RSS, Atom ou JSON de votre site Cecil avec les formats de sortie et les templates intégrés.
path: comment-faire/output-rss-json-feed
date: 2026-10-06
schedule:
  publish: 2026-10-06
---
Cecil génère les flux grâce aux **formats de sortie** : par défaut, la page d’accueil, les sections et les termes de taxonomie sont déjà publiés en HTML **et en Atom** (ex. `/atom.xml`, `/blog/atom.xml`). Ajoutez les formats `rss` ou `jsonfeed` pour publier aussi des fichiers RSS 2.0 ou [JSON Feed](https://www.jsonfeed.org).

## Activer les flux pour toutes les pages de liste

Définissez les formats appliqués à chaque type de page avec `output.pagetypeformats` :

```yaml
output:
  pagetypeformats:
    homepage: [html, atom, rss, jsonfeed]
    section: [html, atom, rss, jsonfeed]
```

Cecil génère alors `rss.xml` et `feed.json` à côté de chaque `index.html` de la page d’accueil et des sections (ex. `/blog/rss.xml`, `/blog/feed.json`).

:::info
Les formats sont remplacés, pas fusionnés : conservez `html` dans la liste. Voir [`output.pagetypeformats`](/documentation/configuration/#output-pagetypeformats) et la liste des [formats par défaut](/documentation/configuration/#output-formats).
:::

## Activer un flux pour une seule section

Pour publier un flux pour une seule section, utilisez la variable [`output`](/documentation/content/#output) dans le front matter de la page d’index de la section :

```yaml
---
title: Blog
output: [html, rss]
---
```

## Signaler le flux

Si vos templates incluent le [partial metatags](/documentation/configuration/#metatags), les balises `<link rel="alternate">` pointant vers les flux de la page courante sont ajoutées automatiquement dans le `<head>`.

Sinon, ajoutez le lien vous-même avec la fonction `url()` et son option `format` :

```twig
<link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ url(page, {canonical: true, format: 'rss'}) }}">
```

## Personnaliser le template du flux

Les flux sont générés par les [templates intégrés](/documentation/templates/#built-in-templates) `_default/list.rss.twig`, `_default/list.atom.twig` et `_default/list.jsonfeed.twig`. Selon les [règles de recherche](/documentation/templates/#lookup-rules), créez `layouts/list.rss.twig` (toutes les pages de liste) ou `layouts/blog/list.rss.twig` (section `blog` uniquement) pour les surcharger.

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
Définissez [`baseurl`](/documentation/configuration/#baseurl) dans `cecil.yml` : les flux utilisent des URL absolues.

Le flux RSS peut aussi être mis en forme dans les navigateurs en activant la [page par défaut](/documentation/configuration/#pages-default) `xsl/rss` :

```yaml
pages:
  default:
    xsl/rss:
      published: true
```

:::
