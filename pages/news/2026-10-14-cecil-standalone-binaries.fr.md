---
title: "Cecil est désormais disponible en binaire autonome"
description: "Depuis Cecil 9.11.0, des binaires autonomes pour Linux, macOS et Windows permettent d’utiliser Cecil sans installer PHP."
date: 2026-10-14
schedule:
  publish: 2026-10-14
github_release: https://github.com/Cecilapp/Cecil/releases/tag/9.11.0
slug: cecil-disponible-en-binaire-autonome
---
Jusqu’à présent, utiliser Cecil nécessitait PHP 8.3+ et quelques extensions sur votre machine. Depuis [Cecil 9.11.0](https://github.com/Cecilapp/Cecil/releases/tag/9.11.0), Cecil est également distribué sous forme de **binaire autonome** : un unique fichier exécutable qui embarque PHP et les extensions requises. **Plus besoin d’installer PHP !**

### Plateformes disponibles

Les binaires sont joints à chaque [version GitHub](https://github.com/Cecilapp/Cecil/releases/latest) :

| Plateforme | Fichier |
| ---------- | ------- |
| Linux x64 | `cecil-linux-x64` |
| Linux ARM64 | `cecil-linux-arm64` |
| macOS Intel | `cecil-macos-x64` |
| macOS Apple Silicon | `cecil-macos-arm64` |
| Windows x64 | `cecil-windows-x64.exe` |

### Bien démarrer

Par exemple, sous Linux x64 :

```bash
curl -Lo cecil https://github.com/Cecilapp/Cecil/releases/latest/download/cecil-linux-x64
chmod +x cecil
./cecil --version
```

Créez et générez ensuite un site comme d’habitude :

```bash
./cecil new:site mon-site
./cecil build mon-site
```

Sous macOS, les binaires ne sont pas encore signés : supprimez l’attribut de quarantaine avant la première exécution avec `xattr -d com.apple.quarantine cecil`.

### Sécurisé dès la conception

Les binaires sont générés, testés et publiés automatiquement par le workflow de release, avec [phpacker](https://github.com/phpacker/phpacker). Chaque version fournit les sommes de contrôle SHA-256 (`cecil-binaries.sha256`) et une attestation de provenance du build, vérifiable avec la CLI GitHub :

```bash
gh attestation verify cecil --repo Cecilapp/Cecil
```

### Bon à savoir

Le binaire autonome est idéal pour essayer Cecil rapidement, ou pour générer un site dans un environnement de CI sans PHP. Quelques limitations s’appliquent toutefois :

- Les images sont traitées avec GD : Imagick et libvips ne sont pas disponibles.
- La commande `self-update` n’est pas disponible : téléchargez à nouveau le binaire pour le mettre à jour.
- La commande `serve` repose sur le serveur web intégré de PHP : elle nécessite donc toujours un exécutable PHP local. Sans PHP, exécutez `build` et servez le dossier de sortie avec un autre serveur web.

Le fichier `cecil.phar`, les [gestionnaires de paquets](/fr/telecharger/#install) et [Composer](/fr/documentation/bien-demarrer/installation/#composer) restent disponibles et pleinement supportés.

Consultez la [documentation d’installation](/fr/documentation/bien-demarrer/installation/#standalone-binary) pour plus de détails.
