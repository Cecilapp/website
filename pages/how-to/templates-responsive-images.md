---
title: How to render responsive images in templates?
layout: responsive-image
---
# How to render responsive images in templates?

The easiest way is with the [html filter](https://cecil.app/documentation/templates/#html):

```twig
{{ asset('image.jpg')|html(attributes={alt: 'Alternative description'}, options={responsive: true}) }}
```

:::important
The default width values of the generated images are 480, 640, 768, 1024, 1366, 1600 and 1920. They can be modified in the _assets_ section of the [configuration](https://cecil.app/documentation/configuration/#assets).
:::

## Example

Bellow an example with a PNG image 1000x1000 pixels.

```twig
{{ asset('images/cecil-logo-1000.png')|html(attributes={alt: 'Cecil logo'}, options={responsive: true}) }}
```

Generated HTML:

```html
<img
  alt="Cecil logo"
  width="1000"
  height="1000"
  src="/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png"
  srcset="/assets/thumbnails/768/images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 768w,
          /images/cecil-logo-1000.fbacb922cddbcdb7ca9a03a3ca3cf2ca.png 1000w"
  sizes="100vw"
>
```
