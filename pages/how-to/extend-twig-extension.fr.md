---
title: Ajouter une fonction ou un filtre Twig personnalisé
description: Étendre les templates de Cecil avec vos propres fonctions et filtres Twig grâce à une extension Twig.
path: comment-faire/extension-twig
date: 2026-10-21
updated: 2026-10-26
schedule:
  publish: 2026-10-21
---
Cecil fournit de nombreuses [fonctions](/fr/documentation/templates/reference/fonctions/) et de nombreux [filtres](/fr/documentation/templates/reference/filtres/) de template, mais vous pouvez ajouter les vôtres avec une [extension Twig](https://twig.symfony.com/doc/advanced.html#creating-an-extension) écrite en PHP.

## Créer la classe de l’extension

Ajoutez un fichier PHP dans le répertoire `extensions` de votre site, avec votre propre namespace (ex. : `MySite\Twig`, le namespace `Cecil\` étant réservé), le chemin du fichier correspondant au namespace :

_extensions/MySite/Twig/MyTwigExtension.php_

```php
<?php
namespace MySite\Twig;

class MyTwigExtension extends \Twig\Extension\AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // {{ 'text'|md5 }}
            new \Twig\TwigFilter('md5', 'md5'),
            // {{ page.content|word_count }}
            new \Twig\TwigFilter('word_count', [$this, 'wordCount']),
        ];
    }

    public function getFunctions(): array
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

:::tip
La commande [`new:extension`](/fr/documentation/commandes/new-extension/) crée le squelette de la classe : `php cecil.phar new:extension --type=twig --name=MyTwigExtension --namespace=MySite`.
:::

## Déclarer l’extension

Ajoutez le nom de la classe à la liste `layouts.extensions` dans `cecil.yml`, indexée par un nom de votre choix :

```yaml
layouts:
  extensions:
    MyExtension: MySite\Twig\MyTwigExtension
```

## L’utiliser dans les templates

```twig
<p>{{ page.content|word_count }} words</p>
<footer>© {{ year() }} {{ site.title }}</footer>
```

:::tip
Lancez la génération avec l’option `-vvv` pour vérifier que l’extension est chargée : Cecil affiche `Extension "MyExtension" (layouts.extensions) loaded`, ou une erreur si la classe ne peut pas être chargée. Consultez la [documentation des extensions Twig](/fr/documentation/developpeurs/etendre/#extension-twig).
:::
