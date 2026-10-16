---
title: Compile, minify and fingerprint CSS and JavaScript
description: Process Sass, CSS and JavaScript files in Cecil templates with the asset function and its filters.
date: 2026-10-11
schedule:
  publish: 2026-10-11
---
Cecil can compile [Sass](https://sass-lang.com) files, minify CSS and JavaScript, and add a content hash to file names (cache busting) directly from your templates, without any external build tool.

## Configure assets processing

Source files are stored in the `assets/` directory. Processing is enabled by default and can be tuned in `cecil.yml`:

```yaml
assets:
  compile:
    style: compressed    # `expanded` or `compressed`
    import: [sass, scss] # imported paths
  minify: true           # minifies CSS and JS
  fingerprint: true      # adds content hash to file names
```

## Load a stylesheet

Create an _asset_ from a Sass file, compile it with `to_css` and render the `<link>` element with the `html` function:

```twig
{{ html(asset('css/styles.scss')|to_css|minify) }}
```

Filters can be chained to control each step explicitly, which is useful if a feature is disabled globally:

```twig
{{ asset('css/styles.scss')|to_css|minify|fingerprint }}
```

## Bundle JavaScript files

Pass an array of paths to create a single bundle, with a custom file name:

```twig
{{ html(asset(['js/menu.js', 'js/search.js'], {filename: 'scripts.js'})) }}
```

Options can also be set per asset, for example to keep a remote file untouched:

```twig
{{ html(asset('https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.3.1/anchor.min.js', {minify: false})) }}
```

## Add Subresource Integrity

Use the `integrity` function (or the `integrity` attribute of the asset) to generate a `sha384` hash:

```twig
{% set styles = asset('css/styles.scss')|to_css %}
<link rel="stylesheet" href="{{ url(styles) }}" integrity="{{ integrity(styles) }}" crossorigin="anonymous">
```

## Inline critical CSS

Output the content of an asset with the `inline` filter:

```twig
<style>{{ asset('css/critical.scss')|to_css|minify|inline }}</style>
```

For a few lines of styles written directly in the template, use the `scss_to_css` and `minify_css` filters:

```twig
<style>
{% apply scss_to_css|minify_css %}
  $color: #fcfcfc;
  body {
    background-color: $color;
  }
{% endapply %}
</style>
```

:::info
See the documentation of the [`asset` function](/documentation/templates/#asset), the [filters](/documentation/templates/#filters) and the [assets configuration](/documentation/configuration/#assets).
:::
