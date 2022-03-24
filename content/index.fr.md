---
title: Accueil
date: 2021-11-01
updated: 2022-03-07
blocks:
  about:
  - title: Rapide & Sécurisé
    description: 'Pas de base de données, pas de serveur, pas de dépendance : performance et sécurité.'
    icon: zap
    visible: true
  - title: Uniquement des fichiers
    description: Votre contenu est stocké dans des fichiers plat au format [Markdown](/documentation/content/#body) avec un [front matter](/documentation/content/#front-matter).
    icon: markdown
    visible: true
  - title: Personnalisable
    description: Propulsé par [Twig](https://twig.symfony.com/doc/templates.html), un moteur de template flexible, et supporte les [themes](https://github.com/Cecilapp?q=theme#org-repositories).
    icon: paintbrush
    visible: true
  - title: Générateurs multiples
    description: Pagination, sitemap, redirections, robots.txt, taxonomies, RSS sont générés automatiquement.
    icon: hubot
    visible: true
  - title: Pas d’installation
    description: "[Téléchargez](/download/) un fichier et exécutez le avec PHP."
    icon: desktop-download
    visible: true
  - title: Facile à déployer
    description: "Créez et déployez un nouveau blog en 1 minute.  \n
      [![Déployer sur Netlify](https://www.netlify.com/img/deploy/button.svg \"Déployer sur Netlify\")](/hosting/netlify/deploy/) 
      [![Déployer sur Vercel](https://vercel.com/button \"Déployer sur Vercel\")](/hosting/vercel/deploy/)"
    icon: rocket
    visible: true
  feature:
    - title: Expérience d’écriture intuitive
      description: "L’analyseur [Markdown](https://fr.wikipedia.org/wiki/Markdown \"Markdown sur wikipédia\") de Cecil fournit un moyen simple d'écrire votre contenu. Il est facile à apprendre et facile à utiliser."
      path: documentation/content/#body
      image: cecil-markdown-content.png
      visible: true
    - title: Moteur de template moderne
      description: "Les modèles de Cecil, propulsés par [Twig](https://twig.symfony.com \"Le site web de Twig\"), offrent le moyen le plus simple de créer n’importe quel site web : blog, portfolio, e-commerce, etc."
      path: documentation/templates
      image: cecil-twig-template.png
      visible: true
    - title: Un blog prêt à l’emploi
      description: "[The Butler](https://the-butler.cecil.app \"Le site web de The Butler\") est un blog de démarrage prêt à l’emploi avec un CMS convivial, propulsé par Cecil."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: 0
      visible: true
  sponsor:
    - title: studio cecillie
      logo: logos/cecillie.png
      logo_dark: logos/cecillie-dark.png
      url: https://studio.cecillie.fr
      visible: true
    - title: Netlify
      logo: logos/netlify.png
      logo_dark: logos/netlify-dark.png
      url: https://www.netlify.com
      visible: true
    - title: Vercel
      logo: logos/vercel.png
      logo_dark: logos/vercel-dark.png
      url: https://vercel.com/?utm_source=cecilapp&utm_campaign=oss
      visible: true
pagination:
  enabled: false
output: ['html', 'atom']
---
```bash
# télécharger
curl -LO https://cecil.app/cecil.phar
# créer
php cecil.phar new:site
# servir
php cecil.phar serve
```
