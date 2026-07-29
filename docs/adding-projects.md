# Adding a New Project

Each project must have its own standalone `.html` file inside `projects/`.

## Steps

1. Create `projects/project-name.html`.
2. Add the shared header, navigation, footer, and script/style references used by the existing project pages.
3. Add a project card to `projects.html`.
4. Place project images in `assets/img/` and reference them locally.
5. Add the new project URL to `sitemap.xml`.
6. Update `docs/scope.md`.

## Content Rules

- Do not invent metrics, repository details, employer names, or personal contributions.
- Use project descriptions and images that are already confirmed or explicitly provided.
- Keep case pages focused on project description, tech stack when confirmed, and personal contribution.
- Keep filenames stable once linked from `projects.html` and `sitemap.xml`.
