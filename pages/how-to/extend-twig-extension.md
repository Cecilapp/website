---
title: Add a custom Twig function or filter
description: Extend Cecil templates with your own Twig functions and filters through a Twig extension.
date: 2026-10-21
schedule:
  publish: 2026-10-21
---
Cecil provides many template [functions](/documentation/templates/#functions) and [filters](/documentation/templates/#filters), but you can add your own with a [Twig extension](https://twig.symfony.com/doc/advanced.html#creating-an-extension) written in PHP.

## Create the extension class

Add a PHP file in the `extensions` directory of your site, following the `Cecil\Renderer\Extension` namespace:

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

## Register the extension

Add the class name to the `layouts.extensions` list in `cecil.yml` (the key is a free name):

```yaml
layouts:
  extensions:
    MyExtension: Cecil\Renderer\Extension\MyTwigExtension
```

## Use it in templates

```twig
<p>{{ page.content|word_count }} words</p>
<footer>© {{ year() }} {{ site.title }}</footer>
```

:::tip
Run the build with the `-vvv` option to check that the extension is loaded: Cecil logs `Twig extension "MyExtension" added`, or an error if the class can’t be loaded. See the [Twig extension documentation](/documentation/extend/#twig-extension).
:::
