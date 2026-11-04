---
title: Download
description: "Download Cecil: the PHAR file or a standalone binary for Linux, macOS and Windows."
date: 2018-11-21
updated: 2026-10-22
layout: download
alias: install
menu:
  main:
    weight: 70
  footer:
downloads:
  lead: "Cecil is free and open source. Download the PHAR file to run it with PHP, or a standalone binary that doesn't require PHP."
  release: "Latest release"
  phar:
    title: "PHAR"
    description: "A single file for Linux, macOS and Windows. Requires [PHP 8.3+](/documentation/getting-started/installation/#requirements)."
    file: cecil.phar
    checksum: cecil.phar.sha1
    checksum_label: "SHA-1 checksum"
  standalone:
    title: "Standalone binary"
    description: "A single executable that embeds PHP and the required extensions: no PHP required."
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
    checksum_label: "SHA-256 checksums"
    note: "Binaries are not signed: on macOS, run `xattr -d com.apple.quarantine cecil` before the first run. See the [binary limitations](/documentation/getting-started/installation/#standalone-binary)."
  releases: "All releases"
---
## Package managers {#install}

Cecil is also available through package managers, to install it globally:

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

## Update {#update}

The changelog of the <span class="version">latest release</span> is available on [GitHub](https://github.com/Cecilapp/Cecil/releases/latest).

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

The standalone binary is updated by downloading it again.

## Other versions {#versions}

To download a specific version, add it to the URL path, for instance `8.0.0`:

```bash
curl -LO https://cecil.app/download/8.0.0/cecil.phar
```

The preview version contains the latest changes that have not been released yet:

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
Requirements, global installation, verification and troubleshooting are detailed in the [installation documentation](/documentation/getting-started/installation/).
:::
