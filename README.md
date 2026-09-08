# CV — Rifdi Ardhi Ramadhandi

Personal one-page CV with a portfolio section and per-project detail pages.
Pure static site — plain HTML, CSS, and vanilla JS, no build step.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Landing page — hero, about, skills, experience timeline, contact |
| `portfolio.html` | Portfolio grid of shipped projects |
| `project.html` | Per-project detail page, rendered from `?id=<project-id>` |
| `data-projects.js` | Single source of truth for project data (used by `project.html`) |
| `project-detail.js` | Renders `project.html` from `data-projects.js` |
| `script.js` | Shared UI behaviour (cursor, reveal-on-scroll, typewriter, timeline) |
| `style.css` | All styling |
| `assets/` | `profile.png` + project screenshots in `assets/project/` |
| `vercel.json` | Static headers (long-lived cache for `assets/`, basic security headers) |

## Local preview

Any static server works. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` also works, but the `project.html?id=...`
pages need to be served over HTTP.

## Deploy to Vercel

The repo has no framework and no build — Vercel serves the files as-is.

**Dashboard:** import `github.com/rifdi12/cv` at [vercel.com/new](https://vercel.com/new).
Framework preset: **Other**. Build command: _none_. Output directory: `.` (root).
Every push to `main` redeploys automatically.

**CLI:**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```
