---
title: Télécharger
description: "Comment télécharger Cecil."
date: 2021-10-26
updated: 2024-01-31
layout: download
menu:
  main:
    weight: 30
  footer:
slug: telecharger
---
# Télécharger

Vous pouvez télécharger `cecil.phar` en cliquant sur le bouton "Télécharger" ou via la commande suivante depuis votre terminal :

```bash
curl -LO https://cecil.app/cecil.phar
```

:::important
[PHP](https://www.php.net/manual/fr/install.php) 8.1+ est requis.
:::

:::info
L’intégrité du fichier peut être vérifié via le fichier `SHA1`, en cliquant sur le bouton "Somme de contrôle du fichier".
:::

## Installation globale

Pour plus de confort vous devriez installer Cecil globalement.

### macOS

Vous pouvez installer Cecil sur macOS avec 🍺[Homebrew](https://brew.sh):

```bash
brew install cecilapp/tap/cecil
```

### Windows

1. Déplacez `cecil.phar` dans un dossier dédié tel que `C:\bin`
2. Renommez `cecil.phar` vers `cecil`
3. Ajoutez `;C:\bin` à votre variable d’environnement `PATH`
4. Créez un ["wrapping batch script"](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

### Linux

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

### [PHIVE](https://phar.io)

```bash
phive install cecilapp/cecil
```

## Mise à jour

La manière la plus simple de mettre à jour Cecil vers la dernière version est d’utiliser la commande dédiée :

```bash
php cecil self-update
```

:::important
Avec Homebrew vous devez utiliser `brew upgrade`.
:::

## Obtenir une version spécifique

Si vous souhaitez télécharger une version spécifique vous pouvez la spécifier dans le chemin de l’URL.  
Par exemple, si vous souhaitez installer la version `7.55.0` vous devez ajouter `download/7.55.0/` dans l’URL :

```bash
curl -LO https://cecil.app/download/7.55.0/cecil.phar
```

:::info
La _[releases list](https://github.com/Cecilapp/Cecil/releases)_ est disponible sur GitHub.
:::
