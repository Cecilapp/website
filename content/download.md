---
title: Download
layout: download.html
alias: install
---

# Download

You can download `cecil.phar` by clicking on the "Download" button or with the following command from your terminal:

```bash
curl -SOL https://cecil.app/cecil.phar
```

> [PHP](http://php.net/manual/en/install.php) 7.1+ is required.

> File integrity can be checked with the `SHA1` file, by clicking on the "File checksum" button.

## Get a specific version

If you want to download a specific version you can specify it in the URL path.
For instance, if you want to install the `4.0.0` version you need to put `download/4.0.0/` in the URL:

```bash
curl -SOL https://cecil.app/download/4.0.0/cecil.phar
```

See the [releases list](https://github.com/Cecilapp/Cecil/releases) on GitHub.

## Install globally

For more comfort you should install Cecil globally.

### macOS and Linux

```bash
mv cecil.phar /usr/local/bin/cecil
chmod +x /usr/local/bin/cecil
```

### Windows

1.  Move `cecil.phar` in a dedicated directory like `C:\bin`
2.  Rename it from `cecil.phar` to `cecil`
3.  Append `;C:\bin` to your `PATH` environment variable
4.  Create a [wrapping batch script](https://raw.githubusercontent.com/Cecilapp/Cecil/master/bin/cecil.bat)
