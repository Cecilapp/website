---
title: Themes
description: "Ready to uses themes for Cecil."
#redirect: https://github.com/cecilapp?q=theme#org-repositories
---
## Fetch themes from GitHub API

```bash
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/search/repositories?q=theme+org:Cecilapp | jq '[.items[] | {name, full_name, description, url: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse' > data/themes.json
```
