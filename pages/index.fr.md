---
title: Accueil
date: 2021-11-01
updated: 2023-10-20
blocks:
  about:
    - title: Rapide & sécurisé
      description: 'Pas de base de données, pas de serveur, pas de dépendance : performance et sécurité.'
      icon: zap
      visible: true
    - title: Uniquement des fichiers
      description: Votre contenu est stocké dans des fichiers plat au format [Markdown](/documentation/content/#body) avec un [front matter](/documentation/content/#front-matter).
      icon: markdown
      visible: true
    - title: Personnalisable
      description: Propulsé par [Twig](/documentation/templates/), un moteur de template flexible, et supporte les [themes](https://github.com/Cecilapp?q=theme#org-repositories).
      icon: paintbrush
      visible: true
    - title: Générateurs multiples
      description: Pagination, sitemap, redirections, robots.txt, taxonomies, RSS sont générés automatiquement.
      icon: hubot
      visible: true
    - title: Optimisation des images
      description: "Les [images adaptatives](/documentation/content/#responsive) sont générées automatiquement, convertiss en [WebP](/documentation/content/#webp) et [compressées](/documentation/configuration/#assets) afin de réduire le temps de chargement."
      icon: image
      visible: true
    - title: Internationalisation & localisation
      description: "Capacités [multilingue](/documentation/content/#multilingual) avec localisation des contenus et traduction de templates."
      icon: globe
      visible: true
    - title: Orienté SEO
      description: "Cecil fourni des [aides au SEO](/documentation/configuration/#metatags) en générant les meta éléments Open Graph, les données structurées et plus encore."
      icon: search
      visible: true
    - title: Pas d’installation
      description: "[Téléchargez](/fr/download/) un fichier et exécutez le avec PHP."
      icon: desktop-download
      visible: true
    - title: Facile à déployer
      description: "Créez et déployez un nouveau blog en 1 minute.  \n
        [![Déployer sur Netlify](https://www.netlify.com/img/deploy/button.svg)](/hosting/netlify/deploy/ \"Déployer sur Netlify\") 
        [![Déployer sur Vercel](https://vercel.com/button/default.svg)](/hosting/vercel/deploy/ \"Déployer sur Vercel\")"
      icon: rocket
      visible: true
  features:
    - id: markdown
      title: Expérience d’écriture intuitive
      description: "L’analyseur [Markdown](/documentation/content/#body) de Cecil fournit un moyen simple d’écrire votre contenu. Il est facile à apprendre et facile à utiliser."
      path: documentation/content/#body
      image: images/cecil-markdown-content.png
      visible: true
    - id: twig
      title: Moteur de template moderne
      description: "Les modèles de Cecil, propulsés par [Twig](/documentation/templates/), offrent le moyen le plus simple de créer n’importe quel site web : blog, portfolio, e-commerce, etc."
      path: documentation/templates
      image: images/cecil-twig-template.png
      visible: true
    - id: the-butler
      title: Un blog prêt à l’emploi
      description: "[The Butler](https://the-butler.cecil.app \"Le site web de The Butler\") est un blog de démarrage prêt à l’emploi avec un CMS convivial, propulsé par Cecil."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: false
      webp: false
      visible: true
    - id: staticast
      title: Diffuser son podcast simplement
      description: "Staticast est une application Web progressive prête à l’emploi permettant de publier votre podcast, avec un flux RSS prêt pour les plateformes de syndication et un CMS convivial."
      path: https://staticast.cecil.app
      image: https://github.com/Cecilapp/staticast.cecil.app/raw/main/assets/staticast-preview.png
      shadow: false
      visible: true
    - id: photo-stream
      title: Flux de photos auto-hébergé
      description: "Photo Stream est un site Web statique auto-hébergé pour vos photos, avec de très bonnes performances de chargement."
      path: https://photo-stream.cecil.app
      image: https://github.com/Cecilapp/photo-stream.cecil.app/raw/main/assets/preview.png
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
      visible: false
    - title: Vercel
      logo: /images/logos/vercel.png
      logo_dark: /images/logos/vercel-dark.png
      url: https://vercel.com/?utm_source=cecil&utm_campaign=oss
      visible: true
pagination:
  enabled: false
pagesfrom: news
---
