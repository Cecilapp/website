---
title: Display image placeholders while loading
description: Show a dominant color or a blurred preview while images load in Cecil templates.
date: 2026-10-15
schedule:
  publish: 2026-10-15
---
Images are often the heaviest resources of a page. While they load, Cecil can fill their space with a **dominant color** or a **Low-Quality Image Placeholder** (LQIP), to avoid empty blocks and improve perceived performance.

## With the html function

The simplest way is the `placeholder` option of the `html` function, set to `color` or `lqip`:

```twig
{{ html(asset('images/photo.jpg'), {alt: 'Description', loading: 'lazy'}, {placeholder: 'lqip'}) }}
```

To apply it to every image rendered with `html`, set a default in `cecil.yml`:

```yaml
layouts:
  images:
    placeholder: color # `color` or `lqip`
```

## With filters

For a custom markup, use the filters directly:

- `lqip`: returns a 100x100 px, 50% blurred, version of the image as a data URL
- `dominant_color`: returns the dominant hexadecimal color of the image

### Dominant color

```twig
{% set image = asset('images/photo.jpg') %}
<img src="{{ url(image) }}" width="{{ image.width }}" height="{{ image.height }}" alt="Description" loading="lazy"
  style="background-color: {{ image|dominant_color }};">
```

### Blurred preview

```twig
{% set image = asset('images/photo.jpg') %}
<img src="{{ url(image) }}" width="{{ image.width }}" height="{{ image.height }}" alt="Description" loading="lazy"
  class="placeholder" style="background-image: url({{ image|lqip }});">
```

Stretch the preview over the image area with CSS:

```css
img.placeholder {
  max-width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
}
```

The background is visible until the real image is loaded and painted over it.

:::warning
The `lqip` placeholder is not compatible with animated GIF.
:::

:::tip
Images in Markdown support placeholders too: `![](/images/photo.jpg){placeholder=lqip}`, or globally with the [`pages.body.images.placeholder` option](/documentation/configuration/#pages-body).
:::

:::info
See the documentation of the [`lqip` filter](/documentation/templates/#lqip), the [`dominant_color` filter](/documentation/templates/#dominant-color) and the [`html` function](/documentation/templates/#html).
:::
