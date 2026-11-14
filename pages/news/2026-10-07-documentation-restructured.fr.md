---
title: "Une documentation restructurée"
description: "La documentation est désormais organisée en sections et en pages courtes, plus faciles à parcourir et à rechercher."
date: 2026-10-07
slug: une-documentation-restructuree
---
La [**documentation**](/fr/documentation/) a été restructurée : les longues pages uniques (certaines dépassaient 1 500 lignes !) ont été découpées en **sections** composées de pages plus courtes et ciblées.

Cette restructuration a été rendue possible par la gestion des [**sections imbriquées**](/fr/documentation/contenu/pages/#sous-section) introduite dans [Cecil 9](/fr/actualites/2026/08/27/cecil-9.0.0-est-sorti/) : tout dossier contenant un fichier `index.md` devient une sous-section de sa section parente, avec ses propres pages, l’héritage des layouts et un fil d’Ariane. Ce site étant créé avec Cecil, la documentation est la première à en profiter !

### Nouvelle structure

La documentation est désormais organisée en 8 sections :

1. [**Bien démarrer**](/fr/documentation/bien-demarrer/) : démarrage rapide, installation, structure des répertoires et kits de démarrage
2. [**Contenu**](/fr/documentation/contenu/) : pages, front matter, Markdown, contenu multilingue et dynamique
3. [**Templates**](/fr/documentation/templates/) : règles de résolution, variables, composants, localisation, cache, extension, et une référence des [fonctions et filtres](/fr/documentation/templates/reference/)
4. [**Assets**](/fr/documentation/assets/) : images, traitement et fournisseurs CDN (une toute nouvelle section, auparavant intégrée aux _Templates_)
5. [**Configuration**](/fr/documentation/configuration/) : une page par sujet de configuration (site, langues, pages, assets, sortie, cache, serveur, etc.)
6. [**Commandes**](/fr/documentation/commandes/) : `new:site`, `new:page`, `serve`, `build` et `doctor`
7. [**Déployer**](/fr/documentation/deployer/) : plateformes Jamstack, déploiement continu et hébergement statique
8. [**Développeurs**](/fr/documentation/developpeurs/) : étendre Cecil, l’utiliser comme bibliothèque et comprendre son architecture

### Une navigation simplifiée

- Une **arborescence de navigation** dans la barre latérale indique où vous vous trouvez et permet de déplier chaque section.
- La page d’accueil de chaque section liste ses pages avec une courte description.
- La recherche indexe désormais chaque page et son introduction : les résultats pointent directement vers le bon sujet.

La documentation est disponible en anglais et en français. Si vous repérez une erreur ou un oubli, utilisez le lien « Suggérer une modification » en bas de chaque page.
