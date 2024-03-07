---
title: Download
description: "How to download Cecil."
date: 2018-11-21
updated: 2024-01-31
layout: download
alias: install
menu:
  main:
    weight: 30
  footer:
---
# Download

You can download `cecil.phar` by clicking on the "Download" button or with the following command from your terminal:

```bash
curl -LO https://cecil.app/cecil.phar
```

:::important
PHP 8.1+ is required.
:::

:::info
File integrity can be checked with the `SHA1` file, by clicking on the "File checksum" button.
:::

## Install globally

For more comfort you should install Cecil globally.

### macOS

You can install Cecil on macOS with 🍺[Homebrew](https://brew.sh):

```bash
brew install cecilapp/tap/cecil
```

### Windows

1. Move `cecil.phar` in a dedicated directory like `C:\bin`
2. Rename it from `cecil.phar` to `cecil`
3. Append `;C:\bin` to your `PATH` environment variable
4. Create a [wrapping batch script](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

### Linux

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

### PHIVE

The PHAR Installation and Verification Environment ([PHIVE](https://phar.io)).

```bash
phive install cecil
```

## Update

The easiest way to update Cecil to the last version is to use the dedicated command:

```bash
cecil self-update
```

:::info

- Homebrew: `brew upgrade`
- PHIVE: `phive update cecil`

:::

## Get a specific version

If you want to download a specific version you can specify it in the URL path.  
For instance, if you want to install the `7.55.0` version you need to put `download/7.55.0/` in the URL:

```bash
curl -LO https://cecil.app/download/7.55.0/cecil.phar
```

:::info
The [releases list](https://github.com/Cecilapp/Cecil/releases) is available on GitHub.
:::
