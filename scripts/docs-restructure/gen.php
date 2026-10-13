<?php
/**
 * Prototype: splits flat documentation pages into sub-sections.
 * Usage: php gen.php <root> [--relative]
 *   <root> contains pages/documentation (flat sources) and data/
 *   --relative: links between documentation pages are relative links to Markdown files
 */
$root = rtrim($argv[1] ?? '.', '/');
$docs = "$root/pages/documentation";
$src = [
    'QS' => '1-Quick Start', 'C' => '2-Content', 'T' => '3-Templates', 'CF' => '4-Configuration',
    'CM' => '5-Commands', 'D' => '6-Deploy', 'E' => '7-Extend', 'L' => '8-Library', 'A' => '9-Architecture',
    'CDN' => 'configuration/cdn-providers', 'LOC' => 'configuration/locale-codes',
];
$langs = ['en' => '', 'fr' => '.fr'];
$urlPrefix = ['en' => '/documentation/', 'fr' => '/fr/documentation/'];

require __DIR__ . '/spec.php'; // $spec (mapping old headings -> new pages)

/* ---------- parsing ---------- */
function slug(string $s): string
{
    $s = preg_replace('/\{#([^}\s]+)[^}]*\}\s*$/', '', $s, -1, $n);
    $s = (str_replace(['`', '*', '_'], ['', '', ' '], $s));
    $s = strtr($s, ['à'=>'a','â'=>'a','ä'=>'a','é'=>'e','è'=>'e','ê'=>'e','ë'=>'e','î'=>'i','ï'=>'i','ô'=>'o','ö'=>'o','ù'=>'u','û'=>'u','ü'=>'u','ç'=>'c','É'=>'E','È'=>'E','À'=>'A','Ç'=>'C','’'=>'-','œ'=>'oe']);
    $s = strtolower(preg_replace('/[^A-Za-z0-9]+/', '-', $s));
    return trim($s, '-');
}
function parse(string $path): array
{
    $raw = str_replace("\r", '', file_get_contents($path));
    $fm = '';
    if (preg_match('/^<!--\n(.*?)\n-->\n/s', $raw, $m) || preg_match('/^---\n(.*?)\n---\n/s', $raw, $m)) {
        $fm = $m[1];
        $raw = substr($raw, strlen($m[0]));
    }
    $doc = ['fm' => $fm, 'h1' => null, 'pre' => [], 'h2' => []];
    $fence = null;
    $cur = &$doc['pre'];
    foreach (explode("\n", $raw) as $l) {
        $isHead = 0;
        if (preg_match('/^\s*(`{3,}|~{3,})/', $l, $m)) {
            $t = $m[1];
            if ($fence === null) $fence = $t;
            elseif ($t[0] == $fence[0] && strlen($t) >= strlen($fence) && trim($l) == $t) $fence = null;
        } elseif ($fence === null && preg_match('/^(#{1,3}) (.*)/', $l, $m)) {
            $isHead = strlen($m[1]);
        }
        if ($isHead == 1 && $doc['h1'] === null) { $doc['h1'] = $m[2]; continue; }
        if ($isHead == 2) {
            $doc['h2'][] = ['title' => $m[2], 'line' => $l, 'intro' => [], 'h3' => []];
            unset($cur); $cur = &$doc['h2'][count($doc['h2']) - 1]['intro'];
            continue;
        }
        if ($isHead == 3 && $doc['h2']) {
            $k = count($doc['h2']) - 1;
            $doc['h2'][$k]['h3'][] = ['title' => $m[2], 'lines' => [$l]];
            unset($cur); $cur = &$doc['h2'][$k]['h3'][count($doc['h2'][$k]['h3']) - 1]['lines'];
            continue;
        }
        $cur[] = $l;
    }
    unset($cur);
    return $doc;
}
function fmGet(string $fm, string $key): ?string
{
    return preg_match('/^' . $key . ':\s*(.*)$/m', $fm, $m) ? trim($m[1], " \"'") : null;
}
/* shift headings (outside fences) by $d levels */
function shift(array $lines, int $d): array
{
    if ($d == 0) return $lines;
    $fence = null;
    foreach ($lines as &$l) {
        if (preg_match('/^\s*(`{3,}|~{3,})/', $l, $m)) {
            $t = $m[1];
            if ($fence === null) $fence = $t;
            elseif ($t[0] == $fence[0] && strlen($t) >= strlen($fence) && trim($l) == $t) $fence = null;
            continue;
        }
        if ($fence === null && preg_match('/^(#{2,6}) /', $l, $m)) {
            $l = str_repeat('#', max(2, strlen($m[1]) + $d)) . substr($l, strlen($m[1]));
        }
    }
    return $lines;
}
function headingSlugs(array $lines): array
{
    $out = []; $fence = null;
    foreach ($lines as $l) {
        if (preg_match('/^\s*(`{3,}|~{3,})/', $l, $m)) {
            $t = $m[1];
            if ($fence === null) $fence = $t;
            elseif ($t[0] == $fence[0] && strlen($t) >= strlen($fence) && trim($l) == $t) $fence = null;
            continue;
        }
        if ($fence === null && preg_match('/^#{1,6} (.*)/', $l, $m)) {
            $out[] = slug($m[1]);
            if (preg_match('/\{#([^}\s]+)/', $m[1], $mm)) $out[] = $mm[1];
        }
    }
    return $out;
}
function findH2(array $doc, string $title, array $en): int
{
    foreach ($en['h2'] as $i => $h) if ($h['title'] == $title) return $i;
    throw new Exception("h2 not found: $title");
}
function findH3(array $en, int $i, string $title): int
{
    foreach ($en['h2'][$i]['h3'] as $j => $h) if ($h['title'] == $title) return $j;
    throw new Exception("h3 not found: $title");
}
/* Resolve one item to lines; positions are resolved on EN doc and applied to $doc. */
function resolve(array $item, array $docs, string $lang): array
{
    [$k, $mode] = $item;
    $doc = $docs[$lang][$k]; $en = $docs['en'][$k];
    switch ($mode) {
        case 'pre':
            return $doc['pre'];
        case 'body': // whole file body, h2 kept
            $out = $doc['pre'];
            foreach ($doc['h2'] as $h) {
                $out[] = $h['line'];
                $out = array_merge($out, $h['intro']);
                foreach ($h['h3'] as $h3) $out = array_merge($out, $h3['lines']);
            }
            return $out;
        case 'keep': // h2 section, heading kept
        case 'whole': // h2 section content, sub-headings promoted
        case 'intro':
            $i = findH2($doc, $item[2], $en);
            $h = $doc['h2'][$i];
            $out = $mode == 'keep' ? [$h['line']] : [];
            $out = array_merge($out, $h['intro']);
            if ($mode != 'intro') {
                $skip = $item[3] ?? [];
                foreach ($h['h3'] as $j => $h3) {
                    if (in_array($en['h2'][$i]['h3'][$j]['title'], $skip)) continue;
                    $out = array_merge($out, $h3['lines']);
                }
            }
            return $mode == 'whole' ? shift($out, -1) : $out;
        case 'h3': // selected h3 of a h2, promoted
            $i = findH2($doc, $item[2], $en);
            $out = [];
            foreach ($item[3] as $t) {
                $out = array_merge($out, shift($doc['h2'][$i]['h3'][findH3($en, $i, $t)]['lines'], -1));
            }
            return $out;
    }
    throw new Exception("unknown mode $mode");
}

