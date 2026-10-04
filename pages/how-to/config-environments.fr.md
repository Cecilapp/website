---
title: Utiliser des réglages différents selon l’environnement
description: Surcharger la configuration de Cecil selon l’environnement avec les variables d’environnement CECIL_ et des fichiers de configuration supplémentaires.
path: comment-faire/config-environments
date: 2026-10-12
schedule:
  publish: 2026-10-12
---
Le site local et le site de production partagent rarement les mêmes réglages : URL de base, mode debug, répertoire de sortie… Cecil permet de conserver un unique `cecil.yml` et de le surcharger selon l’environnement.

## Garder les valeurs de production dans `cecil.yml`

```yaml
title: "My site"
baseurl: https://example.com/
debug: false
```

## Surcharger avec des fichiers de configuration supplémentaires

Créez un fichier contenant uniquement les clés à modifier, par exemple `config/dev.yml` :

```yaml
baseurl: http://localhost:8000/
debug: true
```

Puis chargez-le avec l’option `--config`, disponible avec les commandes `build` et `serve` :

```bash
php cecil.phar serve --config=config/dev.yml
```

Vous pouvez passer plusieurs fichiers, séparés par des virgules. Ils sont fusionnés dans l’ordre après `cecil.yml` : chaque fichier surcharge donc les précédents.

```bash
php cecil.phar build --config=config/prod.yml,config/local.yml
```

## Surcharger avec des variables d’environnement

Toute clé de configuration peut être définie par une variable d’environnement préfixée par `CECIL_`, en majuscules. Les clés imbriquées sont séparées par un underscore (par exemple `CECIL_OUTPUT_DIR` définit `output.dir`) :

```bash
export CECIL_BASEURL="https://staging.example.com/"
export CECIL_DEBUG=true
php cecil.phar build
```

Cecil charge aussi un fichier `.env` à la racine du site, s’il existe (les variables déjà définies par le système sont conservées) :

```dotenv
CECIL_BASEURL="http://localhost:8000/"
CECIL_DEBUG=true
```

Les variables d’environnement sont appliquées par-dessus les fichiers de configuration, ce qui les rend pratiques en CI, par exemple :

```yaml
# .gitlab-ci.yml
pages:
  variables:
    CECIL_ENV: production
    CECIL_OUTPUT_DIR: public
```

## Lire l’environnement dans les templates

Utilisez la fonction `getenv` pour adapter les templates, par exemple pour n’inclure les statistiques d’audience qu’en production :

```twig
{% if getenv('CECIL_ENV') == 'production' %}
  {{ include('partials/analytics.html.twig') }}
{% endif %}
```

La variable `site.debug` indique si le mode debug est activé :

```twig
{% if site.debug %}{{ dump(page) }}{% endif %}
```

:::info
Consultez la documentation pour [surcharger la configuration](/documentation/configuration/#override-configuration), l’[option `debug`](/documentation/configuration/#debug) et la [fonction `getenv`](/documentation/templates/#getenv).
:::
