<!--
title: "Contenu"
description: "Créez et organisez votre contenu : pages, front matter, Markdown, contenu multilingue et dynamique."
date: 2026-03-27
updated: 2026-10-03
weight: 2
sortby: weight
alias: documentation/contenu
-->
# Contenu

Il existe différents types de contenu dans Cecil :

**Pages**
: Les pages constituent le contenu principal du site, rédigé en [Markdown](/fr/documentation/content/markdown/).
: Les pages doivent être organisées de manière à refléter le site Web généré.
: Les pages peuvent être organisées en _Sections_ (dossiers racine) (ex. : « Blog », « Projet », etc.).

**Assets**
: Les assets sont des fichiers transformés (c.-à-d. : images redimensionnées, Sass compilé, scripts minifiés, etc.) avec la fonction de template [`asset()`](/fr/documentation/assets/#asset).

**Static files**
: Les fichiers statiques sont copiés tels quels dans le site généré (ex. : `static/fichier.pdf` -> `fichier.pdf`).

**Data files**
: Les fichiers de données sont des collections de variables personnalisées, exposées dans les [templates](/fr/documentation/templates/) via [`site.data`](/fr/documentation/templates/variables/#site-data).
