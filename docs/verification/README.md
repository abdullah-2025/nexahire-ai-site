# Migration verification

Verified locally on October 5, 2026, using Chrome and the Next.js production server.

## Build and code checks

- `npm run build`: successful; the home page is statically prerendered.
- `npm run typecheck`: passed.
- `npm run lint`: passed without warnings.
- Home route: HTTP 200. Unknown route: HTTP 404.
- Project directory, package name, and lockfile name: `nexahire-ai-site`.
- Vite dependencies, entry points, configuration, generated output, and the legacy HTML injection were removed.

`npm audit --omit=dev` reports zero vulnerabilities. The full audit reports five development-only advisories in the Tailwind 3 glob-pattern dependency chain. Tailwind 3.4.17 is retained to match the original utility styles; npm's suggested Tailwind 4 upgrade changes style defaults and is outside this visual-preservation migration.

## Browser checks

The checks in `verify.mjs` passed at widths of 1440, 768, 390, 375, and 320 pixels:

- Desktop anchor navigation and mobile menu opening, closing, and navigation.
- Feature selection, image loading, wipe transitions, keyboard navigation, and rapid changes that interrupt an animation.
- Hero and statistics counters, the scroll-driven readiness score, and the WebGL canvas.
- FAQ opening, closing, exclusive selection, and continued visibility after React renders.
- Required form fields, the original local confirmation, and field reset.
- Footer navigation to the top and prevention of horizontal overflow.
- No browser errors, warnings, failed requests, or external asset requests.
- The landing page's headings, tabs, FAQ, and footer are present in server-rendered HTML.

The detailed results are in `functional-report.json`.

## Visual comparison

Original and migrated screenshots were captured at 1440 × 900, 390 × 844, and 768 × 1024. Fonts were allowed to load, tabs were held on the first feature, scroll reveals were visited, and CSS animations were disabled for section comparisons. The original styles and their responsive breakpoints were retained.

The layout comparison checks every section's position, width, and height, along with the document's total height. The screenshot comparison covers the hero, features, how-it-works, readiness, journey, testimonials, pricing, and FAQ. The animated WebGL field is compared visually; its frames advance independently between captures.

Every measured section has a **0px difference** in position and dimensions at all three sizes. Total page height also matches exactly. How-it-works, readiness, testimonials, pricing, and FAQ screenshots have **0 differing pixels** at the comparison threshold. Detailed results are in `visual-comparison.json`.

| Viewport            | Original                                       | Next.js                                      |
| ------------------- | ---------------------------------------------- | -------------------------------------------- |
| Desktop, 1440 × 900 | [Screenshot](screenshots/desktop-original.png) | [Screenshot](screenshots/desktop-nextjs.png) |
| Mobile, 390 × 844   | [Screenshot](screenshots/mobile-original.png)  | [Screenshot](screenshots/mobile-nextjs.png)  |

## Repeat the browser checks

The verification tooling is separate from application dependencies. With Google Chrome installed, run the production server on port 3001:

```sh
npm run build
npm start -- --port 3001
```

In another terminal, copy the script into a temporary tools directory and install Playwright there:

```sh
mkdir -p /tmp/nexahire-check
cp docs/verification/verify.mjs /tmp/nexahire-check/verify.mjs
npm install --prefix /tmp/nexahire-check playwright
node /tmp/nexahire-check/verify.mjs http://localhost:3001
```

This writes a new `functional-report.json` next to the copied script.

## Preserved behavior

The original page is a marketing/demo site. Account submission still shows a local confirmation without making a backend request. Existing placeholder links retain their original destinations.

No Git commands, commits, pushes, or branch operations were performed.
