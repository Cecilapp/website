---
title: Ajouter une fonction ou un filtre Twig personnalisé
description: Étendre les templates de Cecil avec vos propres fonctions et filtres Twig grâce à une extension Twig.
path: comment-faire/extend-twig-extension
date: 2026-10-21
schedule:
  publish: 2026-10-21
---
Cecil fournit de nombreuses [fonctions](/documentation/templates/#functions) et de nombreux [filtres](/documentation/templates/#filters) de template, mais vous pouvez ajouter les vôtres avec une [extension Twig](https://twig.symfony.com/doc/advanced.html#creating-an-extension) écrite en PHP.

## Créer la classe de l’extension

Ajoutez un fichier PHP dans le répertoire `extensions` de votre site, en respectant le namespace `Cecil\Renderer\Extension` :

_extensions/Cecil/Renderer/Extension/MyTwigExtension.php_

```php
<?php
namespace Cecil\Renderer\Extension;

class MyTwigExtension extends \Twig\Extension\AbstractExtension
{
    public function getFilters()
    {
        return [
            // {{ 'text'|md5 }}
            new \Twig\TwigFilter('md5', 'md5'),
            // {{ page.content|word_count }}
            new \Twig\TwigFilter('word_count', [$this, 'wordCount']),
        ];
    }

    public function getFunctions()
    {
        return [
            // {{ year() }}
            new \Twig\TwigFunction('year', fn () => date('Y')),
        ];
    }

    public function wordCount(string $html): int
    {
        return str_word_count(strip_tags($html));
    }
}
```

## Déclarer l’extension

Ajoutez le nom de la classe à la liste `layouts.extensions` dans `cecil.yml` (la clé est un nom libre) :

```yaml
layouts:
  extensions:
    MyExtension: Cecil\Renderer\Extension\MyTwigExtension
```

## L’utiliser dans les templates

```twig
<p>{{ page.content|word_count }} words</p>
<footer>© {{ year() }} {{ site.title }}</footer>
```

:::tip
Lancez le build avec l’option `-vvv` pour vérifier que l’extension est chargée : Cecil affiche `Twig extension "MyExtension" added`, ou une erreur si la classe ne peut pas être chargée. Consultez la [documentation des extensions Twig](/documentation/extend/#twig-extension).
:::
