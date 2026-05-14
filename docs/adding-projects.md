# Adding a New Project

Follow these steps every time you add a new case study to the portfolio.

---

## 1. Create the case study page

Duplicate `projects/example.html` and rename it:

```
projects/my-project-name.html
```

Open the new file and update:

- **`<title>`** — e.g. `Project Name — Tyler Ervin`
- **`<meta name="description">`** — one-sentence summary of the project
- **`og:title`, `og:description`, `og:image`** — Open Graph tags for social sharing
- **`og:url` and `<link rel="canonical">`** — set to `https://tylererv.github.io/projects/my-project-name`
- **`<h1 class="case-h1">`** — project title
- **`.case-meta`** — role · company · year
- All body content — sections, images, stats, quotes

---

## 2. Add images

Place project images in `assets/img/`. Use both WebP and PNG:

```
assets/img/thumb-myproject.webp   ← primary (smaller, faster)
assets/img/thumb-myproject.png    ← fallback
```

Reference them in the case study with a `<picture>` element:

```html
<picture>
  <source srcset="../assets/img/thumb-myproject.webp" type="image/webp">
  <img class="case-img-full" loading="lazy"
       src="../assets/img/thumb-myproject.png" alt="Description">
</picture>
```

> **Tip:** Use `loading="lazy"` on every image below the fold.

---

## 3. Add a project card to the home page

Open `index.html` and add a card inside the appropriate `<div class="project-list">`:

```html
<a href="projects/my-project-name.html" class="project-item reveal">
  <span class="project-year">2025</span>
  <img class="project-thumb" src="assets/img/thumb-myproject.png" alt="Project Name">
  <div class="project-name">
    <span class="project-name-title">Project Name</span>
    <!-- Optional: add a live site link -->
    <span class="project-name-link" role="link" tabindex="0"
          data-href="https://yoursite.com" aria-label="Open Project Name website">site ↗</span>
  </div>
  <div class="project-info">
    <span class="project-info-desc">Mobile application</span>
    <span class="project-info-tags">Product design, UI/UX</span>
    <span class="project-info-industry">SaaS</span>
  </div>
  <span class="project-arrow">→</span>
</a>
```

Cards are sorted newest-first by convention.

---

## 4. Update the sitemap

Add the new URL to `sitemap.xml`:

```xml
<url>
  <loc>https://tylererv.github.io/projects/my-project-name</loc>
  <priority>0.9</priority>
</url>
```

---

## 5. Rebuild minified files

After any edits to `styles.css` or `script.js`, rebuild:

```bash
npx terser script.js -o script.min.js --compress --mangle
npx csso styles.css -o styles.min.css
```

HTML pages load the `.min` versions — skipping this step means your changes won't appear in production.

---

## Available Case Study Components

| Component class | What it renders |
|---|---|
| `.case-section` | Numbered content section with title |
| `.case-stats` | 4-column key metrics grid |
| `.case-img-full` | Full-width image (click opens lightbox) |
| `.case-img-row` | Two images side by side |
| `.case-img-row--3` | Three-column image grid |
| `.case-caption` | Caption text below an image |
| `.case-quote` | Blockquote with optional `<cite>` |
| `.case-description` | Large intro paragraph with indent |
| `.case-links` | External links row (Figma, prototype, site) |
| `.case-video` | Autoplay muted video wrapper |
| `.case-separator` | Horizontal rule divider |
| `.case-nav` | Prev / next project navigation |
| `.case-tabs` | Tabbed panels (e.g. Product / Process) |
| `.case-slideshow-wrap` | Image carousel with arrow controls |
| `.mac-mockup` | Browser chrome mockup with titlebar |

### Tabs example

```html
<div class="case-tabs" role="tablist">
  <button class="case-tab active" data-tab="product"
          role="tab" aria-selected="true" aria-controls="panel-product">Product</button>
  <button class="case-tab" data-tab="process"
          role="tab" aria-selected="false" aria-controls="panel-process">Process</button>
</div>

<div class="case-body">
  <div class="case-tab-panel active" data-panel="product" id="panel-product" role="tabpanel">
    <!-- product content -->
  </div>
  <div class="case-tab-panel" data-panel="process" id="panel-process" role="tabpanel">
    <!-- process content -->
  </div>
</div>
```

### Slideshow example

```html
<div class="case-slideshow-wrap" data-slideshow>
  <div class="case-slideshow">
    <div class="case-slideshow-track">
      <picture><source srcset="../assets/img/slide-1.webp" type="image/webp">
        <img src="../assets/img/slide-1.png" alt="Slide 1"></picture>
      <picture><source srcset="../assets/img/slide-2.webp" type="image/webp">
        <img src="../assets/img/slide-2.png" alt="Slide 2"></picture>
    </div>
    <div class="case-slideshow-nav">
      <span class="case-slideshow-counter" data-counter>1/2</span>
    </div>
  </div>
  <button class="case-slideshow-arrow" data-prev>&#x2039;</button>
  <button class="case-slideshow-arrow" data-next>&#x203A;</button>
</div>
```
