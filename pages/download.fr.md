---
title: Télécharger
description: "Télécharger Cecil : le fichier PHAR ou un binaire autonome pour Linux, macOS et Windows."
date: 2021-10-26
updated: 2026-10-22
layout: download
slug: telecharger
menu:
  main:
    weight: 70
  footer:
downloads:
  lead: "Cecil est libre et gratuit. Téléchargez le fichier PHAR pour l’exécuter avec PHP, ou un binaire autonome qui ne nécessite pas PHP."
  release: "Dernière version"
  phar:
    title: "PHAR"
    description: "Un unique fichier pour Linux, macOS et Windows. Nécessite [PHP 8.3+](/fr/documentation/bien-demarrer/installation/#prerequis)."
    file: cecil.phar
    checksum: cecil.phar.sha1
    checksum_label: "Somme de contrôle SHA-1"
  standalone:
    title: "Binaire autonome"
    description: "Un unique exécutable qui embarque PHP et les extensions requises : PHP n’est pas nécessaire."
    platforms:
      - name: Linux
        icon: linux
        files:
          - { label: "x64", file: cecil-linux-x64 }
          - { label: "ARM64", file: cecil-linux-arm64 }
      - name: macOS
        icon: apple
        files:
          - { label: "Apple Silicon", file: cecil-macos-arm64 }
          - { label: "Intel", file: cecil-macos-x64 }
      - name: Windows
        icon: windows
        files:
          - { label: "x64", file: cecil-windows-x64.exe }
    checksum: cecil-binaries.sha256
    checksum_label: "Sommes de contrôle SHA-256"
    note: "Les binaires ne sont pas signés : sur macOS, exécutez `xattr -d com.apple.quarantine cecil` avant la première exécution. Consultez les [limitations du binaire](/fr/documentation/bien-demarrer/installation/#standalone-binary)."
  releases: "Toutes les versions"
---
## Gestionnaires de paquets {#install}

Cecil est aussi disponible via des gestionnaires de paquets, pour l’installer globalement :

:::code-group
#### Homebrew

```bash
brew install cecilapp/tap/cecil
```

#### Scoop

```bash
scoop install https://cecil.app/scoop/cecil.json
```

#### PHIVE

```bash
phive install cecil
```

#### Composer

```bash
composer global require cecil/cecil
```
:::

<!-- standalone -->

## Mise à jour {#update}

Le journal des modifications de la <span class="version">dernière version</span> est disponible sur [GitHub](https://github.com/Cecilapp/Cecil/releases/latest).

:::code-group
#### PHAR

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

#### Composer

```bash
composer global update cecil/cecil
```
:::

Le binaire autonome se met à jour en le téléchargeant à nouveau.

## Autres versions {#versions}

Pour télécharger une version spécifique, ajoutez-la au chemin de l’URL, par exemple `8.0.0` :

```bash
curl -LO https://cecil.app/download/8.0.0/cecil.phar
```

La version d’aperçu contient les dernières modifications, pas encore publiées :

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

:::info
Les prérequis, l’installation globale, la vérification et le dépannage sont détaillés dans la [documentation d’installation](/fr/documentation/bien-demarrer/installation/).
:::
