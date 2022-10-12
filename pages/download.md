---
title: Download
description: "How to download Cecil."
date: 2018-11-21
updated: 2022-05-29
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
php cecil.phar --version
```

> [PHP](https://www.php.net/manual/en/install.php) 7.1+ is required.  
> File integrity can be checked with the `SHA1` file, by clicking on the "File checksum" button.

## Install globally

For more comfort you should install Cecil globally.

### macOS and Linux

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

### Windows

1. Move `cecil.phar` in a dedicated directory like `C:\bin`
2. Rename it from `cecil.phar` to `cecil`
3. Append `;C:\bin` to your `PATH` environment variable
4. Create a [wrapping batch script](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)

## Update

The easiest way to update Cecil to the last version is to use the dedicated command:

```bash
cecil self-update
```

## Get a specific version

If you want to download a specific version you can specify it in the URL path.  
For instance, if you want to install the `4.0.0` version you need to put `download/4.0.0/` in the URL:

```bash
curl -LO https://cecil.app/download/4.0.0/cecil.phar
```

> See the [releases list](https://github.com/Cecilapp/Cecil/releases) on GitHub.
