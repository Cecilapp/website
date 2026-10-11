/**
 * Generates the homepage "services" illustrations (SVG, EN + FR) into assets/images/.
 * Texts live in the `i18n` object below; Montserrat is embedded as a subset (an SVG used as <img> cannot load web fonts).
 * Usage: npm run images:services
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = path.join(root, 'static/fonts');
const outDir = path.join(root, 'assets/images');
const W = 960, H = 600;

const C = {
  ink: '#1d1b16', gold: '#f2d07f', goldDeep: '#c99a2e', page: '#ffffff', pageLine: '#e4ddca',
  soft: '#f4efe2', mute: '#7b7464', codeBg: '#1f1d1a', codeLine: '#3a3630', code: '#e8e2d0',
  kw: '#f2d07f', str: '#e9a17a', tag: '#7fc8d6', dim: '#8a8270', link: '#1a5fd0',
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sansText = []; // collects every string rendered in Montserrat, for subsetting

// --- primitives -------------------------------------------------------------
const sans = (x, y, s, { size = 22, weight = 400, fill = C.ink, anchor = 'start', ls = 0 } = {}) => {
  sansText.push(s);
  return `<text x="${x}" y="${y}" class="s" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${ls ? ` letter-spacing="${ls}"` : ''}>${esc(s)}</text>`;
};
// rich sans line: segments [[text, weight]]
const sansRich = (x, y, segs, { size = 22, fill = C.ink } = {}) => {
  segs.forEach(([t]) => sansText.push(t));
  return `<text x="${x}" y="${y}" class="s" font-size="${size}" fill="${fill}">${segs.map(([t, w = 400]) => `<tspan font-weight="${w}">${esc(t)}</tspan>`).join('')}</text>`;
};
// code line: segments [[colorKey, text]]
const code = (x, y, segs, size = 20) =>
  `<text x="${x}" y="${y}" class="m" font-size="${size}" xml:space="preserve">${segs.map(([c, t]) => `<tspan fill="${C[c]}">${esc(t)}</tspan>`).join('')}</text>`;

const codePanel = (x, y, w, h, file) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${C.codeBg}" stroke="${C.codeLine}" stroke-width="2"/>` +
  `<circle cx="${x + 30}" cy="${y + 34}" r="7" fill="${C.gold}"/>` +
  `<text x="${x + 48}" y="${y + 41}" class="m" font-size="18" fill="${C.dim}">${esc(file)}</text>` +
  `<line x1="${x}" y1="${y + 64}" x2="${x + w}" y2="${y + 64}" stroke="${C.codeLine}" stroke-width="2"/>`;

const pagePanel = (x, y, w, h) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${C.page}" stroke="${C.pageLine}" stroke-width="2"/>`;

const arrow = (cx = 480, cy = 300) =>
  `<circle cx="${cx}" cy="${cy}" r="30" fill="${C.ink}" stroke="${C.gold}" stroke-width="3"/>` +
  `<path d="M${cx - 13} ${cy} H${cx + 13} M${cx + 1} ${cy - 12} L${cx + 13} ${cy} L${cx + 1} ${cy + 12}" stroke="${C.gold}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;

// small landscape picture (used as image placeholder)
const picture = (x, y, w, h, r = 10) => {
  const id = `clip${x}${y}`;
  return `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>` +
    `<g clip-path="url(#${id})"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.gold}"/>` +
    `<path d="M${x} ${y + h} L${x + w * .32} ${y + h * .45} L${x + w * .54} ${y + h * .72} L${x + w * .72} ${y + h * .52} L${x + w} ${y + h * .9} V${y + h} Z" fill="${C.goldDeep}"/>` +
    `<circle cx="${x + w * .78}" cy="${y + h * .26}" r="${Math.min(w, h) * .1}" fill="${C.page}"/></g>`;
};

// --- illustrations -------------------------------------------------------------
// panels leave a 22px gap on each side of the arrow badge (centered at x=480, r=30)
const L = { x: 10, y: 40, w: 418, h: 520 }, R = { x: 532, y: 40, w: 418, h: 520 };

function markdown(t) {
  const lx = L.x + 30, step = 38, y0 = L.y + 112;
  const lines = [
    [['dim', '---']],
    [['kw', 'title: '], ['str', t.title]],
    [['dim', '---']],
    [['tag', `# ${t.h1}`]],
    [],
    [['code', t.p1a], ['dim', '**'], ['code', 'Markdown'], ['dim', '**'], ['code', ',']],
    [['code', t.p2]],
    [],
    [['kw', '- '], ['code', t.li1]],
    [['kw', '- '], ['code', t.li2]],
    [['code', '!'], ['tag', '[Cecil]'], ['str', '(logo.png)']],
  ];
  const rx = R.x + 34;
  return codePanel(L.x, L.y, L.w, L.h, t.file) +
    lines.map((l, i) => l.length ? code(lx, y0 + i * step, l) : '').join('') +
    arrow() +
    pagePanel(R.x, R.y, R.w, R.h) +
    sans(rx, R.y + 82, t.h1, { size: 40, weight: 900 }) +
    sansRich(rx, R.y + 140, [[t.p1a], ['Markdown', 700], [',']]) +
    sans(rx, R.y + 172, t.p2) +
    `<circle cx="${rx + 6}" cy="${R.y + 216}" r="5" fill="${C.ink}"/>` + sans(rx + 22, R.y + 224, t.li1) +
    `<circle cx="${rx + 6}" cy="${R.y + 256}" r="5" fill="${C.ink}"/>` + sans(rx + 22, R.y + 264, t.li2) +
    `<rect x="${rx}" y="${R.y + 300}" width="${R.w - 68}" height="${R.h - 334}" rx="12" fill="${C.gold}"/>` +
    sans(R.x + R.w / 2, R.y + 300 + (R.h - 334) / 2 + 18, 'Cecil', { size: 52, weight: 900, anchor: 'middle' });
}

function twig(t) {
  const lx = L.x + 26, step = 44, y0 = L.y + 128;
  const lines = [
    [['kw', '{% for '], ['code', 'post'], ['kw', ' in '], ['code', 'posts'], ['kw', ' %}']],
    [['tag', '  <article>']],
    [['tag', '    <h2>'], ['str', '{{ post.title }}'], ['tag', '</h2>']],
    [['tag', '    <time>']],
    [['str', '      {{ post.date|date }}']],
    [['tag', '    </time>']],
    [['tag', '  </article>']],
    [['kw', '{% endfor %}']],
  ];
  const card = (y, title, date) =>
    `<rect x="${R.x}" y="${y}" width="${R.w}" height="150" rx="18" fill="${C.page}" stroke="${C.pageLine}" stroke-width="2"/>` +
    picture(R.x + 22, y + 22, 106, 106) +
    sans(R.x + 152, y + 68, title, { size: 25, weight: 700 }) +
    sans(R.x + 152, y + 104, date, { size: 19, fill: C.mute });
  return codePanel(L.x, L.y, L.w, L.h, 'list.html.twig') +
    lines.map((l, i) => code(lx, y0 + i * step, l, 19)).join('') +
    arrow() +
    t.posts.map(([title, date], i) => card(R.y + i * 185, title, date)).join('');
}

function responsive() {
  const rows = [['AVIF', C.gold], ['WebP', C.gold], ['JPEG', C.code]];
  const rx = R.x + 28;
  return pagePanel(L.x, L.y, L.w, L.h) +
    picture(L.x + 30, L.y + 30, L.w - 60, 300, 12) +
    `<text x="${L.x + 30}" y="${L.y + 400}" class="m" font-size="26" font-weight="700" fill="${C.ink}">photo.jpg</text>` +
    `<text x="${L.x + 30}" y="${L.y + 440}" class="m" font-size="22" fill="${C.mute}">2400 × 1600 px</text>` +
    arrow() +
    codePanel(R.x, R.y, R.w, R.h, '_site/thumbnails/') +
    rows.map(([f, col], i) => {
      const y = R.y + 92 + i * 70;
      return `<rect x="${rx}" y="${y}" width="${R.w - 56}" height="52" rx="26" fill="none" stroke="${C.codeLine}" stroke-width="2"/>` +
        `<text x="${rx + 24}" y="${y + 34}" class="m" font-size="21" font-weight="700" fill="${col}">${f}</text>` +
        `<text x="${rx + R.w - 80}" y="${y + 34}" class="m" font-size="19" fill="${C.code}" text-anchor="end">480w 768w 1024w</text>`;
    }).join('') +
    [
      [['tag', '<picture>']],
      [['kw', '  srcset'], ['code', ' + '], ['kw', 'sizes']],
      [['kw', '  width'], ['code', ' + '], ['kw', 'height']],
      [['kw', '  loading'], ['code', '='], ['str', '"lazy"']],
    ].map((l, i) => code(rx, R.y + 352 + i * 40, l, 20)).join('');
}

function seo(t) {
  const lx = L.x + 26, step = 40, y0 = L.y + 120;
  const lines = [
    [['dim', '---']],
    [['kw', 'title: '], ['str', 'Documentation']],
    [['kw', 'description: '], ['dim', '>']],
    ...t.fm.map(s => [['str', `  ${s}`]]),
    [['kw', 'image: '], ['str', 'cover.png']],
    [['dim', '---']],
  ];
  const sx = R.x + 26;
  return codePanel(L.x, L.y, L.w, L.h, t.file) +
    lines.map((l, i) => code(lx, y0 + i * step, l)).join('') +
    arrow() +
    // search result
    pagePanel(R.x, R.y, R.w, 220) +
    `<circle cx="${sx + 16}" cy="${R.y + 44}" r="16" fill="${C.gold}"/>` +
    sans(sx + 42, R.y + 40, 'Cecil', { size: 18, weight: 700 }) +
    sans(sx + 42, R.y + 62, 'https://cecil.app › documentation', { size: 15, fill: C.mute }) +
    sans(sx, R.y + 110, 'Documentation – Cecil', { size: 26, weight: 700, fill: C.link }) +
    sans(sx, R.y + 148, t.desc[0], { size: 17, fill: C.mute }) +
    sans(sx, R.y + 174, t.desc[1], { size: 17, fill: C.mute }) +
    // social card
    pagePanel(R.x, R.y + 250, R.w, 270) +
    `<rect x="${R.x + 14}" y="${R.y + 264}" width="${R.w - 28}" height="156" rx="10" fill="${C.gold}"/>` +
    sans(R.x + R.w / 2, R.y + 362, 'Cecil', { size: 58, weight: 900, anchor: 'middle' }) +
    sans(sx, R.y + 452, 'CECIL.APP', { size: 15, fill: C.mute, ls: 1.5 }) +
    sans(sx, R.y + 486, 'Documentation – Cecil', { size: 22, weight: 700 });
}

// --- content ------------------------------------------------------------------
const i18n = {
  en: {
    md: { file: 'about.md', title: 'About', h1: 'Hello Cecil', p1a: 'A website in ', p2: 'no database needed.', li1: 'fast', li2: 'simple' },
    twig: { posts: [['My first post', 'Oct 11, 2026'], ['Travel notes', 'Oct 2, 2026'], ['Crêpes recipe', 'Sep 18, 2026']] },
    seo: { file: 'documentation.md', fm: ['How to install,', 'configure and use', 'Cecil.'], desc: ['How to install, configure and use', 'Cecil to build a static website.'] },
  },
  fr: {
    md: { file: 'a-propos.md', title: 'À propos', h1: 'Bonjour Cecil', p1a: 'Un site en ', p2: 'sans base de données.', li1: 'rapide', li2: 'simple' },
    twig: { posts: [['Premier article', '11 oct. 2026'], ['Carnet de voyage', '2 oct. 2026'], ['Recette de crêpes', '18 sept. 2026']] },
    seo: { file: 'documentation.md', fm: ['Comment installer,', 'configurer et', 'utiliser Cecil.'], desc: ['Comment installer, configurer et', 'utiliser Cecil pour créer un site.'] },
  },
};

const files = {
  'cecil-markdown-content.svg': () => markdown(i18n.en.md),
  'cecil-markdown-content-fr.svg': () => markdown(i18n.fr.md),
  'cecil-twig-template.svg': () => twig(i18n.en.twig),
  'cecil-twig-template-fr.svg': () => twig(i18n.fr.twig),
  'cecil-responsive-images.svg': () => responsive(),
  'cecil-seo.svg': () => seo(i18n.en.seo),
  'cecil-seo-fr.svg': () => seo(i18n.fr.seo),
};

// --- fonts (subset of Montserrat, embedded) ------------------------------------
async function fontFaces(text) {
  const out = [];
  for (const w of [400, 700, 900]) {
    const buf = fs.readFileSync(path.join(fontsDir, `montserrat-${w}-latin.woff2`));
    const sub = await subsetFont(buf, text, { targetFormat: 'woff2' });
    out.push(`@font-face{font-family:"Montserrat SVG";font-weight:${w};src:url(data:font/woff2;base64,${sub.toString('base64')}) format("woff2")}`);
  }
  return out.join('');
}

for (const [name, render] of Object.entries(files)) {
  sansText.length = 0;
  const body = render();
  const faces = await fontFaces([...new Set(sansText.join(''))].join(''));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">` +
    `<style>${faces}.s{font-family:"Montserrat SVG",Montserrat,"Segoe UI",Helvetica,Arial,sans-serif}.m{font-family:Consolas,Menlo,"DejaVu Sans Mono","Liberation Mono",monospace;white-space:pre}</style>` +
    body + `</svg>\n`;
  fs.writeFileSync(path.join(outDir, name), svg);
  console.log(name, (Buffer.byteLength(svg) / 1024).toFixed(1) + ' KB');
}
