---
title: Rediriger d’anciennes URL
description: Conserver le fonctionnement des anciens liens dans Cecil avec les variables de front matter redirect et alias.
path: comment-faire/contenu-redirection-alias
date: 2026-10-13
schedule:
  publish: 2026-10-13
---
Quand une page est déplacée ou renommée, son ancienne URL ne doit pas mener à une erreur 404. Cecil propose deux variables de front matter pour cela : `alias` et `redirect`.

## Rediriger d’anciennes URL vers une page

La variable `alias` liste les anciens chemins de la page courante. Chacun d’eux redirige vers la page :

```yaml
---
title: About
alias:
  - contact
  - about-us
---
```

Dans cet exemple, `/contact/` et `/about-us/` redirigent vers `/about/`.

## Rediriger une page vers une autre URL

La variable `redirect` transforme une page en redirection vers l’URL indiquée, interne ou externe :

```yaml
---
title: Ancienne documentation
redirect: "https://cecil.app/documentation/"
---
```

## Sans fichier Markdown

Si l’ancienne page n’a plus de contenu, déclarez-la comme [page virtuelle](/documentation/configuration/#pages-virtual) dans `cecil.yml` :

```yaml
pages:
  virtual:
    - path: code
      redirect: https://github.com/Cecilapp/Cecil
```

## Pages générées

Pour chaque alias et chaque redirection, Cecil génère une page avec le template intégré [`redirect.html.twig`](https://github.com/Cecilapp/Cecil/blob/main/resources/layouts/_default/redirect.html.twig). Elle contient :

- un `<link rel="canonical">` vers l’URL cible
- une balise `<meta name="robots" content="noindex">`, pour que les moteurs de recherche ne l’indexent pas
- une balise `<meta http-equiv="refresh">` et une redirection JavaScript
- un lien de secours pour les visiteurs

:::tip
Pour personnaliser cette page, créez votre propre template `layouts/redirect.html.twig` : il est prioritaire sur le template intégré.
:::

:::info
Consultez la documentation des variables [`redirect`](/documentation/content/#redirect) et [`alias`](/documentation/content/#alias).
:::
