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
      [![Déployer sur Vercel](https://zeit.co/button \"Déployer sur Vercel\")](/hosting/vercel/deploy/)"
    icon: rocket
    visible: true
  feature:
    - title: Gestion du contenu
      description: "L’analyseur Markdown de Cecil fournit un moyen simple d'écrire votre contenu. Il est facile à apprendre et facile à utiliser."
      path: documentation/content/#body
      image: cecil-markdown-content.png
      visible: true
    - title: Des modèles intuitifs
      description: "Les modèles de Cecil, motorisés par [Twig](https://twig.symfony.com), offrent le moyen le plus simple de créer n’importe quoi : blog, site Web, portfolio, e-commerce, etc."
      path: documentation/templates
      image: cecil-twig-template.png
      visible: true
    - title: Un blog prêt à l’emploi
      description: "The Butler est un blog de démarrage prêt à l’emploi avec un CMS convivial, motorisé par Cecil."
      path: https://the-butler.cecil.app
      image: https://raw.githubusercontent.com/Cecilapp/the-butler/master/assets/images/cecil-preview.png
      shadow: 0
      visible: true
pagination:
  enabled: false
---
```bash
# télécharger
curl -LO https://cecil.app/cecil.phar
# créer un nouveau site
php cecil.phar new:site
# servir le site
php cecil.phar serve
```
