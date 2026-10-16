---
title: "Cecil is now available as a standalone binary"
description: "Since Cecil 9.11.0, standalone binaries for Linux, macOS and Windows let you run Cecil without installing PHP."
date: 2026-10-14
schedule:
  publish: 2026-10-14
github_release: https://github.com/Cecilapp/Cecil/releases/tag/9.11.0
---
Until now, running Cecil required PHP 8.3+ and a few extensions on your machine. Since [Cecil 9.11.0](https://github.com/Cecilapp/Cecil/releases/tag/9.11.0), Cecil is also distributed as a **standalone binary**: a single executable file that embeds PHP and the required extensions. **No PHP installation needed!**

### Available platforms

Binaries are attached to each [GitHub release](https://github.com/Cecilapp/Cecil/releases/latest):

| Platform | File |
| -------- | ---- |
| Linux x64 | `cecil-linux-x64` |
| Linux ARM64 | `cecil-linux-arm64` |
| macOS Intel | `cecil-macos-x64` |
| macOS Apple Silicon | `cecil-macos-arm64` |
| Windows x64 | `cecil-windows-x64.exe` |

### Get started

For example, on Linux x64:

```bash
curl -Lo cecil https://github.com/Cecilapp/Cecil/releases/latest/download/cecil-linux-x64
chmod +x cecil
./cecil --version
```

Then create and build a website as usual:

```bash
./cecil new:site my-website
./cecil build my-website
```

On macOS, binaries are not signed yet: remove the quarantine attribute before the first run with `xattr -d com.apple.quarantine cecil`.

### Secure by design

Binaries are built, tested and published automatically by the release workflow, with [phpacker](https://github.com/phpacker/phpacker). Each release provides SHA-256 checksums (`cecil-binaries.sha256`) and a build provenance attestation you can verify with the GitHub CLI:

```bash
gh attestation verify cecil --repo Cecilapp/Cecil
```

### Good to know

The standalone binary is ideal to try Cecil quickly, or to build a website in a CI environment without PHP. However, a few limitations apply:

- Images are processed with GD: Imagick and libvips are not available.
- The `self-update` command is not available: download the binary again to update it.
- The `serve` command relies on the PHP built-in web server, so it still requires a local PHP executable. Without PHP, run `build` and serve the output directory with another web server.

The `cecil.phar` file, [package managers](/download/#install) and [Composer](/documentation/getting-started/installation/#composer) remain available and fully supported.

See the [installation documentation](/documentation/getting-started/installation/#standalone-binary) for more details.
