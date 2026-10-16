---
title: Télécharger
description: "Comment télécharger Cecil."
date: 2021-10-26
updated: 2026-10-16
layout: download
slug: telecharger
menu:
  main:
    weight: 70
  footer:
---
# Télécharger

Vous pouvez télécharger `cecil.phar` en cliquant sur le bouton [Télécharger](/cecil.phar), ou en exécutant la commande suivante dans votre terminal :

```bash
curl -LO https://cecil.app/cecil.phar
```

:::important
PHP 8.3+ est requis.
:::

## Installation globale {#install}

Pour plus de confort, nous vous recommandons d’installer Cecil globalement.

::::tabs
#### Linux

Déplacez `cecil.phar` dans un dossier de votre `PATH` et rendez-le exécutable :

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

#### macOS

Vous pouvez installer Cecil sur macOS avec 🍺[Homebrew](https://brew.sh) :

```bash
brew install cecilapp/tap/cecil
```

#### Windows

Vous pouvez installer Cecil sur Windows avec 🍨[Scoop](https://scoop.sh) :

```bash
scoop install https://cecil.app/scoop/cecil.json
```

:::warning
Avant le 22 mai 2025, le manifeste était disponible à l’adresse `https://cecil.app/cecil.json`. Si vous l’avez installé avant cette date, désinstallez-le puis réinstallez-le avec la nouvelle URL :

```bash
scoop uninstall cecil
scoop install https://cecil.app/scoop/cecil.json
```

:::

Ou manuellement :

1. Déplacez `cecil.phar` dans un dossier dédié, tel que `C:\bin`
2. Renommez `cecil.phar` en `cecil`
3. Ajoutez `;C:\bin` à votre variable d’environnement `PATH`
4. Créez un [script batch d’encapsulation](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

#### PHIVE

Cecil est disponible via [PHIVE](https://phar.io) (the PHAR Installation and Verification Environment) :

```bash
phive install cecil
```
::::

## Mise à jour {#update}

**Le journal des modifications de la <span class="version">dernière version</span> est disponible sur [GitHub](https://github.com/Cecilapp/Cecil/releases/latest).**

La manière la plus simple de mettre à jour Cecil vers la dernière version est d’utiliser la commande dédiée, ou votre gestionnaire de paquets :

:::code-group
#### Cecil

```bash
php cecil.phar self-update
```

#### Homebrew

```bash
brew upgrade cecilapp/tap/cecil
```

#### Scoop

```bash
scoop update cecil
```

#### PHIVE

```bash
phive update cecil
```
:::

## Télécharger une version spécifique

Pour télécharger une version spécifique, ajoutez-la au chemin de l’URL.  
Par exemple, pour télécharger la version `8.0.0`, ajoutez `download/8.0.0/` à l’URL :

```bash
curl -LO https://cecil.app/download/8.0.0/cecil.phar
```

:::info
La [liste des versions](https://github.com/Cecilapp/Cecil/releases) est disponible sur GitHub.
:::

## Télécharger la version d’aperçu

La version d’aperçu contient les dernières modifications, pas encore publiées, prêtes à être testées.

:::code-group
#### Homebrew

```bash
brew install cecilapp/tap/cecil@preview
```

#### Scoop

```bash
scoop install https://cecil.app/scoop/cecil-preview.json
```
:::
