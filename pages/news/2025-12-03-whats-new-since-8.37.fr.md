---
title: "Quoi de neuf depuis la version 8.37 ?"
description: "Listes des changements depuis la sortie de Cecil 8.37.0."
date: 2025-12-03
typora-copy-images-to: ../../assets/images/news
slug: quoi-de-neuf-depuis-la-version-8-37
alias: actualites/2025/12/03/quoi-de-neuf-depuis-la-version-8-37-0
---
La dernière version en date est la **8.74**, sortie le 2 décembre 2025. Voici les principales nouveautés et changements depuis la version 8.37.

### Nouvelles fonctionnalités majeures

- **Support amélioré des images responsives** — ajout du support de la *pixel density* (densité de pixels / DPR) pour les images responsive (permet d’optimiser les srcset en fonction des écrans à haute densité).
- **Possibilité d’outrepasser robots.txt** — possibilité de créer une page `pages/robots.md` afin de remplacer le `robots.txt` par défaut. Pratique pour gérer exclusions d’indexation par projet.
- **Amélioration du post-processing** — poursuite des capacités d’extensions/post-processors (héritées de la branche 8.x) pour permettre des traitements finaux des sorties.

### Améliorations & ergonomie

- **Simplification de la structure de configuration** — options plus faciles à désactiver (`option: false` ou `option: enabled: false`) ; import automatique des config de thèmes via `setConfig()` / `setSourceDir()`.
- **Refonte / renforcement du cache** — nouveau mécanisme de cache : plus robuste (reconstruction automatique quand des fichiers changent), au prix d’un léger coût perf dans certains cas.
- **Meilleure gestion et affichage des messages d’erreur** — messages d’erreur clarifiés pour faciliter le debugging.

### Corrections majeures

- **Gestion des assets distants mise à jour** — remote assets mieux gérés (mise en cache, fallback, etc.).
- **Corrections pour les templates et filtres** — nettoyage des éléments dépréciés/restés dans la doc (suite de la migration 8.0 → 8.x) et corrections diverses liées au rendu d’assets/templates.

### Breaking changes & points d’attention

- **Suppression des taxonomies par défaut** — `tag` et `category` ne sont plus créées automatiquement : si vous utilisiez ces taxonomies, il faut **les déclarer explicitement** dans la configuration `taxonomies:`. Risque de pages cassées si tu mets à jour sans adapter la config.
- **Renommages / déplacement d’options** — plusieurs options ont été renommées ou déplacées (ex. `pagination` → `pages:pagination`, `paths` → `pages:paths`, `remote_fallback` → `fallback`, `force_slash` → `leading_slash`).
- **Vérifier les templates personnalisés** — certains fichiers Twig et filtres dépréciés ont été supprimés par les évolutions 8.x ; il faut relire et mettre à jour les templates personnalisés.

---

### Actions recommandées afin de migrer

1. Ajouter explicitement `taxonomies:` si vous comptez utiliser `tags`/`category`.
2. Contrôler et adapter les options renommées (pagination, paths, assets fallback, leading_slash).
3. Tester la génération complète (build) et vérifier le cache / assets distants.
4. Revoir les templates Twig (fonctions/filtres dépréciés) et profiter des nouvelles fonctions (DPR / pixel density dans images).
