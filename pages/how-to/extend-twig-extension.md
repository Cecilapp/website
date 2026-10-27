---
title: Add a custom Twig function or filter
description: Extend Cecil templates with your own Twig functions and filters through a Twig extension.
date: 2026-10-21
updated: 2026-10-26
schedule:
  publish: 2026-10-21
---
Cecil provides many template [functions](/documentation/templates/reference/functions/) and [filters](/documentation/templates/reference/filters/), but you can add your own with a [Twig extension](https://twig.symfony.com/doc/advanced.html#creating-an-extension) written in PHP.

## Create the extension class

Add a PHP file in the `extensions` directory of your site, with your own namespace (e.g.: `MySite\Twig`, the `Cecil\` namespace being reserved), the file path matching the namespace:

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
The [`new:extension`](/documentation/commands/new-extension/) command creates the skeleton of the class: `php cecil.phar new:extension --type=twig --name=MyTwigExtension --namespace=MySite`.
:::

## Register the extension

Add the class name to the `layouts.extensions` map in `cecil.yml`, indexed by a name of your choice:

```yaml
layouts:
  extensions:
    MyExtension: MySite\Twig\MyTwigExtension
```

## Use it in templates

```twig
<p>{{ page.content|word_count }} words</p>
<footer>© {{ year() }} {{ site.title }}</footer>
```

:::tip
Run the build with the `-vvv` option to check that the extension is loaded: Cecil logs `Extension "MyExtension" (layouts.extensions) loaded`, or an error if the class can’t be loaded. See the [Twig extension documentation](/documentation/developers/extend/#twig-extension).
:::
