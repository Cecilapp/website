---
title: "Quoi de neuf depuis la version 8.79 ?"
description: "Synthèse des fonctionnalités majeures ajoutées entre Cecil 8.80.0 et 8.106.0."
date: 2026-06-14
slug: quoi-de-neuf-depuis-la-version-8-79
---
La dernière version majeure disponible est la **8.106.0**. Voici une synthèse ciblée des principales fonctionnalités introduites depuis **Cecil 8.79.0**.

### Expérience améliorée et visibilité des performances

- **Indicateur de progression du build** (8.101.0) : l'exécution des builds affiche désormais une barre de progression, ce qui améliore la lisibilité des traitements longs.
- **Sortie de métriques enrichie** (8.101.0) : les métriques incluent désormais une ligne de durée totale avec comparaison entre exécutions, pratique pour suivre l'évolution des performances.
- **Temps bruts et diffs de métriques** (8.87.0) : la sortie des métriques expose des temps bruts et des écarts, facilitant la détection des régressions et des gains.
- **Évolutions autour de l'identifiant de build et du cache** (8.80.x) : l'identifiant de build est exposé et intégré à la logique de cache, avec une évolution des mécanismes de hachage pour améliorer la cohérence du cache.

### Meilleur rendu des templates

- **Support des variantes d'images pour le mode sombre** (8.95.0) : les templates peuvent gérer des variantes dédiées au dark mode pour mieux adapter le rendu visuel.
- **Option `layouts.autoescape`** (8.97.0) : ce réglage apporte un contrôle plus fin du comportement d'échappement des templates.
- **Traduction des blocs de code désactivée** (8.98.0) : le code inline et les blocs fenced ne sont plus traduits, ce qui évite les altérations involontaires du contenu technique.
- **Helper Twig `cache_key`** (8.88.0) : les templates peuvent générer des clés de cache explicites pour un comportement plus prévisible du cache.

### Améliorations du pipeline contenu et images

- **Support de la propriété `name` dans les menus du front matter** (8.90.0) : les entrées de menu peuvent désormais définir un nom dédié via `name`.
- **Support du driver image `libvips`** (8.91.0) : le traitement d'images peut désormais utiliser libvips comme option de driver.
- **Localisation des images Markdown pour les pages traduites** (8.92.0) : les assets d'images Markdown peuvent désormais être localisés selon la langue des pages.

### Outils de qualité et de diagnostic

- **Nouvelle commande `doctor`** (8.103.0) : une commande dédiée aux diagnostics a été ajoutée pour faciliter l'identification des problèmes.
- **Nouvelle commande `doctor:seo`** (8.105.0) : un audit SEO dédié a été ajouté, avec commande, documentation et tests associés.

### Meilleure expérience de développement

- **Mode `serve` en arrière-plan et commande d'arrêt** (8.104.0) : le serveur de développement supporte l'exécution en arrière-plan et un arrêt explicite via `serve:stop`.
- **Support du chargement `.env`** (8.106.0) : la configuration d'environnement peut désormais être chargée via dotenv pour simplifier la gestion des variables locales.

### Breaking change à prendre en compte

- **Suppression de l'option `assets.leading_slash`** (8.81.0) : cette option a été retirée et peut nécessiter une mise à jour de configuration.
