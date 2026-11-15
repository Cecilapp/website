---
title: Ajouter une table des matières et des notes
description: Enrichir les pages Markdown de Cecil avec une table des matières, des blocs de notes et des attributs personnalisés.
path: comment-faire/markdown-sommaire-notes
date: 2026-10-14
updated: 2026-10-16
schedule:
  publish: 2026-10-14
---
Cecil étend Markdown avec quelques fonctionnalités pratiques pour les pages longues : une table des matières automatique, des blocs de notes et des attributs sur les éléments.

## Insérer une table des matières

Ajoutez la balise `[toc]` à l’endroit où la table des matières doit apparaître dans le corps de la page :

```markdown
[toc]

## Installation
### Requirements
## Usage
```

Par défaut, la table des matières est construite à partir des titres H2 et H3. Modifiez ce comportement dans `cecil.yml` :

```yaml
pages:
  body:
    toc: [h2, h3, h4]
```

## Afficher la table des matières dans un template

Pour placer la table des matières en dehors du contenu (par exemple dans une barre latérale), utilisez le filtre `toc` sur le corps de la page :

```twig
<aside>
  {{ page.body|toc }}
</aside>
<article>
  {{ page.content }}
</article>
```

Le filtre accepte aussi les titres à extraire, par exemple `{{ page.body|toc(selectors=['h2']) }}`.

## Ajouter des notes

Mettez en avant une information avec un bloc de note :

```markdown
:::tip
**Astuce :** ceci est un conseil.
:::
```

Ce bloc est converti en :

```html
<aside class="note note-tip">
  <p>
    <strong>Astuce :</strong> ceci est un conseil.
  </p>
</aside>
```

Les types disponibles sont `info`, `tip`, `important`, `warning` et `caution` (ou aucun type). Stylisez-les avec les classes CSS `note` et `note-<type>`.

Pour imbriquer des notes, utilisez une clôture plus longue pour la note parente (`::::`, puis `:::::` pour un troisième niveau, etc.) :

```markdown
::::info
Avant.

:::tip
**Astuce :** ceci est un conseil.
:::

Après.
::::
```

Cecil fournit aussi des templates de notes pour structurer le contenu sans JavaScript : `tabs`, `code-group`, `steps`, `accordion` et `cards`. Leurs éléments sont définis par des titres `####` (ou par les entrées d’une liste pour `cards`), et chaque type est rendu avec le template `partials/notes/<type>.html.twig`, que vous pouvez surcharger.

## Ajouter des attributs

Définissez un identifiant (`id`), une classe ou n’importe quel attribut sur un titre, un bloc de code, un lien ou une image, entre accolades à la fin de la ligne :

```markdown
## Installation {#install .highlighted}
```

L’identifiant `#install` fournit une ancre stable vers laquelle créer un lien : `[Voir l’installation](#install)`.

:::warning
Pour un élément en ligne, comme un lien, ajoutez un saut de ligne après l’accolade fermante.
:::

:::info
Consultez la documentation de la [table des matières](/fr/documentation/contenu/markdown/#table-des-matieres), des [notes](/fr/documentation/contenu/markdown/#notes) et de leurs [templates](/fr/documentation/contenu/markdown/#templates), des [attributs](/fr/documentation/contenu/markdown/#attributs) et du [filtre `toc`](/fr/documentation/templates/reference/filtres/#toc).
:::
