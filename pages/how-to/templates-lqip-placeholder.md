---
title: Display image placeholders while loading
description: Show a dominant color or a blurred preview while images load in Cecil templates.
date: 2026-10-15
updated: 2026-10-18
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

:::important
The `placeholder` option of the `html` function only applies to JPEG, PNG and GIF images, and the `lqip` placeholder is ignored for animated GIFs.
:::

## With filters

For custom markup, use the filters directly:

- `lqip`: returns a tiny blurred version of the image as a data URL
- `dominant_color`: returns the dominant color of the image as a CSS color value (e.g. `rgb(120 85 60)`)

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

:::tip
Images in Markdown support placeholders too: `![](/images/photo.jpg){placeholder=lqip}`, or globally with the [`pages.body.images.placeholder` option](/documentation/configuration/pages/#pages-body-images).
:::

:::info
See the documentation of the [`lqip` filter](/documentation/assets/images/#lqip), the [`dominant_color` filter](/documentation/assets/images/#dominant-color) and the [`html` function](/documentation/templates/reference/functions/#html).
:::