/* ---------- load sources ---------- */
$parsed = [];
foreach ($langs as $lang => $sfx) {
    foreach ($src as $k => $f) $parsed[$lang][$k] = parse("$docs/$f$sfx.md");
}

/* translates the path segments of a documentation URL (relative to documentation/) */
function localUrl(string $u, string $lang): string
{
    global $frSegments;
    if ($lang == 'en') return $u;
    return implode('/', array_map(fn ($seg) => $frSegments[$seg] ?? $seg, explode('/', $u)));
}

/* ---------- build pages ---------- */
$pages = []; // [lang][url] => [file, fm, lines]
$dropped = [];
$anchors = []; // [srcKey][slug] => url (relative to documentation/)
$fileMain = []; // [srcKey] => url
foreach ($spec as $section => $s) {
    $entries = ['index' => $s['index'] + ['index' => true]] + $s['pages'];
    foreach ($entries as $name => $p) {
        if (!empty($p['static'])) continue; // hand-written page, kept as is
        $url = $section . '/' . (empty($p['index']) ? $name . '/' : '');
        foreach ($langs as $lang => $sfx) {
            $lines = [];
            foreach ($p['items'] ?? [] as $item) {
                $chunk = resolve($item, $parsed, $lang);
                $lines = array_merge($lines, ['', ...$chunk]);
                foreach ([$lang, $lang == 'en' ? 'fr' : 'en'] as $l2) {
                    foreach (headingSlugs(resolve($item, $parsed, $l2)) as $sl) $anchors[$item[0]][$sl] ??= $url;
                }
                if (in_array($item[1], ['pre', 'body'])) $fileMain[$item[0]] ??= $url;
                $firstUrl[$item[0]] ??= $url;
                if (in_array($item[1], ['whole', 'intro'])) {
                    $i = findH2($parsed['en'][$item[0]], $item[2], $parsed['en'][$item[0]]);
                    foreach ($langs as $l2 => $x) { $sl = slug($parsed[$l2][$item[0]]['h2'][$i]['title']); if (!isset($anchors[$item[0]][$sl])) { $anchors[$item[0]][$sl] = $url; $dropped[$item[0]][$sl] = true; } }
                }
            }
            if (isset($p['text'][$lang])) $lines = array_merge(['', $p['text'][$lang]], $lines);
            $file = $section . '/' . (empty($p['index']) ? ($p['w'] . '-' . $name) : 'index') . $sfx . '.md';
            $first = $parsed[$lang][$p['items'][0][0] ?? 'QS']['fm'] ?? '';
            $fm = ['title' => $p['title'][$lang], 'description' => $p['desc'][$lang]];
            foreach (['date', 'updated'] as $v) if ($x = fmGet($first, $v)) $fm[$v] = $x;
            if (!empty($p['index'])) { $fm['weight'] = $s['weight']; $fm['sortby'] = 'weight'; }
            if (isset($p['alias'][$lang])) $fm['alias'] = $p['alias'][$lang];
            if (isset($p['menu'])) $fm['menu'] = $p['menu'];
            if (localUrl($url, $lang) != $url) $fm['path'] = 'documentation/' . rtrim(localUrl($url, $lang), '/');
            $pages[$lang][$url] = compact('file', 'fm', 'lines', 'url');
        }
    }
}
// files without intro: first page using them, otherwise documentation index
foreach ($src as $k => $f) $fileMain[$k] ??= $firstUrl[$k] ?? '';

