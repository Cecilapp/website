#!/bin/bash

# Fetches themes, components and starters data from the GitHub API.
# Uses jq, or Node.js if jq is not available. Set GITHUB_TOKEN to avoid API rate limit.
# On failure (network, rate limit, invalid or empty response), existing data file is kept and build continues.

if jq --version > /dev/null 2>&1; then
  transform() {
    jq -e '[.items[] | {name, full_name, description, github: .html_url, license: .license.name, homepage, date: .pushed_at, default_branch, topics}] | sort_by(.date) | reverse | if length > 0 then . else error("empty") end'
  }
else
  transform() {
    node -e '
let s = "";
process.stdin.on("data", d => s += d).on("end", () => {
  const items = JSON.parse(s).items.map(i => ({ name: i.name, full_name: i.full_name, description: i.description, github: i.html_url, license: i.license ? i.license.name : null, homepage: i.homepage, date: i.pushed_at, default_branch: i.default_branch, topics: i.topics }));
  if (items.length === 0) process.exit(1);
  console.log(JSON.stringify(items.sort((a, b) => b.date.localeCompare(a.date)), null, 2));
});'
  }
fi

CURL_HEADERS=(-H 'Accept: application/vnd.github.v3+json')
if [ -n "$GITHUB_TOKEN" ]; then
  CURL_HEADERS+=(-H "Authorization: Bearer $GITHUB_TOKEN")
fi

fetch_repos() {
  local topic=$1
  local file=$2
  local tmp
  tmp=$(mktemp)
  if curl -sf "${CURL_HEADERS[@]}" "https://api.github.com/search/repositories?q=topic:$topic+org:Cecilapp+fork:true+is:public+archived:false" \
    | transform > "$tmp" 2>/dev/null; then
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
