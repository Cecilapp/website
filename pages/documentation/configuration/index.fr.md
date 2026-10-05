<!--
title: "Configuration"
description: "Configurez votre site avec cecil.yml, et surchargez-le avec des variables d’environnement ou une option CLI."
date: 2026-03-27
updated: 2026-10-05
weight: 5
sortby: weight
-->
# Configuration

La configuration du site web est définie dans un fichier [YAML](https://en.wikipedia.org/wiki/YAML) nommé `cecil.yml` ou `config.yml`, stocké à la racine :

```plaintext
<mywebsite>
└─ cecil.yml
```

Cecil propose de nombreuses options de configuration, mais ses [valeurs par défaut](https://github.com/Cecilapp/Cecil/blob/main/config/default.php) sont souvent suffisantes. Un nouveau site ne nécessite que ces paramètres :

```yaml
title: "My new Cecil site"
baseurl: https://mywebsite.com/
description: "Site description"
```

La documentation ci-dessous couvre toutes les options de configuration prises en charge par Cecil.

## Surcharge de configuration

### Variables d’environnement

La configuration peut être surchargée via des [variables d’environnement](https://en.wikipedia.org/wiki/Environment_variable).

Au démarrage, Cecil essaie également de charger un fichier `.env` depuis le chemin du site courant (le répertoire de travail actuel, ou l’argument `<path>` s’il est fourni).

- Si le fichier `.env` n’existe pas, Cecil continue normalement.
- Les variables déjà définies par le shell/système sont conservées.

Chaque nom de variable d’environnement doit être préfixé par `CECIL_` et la clé de configuration doit être en majuscules.

Par exemple, la commande suivante définit le `baseurl` du site :

```bash
export CECIL_BASEURL="https://example.com/"
```

Vous pouvez stocker la même valeur dans un fichier `.env` à la racine du projet :

```dotenv
CECIL_BASEURL="https://example.com/"
CECIL_TITLE="Mon site Cecil"
```

### Option CLI

Vous pouvez combiner plusieurs fichiers de configuration avec l’option `--config` (priorité de gauche à droite) :

```bash
php cecil.phar --config config-1.yml,config-2.yml
```
