# NexaHire Landing Page — Design System

The landing page markets NexaHire as an **AI-Powered Job & Interview Platform**: students rehearse with an AI voice interviewer, get a scored report after every session, and apply to roles matched to their profile. The CV builder, AI CV analysis and career roadmap are supporting tools.

It shares one brand with the app (`AI-Powered-Job-and-Interview-Platform/frontend`): the same tokens, logo and hierarchy. The app's `design.md` §9 is the companion specification.

## 1. Principles

- **Light mode only.** No dark theme and no blue or teal anywhere.
- **Editorial and calm.** A warm stone canvas, white cards with hairline borders, generous whitespace, and a serif italic accent in headlines.
- **Honest.** The page describes only what the app does today. Do not add invented metrics, testimonials, ratings or endorsements. Product UI shown on the page is labelled as a sample or example.
- **One source of truth for color.** Every color comes from `src/styles/tokens.css`.

## 2. Color

### 2.1 Tokens (`src/styles/tokens.css`)

Tier 1 primitives mirror the app exactly:

| Primitive | Value | Role |
| --- | --- | --- |
| `--stone-50` | `#F7F6F3` | Raised bands, inset panels |
| `--stone-100` | `#F0EFEC` | Page canvas |
| `--stone-200` | `#E6E4DE` | Subtle fills, bar tracks |
| `--stone-300` | `#DFDDD7` | Hairline borders |
| `--ink-900` / `--ink-800` | `#1C1A17` / `#2E2A25` | Primary actions, headings, body text / hover |
| `--ink-700` | `#3A332C` | Hero-gradient midpoint |
| `--taupe-500` / `--taupe-600` | `#6B635A` / `#57504A` | Secondary text, pills, kickers / hover |
| `--taupe-300` | `#C9BFB2` | Text on dark, score-ring track, decorative numerals |
| `--taupe-100` / `--taupe-200` | taupe at 9% / 20% | Tint fill / tint border |
| `--bronze-600` / `--bronze-700` | `#8A5A2B` / `#6F4720` | Accent / accent hover |
| `--bronze-100` | bronze at 10% | Accent tint |
| `--sand-500`, `--plum-600` | `#C2A57A`, `#6D4C6B` | Data and decoration only; sand is never text |

