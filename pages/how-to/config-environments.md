---
title: Use different settings per environment
description: Override the Cecil configuration per environment with CECIL_ environment variables and extra config files.
date: 2026-10-12
updated: 2026-10-18
schedule:
  publish: 2026-10-12
---
Your local site and your production site rarely share the same settings: base URL, debug mode, output directory… Cecil lets you keep a single `cecil.yml` and override it per environment.

## Keep production values in `cecil.yml`

```yaml
title: "My site"
baseurl: https://example.com/
debug: false
```

## Override with extra config files

Create a file with only the keys to change, for example `config/dev.yml`:

```yaml
debug: true
cache:
  enabled: false
```

Then load it with the `--config` option, available with the `build` and `serve` commands:

```bash
php cecil.phar serve --config=config/dev.yml
```

:::info
You don’t need to set `baseurl` for local preview: the `serve` command builds the site with its own local URL (e.g. `http://localhost:8000/`), unless the `CECIL_BASEURL` environment variable is set, including in a `.env` file (see below).
:::

You can pass several files, separated by commas. They are merged in order after `cecil.yml`, so each file overrides the previous ones:

```bash
php cecil.phar build --config=config/prod.yml,config/local.yml
```

:::warning
Lists of values are replaced, not merged: if `cecil.yml` defines `pages.body.toc: [h2, h3]` and an extra file defines `pages.body.toc: [h4]`, the result is `[h4]`. To add or remove a value instead, use a map of booleans (e.g. `pages.body.toc: {h4: true}`). Lists of entries, such as menus, are concatenated. See [lists](/documentation/configuration/#lists).
:::

## Override with environment variables

Any configuration key can be set with an environment variable prefixed with `CECIL_`, in uppercase. Nested keys are separated with an underscore (e.g. `CECIL_OUTPUT_DIR` sets `output.dir`):

```bash
export CECIL_BASEURL="https://staging.example.com/"
export CECIL_DEBUG=true
php cecil.phar build
```

:::info
As each underscore is turned into a dot, keys that contain an underscore (e.g. `pages.body.images.dark_suffix`) can’t be set with an environment variable.
:::

Cecil also loads a `.env` file from the site root, if it exists (variables already defined by the system are preserved):

```dotenv
CECIL_TITLE="My site (preview)"
CECIL_DEBUG=true
```

Environment variables are applied last, on top of the configuration files **and** of command options such as `--baseurl`, which makes them handy in CI, for example:

```yaml
# .gitlab-ci.yml
pages:
  variables:
    CECIL_ENV: production
    CECIL_OUTPUT_DIR: public
```

## Read the environment in templates

Use the `getenv` function to adapt templates, for example to include analytics in production only:

```twig
{% if getenv('CECIL_ENV') == 'production' %}
  {{ include('partials/analytics.html.twig') }}
{% endif %}
```

The `site.debug` variable tells you if debug mode is enabled:

```twig
{% if site.debug %}{{ dump(page) }}{% endif %}
```

:::info
See the documentation for [overriding the configuration](/documentation/configuration/override/), the [`debug` option](/documentation/configuration/site/#debug) and the [`getenv` function](/documentation/templates/reference/functions/#getenv).
:::
