---
title: Optimize images in Markdown
description: Optimize Markdown images in Cecil with responsive sizes, formats, and lazy loading.
date: 2025-06-01
updated: 2026-10-16
---
One of the most effective ways to improve the performance of your website is to optimize images.

Cecil can automatically apply the following optimizations to images in Markdown (see the configuration below):

1. **Dimensions**: image dimensions are set to ensure proper layout and prevent layout shifts
2. **Compression**: the image is compressed to reduce file size without significant loss of quality (requires `assets.images.optimize: true` and the optimization tools, such as JpegOptim or Optipng, installed)
3. **Image formats**: Cecil generates AVIF and WebP formats for the image
4. **Responsive images**: Cecil generates two different sizes of the image (based on the configuration) to serve the appropriate size for different devices
5. **Lazy loading**: the image is set to load lazily, meaning it will only load when it comes into the viewport
6. **Decoding**: the image is set to decode asynchronously, improving the initial page load time
7. **Placeholder**: a color placeholder is used while the image is loading

:::info
See the documentation for more details on the [global assets configuration](/documentation/configuration/assets/#assets-images) and the [pages configuration](/documentation/configuration/pages/#pages-body).
:::

## Example

Below is an example with a 1920 × 1276 pixels JPEG image.

```markdown
![A star forming region in the sky](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo by Arnaud Girault"){placeholder=color}
```

![A star forming region in the sky](../../assets/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.jpg "Photo by [Arnaud Girault](https://unsplash.com/photos/a-star-forming-region-in-the-sky-IjEtFjxXweE)"){placeholder=color}

### Configuration

```yaml
# global assets configuration
assets:
  images:
    optimize: true
    responsive:
      widths: [768, 1024]
# configuration of images in Markdown
pages:
  body:
    images:
      formats: [avif, webp]
      responsive: true
      lazy: true
      decoding: true
      placeholder: color
```

### Generated HTML

```html
<picture title="Photo by Arnaud Girault">
  <source
    type="image/avif"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.avif 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.avif 1024w"
    width="1024"
    height="681"
    sizes="100vw"
  >
  <source
    type="image/webp"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.webp 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.webp 1024w"
    width="1024"
    height="681"
    sizes="100vw"
  >
  <img src="/thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg"
    alt="A star forming region in the sky"
    loading="lazy"
    decoding="async"
    width="1024"
    height="681"
    style=";max-width:100%;height:auto;background-color:rgb(29 41 43);"
    srcset="/thumbnails/768x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg 768w,
            /thumbnails/1024x/images/examples/arnaud-girault-IjEtFjxXweE-unsplash.9f9b5448197aded5325854d4f3c79652.jpg 1024w"
    sizes="100vw"
  >
</picture>
```
