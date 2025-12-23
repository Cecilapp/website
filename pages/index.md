---
title: Homepage
date: 2019-03-14
updated: 2025-12-23
blocks:
  about:
    - title: Fast & Secure
      description: 'No database, no server, no dependency: performance and security.'
      icon: zap
      visible: true
    - title: Files only
      description: Your content is stored in [Markdown](/documentation/content/#markdown) flat files with a [front matter](/documentation/content/#front-matter).
      icon: markdown
      visible: true
    - title: Customisable
      description: Powered by [Twig](/documentation/templates/), a flexible template engine, with [themes](/themes/) support.
      icon: paintbrush
      visible: true
    - title: Multiples generators
      description: Pagination, sitemap, redirections, robots.txt, taxonomies, RSS are generated automatically.
      icon: hubot
      visible: true
    - title: Images optimization
      description: "[Responsive images](/documentation/content/#responsive) are generated automatically, converted to [WebP and AVIF](/documentation/content/#formats) and [compressed](/documentation/configuration/#assets-images) to reduce load time."
      icon: image
      visible: true
    - title: Internationalization & localization
      description: "[Multilingual](/documentation/content/#multilingual) capabilities with content localization and templates translation."
      icon: globe
      visible: true
    - title: SEO friendly
      description: "Cecil provides [SEO helpers](/documentation/configuration/#metatags) to generate Open Graph meta tags, structured data and more."
      icon: search
      visible: true
    - title: No installation
      description: "[Download](/download/) one file and run it with PHP."
      icon: desktop-download
      visible: true
    - title: Easy to deploy
      description: "Create & [deploy](/deploy) a new website in minutes, on Netlify, Vercel, statichost and more."
      icon: rocket
      visible: true
    - title: Open source
      description: "Participate in development of Cecil via [GitHub](https://github.com/Cecilapp/Cecil)."
      icon: mark-github
      visible: true
  features:
    - id: markdown
      title: Intuitive writing experience
      description: "Cecil’s Markdown parser provides a simple way to write your content. It’s easy to learn and easy to use."
      path: documentation/content/#markdown
      image: images/cecil-markdown-content.png
      shadow: false
      visible: true
    - id: twig
      title: Modern template engine
      description: "Cecil’s templating, powered by Twig, provides the easiest way to build any website: blog, portfolio, ecommerce, etc."
      path: documentation/templates
      image: images/cecil-twig-template.png
      shadow: false
      visible: true
    - id: responsive
      title: Automatic responsive images
      description: "Cecil automatically generates responsive images in multiple formats (WebP, AVIF) and sizes to optimize loading times on all devices."
      path: how-to/markdown-performance-images/
      image: images/cecil-responsive-images.png
      shadow: true
      visible: true
    - id: seo
      title: SEO made easy
      description: "Cecil helps you to improve your SEO with automatic generation of meta tags, Open Graph tags, Twitter cards and structured data."
      path: documentation/configuration/#metatags
      image: images/cecil-seo.png
      shadow: true
      visible: true
    - id: the-butler
      title: A ready to use blog
      description: "The Butler is a ready to use starter blog, powered by Cecil."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: false
      webp: true
      visible: true
    - id: statidocs
      title: Build a documentation website quickly
      description: "Statidocs is a powerful documentation starter on top of Cecil."
      path: https://statidocs.cecil.app
      image: images/statidocs.png
      visible: true
    - id: links
      title: Stay the owner of your links
      description: "Links is an open source Linktree alternative powered by Cecil, Tailwind CSS and Font Awesome."
      path: https://links.cecil.app
      image: images/cecil-links.png
      shadow: false
      visible: true
    - id: staticast
      title: Broadcast your podcast simply
      description: "Staticast is a ready to use Progressive Web App to publish your podcast, with a RSS feed ready for syndication platforms, and a user friendly CMS."
      path: https://staticast.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/staticast.cecil.app/main/assets/staticast-preview.png
      shadow: false
      visible: true
    - id: photo-stream
      title: Self hosted photo stream
      description: "Photo Stream is a self hosted static website for your photos, with really goods loading performances."
      path: https://photo-stream.cecil.app
      image: images/photo-stream.png
      shadow: false
      visible: true
  sponsors:
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
