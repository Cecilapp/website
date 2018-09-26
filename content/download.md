---
title: Download
layout: download.html
alias: install
---

# Download

You can download `phpoole.phar` by clicking on the "Download" button or with the following command from your terminal:
```bash
curl -SOL https://phpoole.org/phpoole.phar
```

> [PHP](http://php.net/manual/en/install.php) 7.1+ is required.

> File integrity can be checked with the `SHA1` file, by clicking on the "File checksum" button.

## Get a specific version

If you want to download a specific version of PHPoole, you can specify the version in the URL path.
For instance, if you want to install the `3.0.0` version you need to put `download/3.0.0/` in the URL:

```bash
curl -SOL https://phpoole.org/download/3.0.0/phpoole.phar
```

See the [releases list](https://github.com/PHPoole/PHPoole/releases) on GitHub.

## Install globally

For more comfort you should install PHPoole globally.

### macOS and Linux

```bash
mv phpoole.phar /usr/local/bin/phpoole
chmod +x /usr/local/bin/phpoole

phpoole help
```

### Windows
1. Move `phpoole.phar` in a dedicated directory like `C:\bin`
2. Rename it to `phpoole`
3. Append `;C:\bin` to your `PATH` environment variable
4. Create a [wrapping batch script](https://raw.githubusercontent.com/PHPoole/PHPoole/master/bin/phpoole.bat)

```bash
phpoole help
```
