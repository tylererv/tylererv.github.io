# Getting Started

Everything you need to know to start editing and deploying this portfolio.

---

## Prerequisites

- A code editor (VS Code recommended)
- Git
- Node.js (only needed to rebuild minified files — optional for content-only edits)
- A browser

No framework, no build step, no `npm install` required to just edit and preview.

---

## Local Development

Open any HTML file directly in a browser — no server needed for basic preview:

```
open index.html
```

For a proper local server (fixes relative path quirks and enables live reload):

```bash
# Using Python (built into macOS)
python3 -m http.server 8080
# Then visit http://localhost:8080

# Or using Node's serve package
npx serve .
```

---

## Making Changes

### Content edits (HTML)

Edit the HTML files directly. Each page is self-contained:

| Page | File |
|---|---|
| Home (project list) | `index.html` |
| About | `about.html` |
| A case study | `projects/your-project.html` |
| 404 | `404.html` |

### Styling

Edit **`styles.css`** — this is the source of truth. The CSS variables at the top of the file control the whole design system:

```css
:root {
  --bg: #ffffff;
  --text: #222222;
  --text-dim: #999999;
  --accent: #F8401C;       /* Main accent color — links, hover, buttons */
  --line: #000000;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --content-max: 1156px;   /* Max content width */
}
```

Dark mode variables live in `@media (prefers-color-scheme: dark)` and `html.dark` blocks in the same file.

### JavaScript

Edit **`script.js`** — the source file. All interactive behavior lives here.

### After editing CSS or JS — rebuild minified files

HTML pages load `styles.min.css` and `script.min.js`. After any source edit, rebuild:

```bash
npx terser script.js -o script.min.js --compress --mangle
npx csso styles.css -o styles.min.css
```

> If you skip this, your changes won't be visible in production (GitHub Pages serves the `.min` files).

---

## Customization

### Accent color

1. Change `--accent` in `styles.css`
2. Update the `fill` color in `favicon.svg`

### Fonts

The site uses [Inter](https://fonts.google.com/specimen/Inter) and [DM Mono](https://fonts.google.com/specimen/DM+Mono) from Google Fonts.

To change fonts:
1. Pick new fonts at [fonts.google.com](https://fonts.google.com)
2. Replace the `<link href="https://fonts.googleapis.com/...">` in all HTML files
3. Update `--font-sans` and `--font-mono` in `styles.css`

### Analytics

The site uses [GoatCounter](https://www.goatcounter.com/) — free, no cookies, GDPR-friendly.

Replace `YOURSITE` in the `<script data-goatcounter="...">` tag in each HTML file with your GoatCounter subdomain. Sign up at goatcounter.com to get one.

### Custom domain

1. Update `CNAME` with your domain (one line, no protocol — e.g. `tylerv.design`)
2. In GitHub: **Settings → Pages → Custom domain**
3. Add a CNAME DNS record pointing to `tylererv.github.io`

---

## Deployment (GitHub Pages)

This repo deploys automatically via GitHub Pages on every push to `main`.

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

Pages builds from the root of `main`. No build step required — files are served as-is.

To confirm Pages is enabled: **Settings → Pages → Source: Deploy from branch → Branch: main / (root)**.

---

## Developer Shortcuts

These work in any browser while viewing the site:

| Shortcut | What it does |
|---|---|
| `` ` `` (backtick) | Opens the terminal easter egg |
| `Shift + G` | Toggles the 12-column design grid overlay |
| ☽ / ☀ button in nav | Toggles dark mode (saved to localStorage) |

---

## Rebuilding After Template Changes

If you ever edit shared assets that the minified files depend on:

```bash
# Minify JS
npx terser script.js -o script.min.js --compress --mangle

# Minify CSS
npx csso styles.css -o styles.min.css
```

Both tools run via `npx` — no global install needed.
