# Portfolio Scope

## End Goal

Build and maintain Tyler Ervin's personal software development portfolio on GitHub Pages. The site should present selected projects clearly, link to relevant repositories when public, include project images when available, and explain Tyler's personal contribution to each project.

## Core Moving Parts

- `index.html` lists selected and pet projects with `data-start-date`, thumbnail, short description, tags, and optional repository link.
- The homepage Research section links to research pages in `research/`, with local PDFs and poster images stored in `assets/research/`.
- `projects/` contains one standalone case-study HTML page per portfolio project.
- `assets/img/` stores local portfolio images, including thumbnails, Open Graph images, and downloaded project assets from public repositories.
- `about.html` presents Tyler's bio, stack, availability, and contact links.
- `script.js` and `script.min.js` power shared interactions, project-card external links, keyboard shortcuts, and the terminal overlay.
- Project cards are automatically sorted newest-to-oldest within each project list from their `data-start-date` values. Full dates use `YYYY-MM-DD`; year-only values use `YYYY`.
- `styles.css` and `styles.min.css` define the visual system used by every page.
- `docs/` records development structure, project-addition steps, and this scope tracker.

## Active Project Pages

- PrintGuard: public GitHub metadata added from `tylererv/PrintGuard`; default gray project image used because there is no official picture.
- Gone-Phishin: public GitHub metadata and image added from `tylererv/Gone-Phishin`; personal contribution section added.
- Smooth Cruize: local project page exists, but no exact public GitHub repository match was found; personal contribution section added.
- Osiris: local project page exists, but no exact public GitHub repository match was found; image and personal contribution section added.
- PictureMe: local project page exists, but no exact public GitHub repository match was found; image and personal contribution section added.
- Blackjack: local project page exists, but no exact public GitHub repository match was found; personal contribution section added.

## Scope Guardrails

- Keep the portfolio focused on software development projects and practical implementation details.
- Preserve the original template license and attribution files unless Tyler explicitly asks to change them.
- Do not invent project outcomes, metrics, or personal contributions; use confirmed repository information or Tyler-provided notes.
- Prefer local images in `assets/img/` over hotlinked repository assets.
