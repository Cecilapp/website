---
title: Personnaliser le sitemap et le robots.txt
description: Contrôler les fichiers sitemap XML et robots.txt générés par Cecil, exclure des pages et surcharger les templates.
path: comment-faire/sortie-sitemap-robots
date: 2026-10-16
updated: 2026-10-16
schedule:
  publish: 2026-10-16
---
Cecil génère automatiquement `/sitemap.xml` et `/robots.txt` : ce sont des [pages par défaut](/fr/documentation/configuration/pages/#pages-default) générées avec les templates intégrés `_default/sitemap.xml.twig` et `_default/robots.txt.twig`.

## Fonctionnement

Les deux pages sont déclarées dans la configuration par défaut :

```yaml
pages:
  default:
    robots:
      path: robots
      layout: robots
      output: txt
    sitemap:
      path: sitemap
      layout: sitemap
      output: xml
      changefreq: monthly
      priority: 0.5
```

- le **sitemap** liste toutes les pages affichables (publiées, ni virtuelles, ni redirigées, ni exclues), avec leurs traductions ;
- le **robots.txt** autorise tout, interdit les pages de redirection et la page 404, et indique l’emplacement du sitemap.

:::important
Définissez [`baseurl`](/fr/documentation/configuration/site/#baseurl) dans `cecil.yml` : les deux fichiers utilisent des URL absolues.
:::

## Exclure une page du sitemap

Ajoutez [`excluded`](/fr/documentation/contenu/front-matter/#excluded) dans le front matter de la page :

```yaml
---
title: Merci
excluded: true
---
```

La page est toujours publiée, mais retirée du sitemap et des pages de liste (page d’accueil, sections, etc.). Utilisez `published: false` pour ne pas la publier du tout.

## Modifier la fréquence et la priorité par défaut

```yaml
pages:
  default:
    sitemap:
      changefreq: weekly
      priority: 0.8
```

Vous pouvez aussi les définir page par page, dans le front matter :

```yaml
---
title: Actualités
sitemap:
  changefreq: daily
  priority: 0.9
---
```

:::info
Les pages ayant une URL canonique personnalisée (`canonical.url` dans le front matter) ne sont pas listées dans le sitemap.
:::

## Ajouter des règles au robots.txt

Créez une page `pages/robots.md` : son contenu est ajouté aux règles générées. Comme elle remplace la page `robots` par défaut, définissez `excluded: true` pour l’exclure du sitemap et des pages de liste.

```markdown
---
layout: robots
excluded: true
output: txt
---
User-agent: GPTBot
Disallow: /
```

## Surcharger les templates

Extrayez les [templates intégrés](/fr/documentation/templates/regles-de-recherche/#templates-integres) pour partir des originaux :

```bash
php cecil.phar util:templates:extract
```

Ou créez `layouts/sitemap.xml.twig` (ou `layouts/robots.txt.twig`) de zéro. Par exemple, un sitemap qui ignore aussi les pages ayant une variable de front matter personnalisée `sitemap_exclude` :

```twig
<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {%- for p in site.pages.showable|filter(p => not p.sitemap_exclude|default(false))|sort_by_date ~%}
  <url>
    <loc>{{ url(p, {canonical: true}) }}</loc>
    <lastmod>{{ p.date|date('Y-m-d') }}</lastmod>
  </url>
  {%- endfor ~%}
</urlset>
```

:::tip
Pour désactiver l’un de ces fichiers, dépubliez sa page par défaut :

```yaml
pages:
  default:
    sitemap:
      published: false
```

:::
