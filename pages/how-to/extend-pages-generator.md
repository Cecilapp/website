---
title: Create a custom pages generator
description: Create Cecil pages from an API, a database or any other source with a custom pages generator.
date: 2026-10-22
schedule:
  publish: 2026-10-22
---
A pages generator creates pages without Markdown files (for example from an API or a database), or alters existing pages. Cecil uses its own generators to build sections, taxonomies, pagination, etc., and you can add yours.

## Create the generator class

Add a PHP class in the `extensions` directory of your site, in the `Cecil\Generator` namespace. It extends `AbstractGenerator`, implements `GeneratorInterface`, and adds pages to `$this->generatedPages` in the `generate()` method.

The following example creates one page per item returned by a JSON API:

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
Existing pages (from Markdown files and previous generators) are available through `$this->builder->getPages()`, and the configuration through `$this->config`.
:::

## Register the generator

Add the class name to the [`pages.generators`](/documentation/configuration/#pages-generators) list in `cecil.yml`, with a priority as key:

```yaml
pages:
  generators:
    35: Cecil\Generator\Posts
```

Generators run in ascending priority order. The built-in ones use priorities from `10` (`DefaultPages`) to `90` (`Redirect`): with `35`, the generated pages are created before sections (`40`), so they are grouped in the `posts` section like pages from Markdown files.

## Build

```bash
php cecil.phar build
```

The pages are now available at `/posts/1/`, `/posts/2/`, etc., rendered with the default `page` templates.

:::info
See the [Pages Generator documentation](/documentation/extend/#pages-generator) for another example, using a SQLite database.
:::
