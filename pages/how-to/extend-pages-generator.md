---
title: Create a custom pages generator
description: Create Cecil pages from an API, a database or any other source with a custom pages generator.
date: 2026-10-22
updated: 2026-10-26
schedule:
  publish: 2026-10-22
---
A pages generator creates pages without Markdown files (for example from an API or a database), or alters existing pages. Cecil uses its own generators to build sections, taxonomies, pagination, etc., and you can add yours.

## Create the generator class

Add a PHP class in the `extensions` directory of your site, with your own namespace (e.g.: `MySite\Generator`, the `Cecil\` namespace being reserved). It extends `AbstractGenerator`, implements `GeneratorInterface`, and adds pages to `$this->generatedPages` in the `generate()` method.

:::tip
The [`new:extension`](/documentation/commands/new-extension/) command creates the skeleton of the class, and displays the configuration to enable it: `php cecil.phar new:extension --type=generator --name=Posts --namespace=MySite`.
:::

The following example creates one page per item returned by a JSON API:

_extensions/MySite/Generator/Posts.php_

```php
<?php
namespace MySite\Generator;

use Cecil\Collection\Page\Page;
use Cecil\Collection\Page\Type;
use Cecil\Generator\AbstractGenerator;
use Cecil\Generator\GeneratorInterface;

class Posts extends AbstractGenerator implements GeneratorInterface
{
    public function generate(): void
    {
        $posts = json_decode(file_get_contents('https://jsonplaceholder.typicode.com/posts'), true) ?? [];

        foreach ($posts as $post) {
            $page = (new Page("posts/{$post['id']}"))
                ->setType(Type::PAGE)
                ->setPath("posts/{$post['id']}")
                ->setSection('posts')
                ->setBodyHtml('<p>' . htmlspecialchars($post['body']) . '</p>')
                ->setVariable('title', $post['title']);
            $this->generatedPages->add($page);
        }
    }
}
```

:::tip
Existing pages (from Markdown files and previous generators) are available through `$this->builder->getPages()`, and the configuration through `$this->config`.
:::

## Register the generator

Add the class name to the [`pages.generators`](/documentation/configuration/pages/#pages-generators) map in `cecil.yml`, indexed by a name, with its priority:

```yaml
pages:
  generators:
    Posts: { class: MySite\Generator\Posts, priority: 35 }
```

Generators run in ascending priority order. The built-in ones use priorities from `10` (`DefaultPages`) to `90` (`Redirect`): with `35`, the generated pages are created before sections (`40`), so thanks to `setSection()` they are grouped in the `posts` section like pages from Markdown files.

:::info
Without `setSection()`, pages created by a generator don’t belong to any section. Like any other page, they are listed in `site.pages.showable` and in the sitemap: set the `excluded` variable to `true` to keep a page out of lists.
:::

## Build

```bash
php cecil.phar build
```

The pages are now available at `/posts/1/`, `/posts/2/`, etc., rendered with the default `page` templates.

:::info
See the [pages generator documentation](/documentation/developers/extend/#page-generators) for another example, using a SQLite database.
:::
