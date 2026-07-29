# Folder Structure

```
tylererv.github.io/
├── index.html                  # Home page and about me page
├── projects.html               # Project index
├── research.html               # Research index
├── work-experience.html        # Work experience and availability page
├── about.html                  # Redirect-style fallback to the home/about page
├── 404.html                    # GitHub Pages 404 page
├── projects/                   # Standalone project case pages
├── research/                   # Standalone research detail pages
├── assets/
│   ├── img/                    # Portfolio images, project visuals, favicon source image, OG image
│   └── research/               # Research poster and abstract PDF files
├── docs/                       # Internal project documentation
├── styles.css                  # CSS source
├── styles.min.css              # CSS loaded by HTML pages
├── script.js                   # JavaScript source
├── script.min.js               # JavaScript loaded by HTML pages
├── manifest.json               # Web app metadata
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Crawl rules
└── favicon.svg                 # SVG favicon fallback
```

## Major Areas

- The root HTML files define the primary site pages and shared navigation.
- `projects/` owns individual project case studies; each project gets its own `.html` file.
- `research/` owns individual research detail pages and links to local research assets.
- `assets/img/` and `assets/research/` hold visual and document assets used by the site.
- `styles.css` and `script.js` are the editable source files for the shared frontend system.
- `docs/` keeps development notes, scope tracking, and content rules.

## Key Rules

- HTML pages load `styles.min.css` and `script.min.js`.
- Keep `styles.css` and `styles.min.css` aligned after style changes.
- Keep `script.js` and `script.min.js` aligned after interaction changes.
- Use local assets whenever possible.
- Update `docs/scope.md` when main pages, project pages, or research pages change.
