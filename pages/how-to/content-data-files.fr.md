---
title: Générer des pages à partir de fichiers de données
description: Utiliser des fichiers de données YAML, JSON, CSV ou XML pour construire des pages Cecil sans écrire de Markdown pour chaque élément.
path: comment-faire/contenu-fichiers-de-donnees
date: 2026-10-19
schedule:
  publish: 2026-10-19
---
Les fichiers de données sont un moyen pratique de gérer du contenu structuré (membres d’une équipe, produits, événements, etc.) en dehors des pages, puis de l’afficher avec les templates.

## Ajouter un fichier de données

Stockez vos fichiers dans le dossier `data`. Les formats supportés sont YAML, JSON, XML et CSV.

```yaml
# data/team.yml
- name: Ada
  role: Developer
- name: Grace
  role: Designer
```

:::tip
Une version localisée peut être ajoutée avec un suffixe de langue (ex. `data/team.fr.yml`) : elle est utilisée pour les pages dans cette langue.
:::

## Afficher les données dans un template

Le fichier est disponible dans les templates via `site.data.<nom du fichier>`, ex. `layouts/team.html.twig` :

```twig
{% extends 'page.html.twig' %}

{% block content %}
  <h1>{{ page.title }}</h1>
  <ul>
  {% for member in site.data.team %}
    <li>{{ member.name }}, {{ member.role }}</li>
  {% endfor %}
  </ul>
{% endblock %}
```

Les fichiers des sous-dossiers sont imbriqués : `data/galleries/gallery-1.json` est disponible via `site.data.galleries['gallery-1']`.

## Créer la page

La page qui utilise ce template n’a besoin d’aucun contenu : déclarez-la comme [page virtuelle](/documentation/configuration/#pages-virtual) dans `cecil.yml` :

```yaml
pages:
  virtual:
    - path: team
      title: Our team
      layout: team
```

Vous pouvez aussi créer un fichier `pages/team.md` avec `layout: team` dans son front matter.

## Générer une page par élément

Pour générer une page par entrée, créez un [générateur de pages](/documentation/extend/#pages-generator). Les données chargées depuis les fichiers de données sont disponibles via `$this->builder->getData()` :

```php
<?php
// extensions/Cecil/Generator/Team.php
namespace Cecil\Generator;

use Cecil\Collection\Page\Page;
use Cecil\Collection\Page\Type;
use Cecil\Util\Slugifier;

class Team extends AbstractGenerator implements GeneratorInterface
{
    public function generate(): void
    {
        $data = $this->builder->getData($this->config->getLanguageDefault());
        foreach ($data['team'] ?? [] as $member) {
            $slug = Slugifier::slugify($member['name']);
            $page = (new Page("team/$slug"))
                ->setType(Type::PAGE->value)
                ->setPath("team/$slug")
                ->setBodyHtml('<p>' . htmlspecialchars($member['role']) . '</p>')
                ->setVariable('title', $member['name']);
            $this->generatedPages->add($page);
        }
    }
}
```

Puis déclarez-le :

```yaml
pages:
  generators:
    25: Cecil\Generator\Team
```

:::info
Consultez la documentation de la [configuration des données](/documentation/configuration/#data), de la [variable `site.data`](/documentation/templates/#site) et des [générateurs de pages](/documentation/extend/#pages-generator).
:::
