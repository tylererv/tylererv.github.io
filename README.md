# Tyler Ervin Portfolio

This repository is Tyler Ervin's static software development portfolio for GitHub Pages. The site has been rebuilt from scratch with a dark green, grey, and black visual system, lightweight scroll animation, and standalone HTML case pages for each project.

## Main Pages

- `index.html` - home page and about me page.
- `projects.html` - project index.
- `research.html` - research index.
- `work-experience.html` - work experience and role focus.
- `projects/*.html` - one standalone case page per project.
- `research/edge.html` - research detail page.

## Development

This is a dependency-free static site. Open `index.html` directly or serve the folder with any local static server.

The HTML pages load `styles.min.css` and `script.min.js`. The source files are `styles.css` and `script.js`; keep the minified files updated whenever the source files change.

## Content Rules

- Keep project claims grounded in confirmed portfolio notes, repository content, or user-provided details.
- Use local images from `assets/img/` and `assets/research/`.
- Keep each project as its own `.html` file inside `projects/`.
- Update `docs/scope.md` when project scope or page inventory changes.

## Deployment

GitHub Pages serves the repository from the root of the main branch. No framework build step is required.
