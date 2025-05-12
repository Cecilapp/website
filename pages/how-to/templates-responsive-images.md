---
title: How to render responsive images in templates?
layout: responsive-images
date: 2024-01-18
updated: 2025-05-12
---
# How to render responsive images in templates?

The easiest way to render [responsive images](https://developer.mozilla.org/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) in templates is with the [html function](/documentation/templates/#html):

```twig
{{ html(asset('image.jpg'), attributes={alt: 'Alternative description'}, options={responsive: true}) }}
```

:::important
The default width values of the generated images are 480, 640, 768, 1024, 1366, 1600 and 1920. They can be modified in the _assets_ section of the [configuration](/documentation/configuration/#assets-images).
:::

## Example

Bellow an example with a PNG image 1000x1000 pixels.

```twig
{{ asset('images/cecil-logo-1000.png')|html(attributes={alt: 'Cecil logo'}, options={responsive: true}) }}
```

### Configuration

```yaml
assets:
  images:
    responsive:
      widths: [768, 1024]
```

### Generated HTML

```html
<img
  alt="Cecil logo"
  width="1000"
  height="1000"
  src="/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png"
  srcset="/thumbnails/768/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 768w,
          /images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 1000w"
  sizes="100vw"
>
```
