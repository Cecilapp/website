---
title: Télécharger
description: "Comment télécharger Cecil."
date: 2021-10-26
updated: 2026-01-15
layout: download
slug: telecharger
menu:
  main:
    weight: 30
  footer:
---
# Télécharger

Vous pouvez télécharger `cecil.phar` en cliquant sur le bouton ["Télécharger"](/cecil.phar) ou via la commande suivante depuis votre terminal :

```bash
curl -LO https://cecil.app/cecil.phar
```

:::important
PHP 8.2+ est requis.
:::

## Installation globale {#install}

Pour plus de confort vous devriez installer Cecil globalement.

### macOS

Vous pouvez installer Cecil sur macOS avec 🍺[Homebrew](https://brew.sh):

```bash
brew install cecilapp/tap/cecil
```

### Windows

Vous pouvez installer Cecil sur Windows avec 🍨[Scoop](https://scoop.sh):

```bash
scoop install https://cecil.app/scoop/cecil.json
```

:::warning
Avant le 22 mai 2025, le manifeste était disponible depuis `https://cecil.app/cecil.json`, donc si vous l’avez déjà installé, vous devez le désinstaller et le réinstaller avec la nouvelle URL:

```bash
scoop uninstall cecil
scoop install https://cecil.app/scoop/cecil.json
```

:::

Ou manuellement :

1. Déplacez `cecil.phar` dans un dossier dédié tel que `C:\bin`
2. Renommez `cecil.phar` vers `cecil`
3. Ajoutez `;C:\bin` à votre variable d’environnement `PATH`
4. Créez un ["wrapping batch script"](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

### PHIVE

Cecil est disponible via [PHIVE](https://phar.io) (The PHAR Installation and Verification Environment) :

```bash
phive install cecil
```

### Linux

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

## Mise à jour {#update}

**Le journal des modifications de la <span class="version">dernière version</span> est disponible sur [GitHub](https://github.com/Cecilapp/Cecil/releases/latest).**

La manière la plus simple de mettre à jour Cecil vers la dernière version est d’utiliser la commande dédiée :

```bash
php cecil.phar self-update
# Homebrew
brew install cecilapp/tap/cecil
# Scoop
scoop update cecil
# PHIVE
phive update cecil
```

## Télécharger une version spécifique

Si vous souhaitez télécharger une version spécifique vous pouvez la spécifier dans le chemin de l’URL.  
Par exemple, si vous souhaitez installer la version `8.0.0` vous devez ajouter `download/8.0.0/` dans l’URL :

```bash
curl -LO https://cecil.app/download/8.0.0/cecil.phar
```

:::info
La [releases list](https://github.com/Cecilapp/Cecil/releases) est disponible sur GitHub.
:::

## Télécharger la version d’aperçu

La version d’aperçu est la version non encore déployée, mais prête à être testée.

- Homebrew: `brew install cecilapp/tap/cecil@preview`
- Scoop: `scoop install https://cecil.app/scoop/cecil-preview.json`
