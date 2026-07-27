# Blackstar Interactive Journey

This is the complete source for the interactive Blackstar website. It includes:

See [`BLACKSTAR-CODE-MAP.md`](BLACKSTAR-CODE-MAP.md) for the short-description
file map, custom names, content locations, state names, style areas, and update
locations.

- A minimal **Start Your Journey** entrance
- An explorable world with five clickable objects
- About, Journal, Chapters, Projects, and Contact rooms
- Discovery progress saved in the visitor's browser
- Story filters and story-reader overlays
- Selectable chapters and saved locations
- Expandable project drawers
- A responsive mobile menu
- Keyboard, touch, and reduced-motion support
- Automatic deployment to GitHub Pages

The current stories, projects, images, and contact details are sample content. The
contact form demonstrates the experience but does not send messages yet.

## Put the website online with GitHub

These instructions are prepared for the GitHub account `asn-netizen`.

1. Sign in to GitHub and create a new **public** repository. A clear name would
   be `blackstar-journey`.
2. Upload everything from this project folder to the repository. Keep the
   `.github` folder because it contains the automatic publishing workflow.
3. Commit the uploaded files to the `main` branch.
4. Open the repository's **Settings**.
5. Select **Pages** in the left menu.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Open the **Actions** tab and wait for “Deploy Blackstar to GitHub Pages” to
   finish with a green check mark.

If the repository is named `blackstar-journey`, the website address will be:

`https://asn-netizen.github.io/blackstar-journey/`

The workflow automatically detects the repository name, so internal links and
styles will work even if you choose a different name.

## Update the website later

Edit the files in `app/`, commit the changes to `main`, and GitHub will publish
the new version automatically.

Important locations:

- `app/page.tsx` — entrance and explorable object map
- `app/about/page.tsx` — About room
- `app/journal/page.tsx` — Journal room
- `app/chapters/page.tsx` — Chapters room
- `app/projects/page.tsx` — Projects room
- `app/contact/page.tsx` — Contact room
- `app/_blackstar/blackstar-site-content.ts` — all collection content
- `app/_blackstar/blackstar-journey-storage.ts` — discovery progress
- `app/_blackstar/components/BlackstarJourneyNavigation.tsx` — shared navigation
- `config/blackstar-github-pages.ts` — GitHub Pages path settings
- `app/globals.css` — all styling, layouts, and animation
- `public/` — favicon and future image/audio files

## Run it on your computer

Install [Node.js 22](https://nodejs.org/), open a terminal in this folder, and
run:

```bash
npm install
npm run dev:github
```

Then open `http://localhost:3000`.

To create and verify the same static files GitHub Pages will publish:

```bash
npm run build:github
npm run validate:github
```

The finished static website will be in the `out/` folder.

## Optional custom domain

The project works first at the standard GitHub Pages address. A custom domain
can be connected later from **Settings → Pages**. When a custom domain is added,
set the repository variable `SITE_BASE_PATH` to `/` before the next deployment.
