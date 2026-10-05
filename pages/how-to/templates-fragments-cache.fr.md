---
title: Accélérer les builds avec le cache de fragments
description: Mettre en cache des parties des templates Cecil pour éviter de générer le même contenu pour chaque page.
path: comment-faire/templates-fragments-cache
date: 2026-10-20
schedule:
  publish: 2026-10-20
---
Certaines parties d’un layout (pied de page, barre latérale, liste des derniers articles, etc.) sont identiques sur toutes les pages, mais sont pourtant générées à nouveau pour chacune d’elles. Avec le cache de _fragments_, Cecil génère une seule fois ces parties et réutilise le résultat.

## Envelopper le contenu avec la balise cache

Entourez la partie à mettre en cache avec la [balise `cache`](https://twig.symfony.com/doc/tags/cache.html) et une clé :

```twig
{% cache 'footer' %}
  <footer>
    {% for entry in site.menus.footer|sort_by_weight %}
      <a href="{{ url(entry.url) }}">{{ entry.name }}</a>
    {% endfor %}
  </footer>
{% endcache %}
```

## Générer une clé unique

Le cache de _fragments_ est persistant : avec une clé trop générique, une page pourrait afficher un mauvais contenu. Utilisez la fonction `cache_key` pour construire une clé à partir d’un nom et d’une valeur :

```twig
{% cache cache_key('footer', site.menus.footer) %}
  {# contenu à mettre en cache #}
{% endcache %}
```

La fonction ajoute au nom un hash de la valeur (chaîne, tableau ou objet), la langue courante et l’ID du build : lorsque la valeur change, la clé change aussi et le fragment est généré à nouveau.

## Exemple : barre latérale des derniers articles

La liste ci-dessous est générée une seule fois, puis réutilisée par chaque page qui l’inclut :

```twig
{% cache cache_key('latest-posts') %}
  <aside>
    <h2>Latest posts</h2>
    <ul>
    {% for post in site.pages.showable|filter_by('section', 'blog')|sort_by_date|slice(0, 5) %}
      <li><a href="{{ url(post) }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </aside>
{% endcache %}
```

:::warning
Ne mettez pas en cache un contenu qui dépend de la page courante (ex. : élément actif du menu, titre de la page), ou incluez une valeur de la page (comme `page.id`) dans la clé.
:::

## Vider le cache

Vider uniquement le cache des fragments :

```bash
php cecil.phar cache:clear:templates --fragments
```

Ou vider tout le cache des templates, ou tous les caches :

```bash
php cecil.phar cache:clear:templates
php cecil.phar cache:clear
```

Pendant le développement local, vous pouvez aussi vider le cache avant chaque build :

```bash
php cecil.phar serve --clear-cache
```

:::info
Consultez la documentation du [cache de fragments](/documentation/templates/#fragments-cache), de la [fonction `cache_key`](/documentation/templates/#cache-key) et de la [configuration du cache](/documentation/configuration/#cache).
:::
