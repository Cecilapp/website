---
title: Ajouter une table des matières et des notes
description: Enrichir les pages Markdown de Cecil avec une table des matières, des blocs de notes et des attributs personnalisés.
path: comment-faire/markdown-toc-notes
date: 2026-10-14
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

Pour placer la table des matières en dehors du contenu (ex. dans une barre latérale), utilisez le filtre `toc` sur le corps de la page :

```twig
<aside>
  {{ page.body|toc }}
</aside>
<article>
  {{ page.content }}
</article>
```

Le filtre accepte aussi les titres à extraire, ex. `{{ page.body|toc(selectors=['h2']) }}`.

## Ajouter des notes

Mettez en avant une information avec un bloc de note :

```markdown
:::tip
**Tip:** This is advice.
:::
```

Est converti en :

```html
<aside class="note note-tip">
  <p>
    <strong>Tip:</strong> This is advice.
  </p>
</aside>
```

Les types disponibles sont `info`, `tip`, `important`, `warning` et `caution` (ou aucun type). Stylisez-les avec les classes CSS `note` et `note-<type>`.

## Ajouter des attributs

Définissez un id, une classe ou n’importe quel attribut sur un titre, un bloc de code, un lien ou une image, entre accolades à la fin de la ligne :

```markdown
## Installation {#install .highlighted}
```

L’id `#install` fournit une ancre stable vers laquelle créer un lien : `[Voir l’installation](#install)`.

:::warning
Pour un élément en ligne, comme un lien, ajoutez un saut de ligne après l’accolade fermante.
:::

:::info
Consultez la documentation de la [table des matières](/documentation/content/#table-of-contents), des [notes](/documentation/content/#notes), des [attributs](/documentation/content/#attributes) et du [filtre `toc`](/documentation/templates/#toc).
:::
