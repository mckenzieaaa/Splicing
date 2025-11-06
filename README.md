# Splicing

This workspace contains a small static prototype for a 3-level pixel-game collection and a main menu.

Quick notes:
- Resolution: main bead-board canvas uses 1920×1088 to align with 16×16 pixel blocks (1088 = 68 * 16). This is a small assumption to keep the pixel grid integer-aligned. If you require exactly 1080px high, we can adapt code to handle non-divisible heights; I chose 1088 to avoid half-block rows.
- Pixel block size: 16×16 device pixels per logical pixel block.
- Level final codes (for unlocking flow): 1030 (L1), 0218 (L2), 1218 (L3).

How to run locally:

Option A — quick (recommended): run a simple static server from the project root and open the site in a browser:

```bash
# from project root
python3 -m http.server 8000
# then open http://localhost:8000/index.html in your browser
```

Option B — open directly: double-click `index.html` in Finder. (Note: some browsers restrict certain local file features; use Option A if you see problems.)

Progress is persisted in `localStorage` under key `splicing_state_v1`.

What I added:
- `index.html` — main menu + bead-board canvas + key inputs
- `style.css` — styling and POLYU theme
- `app.js` — main page logic (state saved to localStorage)
- `level1.html`, `level2.html`, `level3.html` — placeholder level pages with "Complete Level" buttons that drop keys

Next steps suggested:
- Replace placeholder levels with the full gameplay for each assigned team member.
- Implement actual level-to-level password handing inside game logic (e.g., drop the code visually inside the game rather than an alert).
- Add tests/CI or GitHub Pages deployment if you want to publish a demo before your meeting.

Deploy to GitHub Pages (automatic):

1. Commit and push your changes to the repository `main` branch.
2. The included GitHub Actions workflow `.github/workflows/gh-pages.yml` will run on push to `main` and publish the repository root to the `gh-pages` branch.
3. After the Action completes, enable GitHub Pages in your repository Settings and set the source to the `gh-pages` branch (root). GitHub will provide a site URL (usually `https://<owner>.github.io/<repo>`).

Notes & permissions:
- The workflow uses the built-in `GITHUB_TOKEN` so no extra secrets are needed for basic publishing.
- If your repo has a custom domain or special settings, configure those after the first deploy.