Tier 2 semantic roles (what components use): `--surface-canvas`, `--surface-raised`, `--surface-card` (#FFF), `--surface-subtle`, `--border-hairline`, `--border-control`, `--text-primary`, `--text-secondary`, `--text-on-primary`, `--brand-primary` / `-hover`, `--brand-accent` / `-hover` / `-tint`, `--brand-taupe` / `-hover` / `-tint` / `-line`, the on-dark set (`--on-dark`, `--on-dark-muted`, `--on-dark-line`, `--on-dark-fill`), `--hero-gradient` and `--viz-1…5`.

The channel triplets (`--ink-ch`, `--bronze-ch`, `--taupe-ch`, `--stone-50-ch`, `--stone-100-ch`, `--white-ch`) exist for `rgb(var(--x-ch) / a)` and Tailwind opacity modifiers.

### 2.2 Tailwind

`tailwind.config.ts` sets `theme.colors` (not `extend`), so only brand colors exist. Tailwind's stock palettes, including blue, teal, sky and slate, generate nothing. Available names include `ink`, `canvas`, `raised`, `subtle`, `line`, `muted`, `taupe`, `taupe-tint`, `taupe-line`, `bronze`, `bronze-tint`, `on-dark`, `sand` and `plum`, plus `white`, `black`, `transparent` and `current`. Do not use arbitrary color classes such as `bg-[#…]`.

### 2.3 Hierarchy

| Role | Treatment |
| --- | --- |
| Primary action | Ink button with stone text (`.btn--primary`). On dark surfaces, a stone button with ink text (`.btn--light`). |
| Secondary action | White button with a taupe-line border (`.btn--secondary`). On dark surfaces, a ghost button (`.btn--ghost-dark`). |
| Text | Headings and body in ink; supporting copy, kickers and metadata in taupe-500. |
| Bronze (sparingly) | Links (`.link`), selected toolkit tab icon, interview scores, match %, the "Most popular" plan badge, the logo's "Hire". Never the dominant color of a section. |
| Cards | White, 1px hairline border, 20px radius, soft shadow, on the stone canvas. |
| Hero gradient | Only on the hero, the closing CTA card and the legal page header bands. |

## 3. Typography

- **Inter** (self-hosted) is used for all UI and body text.
- **Instrument Serif italic** (self-hosted, `.serif`) is the headline accent only. Use it for one phrase per headline ("*Land the job.*", "*listens.*"), for the large step numerals, and for the interview question in the hero scene.
- **Sizes:**
  - Hero headline: `clamp(46px, 6.6vw, 88px)`.
  - Section headline (`.h-section`): `clamp(34px, 4.6vw, 56px)`.
  - Lead (`.lead`): 16–18px.
  - Body: 14–17px.
  - Kicker: 12px, uppercase, 0.14em tracking.

## 4. Layout and spacing

- Content width: `.container-x`, `min(1200px, 100% − 40px)`.
- Section padding: `clamp(64px, 8vw, 104px)`. `.section--raised` adds a stone-50 band with hairlines.
- Breakpoints: **640px** and **1024px**. Below 1024px the nav collapses to a drawer and split sections stack.

## 5. Page structure (`src/app/page.tsx`)

| # | Section | Component | Purpose |
| --- | --- | --- | --- |
| 1 | Navigation | `Navigation.tsx` | Floating pill: translucent ink over the hero, white once scrolled. Links: Interviews, Jobs, Toolkit, How it works, Pricing, FAQ; Sign in; Start free. On mobile, a drawer (Escape closes it, page scroll locks while it is open). |
| 2 | Hero | `Hero.tsx`, `hero.css` | Eyebrow "AI-Powered Job & Interview Platform". H1 "Practice the interview. *Land the job.*". Primary and secondary CTAs, three plain facts, and a 3D brand-mark sculpture (`hero/HeroStage.tsx`, `hero/HeroScene.tsx`): the logo's N in stone ceramic and its node in bronze. |
| 3 | Proof strip | `ProofStrip.tsx` | Four factual product tiles. |
| 4 | Interviews | `Interviews.tsx` | Three setup steps and a sample interview report mirroring the app's report. |
| 5 | Jobs | `Jobs.tsx` | Browse, filter, save, apply; three example role cards with match %. |
| 6 | Toolkit | `Toolkit.tsx`, `data/features.ts` | Tabs for CV Builder, AI CV Analysis and Career Roadmap, with photos given a light warm grade. |
| 7 | How it works | `HowItWorks.tsx` | Four interview-first steps. |
| 8 | Pricing | `Pricing.tsx`, `data/plans.ts` | Student Free / Pro / Premium with a monthly/yearly toggle. |
| 9 | FAQ | `Faq.tsx`, `data/faqs.ts` | Accordion and a contact link. |
| 10 | Closing CTA | `CallToAction.tsx` | Hero-gradient card. |
| 11 | Footer | `Footer.tsx` | Ink background, product/account/legal links, giant wordmark. Shared with the legal pages, so its links are absolute (`/#…`). |

Legal pages (`/privacy`, `/terms`, `/contact`) use `LegalShell.tsx`: a hero-gradient header band with a badge, title and intro, then a white reading card on the stone canvas, then the shared footer.

## 6. Content rules

- **Pricing** must match the app's `billing-plans.ts` and the backend Stripe catalog:
  - Student Free: $0.
  - Pro: $10/month, or $96/year shown as $8/month.
  - Premium: $20/month, or $192/year shown as $16/month.
  - Features: free plan 2 mock interviews/week; Pro 5/day; Premium unlimited.
  - Update `src/data/plans.ts` whenever the app changes.
- **Interview facts:**
  - Setup: technical / behavioral / mixed; junior / mid / senior; 10–30 minutes.
  - A saved CV is required.
  - Report: score /100, competencies /10, strengths, improvements, question-by-question review, transcript.
- Example roles use generic employers and are labelled "Example roles".
- Do not promise live interviews with employers, a readiness score, or recruiter matching.

## 7. Components and states

- **Buttons:** `.btn` plus a variant, 48px tall, 12px radius. Arrow icons nudge on hover.
- **Pills:** `.pill` (taupe tint) and `.pill--accent` (bronze tint, used for match % only).
- **Icon tiles:** `.icon-tile`, a 40px stone-50 square with a hairline border and an ink Lucide icon via `SiteIcon`.
- **Score ring:** `ScoreRing.tsx` draws a bronze value on a taupe-300 track.
- **Focus:**
  - A 2px ink outline with a 3px offset on every interactive element.
  - Stone on `.on-dark` surfaces.
  - A skip link is the first tab stop on every page.

## 8. Motion

Motion is layered on fully rendered, server-side markup: without JavaScript every element rests in its final state. GSAP (ScrollTrigger, SplitText) drives scroll and pointer motion from `MotionDirector.tsx`; Three.js through React Three Fiber renders the hero mark. Native scrolling is kept on purpose (no scroll smoothing library).

- **Hero (the one authored moment):** FoldText unfolds the headline. About 1.1s later the 3D scene mounts: the N draws itself with a rounded tip leading the stroke, then the bronze node settles onto the right stem ("Land the job.") and sends out a voice-pulse ring every 3.4s. The mark floats, leans toward the pointer, and a sand light follows the cursor. While scrolling out, the mark turns away and the copy lifts and fades. The scene stops rendering when the hero is off screen. Supporting lines (eyebrow, CTAs, facts) rise in with CSS.
- **Headings:** every `.h-section` and the closing CTA heading reveal line by line through masks (SplitText). Kicker rules draw, and leads come into focus from a 6px blur.
- **Per section:**
  - Proof: icon tiles flip up and the dividers draw.
  - Interviews: the sample report builds itself: the card tilts up, the ring draws, the score counts to 82, the bars grow and the transcript lines arrive. Once built, it leans slightly toward the pointer.
  - Jobs: the role cards deal out of a stack as you scroll (scrubbed), the match % counts up, and the flow cards wipe in.
  - Toolkit: the stage opens like an aperture and the photo drifts in parallax. Changing tabs wipes the new photo in over the old one.
  - How it works (desktop): a rail above the steps fills with scroll and lights each step's node, numeral and icon in bronze. On mobile, each step lights as it reaches the reading line.
  - Pricing: the featured plan rises first and the others swing in beside it. The billing thumb slides between options, and prices roll when the period changes.
  - FAQ: the rules draw, the aside stays sticky on desktop, and answers settle in as they open.
  - Closing CTA: the card opens with scroll, and its grid brightens under the pointer.
  - Footer: the giant wordmark rises letter by letter as the page ends.
- **Interaction:** a nav pill slides to the hovered link and rests on the current section. Primary CTAs pull gently toward the pointer. The up-right arrow exits and re-enters on hover. Card hover lifts use the CSS `translate` property so they compose with GSAP transforms.
- **Toolkit autoplay:** tabs autoplay every 7s only when motion is allowed. Autoplay pauses on hover or focus and stops once a user picks a tab.
- **Reduced motion:** MotionDirector does nothing, the hero mark renders once in its final pose (no float, pulse or pointer tracking), CSS durations collapse to near zero, smooth anchor scrolling is off, and Toolkit never autoplays.
- **Stacking:** `.hero` has `z-index: 2` so the fixed nav (inside the hero) stays above content that carries motion transforms. Local z-indexes are contained with `isolation: isolate`.

## 9. Accessibility

- Landmarks: `nav`, `main#main`, `footer`. Footer columns are labelled `nav` elements.
- The tabs follow the ARIA tablist pattern with arrow-key navigation. The FAQ uses `aria-expanded` / `aria-controls` with labelled regions. The billing toggle is a radiogroup.
- Decorative product scenes are `aria-hidden` and have an `sr-only` description.
- **Measured contrast:**

| Pair | Ratio |
| --- | --- |
| Ink on canvas | 15.1:1 |
| Taupe-500 on white / canvas | 5.9:1 / 5.1:1 |
| Bronze on white / bronze tint | 5.9:1 / 5.1:1 |
| Stone-50 on ink / bronze end of the gradient | 16.1:1 / 5.4:1 |
| Taupe-300 on ink | 9.6:1 |
| Hero subtext (stone-50 at 74%) | ≥ 7.1:1 |

## 10. Files

| File | Owns |
| --- | --- |
| `src/styles/tokens.css` | All color, shadow, radius and font tokens |
| `src/styles/theme.css` | Base, type, buttons, pills, cards, brand logo, navigation, back-to-top, reduced motion |
| `src/styles/hero.css` | Hero, score ring and competency bars |
| `src/styles/motion.css` | Hero stage, motion hooks (rules, rail, thumb, masks), hover and state transitions |
| `src/components/motion/MotionDirector.tsx` | All GSAP scroll and pointer choreography |
| `src/components/hero/*` | 3D mark: geometry, scene, lazy WebGL stage |
| `src/styles/sections.css` | All other home sections, footer, legal shell |
| `src/styles/fonts.css` | Self-hosted Inter and Instrument Serif |
| `public/brand/*`, `public/favicon.svg`, `public/apple-touch-icon.png` | Brand assets, identical to the app's |

## 11. Verification

Before shipping, run `npm run typecheck`, `npm run lint` and `npm run build`. Then confirm that none of the following appear under `src/`:

- the old teal hex values;
- arbitrary hex classes (`\[#[0-9a-f]{3,6}\]`);
- the phrases "Readiness Score" and "live interview".

See `docs/verification/README.md`.
