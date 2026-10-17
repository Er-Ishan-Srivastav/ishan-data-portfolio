# Publish this portfolio on GitHub Pages

The site is plain HTML/CSS/JavaScript; there is no npm install or build step.

## 1. Create the new repository

Open https://github.com/new and create a **public** repository named `ishan-data-portfolio` under `Er-Ishan-Srivastav`.

For the simplest first push, leave **Add a README**, **Add .gitignore**, and **Choose a license** unchecked, because those files are already in this package.

## 2. Push the files from Windows PowerShell

Extract `ishan-data-portfolio.zip`, open PowerShell in the extracted `ishan-data-portfolio` folder, and run:

```powershell
git init -b main
git add .
git commit -m "Initial data engineering portfolio"
git remote add origin https://github.com/Er-Ishan-Srivastav/ishan-data-portfolio.git
git push -u origin main
```

Git must be installed, and you must be signed in to GitHub (Git Credential Manager or GitHub CLI authentication is fine). If the folder is already a Git repository, skip `git init`; if `origin` already exists, use `git remote set-url origin https://github.com/Er-Ishan-Srivastav/ishan-data-portfolio.git` instead of `git remote add origin ...`.

## 3. Enable GitHub Pages

1. Open [repository Settings → Pages](https://github.com/Er-Ishan-Srivastav/ishan-data-portfolio/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions** and save.
3. The repository contains `.github/workflows/pages.yml`, which uploads the static site files and deploys them on every push to `main`.
4. If the workflow was attempted before Pages was enabled, open **Actions → Deploy portfolio to GitHub Pages → Run workflow** once after changing the setting.
5. Confirm the run succeeds and GitHub Pages shows the published URL.

The default address for this repository will be:

`https://er-ishan-srivastav.github.io/ishan-data-portfolio/`

## 4. Enable the contribution snake (optional)

The site repository includes `.github/workflows/snake.yml`. Open **Settings → Actions → General → Workflow permissions** and enable read/write permissions for Actions if the workflow does not have permission to publish. Then open **Actions → Generate contribution snake → Run workflow**. The workflow publishes the generated SVG to the `output` branch. The portfolio's repository README links to that generated file.

## 5. Optional: use the matching GitHub profile README

The `profile-readme/` folder is a separate starter. Create or update the special repository `Er-Ishan-Srivastav/Er-Ishan-Srivastav`, then copy the **contents** of `profile-readme/` into the repository root. That copies the README, `assets/` SVGs, and `.github/workflows/snake.yml` to paths GitHub expects. Review the content and external stat-card services before publishing.

## Local preview

From the website repository root:

```powershell
py -m http.server 8080
```

Open http://localhost:8080 in a browser.
