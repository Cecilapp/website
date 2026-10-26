---
title: Homepage
date: 2019-03-14
updated: 2025-12-23
blocks:
  features:
    - title: Fast & secure
      description: 'No database, no server-side code: static files are fast to serve and have a minimal attack surface.'
      icon: zap
      visible: true
    - title: Files only
      description: Your content is stored in flat [Markdown](/documentation/content/#markdown) files with [front matter](/documentation/content/#front-matter).
      icon: markdown
      visible: true
    - title: Customizable
      description: Powered by [Twig](/documentation/templates/), a flexible template engine, with [themes](/themes/) support.
      icon: paintbrush
      visible: true
    - title: Multiple generators
      description: Pagination, taxonomies, sitemap, RSS feeds, robots.txt and redirects are generated automatically.
      icon: hubot
      visible: true
    - title: Image optimization
      description: "[Responsive images](/documentation/content/#responsive) are generated automatically, converted to [WebP and AVIF](/documentation/content/#formats) and [compressed](/documentation/configuration/#assets-images) to reduce load time."
      icon: image
      visible: true
    - title: Multilingual
      description: "[Multilingual](/documentation/content/#multilingual) capabilities with content localization and template translation."
      icon: globe
      visible: true
    - title: SEO-friendly
      description: "[SEO helpers](/documentation/configuration/#metatags) generate meta tags, Open Graph, structured data and more."
      icon: search
      visible: true
    - title: No installation
      description: "[Download](/download/) a single file and run it with PHP."
      icon: desktop-download
      visible: true
    - title: Easy to deploy
      description: "Create and [deploy](/documentation/deploy/) a website in minutes, on Netlify, Vercel, statichost and more."
      icon: rocket
      visible: true
    - title: Open source
      description: "Cecil is licensed under EUPL-1.2: contribute to its development on [GitHub](https://github.com/Cecilapp/Cecil)."
      icon: mark-github
      visible: true
  services:
    - id: markdown
      title: Intuitive writing experience
      description: "Write your content in plain Markdown, a lightweight syntax that’s easy to learn, easy to read and version-friendly."
      path: documentation/content/#markdown
      image: images/cecil-markdown-content.svg
      shadow: false
      visible: true
    - id: twig
      title: Flexible templating
      description: "Powered by Twig, Cecil’s templates let you build any kind of website: blog, portfolio, documentation, e-commerce…"
      path: documentation/templates
      image: images/cecil-twig-template.svg
      shadow: false
      visible: true
    - id: responsive
      title: Automatic responsive images
      description: "Cecil automatically generates responsive images in multiple sizes and modern formats (WebP, AVIF) to speed up loading on every device."
      path: how-to/markdown-performance-images/
      image: images/cecil-responsive-images.svg
      shadow: false
      visible: true
    - id: seo
      title: SEO made easy
      description: "Cecil helps you improve your SEO by generating meta tags, Open Graph and X (Twitter) cards, and structured data automatically."
      path: documentation/configuration/#metatags
      image: images/cecil-seo.svg
      shadow: false
      visible: true
    - id: starter-kits
      title: Ready-to-use starter kits
      description: "Cecil provides ready-to-use starter kits to get your website up and running quickly."
      path: starter-kits/
      image: images/starter-kits.png
      shadow: false
      visible: true
  sponsors:
    - title: Aperture Lab
      logo: /images/logos/aperture-lab.png
      logo_dark: /images/logos/aperture-lab.png
      url: https://aperturelab.fr
      visible: true
    - title: studio cecillie
      logo: /images/logos/cecillie.png
      logo_dark: /images/logos/cecillie-dark.png
      url: https://studio.cecillie.fr
      visible: true
    - title: Netlify
      logo: /images/logos/netlify.png
      logo_dark: /images/logos/netlify-dark.png
      url: https://www.netlify.com
      visible: true
    - title: Vercel
      logo: /images/logos/vercel.png
      logo_dark: /images/logos/vercel-dark.png
      url: https://vercel.com/?utm_source=cecil&utm_campaign=oss
      visible: false
pagination:
  enabled: false
pagesfrom: news
serviceworker:
  precache: false
---
