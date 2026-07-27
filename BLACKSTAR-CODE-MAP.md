# Blackstar Code Map

## Project status

| Item | Value |
| --- | --- |
| Visual design | Unchanged |
| Page content | Unchanged |
| Interactions | Unchanged |
| Code naming | Blackstar specific |
| Content location | Centralized |
| GitHub deployment | Automated |

## Main folders

| Path | Purpose |
| --- | --- |
| `app/` | Website pages |
| `app/_blackstar/` | Shared Blackstar code |
| `app/_blackstar/components/` | Shared Blackstar components |
| `config/` | GitHub Pages settings |
| `public/` | Public website assets |
| `scripts/` | Build and validation tools |
| `.github/workflows/` | GitHub Pages automation |

## Page files

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Journey entrance and object map |
| `app/about/page.tsx` | Portrait room |
| `app/journal/page.tsx` | Newspaper room |
| `app/chapters/page.tsx` | Compass room |
| `app/projects/page.tsx` | Projector room |
| `app/contact/page.tsx` | Telephone room |
| `app/layout.tsx` | Shared page shell and metadata |
| `app/globals.css` | Full visual system |

## Shared Blackstar files

| Path | Purpose |
| --- | --- |
| `app/_blackstar/blackstar-site-content.ts` | Editable content and collection data |
| `app/_blackstar/blackstar-journey-storage.ts` | Visited room browser storage |
| `app/_blackstar/components/BlackstarJourneyNavigation.tsx` | Desktop and mobile room navigation |
| `config/blackstar-github-pages.ts` | Repository path detection |

## Content exports

| Name | Purpose |
| --- | --- |
| `BLACKSTAR_JOURNEY_PATHS` | Five journey choices |
| `BLACKSTAR_JOURNEY_ROOMS` | Navigation room list |
| `BLACKSTAR_SKY_STARS` | Entrance star positions |
| `BLACKSTAR_ABOUT_CONVERSATIONS` | About room questions and answers |
| `BLACKSTAR_JOURNAL_STORIES` | Journal story previews |
| `BLACKSTAR_JOURNAL_FILTERS` | Journal filter choices |
| `BLACKSTAR_CHAPTER_PLACES` | Chapter locations |
| `BLACKSTAR_PROJECTS` | Project drawer content |
| `BLACKSTAR_ROOM_COUNT` | Journey progress total |

## Main components

| Name | Purpose |
| --- | --- |
| `BlackstarJourneyEntrancePage` | Journey start and room selection |
| `BlackstarJourneyArtifact` | Five interactive object designs |
| `BlackstarJourneyNavigation` | Shared navigation and progress |
| `BlackstarAboutRoomPage` | About room interaction |
| `BlackstarJournalRoomPage` | Journal filtering and reader |
| `BlackstarChaptersRoomPage` | Location selection and saving |
| `BlackstarProjectsRoomPage` | Project drawer interaction |
| `BlackstarContactRoomPage` | Contact form demonstration |
| `BlackstarRootLayout` | Global page wrapper |

## Main state names

| Name | Purpose |
| --- | --- |
| `journeyStarted` | Entrance state |
| `selectedJourneyPath` | Open journey choice |
| `highlightedJourneyPath` | Hovered or focused choice |
| `visitedRoomKeys` | Discovery progress |
| `navigationMenuOpen` | Mobile navigation state |
| `activeConversationPrompt` | Selected About answer |
| `selectedJournalFilter` | Selected story type |
| `openJournalStory` | Open story reader |
| `activeChapterPlace` | Selected chapter |
| `savedChapterKeys` | Saved chapter choices |
| `openProjectIndex` | Open project drawer |
| `followedProjectNumbers` | Followed projects |
| `messagePrepared` | Contact form result |

## Style areas

| CSS marker | Purpose |
| --- | --- |
| `:root` | Blackstar color tokens |
| `Journey entrance and explorable world` | Start screen and object map |
| `Shared room navigation` | Desktop and mobile navigation |
| `About room` | Portrait and conversation layout |
| `Journal room` | Filters and story reader |
| `Chapters room` | Map and place cards |
| `Projects room` | Project drawers |
| `Contact room` | Telephone and form |
| `Responsive` | Tablet and mobile layouts |
| `Reduced motion` | Motion accessibility |

## Blackstar color tokens

| Name | Purpose |
| --- | --- |
| `--blackstar-night` | Main dark background |
| `--blackstar-ink` | Main dark text |
| `--blackstar-bone` | Main light text |
| `--blackstar-paper` | Light page background |
| `--blackstar-clay` | Rust accent |
| `--blackstar-gold` | Gold accent |
| `--blackstar-blue` | Blue accent |
| `--blackstar-moss` | Green accent |
| `--blackstar-line` | Border color |

## Common changes

| Change | File |
| --- | --- |
| Journey labels | `app/_blackstar/blackstar-site-content.ts` |
| About questions | `app/_blackstar/blackstar-site-content.ts` |
| Journal stories | `app/_blackstar/blackstar-site-content.ts` |
| Chapter places | `app/_blackstar/blackstar-site-content.ts` |
| Project details | `app/_blackstar/blackstar-site-content.ts` |
| Page wording | Matching `app/*/page.tsx` |
| Colors | `app/globals.css` |
| Layouts | `app/globals.css` |
| Animations | `app/globals.css` |
| Favicon | `public/favicon.svg` |
| GitHub path logic | `config/blackstar-github-pages.ts` |

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Package installation |
| `npm run dev` | Local website |
| `npm run build` | GitHub Pages build |
| `npm run validate` | Six page verification |

## Generated folders

| Path | Purpose |
| --- | --- |
| `node_modules/` | Installed packages |
| `.next/` | Next.js temporary build |
| `out/` | GitHub Pages website |

## Browser storage

| Item | Value |
| --- | --- |
| Storage key | `blackstar-visited` |
| Stored value | Visited room keys |
| Storage location | Visitor browser |

## Contact form

| Item | Value |
| --- | --- |
| Current mode | Demonstration |
| Email delivery | Not connected |
| Submit result | Local confirmation |

## GitHub publishing

| Item | Value |
| --- | --- |
| Workflow | `.github/workflows/deploy-pages.yml` |
| Trigger | Main branch update |
| Build output | `out/` |
| Pages source | GitHub Actions |
