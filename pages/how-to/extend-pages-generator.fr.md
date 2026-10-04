---
title: Créer un générateur de pages personnalisé
description: Créer des pages Cecil à partir d’une API, d’une base de données ou de toute autre source avec un générateur de pages personnalisé.
path: comment-faire/extend-pages-generator
date: 2026-10-22
schedule:
  publish: 2026-10-22
---
Un générateur de pages crée des pages sans fichier Markdown (par exemple à partir d’une API ou d’une base de données), ou modifie des pages existantes. Cecil utilise ses propres générateurs pour construire les sections, les taxonomies, la pagination, etc., et vous pouvez ajouter les vôtres.

## Créer la classe du générateur

Ajoutez une classe PHP dans le répertoire `extensions` de votre site, dans le namespace `Cecil\Generator`. Elle étend `AbstractGenerator`, implémente `GeneratorInterface` et ajoute des pages à `$this->generatedPages` dans la méthode `generate()`.

L’exemple suivant crée une page pour chaque élément renvoyé par une API JSON :

_extensions/Cecil/Generator/Posts.php_

```php
<?php
namespace Cecil\Generator;

use Cecil\Collection\Page\Page;
use Cecil\Collection\Page\Type;

class Posts extends AbstractGenerator implements GeneratorInterface
{
    public function generate(): void
    {
        $posts = json_decode(file_get_contents('https://jsonplaceholder.typicode.com/posts'), true);

        foreach ($posts as $post) {
            $page = (new Page("posts/{$post['id']}"))
                ->setType(Type::PAGE->value)
                ->setPath("posts/{$post['id']}")
                ->setBodyHtml('<p>' . htmlspecialchars($post['body']) . '</p>')
                ->setVariable('title', $post['title']);
            $this->generatedPages->add($page);
        }
    }
}
```

:::tip
Les pages existantes (issues des fichiers Markdown et des générateurs précédents) sont accessibles via `$this->builder->getPages()`, et la configuration via `$this->config`.
:::

## Déclarer le générateur

Ajoutez le nom de la classe à la liste [`pages.generators`](/documentation/configuration/#pages-generators) dans `cecil.yml`, avec une priorité comme clé :

```yaml
pages:
  generators:
    35: Cecil\Generator\Posts
```

Les générateurs sont exécutés par ordre de priorité croissant. Ceux fournis par Cecil utilisent les priorités `10` (`DefaultPages`) à `90` (`Redirect`) : avec `35`, les pages sont créées avant les sections (`40`) et sont donc regroupées dans la section `posts`, comme les pages issues de fichiers Markdown.

## Générer le site

```bash
php cecil.phar build
```

Les pages sont désormais disponibles aux adresses `/posts/1/`, `/posts/2/`, etc., rendues avec les templates `page` par défaut.

:::info
Consultez la [documentation des générateurs de pages](/documentation/extend/#pages-generator) pour un autre exemple, basé sur une base de données SQLite.
:::
