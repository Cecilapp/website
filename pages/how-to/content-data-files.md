---
title: Generate pages from data files
description: Use YAML, JSON, CSV or XML data files to build Cecil pages without writing Markdown for each item.
date: 2026-10-19
schedule:
  publish: 2026-10-19
---
Data files are a convenient way to manage structured content (team members, products, events, etc.) outside of pages, then display it with templates.

## Add a data file

Store your files in the `data` directory. Supported formats are YAML, JSON, XML and CSV.

```yaml
# data/team.yml
- name: Ada
  role: Developer
- name: Grace
  role: Designer
```

:::tip
A localized version can be added with a language suffix (e.g. `data/team.fr.yml`): it is used for the pages in that language.
:::

## Display data in a template

The file is available in templates with `site.data.<filename>`, e.g. `layouts/team.html.twig`:

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

Files in sub-directories are nested: `data/galleries/gallery-1.json` is available with `site.data.galleries['gallery-1']`.

## Create the page

The page that uses this template doesn’t need any content, so declare it as a [virtual page](/documentation/configuration/#pages-virtual) in `cecil.yml`:

```yaml
pages:
  virtual:
    - path: team
      title: Our team
      layout: team
```

You can also create a `pages/team.md` file with `layout: team` in its front matter.

## Generate one page per item

To generate a page per entry, create a [pages generator](/documentation/extend/#pages-generator). Data loaded from data files is available with `$this->builder->getData()`:

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

Then register it:

```yaml
pages:
  generators:
    25: Cecil\Generator\Team
```

:::info
See the documentation of [data configuration](/documentation/configuration/#data), the [`site.data` variable](/documentation/templates/#site) and [pages generators](/documentation/extend/#pages-generator).
:::
