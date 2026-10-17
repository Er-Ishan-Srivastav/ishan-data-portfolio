<div align="center">

<img src="./assets/hero.svg" width="100%" alt="Ishan Srivastav — abstract data systems banner" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=2600&pause=700&color=FF4757&center=true&vCenter=true&width=760&height=36&lines=%3E+building+reliable+data+workflows;%3E+Python+%2F+SQL+%2F+ETL;%3E+backend+systems+%26+databases;%3E+applied+AI+%E2%80%94+with+engineering+discipline" alt="Animated profile lines" />

<a href="https://www.linkedin.com/in/ishansri03/"><img src="https://img.shields.io/badge/LinkedIn-0B1D51?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="mailto:ishan70073@gmail.com"><img src="https://img.shields.io/badge/Email-B11313?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
<a href="https://er-ishan-srivastav.github.io/ishan-data-portfolio/"><img src="https://img.shields.io/badge/Current_Portfolio-0B1D51?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
<a href="https://github.com/Er-Ishan-Srivastav"><img src="https://img.shields.io/badge/GitHub-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>

</div>

<img src="./assets/web-divider.svg" width="100%" alt="" />

# Ishan Srivastav — Data Engineering & Systems

A responsive, hand-built portfolio highlighting data engineering, backend development, databases, and applied AI. The visual system is inspired by dynamic GitHub profile READMEs—animated SVG art, red/blue signal colors, compact case files, and developer stats—adapted into an original personal site.

## What's included

- `index.html` — complete responsive portfolio website.
- `assets/css/styles.css` — layout, theme, responsive rules, accessible motion settings.
- `assets/js/main.js` — mobile navigation, section tracking, scroll indicator, reveal effects, animated role text.
- `assets/hero.svg` and `assets/web-divider.svg` — original local SVG art with an abstract data-grid/night-city motif.
- `profile-readme/` — separate ready-to-copy GitHub profile README, matching graphics, and contribution-snake workflow.
- `.github/workflows/pages.yml` — publishes the static website to GitHub Pages on each push to `main`.
- `.github/workflows/snake.yml` — generates a GitHub contribution snake into the `output` branch.

## Setup guide

See [`SETUP.md`](SETUP.md) for exact steps to create the remote repository, push this folder, enable GitHub Pages, and run the contribution-snake workflow.

## Preview locally

Use Python's built-in static server from the repository root:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish using GitHub Pages

1. Create a public repository named `ishan-data-portfolio` under `Er-Ishan-Srivastav`.
2. Push the contents of this repository to `main`.
3. Open [Settings → Pages](https://github.com/Er-Ishan-Srivastav/ishan-data-portfolio/settings/pages) and select **GitHub Actions** as the publishing source.
4. The `Deploy portfolio to GitHub Pages` workflow will publish the website. If its first run happened before Pages was enabled, open **Actions**, select that workflow, and choose **Run workflow**.
5. Under **Settings → Actions → General**, allow read/write workflow permissions so the contribution-snake workflow can publish its generated `output` branch.
6. Run **Actions → Generate contribution snake → Run workflow** once, then allow scheduled runs to refresh it daily.

GitHub Pages may take several minutes to publish after setup. Stats cards and technology icons use public third-party image endpoints and can occasionally be rate-limited or unavailable; the portfolio layout itself does not require a frontend build step.

## Featured work

| Project | Focus | Source / Demo |
|---|---|---|
| SmartVolt | Full-stack prepaid electricity-meter simulation with React/TypeScript, FastAPI, PostgreSQL, Alembic, Docker and Caddy HTTPS | [Live demo](https://smartvolt-demo.duckdns.org/overview) · [Source](https://github.com/Er-Ishan-Srivastav/SmartVolt) |
| PayFlow UPI | Simulated UPI transaction system with ACID workflows, MySQL, concurrency handling and fraud rules | [Source](https://github.com/Er-Ishan-Srivastav/PayFlow-UPI-Management-System) |
| CAMAF | Adaptive traffic-control research using computer vision, federated learning and SUMO simulation | [Source](https://github.com/Er-Ishan-Srivastav/Adaptive-Traffic-Control-System) |
| BrillX | AI-assisted SaaS learning platform with Node.js, FastAPI, MongoDB and AWS | [Source](https://github.com/Er-Ishan-Srivastav/BrillX-Saas-Learning-Platform) |
| Ishan Learning Hub | Public C-DAC Big Data Analytics study notes and revision modules | [Open hub](https://er-ishan-srivastav.github.io/Ishan-Learning-Hub/) |

SmartVolt is a simulation/learning project: it does not control physical meters or process real payments. CAMAF's conference manuscript is described as submitted for review, not accepted.

## Contribution graphic

After the `Generate contribution snake` workflow has run successfully, the generated SVG is published to the `output` branch and appears here:

<div align="center">

<img width="100%" src="https://raw.githubusercontent.com/Er-Ishan-Srivastav/ishan-data-portfolio/output/github-contribution-grid-snake-dark.svg" alt="GitHub contribution snake animation" />

</div>

## Profile README starter

To use the matching GitHub profile README, create or update the special repository `Er-Ishan-Srivastav/Er-Ishan-Srivastav`, then copy the **contents** of `profile-readme/` into its root. This folder contains the README, local SVG assets, and contribution-snake workflow. Review profile wording and linked services before publishing.

## Tech

HTML5 · CSS · Vanilla JavaScript · SVG · GitHub Pages · GitHub Actions

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1D51,50:B11313,100:0B1D51&height=100&section=footer&text=Build%20clearly.%20Ship%20reliably.&fontSize=18&fontColor=FFFFFF&fontAlignY=72" width="100%" alt="Build clearly. Ship reliably." />
