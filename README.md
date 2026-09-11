# Fixed By Sibu — Editorial Hair & Makeup Artistry

Official web portfolio and client liaison portal for Fixed by Sibu.

## GitHub Pages Deployment

The repository is pre-configured for GitHub Pages deployment.

### Option 1: Automated Deployment via GitHub Actions (Recommended)

1. Push your repository to GitHub (`main` or `master` branch).
2. On GitHub, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! The pre-configured `.github/workflows/deploy.yml` workflow will automatically build and deploy the site on every push.

### Option 2: Manual Deployment via `gh-pages`

You can also deploy directly from your local terminal using the pre-configured script:

```bash
# 1. Install dependencies
npm install

# 2. Build and publish to the gh-pages branch
npm run deploy
```

Then in **Settings** → **Pages**, select **Deploy from a branch** and choose `gh-pages` as the source branch with `/ (root)`.

---

## Local Development

```bash
# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
