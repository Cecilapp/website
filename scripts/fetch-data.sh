#!/bin/bash

# Fetches themes, components and starters data from the GitHub API.
# On failure (network, rate limit, invalid or empty response, missing jq), existing data file is kept and build continues.

fetch_repos() {
  local topic=$1
  local file=$2
  local tmp
  tmp=$(mktemp)
  if curl -sf -H 'Accept: application/vnd.github.v3+json' "https://api.github.com/search/repositories?q=topic:$topic+org:Cecilapp+fork:true+is:public+archived:false" \
    | jq -e '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse | if length > 0 then . else error("empty") end' > "$tmp" 2>/dev/null; then
    mv "$tmp" "$file"
  else
    echo "Warning: unable to fetch \"$topic\" data, keeping existing $file"
    rm -f "$tmp"
  fi
}
echo "Fetches themes data"
fetch_repos cecil-theme data/themes.json
echo "Fetches component themes data"
fetch_repos cecil-theme-component data/components.json
echo "Fetches starters data"
fetch_repos cecil-starter data/starterkits.json