/* ---------- rewrite links ---------- */
$keyByFile = [];
foreach ($src as $k => $f) {
    $keyByFile[strtolower(basename($f))] = $k;
}
// EN anchor -> FR anchor, by heading position
$langSlugs = [];
foreach ($src as $k => $f) foreach ($langs as $l => $x) $langSlugs[$l][$k] = headingSlugs(resolve([$k, 'body'], $parsed, $l));
function fixAnchor(string $k, string $anchor, string $lang): string
{
    global $langSlugs;
    $anchor = slug(rawurldecode($anchor));
    if ($lang != 'en' && !in_array($anchor, $langSlugs[$lang][$k]) && ($i = array_search($anchor, $langSlugs['en'][$k])) !== false) {
        return $langSlugs[$lang][$k][$i] ?? $anchor;
    }
    return $anchor;
}
$unresolved = [];
function target(string $k, ?string $anchor, string $lang): string
{
    global $anchors, $fileMain, $urlPrefix, $unresolved, $dropped;
    $u = $fileMain[$k];
    if ($anchor !== null && $anchor !== '') {
        $anchor = fixAnchor($k, $anchor, $lang);
        if (isset($anchors[$k][$anchor])) $u = $anchors[$k][$anchor];
        else $unresolved[] = "$k#$anchor";
        return $urlPrefix[$lang] . localUrl($u, $lang) . (isset($dropped[$k][$anchor]) ? '' : '#' . $anchor);
    }
    return $urlPrefix[$lang] . localUrl($u, $lang);
}
// which source key does a generated page mostly come from (for same-page "#anchor" links)
foreach ($langs as $lang => $sfx) {
    foreach ($pages[$lang] as $url => &$pg) {
        $srcKeys = [];
        foreach ($spec as $section => $s) {
            foreach (['index' => $s['index'] + ['index' => true]] + $s['pages'] as $name => $p) {
                $u = $section . '/' . (empty($p['index']) ? $name . '/' : '');
                if ($u == $url) foreach ($p['items'] ?? [] as $it) $srcKeys[] = $it[0];
            }
        }
        $text = implode("\n", $pg['lines']);
        // links to other .md files
        $text = preg_replace_callback('/\]\((?:\.\.\/)?((?:configuration\/)?[0-9]*-?[A-Za-z \-]+?)(?:\.fr)?\.md(?:#([^)\s]+))?\)/', function ($m) use ($lang, $keyByFile) {
            $base = strtolower(basename($m[1]));
            if ($base == 'about') return '](' . ($lang == 'fr' ? '/fr/a-propos/' : '/about/') . ')';
            $k = $keyByFile[$base] ?? null;
            if (!$k) return $m[0];
            return '](' . target($k, $m[2] ?? null, $lang) . ')';
        }, $text);
        // same-page anchors
        $text = preg_replace_callback('/\]\(#([^)\s]+)\)/', function ($m) use ($lang, $srcKeys, $url) {
            global $anchors, $urlPrefix, $dropped;
            foreach (array_unique($srcKeys) as $k) {
                $m[0] = '](#' . ($m[1] = fixAnchor($k, $m[1], $lang)) . ')';
                if (isset($anchors[$k][$m[1]])) {
                    return $anchors[$k][$m[1]] == $url ? $m[0] : '](' . $urlPrefix[$lang] . localUrl($anchors[$k][$m[1]], $lang) . (isset($dropped[$k][$m[1]]) ? '' : '#' . $m[1]) . ')';
                }
            }
            return $m[0];
        }, $text);
        $pg['text'] = $text;
    }
    unset($pg);
}

