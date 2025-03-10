---
title: Homepage
date: 2019-03-14
updated: 2025-01-31
blocks:
  about:
    - title: Fast & Secure
      description: 'No database, no server, no dependency: performance and security.'
      icon: zap
      visible: true
    - title: Files only
      description: Your content is stored in [Markdown](/documentation/content/#body) flat files with a [front matter](/documentation/content/#front-matter).
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
      description: "[Responsive images](/documentation/content/#responsive) are generated automatically, converted to [WebP](/documentation/content/#webp) and [compressed](/documentation/configuration/#assets) to reduce load time."
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
      description: "Create & deploy a new blog in 1 minute.  \n
        [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](/hosting/netlify/deploy/ \"Deploy to Netlify\") 
        [![Deploy to Vercel](https://vercel.com/button/default.svg)](/hosting/vercel/deploy/ \"Deploy to Vercel\")"
      icon: rocket
      visible: true
    - title: Open source
      description: "Participate in development of Cecil via [GitHub](https://github.com/Cecilapp/Cecil)."
      icon: mark-github
      visible: true
  features:
    - id: markdown
      title: Intuitive writing experience
      description: "Cecil’s [Markdown](/documentation/content/#body) parser provides a simple way to write your content. It’s easy to learn and easy to use."
      path: documentation/content/#body
      image: images/cecil-markdown-content.png
      shadow: false
      visible: true
    - id: twig
      title: Modern template engine
      description: "Cecil’s templating, powered by [Twig](/documentation/templates/), provides the easiest way to build any website: blog, portfolio, ecommerce, etc."
      path: documentation/templates
      image: images/cecil-twig-template.png
      shadow: false
      visible: true
    - id: the-butler
      title: A ready to use blog
      description: "[The Butler](https://the-butler.cecil.app \"The Butler’s website\") is a ready to use starter blog with a user friendly [CMS](https://v1.netlifycms.org), powered by Cecil."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: false
      webp: true
      visible: true
    - id: statidocs
      title: Build a documentation website quickly
      description: "[Statidocs](https://statidocs.cecil.app) is a powerful documentation starter on top of Cecil."
      path: https://statidocs.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/statidocs/main/screenshot.png
      visible: true
    - id: links
      title: Stay the owner of your links
      description: "[Links](https://links.cecil.app) is an open source Linktree alternative powered by Cecil, Tailwind CSS and Font Awesome."
      path: https://links.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/links.cecil.app/main/assets/preview.png
      visible: true
    - id: staticast
      title: Broadcast your podcast simply
      description: "[Staticast](https://staticast.cecil.app) is a ready to use Progressive Web App to publish your podcast, with a RSS feed ready for syndication platforms, and a user friendly CMS."
      path: https://staticast.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/staticast.cecil.app/main/assets/staticast-preview.png
      shadow: false
      visible: true
    - id: photo-stream
      title: Self hosted photo stream
      description: "[Photo Stream](https://photo-stream.cecil.app) is a self hosted static website for your photos, with really goods loading performances."
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
