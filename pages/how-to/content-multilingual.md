---
title: Translate a site into multiple languages
description: Translate pages, configuration and template strings of a Cecil site into multiple languages.
date: 2026-10-04
schedule:
  publish: 2026-10-04
---
Cecil handles multilingual sites natively: declare the languages, add translated pages, then link them together and translate your templates.

## Declare languages

Define the main language and the list of available languages in `cecil.yml`:

```yaml
language: en
languages:
  - code: en
    name: English
    locale: en_US
  - code: fr
    name: Français
    locale: fr_FR
    config:
      title: "Mon site en français"
```

Options stored under the `config` key of a language override the global ones (here the site `title`).

## Translate a page

Duplicate the reference page and suffix its file name with the language code:

```plaintext
pages/
├─ about.md    # the reference page
└─ about.fr.md # the french version
```

Use the `slug` variable to translate the URL of the page:

```yaml
---
title: À propos
slug: a-propos
---
```

`about.md` is published to `/about/` and `about.fr.md` to `/fr/a-propos/`.

:::tip
To create a page that only exists in another language (not a translation), set `language: fr` in its front matter.
:::

## Link translated pages

Each page exposes its translations with `page.translations`. Add a language switcher to your template:

```twig
{% for p in page.translations %}
  <a href="{{ url(p) }}" hreflang="{{ p.language }}">{{ site.language.name(p.language) }}</a>
{% endfor %}
```

You can also include the built-in partial: `{{ include('partials/languages.html.twig') }}`.

## Translate template strings

Wrap texts with the `trans` tag or filter:

```twig
{% trans %}Read more{% endtrans %}
{{ 'Read more'|trans }}
```

Then add a translation file named after the language locale in the `translations` directory:

```yaml
# translations/messages.fr_FR.yaml
Read more: Lire la suite
```

Extract the strings of your templates with:

```bash
php cecil.phar util:translations:extract --locale=fr_FR --save
```

:::info
See the documentation of [multilingual content](/documentation/content/#multilingual), [languages configuration](/documentation/configuration/#languages) and [templates localization](/documentation/templates/#localization).
:::