/* ---------- old anchors redirect map ---------- */
$oldSlug = ['QS' => ['quick-start', 'demarrage-rapide'], 'C' => ['content', 'contenu'], 'T' => ['templates', 'templates'],
    'CF' => ['configuration', 'configuration'], 'CM' => ['commands', 'commandes'], 'D' => ['deploy', 'deployer'],
    'E' => ['extend', 'etendre'], 'L' => ['library', 'bibliotheque'], 'A' => ['architecture', 'architecture']];
$map = [];
foreach ($oldSlug as $k => [$en, $fr]) {
    foreach (['en' => $en, 'fr' => $fr] as $lang => $sl) {
        foreach ($anchors[$k] ?? [] as $a => $u) {
            $map[rtrim($urlPrefix[$lang], '/') . "/$sl/"][$a] = $urlPrefix[$lang] . localUrl($u, $lang) . (isset($dropped[$k][$a]) ? '' : '#' . $a);
        }
    }
}

/* ---------- write ---------- */
foreach ($src as $k => $f) foreach ($langs as $sfx) @unlink("$docs/$f$sfx.md");
foreach ($pages as $lang => $list) {
    foreach ($list as $pg) {
        $path = "$docs/{$pg['file']}";
        @mkdir(dirname($path), 0777, true);
        $fm = '';
        foreach ($pg['fm'] as $key => $v) {
            $fm .= "$key: " . (is_array($v) ? "\n  - " . implode("\n  - ", $v) : (in_array($key, ['title', 'description']) ? '"' . str_replace('"', '\"', $v) . '"' : $v)) . "\n";
        }
        $body = '# ' . $pg['fm']['title'] . "\n\n" . ltrim(preg_replace("/\n{3,}/", "\n\n", $pg['text']));
        file_put_contents($path, "<!--\n$fm-->\n" . rtrim($body) . "\n");
    }
}
// hand-written pages: FR path and links
foreach ($spec as $section => $s) {
    foreach ($s['pages'] as $name => $p) {
        if (empty($p['static'])) continue;
        foreach ($langs as $lang => $sfx) {
            if ($lang == 'en') continue;
            $file = "$docs/$section/{$p['w']}-$name$sfx.md";
            $text = preg_replace_callback('#\]\(' . preg_quote($urlPrefix[$lang], '#') . '([^)\#]*)#', fn ($m) => '](' . $urlPrefix[$lang] . localUrl($m[1], $lang), file_get_contents($file));
            $path = 'documentation/' . rtrim(localUrl("$section/$name/", $lang), '/');
            $text = preg_replace('/^path: .*\n/m', '', $text, 1);
            $text = preg_replace('/\n-->\n/', "\npath: $path\n-->\n", $text, 1);
            file_put_contents($file, $text);
        }
    }
}

/* ---------- relative links (optional) ---------- */
// "--relative": links to documentation pages become relative links to their Markdown file
// (resolved by Cecil >= 9.7.4, and browsable on GitHub)
function relPath(string $fromDir, string $toFile): string
{
    $from = $fromDir === '' ? [] : explode('/', $fromDir);
    $to = explode('/', $toFile);
    while ($from && count($to) > 1 && $from[0] === $to[0]) {
        array_shift($from);
        array_shift($to);
    }
    return str_repeat('../', count($from)) . implode('/', $to);
}
if (in_array('--relative', $argv)) {
    $fileByUrl = []; // URL => file, relative to the documentation dir
    foreach ($spec as $section => $s) {
        foreach (['index' => $s['index'] + ['index' => true]] + $s['pages'] as $name => $p) {
            $url = $section . '/' . (empty($p['index']) ? $name . '/' : '');
            foreach ($langs as $lang => $sfx) {
                $fileByUrl[$urlPrefix[$lang] . localUrl($url, $lang)] = $section . '/' . (empty($p['index']) ? $p['w'] . '-' . $name : 'index') . $sfx . '.md';
            }
        }
    }
    foreach ($fileByUrl as $file) {
        $text = preg_replace_callback('#\]\((/(?:fr/)?documentation/[^)\#\s]*)(\#[^)\s]*)?\)#', function ($m) use ($fileByUrl, $file) {
            if (!isset($fileByUrl[$m[1]])) return $m[0]; // not a documentation page (e.g. API reference)
            return '](' . relPath(dirname($file), $fileByUrl[$m[1]]) . ($m[2] ?? '') . ')';
        }, file_get_contents("$docs/$file"));
        file_put_contents("$docs/$file", $text);
    }
}
file_put_contents("$root/data/docs_redirects.json", json_encode($map, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
echo count($pages['en']) . " pages per language\n";
echo "Unresolved anchors:\n  " . implode("\n  ", array_unique($unresolved)) . "\n";
