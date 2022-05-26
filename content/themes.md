---
title: Themes
#redirect: https://github.com/cecilapp?q=theme#org-repositories
layout: themes
---
## Fetch themes from GitHub API

```bash
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/search/repositories?q=theme+org:Cecilapp | jq '[.items[] | {name, full_name, description, url: .html_url, license: .license.name, homepage, owner: .owner.login, date: .updated_at, default_branch}] | sort_by(.date) | reverse' > data/themes.json
```
