---
title: Ajouter une recherche côté client
description: Ajouter une recherche côté client à un site statique Cecil avec un index JSON des pages et une petite bibliothèque JavaScript.
path: comment-faire/sortie-index-de-recherche
date: 2026-10-08
updated: 2026-10-16
schedule:
  publish: 2026-10-08
---
Un site statique n’a pas de recherche côté serveur, mais Cecil peut générer un **index JSON de vos pages** au moment de la génération. Quelques lignes de JavaScript suffisent ensuite pour l’interroger dans le navigateur.

## Créer la page d’index

Créez une page dont le seul [format de sortie](/fr/documentation/contenu/front-matter/#output) est `json`, avec un layout dédié :

_pages/search.md_

```yaml
---
title: Search index
layout: search
output: json
excluded: true
---
```

[`excluded: true`](/fr/documentation/contenu/front-matter/#excluded) exclut cette page technique des pages de liste et du sitemap.

## Écrire le template JSON

Selon les [règles de recherche](/fr/documentation/templates/regles-de-recherche/#regles-de-recherche), Cecil génère cette page avec `layouts/search.json.twig`. Construisez un tableau des pages [affichables](/fr/documentation/templates/variables/#site) (_showable_), puis encodez-le :

```twig
{%- set index = [] -%}
{%- for p in site.pages.showable|filter(p => p.type == 'page') -%}
  {%- set index = index|merge([{
    title: p.title,
    url: url(p),
    description: p.description|default(''),
    content: p.content|striptags|excerpt(300)
  }]) -%}
{%- endfor -%}
{{ index|json_encode(constant('JSON_UNESCAPED_UNICODE') b-or constant('JSON_UNESCAPED_SLASHES'))|raw }}
```

Après `php cecil.phar build`, l’index est disponible à l’adresse `/search.json`.

:::warning
`site.pages.showable` exclut les pages virtuelles : les pages créées par un générateur ou déclarées dans `pages.virtual` ne sont pas indexées.
:::

## Rechercher avec Fuse.js

Ajoutez un champ de recherche dans un template et chargez [Fuse.js](https://www.fusejs.io) depuis un CDN pour interroger l’index :

```twig
<input type="search" id="search" placeholder="Rechercher…">
<ul id="results"></ul>

<script type="module">
  import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7/dist/fuse.mjs';

  const index = await fetch('{{ url('search', {format: 'json'}) }}').then(r => r.json());
  const fuse = new Fuse(index, { keys: ['title', 'description', 'content'], threshold: 0.3 });
  const results = document.getElementById('results');

  document.getElementById('search').addEventListener('input', (e) => {
    results.replaceChildren(...fuse.search(e.target.value, { limit: 10 }).map(({ item }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.append(a);
      return li;
    }));
  });
</script>
```

## Alternative : Pagefind

[Pagefind](https://pagefind.app) indexe directement les fichiers HTML générés : aucun template JSON n’est nécessaire. Lancez-le après la génération, sur le répertoire de sortie (`_site` par défaut) :

```bash
php cecil.phar build
npx pagefind --site _site
```

Chargez ensuite son interface dans un template :

```twig
<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
  window.addEventListener('DOMContentLoaded', () => new PagefindUI({ element: '#search' }));
</script>
```

:::tip
L’index est une page comme les autres : pour ne régénérer que les sorties JSON, déclarez un [sous-ensemble](/fr/documentation/configuration/pages/#pages-subsets) et lancez `php cecil.phar build --render-subset=<name>`.
:::

:::info
Consultez la documentation de la [variable `output`](/fr/documentation/contenu/front-matter/#output), des [formats de sortie](/fr/documentation/configuration/sortie/#output-formats) et de la [fonction `url`](/fr/documentation/templates/reference/fonctions/#url).
:::
