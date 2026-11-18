/**
 * Collects the data of a website built with Cecil, from its URL, to add it to the showcase (data/showcase.yml).
 *
 * Usage:
 *   npm install                      # once, installs `playwright` (dev dependency)
 *   npx playwright install chromium  # once, downloads the browser (or set CHROME to a Chromium/Chrome executable)
 *   npm run showcase -- <url> [options]
 *   # or: node scripts/showcase.mjs <url> [options]
 *
 * Options:
 *   --write          append the entry to data/showcase.yml (default: print it)
 *   --title=<text>   title of the entry (default: og:site_name, or the first part of <title>)
 *   --github=<url>   source code repository (default: a GitHub link of the page matching the domain, if any)
 *   --name=<slug>    screenshot file name, without extension (default: the domain, e.g. `wallabag-it`)
 *   --no-screenshot  skip the screenshots
 *
 * What it does:
 *   - checks the `generator` meta tag (warns if the site doesn't seem to be built with Cecil)
 *   - reads the title and the description, in English and French (from `hreflang` alternate pages, if any)
 *   - looks for the GitHub repository of the site
 *   - takes a 1280×800 screenshot in light mode: assets/images/showcase/<name>.png
 *   - if the site supports dark mode (`prefers-color-scheme`, `localStorage.theme` or a `dark` class/attribute on <html>),
 *     takes a dark screenshot too: <name>.dark.png,
 *     automatically used by Cecil's `html()` filter for visitors in dark mode
 *
 * The descriptions are the ones of the site: review them (and translate the missing ones, marked `TODO`)
 * before committing, and check the screenshots (cookie banners, popups, etc.).
 *
 * Env: CHROME (optional Chromium/Chrome executable).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = path.join(root, 'data/showcase.yml');
const imagesDir = 'images/showcase';
const VIEWPORT = { width: 1280, height: 800 };
const LANGS = ['en', 'fr'];

// arguments
const args = process.argv.slice(2);
const opts = Object.fromEntries(args.filter(a => a.startsWith('--')).map(a => {
  const [k, ...v] = a.slice(2).split('=');
  return [k, v.length ? v.join('=') : true];
}));
const url = args.find(a => !a.startsWith('--'));
if (!url || !/^https?:\/\//.test(url)) {
  console.error('Usage: node scripts/showcase.mjs <url> [--write] [--title=<text>] [--github=<url>] [--name=<slug>] [--no-screenshot]');
  process.exit(1);
}
const host = new URL(url).hostname.replace(/^www\./, '');
const name = opts.name || host.replace(/\./g, '-');

const warn = msg => console.warn(`⚠ ${msg}`);
const info = msg => console.error(msg); // stderr: keeps stdout for the YAML entry

// reads the page metadata
const readMeta = page => page.evaluate(() => {
  const meta = sel => document.querySelector(sel)?.getAttribute('content')?.trim() || '';
  return {
    lang: (document.documentElement.lang || '').slice(0, 2).toLowerCase(),
    generator: meta('meta[name="generator"]'),
    siteName: meta('meta[property="og:site_name"]') || meta('meta[name="application-name"]'),
    title: document.title.trim(),
    description: meta('meta[name="description"]') || meta('meta[property="og:description"]'),
    alternates: [...document.querySelectorAll('link[rel="alternate"][hreflang]')]
      .map(l => ({ lang: l.hreflang.slice(0, 2).toLowerCase(), href: l.href })),
    github: [...new Set([...document.querySelectorAll('a[href*="github.com/"]')]
      .map(a => a.href.match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)/))
      .filter(Boolean)
      .map(m => `https://github.com/${m[1]}/${m[2].replace(/\.git$/, '')}`))],
  };
});

// returns the average luminance (0: black, 1: white) of the background, sampled at several points of the viewport
const readLuminance = page => page.evaluate(() => {
  const bg = el => {
    for (; el; el = el.parentElement) {
      const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g)?.map(Number);
      if (m && (m[3] ?? 1) > 0.5) return m;
    }
    return [255, 255, 255];
  };
  const lum = ([r, g, b]) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  const { innerWidth: w, innerHeight: h } = window;
  const points = [[w / 2, 5], [w / 4, h / 4], [w / 2, h / 2], [w * 3 / 4, h * 3 / 4], [w / 8, h - 5]];
  return points.reduce((sum, [x, y]) => sum + lum(bg(document.elementFromPoint(x, y))), 0) / points.length;
});
// the dark version must be dark, and clearly darker than the light one
const isDark = (light, dark) => dark < 0.4 && light - dark > 0.3;

const open = async (browser, colorScheme, target) => {
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1, colorScheme });
  // theme switchers that don't follow the system preference by default usually store the choice in `localStorage.theme`
  await ctx.addInitScript(theme => { try { localStorage.setItem('theme', theme); } catch (e) {} }, colorScheme);
  const page = await ctx.newPage();
  await page.goto(target, { waitUntil: 'load', timeout: 60000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000); // animations, lazy images
  return { ctx, page };
};

const launch = async () => {
  try {
    return await chromium.launch({ executablePath: process.env.CHROME || undefined });
  } catch (e) {
    info('Playwright Chromium not found, trying the installed Chrome (run `npx playwright install chromium` or set CHROME).');
    return chromium.launch({ channel: 'chrome' });
  }
};

// YAML scalar
const y = s => /^[\p{L}\p{N}][\p{L}\p{N} .,’'()\/-]*$/u.test(s) ? s : JSON.stringify(s);

const browser = await launch();
try {
  // light
  info(`Loading ${url}…`);
  const light = await open(browser, 'light', url);
  const meta = await readMeta(light.page);

  if (!/cecil/i.test(meta.generator)) {
    warn(`generator is "${meta.generator || 'none'}": this site doesn't seem to be built with Cecil.`);
  } else {
    info(`Generator: ${meta.generator}`);
  }

  // title
  const title = opts.title || meta.siteName || meta.title.split(/\s+[|\-–—·:]\s+/)[0] || host;

  // descriptions by language
  const descriptions = {};
  const lang = LANGS.includes(meta.lang) ? meta.lang : 'en';
  descriptions[lang] = meta.description;
  for (const l of LANGS.filter(l => !descriptions[l])) {
    const alt = meta.alternates.find(a => a.lang === l);
    if (!alt) continue;
    info(`Loading ${alt.href} (${l})…`);
    const p = await light.ctx.newPage();
    try {
      await p.goto(alt.href, { waitUntil: 'domcontentloaded', timeout: 30000 });
      descriptions[l] = (await readMeta(p)).description;
    } catch (e) {
      warn(`unable to load ${alt.href}: ${e.message}`);
    }
    await p.close();
  }

  // GitHub repository: a link whose owner or repository name matches the domain
  const domainWords = host.split('.').filter(w => w.length > 2 && !['com', 'org', 'net', 'www', 'app'].includes(w));
  const github = opts.github || meta.github.find(g => {
    const [owner, repo] = g.toLowerCase().split('/').slice(3);
    return repo === host || owner + '.github.io' === host || domainWords.some(w => repo.includes(w) && /web|site|www|\./.test(repo));
  });
  if (!github && meta.github.length) {
    info(`GitHub links found (none set, use --github=<url>):\n  ${meta.github.join('\n  ')}`);
  }

  // screenshots
  let screenshot;
  if (!opts['no-screenshot']) {
    const lightFile = path.join(root, 'assets', imagesDir, `${name}.png`);
    const darkFile = path.join(root, 'assets', imagesDir, `${name}.dark.png`);
    await light.page.screenshot({ path: lightFile });
    info(`Screenshot: ${path.relative(root, lightFile)}`);
    screenshot = `${imagesDir}/${name}.png`;

    const dark = await open(browser, 'dark', url);
    const lightLuminance = await readLuminance(light.page);
    let supportsDark = isDark(lightLuminance, await readLuminance(dark.page));
    if (!supportsDark) {
      // last resort: the usual dark mode class and attributes
      await dark.page.evaluate(() => {
        const html = document.documentElement;
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        html.setAttribute('data-bs-theme', 'dark');
        html.setAttribute('data-color-scheme', 'dark');
      });
      await dark.page.waitForTimeout(1000); // transitions
      supportsDark = isDark(lightLuminance, await readLuminance(dark.page));
    }
    if (supportsDark) {
      await dark.page.screenshot({ path: darkFile });
      info(`Dark mode supported, screenshot: ${path.relative(root, darkFile)}`);
    } else {
      info('Dark mode not supported (no color change with `prefers-color-scheme: dark`, `localStorage.theme` or a `dark` class/attribute).');
      if (fs.existsSync(darkFile)) warn(`${path.relative(root, darkFile)} exists but is not relevant anymore: remove it.`);
    }
    await dark.ctx.close();
  }
  await light.ctx.close();

  // YAML entry
  const lines = [`- title: ${y(title)}`, `  url: ${url}`];
  if (github) lines.push(`  github: ${github}`);
  if (screenshot) lines.push(`  screenshot: ${screenshot}`);
  lines.push('  description:');
  for (const l of LANGS) {
    const d = descriptions[l] || Object.values(descriptions).find(Boolean) || '';
    lines.push(`    ${l}: ${y(d)}${descriptions[l] ? '' : ' # TODO: translate'}`);
  }
  const entry = lines.join('\n') + '\n';

  if (opts.write) {
    const data = fs.readFileSync(dataFile, 'utf8');
    if (data.match(/^\s*url:\s*(\S+)/gm)?.some(l => l.includes(`//${host}`) || l.includes(`.${host}`))) {
      warn(`${host} is already in data/showcase.yml: entry not added.`);
      process.stdout.write(entry);
    } else {
      const eol = data.includes('\r\n') ? '\r\n' : '\n';
      fs.writeFileSync(dataFile, data.replace(/(\r?\n)*$/, eol) + entry.replace(/\n/g, eol));
      info('Entry added to data/showcase.yml (review the descriptions).');
    }
  } else {
    process.stdout.write(entry);
  }
} finally {
  await browser.close();
}
