// Captures the demo frames (terminal animation, then the served site) at 30 fps.
// Usage: node capture.cjs <outdir> [preview]
// Env: THEME (dark or light, default: dark), URL (served site, default: http://localhost:8000/), PW (path to playwright or playwright-core, default: playwright), CHROME (optional Chromium executable)
const { chromium } = require(process.env.PW || 'playwright');
const fs = require('fs');
const path = require('path');

const FPS = 30;
const THEME = process.env.THEME || 'dark';
const out = process.argv[2];
const preview = process.argv[3] === 'preview';
const ease = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const ctx = await browser.newContext({ viewport: { width: 930, height: 518 }, deviceScaleFactor: 2, colorScheme: THEME });
  const page = await ctx.newPage();

  // 1. terminal
  const termDir = path.join(out, 'term');
  fs.mkdirSync(termDir, { recursive: true });
  await page.goto('file:///' + path.join(__dirname, 'terminal.html').replace(/\\/g, '/') + '?theme=' + THEME);
  await page.evaluate(() => document.fonts.ready);
  const duration = await page.evaluate(() => window.DURATION);
  const n = Math.ceil(duration / 1000 * FPS);
  for (let i = 0; i < n; i++) {
    if (preview && i % 90) continue;
    await page.evaluate(t => window.render(t), i * 1000 / FPS);
    await page.screenshot({ path: path.join(termDir, `${String(i).padStart(5, '0')}.png`) });
  }
  console.log('terminal', n, 'frames', duration, 'ms');

  // 2. browser: hold, scroll down, hold, scroll up, hold
  const webDir = path.join(out, 'web');
  fs.mkdirSync(webDir, { recursive: true });
  await page.goto(process.env.URL || 'http://localhost:8000/', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; } ::-webkit-scrollbar { display: none; }' });
  const max = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  const plan = [[1.6, 0, 0], [2.2, 0, max], [1.2, max, max], [1.6, max, 0], [1.2, 0, 0]];
  let f = 0;
  for (const [sec, from, to] of plan) {
    const frames = Math.round(sec * FPS);
    for (let i = 0; i < frames; i++, f++) {
      if (preview && f % 30) continue;
      const y = from + (to - from) * ease(frames > 1 ? i / (frames - 1) : 1);
      await page.evaluate(y => window.scrollTo(0, y), y);
      await page.screenshot({ path: path.join(webDir, `${String(f).padStart(5, '0')}.png`) });
    }
  }
  console.log('browser', f, 'frames, scroll', max);
  await browser.close();
})();
