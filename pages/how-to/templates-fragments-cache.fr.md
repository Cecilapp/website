---
title: Accélérer les builds avec le cache de fragments
description: Mettre en cache des parties des templates Cecil pour éviter de générer le même contenu pour chaque page.
path: comment-faire/templates-cache-fragments
date: 2026-10-20
schedule:
  publish: 2026-10-20
---
Certaines parties d’un layout (pied de page, barre latérale, liste des derniers articles, etc.) sont identiques sur toutes les pages, mais sont pourtant régénérées pour chacune d’elles. Avec le cache de _fragments_, Cecil génère ces parties une seule fois par build et par langue, puis réutilise le résultat pour les autres pages.

## Envelopper le contenu avec la balise cache

Entourez la partie à mettre en cache avec la [balise `cache`](https://twig.symfony.com/doc/tags/cache.html) et une clé construite avec la fonction `cache_key` :

```twig
{% cache cache_key('footer') %}
  <footer>
    {% for entry in site.menus.footer|sort_by_weight %}
      <a href="{{ url(entry.url) }}">{{ entry.name }}</a>
    {% endfor %}
  </footer>
{% endcache %}
```

## Construire la clé de cache

La fonction `cache_key` construit une clé à partir d’un nom, d’une valeur facultative, de la langue courante et de l’ID du build :

```twig
{% cache cache_key('sidebar', page.section) %}
  {# contenu à mettre en cache #}
{% endcache %}
```

- la langue garantit que chaque langue dispose de son propre fragment
- l’ID du build change à chaque build : un fragment est donc généré une fois par build et n’est jamais réutilisé par un build suivant
- la valeur facultative (chaîne, tableau ou objet) est hachée et ajoutée à la clé, pour conserver plusieurs variantes d’un même fragment, par exemple une par section

:::warning
Le cache de _fragments_ est stocké sur disque et n’expire pas. Avec une clé fixe comme `{% cache 'footer' %}`, le fragment est partagé par toutes les langues et réutilisé par les builds suivants : les pages peuvent alors afficher un contenu obsolète ou dans la mauvaise langue jusqu’à ce que le cache soit vidé. Utilisez toujours `cache_key`.
:::

## Exemple : barre latérale des derniers articles

La liste ci-dessous est générée une seule fois par build et par langue, puis réutilisée par chaque page qui l’inclut :

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
Consultez la documentation du [cache de fragments](/fr/documentation/templates/cache/#cache-de-fragments), de la [fonction `cache_key`](/fr/documentation/templates/reference/fonctions/#cache-key) et de la [configuration du cache](/fr/documentation/configuration/cache/).
:::
