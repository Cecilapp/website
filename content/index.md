---
title: Homepage
date: 2019-03-14
updated: 2020-11-25
blocks:
  about:
    - title: Fast & Secure
      description: 'No database, no server, no dependency: performance and security.'
      icon: zap
      visible: true
    - title: Files only
      description: Your content is stored in [Markdown](/documentation/content/#body) flat files
        with a [front matter](/documentation/content/#front-matter).
      icon: markdown
      visible: true
    - title: Customisable
      description: Powered by [Twig](https://twig.symfony.com/doc/templates.html), a
        flexible template engine, with [themes](https://github.com/Cecilapp?q=theme#org-repositories) support.
      icon: paintbrush
      visible: true
    - title: Multiples generators
      description: Pagination, sitemap, redirections, robots.txt, taxonomies, RSS are generated automatically.
      icon: hubot
      visible: true
    - title: No installation
      description: "[Download](/download/) one file and run it with PHP."
      icon: desktop-download
      visible: true
    - title: Easy to deploy
      description: "Create & deploy a new blog in 1 minute.  \n
        [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg \"Deploy to Netlify\")](/hosting/netlify/deploy/) 
        [![Deploy to Vercel](https://zeit.co/button \"Deploy to Vercel\")](/hosting/vercel/deploy/)"
      icon: rocket
      visible: true
  feature:
    - title: Intuitive templating
      description: "Cecil’s templating, powered by [Twig](https://twig.symfony.com), provides the easiest way to build anything: blog, website, portfolio, etc."
      path: documentation/templates
      image: cecil-twig-template.png
      visible: true
    - title: Markdown format
      description: "Cecil’s Markdown parser provides a simple way to write your content. It’s easy to learn and easy to use."
      path: documentation/content/#body
      image: cecil-markdown-content.png
      visible: true
    - title: Ready to use blog
      description: "The Butler is a ready to use starter blog with a user friendly CMS, powered by the Cecil static site generator."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: 0
      visible: true
pagination:
  enabled: false
---

```bash
# download
curl -LO https://cecil.app/cecil.phar
# create a new site
php cecil.phar new:site
# serve the site, with drafts
php cecil.phar serve --drafts
```
