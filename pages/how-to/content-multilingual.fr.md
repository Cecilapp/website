---
title: Traduire un site en plusieurs langues
description: Traduire les pages, la configuration et les textes des templates d’un site Cecil en plusieurs langues.
path: comment-faire/contenu-multilingue
date: 2026-10-04
schedule:
  publish: 2026-10-04
---
Cecil gère nativement les sites multilingues : il suffit de déclarer les langues, d’ajouter les pages traduites, puis de les relier entre elles et de traduire les templates.

## Déclarer les langues

Définissez la langue principale et la liste des langues disponibles dans `cecil.yml` :

```yaml
language: en
languages:
  - code: en
    name: English
    locale: en_US
  - code: fr
    name: Français
    locale: fr_FR
    config:
      title: "Mon site en français"
```

Les options placées sous la clé `config` d’une langue remplacent les options globales (ici le `title` du site).

## Traduire une page

Dupliquez la page de référence et suffixez son nom de fichier avec le code de la langue :

```plaintext
pages/
├─ about.md    # la page de référence
└─ about.fr.md # la version française
```

Utilisez la variable `slug` pour traduire l’URL de la page :

```yaml
---
title: À propos
slug: a-propos
---
```

`about.md` est publiée sur `/about/` et `about.fr.md` sur `/fr/a-propos/`.

:::tip
Pour créer une page qui n’existe que dans une autre langue (sans être une traduction), définissez `language: fr` dans son front matter.
:::

## Relier les pages traduites

Chaque page expose ses traductions via `page.translations`. Ajoutez un sélecteur de langue à votre template :

```twig
{% for p in page.translations %}
  <a href="{{ url(p) }}" hreflang="{{ p.language }}">{{ site.language.name(p.language) }}</a>
{% endfor %}
```

Vous pouvez aussi inclure le partial intégré : `{{ include('partials/languages.html.twig') }}`.

## Traduire les textes des templates

Encadrez les textes avec le tag ou le filtre `trans` :

```twig
{% trans %}Read more{% endtrans %}
{{ 'Read more'|trans }}
```

Ajoutez ensuite un fichier de traduction nommé d’après la locale de la langue dans le dossier `translations` :

```yaml
# translations/messages.fr_FR.yaml
Read more: Lire la suite
```

Extrayez les textes de vos templates avec :

```bash
php cecil.phar util:translations:extract --locale=fr_FR --save
```

:::info
Consultez la documentation du [contenu multilingue](/documentation/content/#multilingual), de la [configuration des langues](/documentation/configuration/#languages) et de la [localisation des templates](/documentation/templates/#localization).
:::
