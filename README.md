# NexaHire AI Site

The NexaHire AI landing page, built with Next.js App Router, React, and TypeScript. The original design, responsive layouts, fonts, imagery, and animations are preserved.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production and checks

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Structure

- `src/app/`: root layout, metadata, global CSS, and the home route.
- `src/components/sections/`: individual landing page sections. Static sections render on the server; tabs and the FAQ use client components.
- `src/components/`: navigation, the original WebGL cursor field, reusable icons, animated numbers, heading highlights, scroll effects, and the signup form.
- `src/data/`: feature, FAQ, and hero icon data.
- `src/styles/`: original theme and section styles, plus local font faces.
- `public/fonts/`: original Inter and Instrument Serif WOFF2 files.
- `public/images/`: original showcase and testimonial images, plus the preserved hero asset.

Tailwind CSS 3.4.17 is compiled with PostCSS to match the original CDN's utility styles. Icons are bundled from Lucide. No browser-side CSS compiler, remote icon script, Google Fonts request, or external image request is required. Images use `next/image` with `unoptimized` to preserve the original image bytes and appearance.

All existing hash navigation and interactions are retained. The signup form preserves the original local confirmation and reset behavior; it does not create an account or send data to a backend. Links whose original destination was `#` remain placeholders.

Build, browser, and visual check details are in [docs/verification/README.md](docs/verification/README.md).
