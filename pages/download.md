---
title: Download
description: "How to download Cecil."
date: 2018-11-21
updated: 2026-10-04
layout: download
alias: install
menu:
  main:
    weight: 70
  footer:
---
# Download

You can download `cecil.phar` by clicking the [Download](/cecil.phar) button, or by running the following command in your terminal:

```bash
curl -LO https://cecil.app/cecil.phar
```

:::important
PHP 8.3+ is required.
:::

## Install globally {#install}

For convenience, we recommend installing Cecil globally.

### macOS

You can install Cecil on macOS with 🍺[Homebrew](https://brew.sh):

```bash
brew install cecilapp/tap/cecil
```

### Windows

You can install Cecil on Windows with 🍨[Scoop](https://scoop.sh):

```bash
scoop install https://cecil.app/scoop/cecil.json
```

:::warning
Before May 22, 2025, the manifest was available at `https://cecil.app/cecil.json`. If you installed it before that date, uninstall it and reinstall it with the new URL:

```bash
scoop uninstall cecil
scoop install https://cecil.app/scoop/cecil.json
```

:::

Or manually:

1. Move `cecil.phar` to a dedicated directory, such as `C:\bin`
2. Rename `cecil.phar` to `cecil`
3. Append `;C:\bin` to your `PATH` environment variable
4. Create a [batch wrapper script](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

### PHIVE

Cecil is available through [PHIVE](https://phar.io) (the PHAR Installation and Verification Environment):

```bash
phive install cecil
```

### Linux

Move `cecil.phar` to a directory in your `PATH` and make it executable:

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

## Update {#update}

**The changelog of the <span class="version">latest release</span> is available on [GitHub](https://github.com/Cecilapp/Cecil/releases/latest).**

The easiest way to update Cecil to the latest version is to use the dedicated command, or your package manager:

```bash
php cecil.phar self-update
# Homebrew
brew upgrade cecilapp/tap/cecil
# Scoop
scoop update cecil
# PHIVE
phive update cecil
```

## Download a specific version

To download a specific version, add it to the URL path.  
For instance, to download version `8.0.0`, add `download/8.0.0/` to the URL:

```bash
curl -LO https://cecil.app/download/8.0.0/cecil.phar
```

:::info
The [list of releases](https://github.com/Cecilapp/Cecil/releases) is available on GitHub.
:::

## Download the preview version

The preview version contains the latest changes that have not been released yet, ready for testing.

- Homebrew: `brew install cecilapp/tap/cecil@preview`
- Scoop: `scoop install https://cecil.app/scoop/cecil-preview.json`
