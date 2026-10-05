<!--
title: "Étendre"
description: "Ajoutez des fonctions et filtres personnalisés, ou utilisez un thème."
date: 2026-05-26
updated: 2026-10-05
-->
# Étendre

## Fonctions et filtres

Vous pouvez ajouter des [fonctions](/fr/documentation/templates/reference/functions/) et des [filtres](/fr/documentation/templates/reference/filters/) personnalisés avec une [**_extension Twig_**](/fr/documentation/developers/extend/#extension-twig).

## Thème

C'est simple de construire un thème, il suffit de créer un dossier `<theme>` avec la structure suivante (comme un site web mais sans pages) :

```plaintext
<mywebsite>
└─ themes
   └─ <theme>
      ├─ config.yml
      ├─ assets
      ├─ layouts
      ├─ static
      └─ translations
```
