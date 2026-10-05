<!--
title: "Configuration"
description: "Configure your website with cecil.yml, and override it with environment variables or CLI option."
date: 2021-05-07
updated: 2026-10-05
weight: 5
sortby: weight
-->
# Configuration

The website configuration is defined in a [YAML](https://en.wikipedia.org/wiki/YAML) file named `cecil.yml` or `config.yml` stored at the root:

```plaintext
<mywebsite>
└─ cecil.yml
```

Cecil offers many configuration options, but its [defaults](https://github.com/Cecilapp/Cecil/blob/main/config/default.php) are often sufficient. A new site requires only these settings:

```yaml
title: "My new Cecil site"
baseurl: https://mywebsite.com/
description: "Site description"
```

The following documentation covers all supported configuration options in Cecil.

## Override configuration

### Environment variables

The configuration can be overridden through [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

At startup, Cecil also attempts to load a `.env` file from the current site path (the current working directory, or the `<path>` argument if provided).

- If the `.env` file does not exist, Cecil continues normally.
- Variables already defined by the shell/system are preserved.

Each environment variable name must be prefixed with `CECIL_` and the configuration key must be set in uppercase.

For example, the following command set the website’s `baseurl`:

```bash
export CECIL_BASEURL="https://example.com/"
```

You can store the same value in a `.env` file at your project root:

```dotenv
CECIL_BASEURL="https://example.com/"
CECIL_TITLE="My Cecil site"
```

### CLI option

You can combine multiple configuration files, with the `--config` option (left-to-right precedence):

```bash
php cecil.phar --config config-1.yml,config-2.yml
```
