# Folder Structure

```
tylererv.github.io/
├── index.html              # Home page — project list
├── about.html              # About page
├── 404.html                # 404 error page (GitHub Pages auto-serves this)
│
├── projects/
│   └── example.html        # Case study template — duplicate for each project
│
├── assets/
│   └── img/                # All images: thumbnails (WebP + PNG), OG image
│
├── docs/                   # Project documentation (you are here)
│   ├── structure.md        # This file
│   ├── adding-projects.md  # How to add new case studies
│   ├── getting-started.md  # How to start building / customizing
│   └── scope.md            # Portfolio scope and project tracking
│
├── .github/
│   └── ISSUE_TEMPLATE/     # GitHub issue templates (bug, feature request)
│
├── styles.css              # Full CSS source — edit this
├── styles.min.css          # Minified CSS — loaded by HTML pages
├── script.js               # Full JS source — edit this
├── script.min.js           # Minified JS — loaded by HTML pages
│
├── favicon.svg             # Favicon (SVG, accent-colored circle with initial)
├── manifest.json           # PWA web app manifest
├── sitemap.xml             # Sitemap for search engines
├── robots.txt              # Crawl rules
├── CNAME                   # Custom domain for GitHub Pages
└── .gitignore
```

## Key Rules

- **HTML files load the `.min` files** — `styles.min.css` and `script.min.js`. Always rebuild after editing source files (see `getting-started.md`).
- **All images live in `assets/img/`** — use WebP with a PNG fallback via `<picture>`.
- **Projects go in `projects/`** — each case study is a standalone `.html` file.
- **Project scope lives in `docs/scope.md`** — update it when adding or changing portfolio project goals.
- **`docs/` is never served as a page** — it's purely for developer reference.
