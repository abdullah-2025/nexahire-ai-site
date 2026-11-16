# Landing Page Design System

## 1. Design Goal

Create a modern, clean, professional, and conversion-focused landing page using the approved teal color palette.

The UI should feel:

- Premium
- Modern
- Minimal
- Trustworthy
- Responsive
- Easy to scan
- Consistent across all sections

Avoid unnecessary visual clutter, excessive gradients, or overly complex animations.

---

## 2. Design Style

### Visual Direction

- Clean SaaS-style interface
- Light theme by default
- Large whitespace between sections
- Rounded cards and buttons
- Soft borders and subtle shadows
- Strong typography hierarchy
- Consistent spacing
- Subtle animations and hover effects
- Use the approved teal palette consistently throughout the landing page

### Overall Layout

```text
Navbar
Hero Section + Product Dashboard Preview
Trusted By / Social Proof (Universities + Platform Stats)
Features / Interactive Product Showcase
How It Works
Career Readiness / Benefits
Testimonials
Pricing
FAQ
Final CTA
Footer
```

---

## 3. Approved Color System

Use the Indigo palette as the source of truth for the landing page. The values are identical to the app ([design-tokens.css](../../AI-Powered-Job-and-Interview-Platform/frontend/app/design-tokens.css)) and live in `src/styles/tokens.css`, with Tailwind utilities in `tailwind.config.ts`.

```css
:root {
  --background: #F8FAFC;       /* page background */
  --card: #FFFFFF;             /* surface */
  --surface-tint: #F0F3F7;     /* surface subtle */
  --foreground: #101828;       /* headings */
  --body: #3B4658;             /* body text */
  --muted-foreground: #646E83; /* muted text and placeholders */

  --primary: #4338CA;
  --primary-hover: #3730A3;
  --primary-foreground: #FFFFFF;
  --secondary: #EEF0FF;        /* primary tint */
  --secondary-foreground: #3B4658;

  --accent: #0D9D98;           /* graphics only */
  --accent-text: #0B7C78;
  --accent-tint: #E3F6F5;
  --accent-foreground: #101828;

  --border: #E3E8EF;
  --control-border: #838DA0;
  --focus: #7C74F0;

  --panel: #17153B;            /* footer, hero, CTA bands, legal pages */
  --panel-2: #2A2670;
  --panel-text: #D5DBE8;
  --panel-muted: #9AA6BC;
  --panel-link: #B4B0FF;
  --footer-background: #17153B;
  --footer-foreground: #D5DBE8;

  --success: #16794C;  --success-surface: #E8F6EE;  --success-line: #9AD3B4;
  --warning: #8F4A00;  --warning-surface: #FFF4E2;  --warning-line: #EBC77E;
  --danger:  #C0291F;  --danger-surface:  #FDECEA;  --danger-line:  #F3A9A2;
  --info:    #0B6FA8;  --info-surface:    #E6F3FA;  --info-line:    #9CCBE6;
}
```

Three approved values were adjusted minimally to meet WCAG AA: muted `#667085` to `#646E83`, control border `#8A94A6` to `#838DA0`, and accent `#0EA5A0` to `#0D9D98`.

### Palette Reference

| Role | Hex | Recommended Use |
|---|---|---|
| Primary | `#4338CA` | Main buttons, links, active tabs, progress fills |
| Primary hover | `#3730A3` | Hover and pressed states |
| Primary tint | `#EEF0FF` | Secondary buttons, selected states, icon tiles, "live" chips |
| Accent | `#0D9D98` | Graphics only: scores, rating markers, check icons, brand-mark dot |
| Accent text / tint | `#0B7C78` / `#E3F6F5` | Accent used as text, accent chips |
| Heading / body / muted | `#101828` / `#3B4658` / `#646E83` | Text hierarchy on light surfaces |
| Page background / surface / subtle | `#F8FAFC` / `#FFFFFF` / `#F0F3F7` | Sections, cards, inset areas |
| Border / control border | `#E3E8EF` / `#838DA0` | Decorative lines / inputs and outlined buttons |
| Focus ring | `#7C74F0` | Every keyboard focus outline |
| Dark panel | `#17153B` to `#2A2670` | Footer, hero, CTA bands, step cards, legal pages |
| Panel text / muted / links | `#D5DBE8` / `#9AA6BC` / `#B4B0FF` | Text and highlights on dark panels |

### Color Usage Rules

- Use `#F8FAFC` and white for most page sections; white for cards and the navbar.
- Use `#4338CA` as the main CTA and brand color, with `#3730A3` for hover.
- Use `#101828` for headings, `#3B4658` for body copy, and `#646E83` for supporting text.
- Use the accent sparingly and only for graphics. When it must be text, use `#0B7C78`. Text on accent fills is `#101828`, never white.
- Never use the accent for status, state badges, or alerts: it is close in hue to success green. Use the success, warning, danger, and info sets only for semantic feedback.
- Dark sections use `#17153B`, optionally blending to `#2A2670`. That two-stop blend is the only approved gradient.
- Inputs, outlined buttons, and selected indicators use the control border (3:1). `#E3E8EF` borders are decorative only.
- Shadows are neutral, `rgb(16 24 40 / 5–20%)`. No colored glows, neon colors, or heavy gradients.

---

## 4. Typography

Use one modern sans-serif font across the website.

Recommended:

- Inter
- Geist
- Manrope

### Typography Hierarchy

```text
Hero Heading:
48–72px desktop
36–44px tablet
30–38px mobile

Section Heading:
36–48px desktop
28–36px mobile

Card Heading:
18–24px

Body:
16–18px

Small Text:
13–14px
```

Typography guidance:

- Use `#042E33` for major headings.
- Use `#144147` for secondary headings.
- Use softer teal/neutral tones for supporting text.
- Maintain clear contrast and readability.

---

## 5. Spacing

Use consistent spacing throughout the page.

Recommended spacing scale:

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
120px
```

Section spacing:

```text
Desktop: 96–120px
Tablet: 72–96px
Mobile: 56–72px
```

Maximum content width:

```text
1200px–1280px
```

---

## 6. Navigation

Navbar should contain:

```text
Logo
Features
How It Works
Readiness Score
Stories
Pricing
FAQ
Login
Primary CTA
```

### Behavior

- Sticky or fixed navbar
- Light background with subtle transparency
- Add soft `#D0DFE1` border when scrolling
- Mobile hamburger navigation
- Primary CTA uses `#3B737A`
- CTA hover uses `#144147`

---

## 7. Hero Section

Hero structure:

```text
Optional Badge
Main Headline
Short Supporting Description
Primary CTA
Secondary CTA
Trust / No-credit-card message
Career Dashboard Mockup
```

### Hero Styling

- Background: white or very subtle `#D0DFE1` tint
- Main heading: `#042E33`
- Highlighted heading text: `#3B737A`
- Primary CTA: `#3B737A`
- Secondary CTA: white background with `#3B737A` or `#144147` border
- Decorative elements: `#76A7AD` and `#D0DFE1`

---

## 8. Social Proof

Include trust indicators such as:

```text
University names
Students onboarded
Reviews
Ratings
Usage statistics
```

Place this section directly after the hero, before the detailed product
features. Keep it visually lightweight and use muted teal tones.

---

## 9. Features Section

Use interactive feature tabs paired with a supporting visual. Each feature
entry should contain:

```text
Icon
Feature title
Short description
Relevant visual and outcome caption
```

Recommended styling:

- White card background
- Border: `#D0DFE1`
- Icon background: light tint of `#D0DFE1`
- Icon color: `#3B737A`
- Hover border/accent: `#76A7AD`
- Headings: `#144147`

---

## 10. How It Works

Explain the complete NexaHire career-readiness flow once, in four steps. Do not
add a second journey or opportunity-browsing workflow later on the page.

Example:

```text
01 — Create Account
02 — Configure Profile
03 — Use the Platform
04 — Track Results
```

Use `#3B737A` or `#76A7AD` for step numbers and timeline accents.

---

## 11. Product Preview

Product UI is integrated in two places rather than repeated as a standalone
section:

- The hero contains a career dashboard preview with readiness, role-match,
  practice, progress, and next-action information.
- The Features section contains interactive tabs with feature-specific
  previews.

Use real product UI wherever possible. Use soft teal borders and subtle shadows
around dashboard and feature previews.

---

## 12. Career Readiness / Benefits

The Readiness section is the page's benefits section. It should connect CV
quality, skills, interview preparation, and roadmap progress to one clear user
outcome.

Example:

```text
Save Time
Improve Productivity
Make Better Decisions
Track Progress
```

Use `#76A7AD` for supporting icons and `#042E33` for benefit titles.

---

## 13. Testimonials

Testimonial cards should contain:

```text
User quote
Profile image/avatar
Name
Role / Company
```

Card style:

- White background
- Soft `#D0DFE1` border
- Quote text in `#144147`
- Small teal accent element where useful

---

## 14. Pricing

Pricing currently uses two clear plans:

```text
Starter / Free
Pro
```

Only add an Enterprise plan when the product has a distinct enterprise offer.

Recommended plan:

- Use `#3B737A` border or top accent
- Use a subtle `#D0DFE1` background tint
- Use `#3B737A` for primary CTA

Do not make non-featured plans difficult to read.

---

## 15. FAQ

Use an accordion component.

Styling:

- White background
- `#D0DFE1` separators
- Question text: `#144147`
- Active/open state accent: `#3B737A`

---

## 16. Final CTA

Use a visually distinct teal section near the end.

Recommended:

```text
Background: #144147 or #042E33
Heading: #FFFFFF
Supporting text: #D0DFE1
Primary CTA: #FFFFFF with dark teal text
Secondary CTA: transparent with light border
```

---

## 17. Footer

Footer structure:

```text
Logo + short description
Platform
Resources
Legal
Social links
Privacy Policy
Terms of Service
Copyright
```

Recommended footer:

```text
Background: #042E33
Primary text: #FFFFFF
Secondary text: #D0DFE1
Links hover: #76A7AD
Borders: #144147
```

---

## 18. Buttons

### Primary Button

```text
Background: #3B737A
Text: #FFFFFF
Hover: #144147
Border: transparent
```

### Secondary Button

```text
Background: transparent or #FFFFFF
Text: #144147
Border: #76A7AD
Hover background: #D0DFE1
```

### Button Rules

- Use medium/large rounded corners.
- Maintain consistent heights and padding.
- Use subtle hover transitions.
- Avoid overly pill-shaped buttons unless intentionally part of the brand style.

---

## 19. Cards

Cards should use:

```text
Background: #FFFFFF
Border: #D0DFE1
Text: #042E33 / #144147
Border radius: 12–20px
Padding: 24–32px
```

Optional hover:

```text
Border: #76A7AD
Very subtle shadow
Small translateY effect
```

---

## 20. Icons

Use one consistent icon library.

Recommended:

```text
Lucide Icons
```

Icon colors:

- Primary icons: `#3B737A`
- Secondary icons: `#76A7AD`
- Icons on dark backgrounds: `#D0DFE1` or white

---

## 21. Animations

Animations should be subtle.

Allowed:

```text
Fade-in
Slide-up
Scale on hover
Card hover
Button hover
Smooth scrolling
```

Recommended duration:

```text
150ms–400ms
```

Avoid excessive animation and unnecessary motion.

---

## 22. Responsive Design

Support:

```text
Desktop
Laptop
Tablet
Mobile
```

Suggested breakpoints:

```text
Mobile: < 640px
Tablet: 640px–1024px
Desktop: > 1024px
```

### Mobile Rules

- Stack multi-column layouts.
- Reduce heading sizes.
- Reduce section padding.
- Keep CTA buttons easy to tap.
- Avoid horizontal scrolling.
- Make screenshots responsive.
- Collapse navbar into a mobile menu.

---

## 23. Accessibility

Ensure:

- Strong contrast between text and backgrounds
- Semantic HTML
- Keyboard-accessible navigation
- Visible focus states
- Alt text for meaningful images
- Proper heading hierarchy
- Descriptive button labels

Use the darker teal colors for text whenever lighter shades do not provide sufficient contrast.

---

## 24. Component Structure

```text
src/components/
├── Navigation
├── Hero (includes ProductPreview)
├── SiteSections
└── sections/
    ├── UniversityMarquee
    ├── Stats
    ├── Features
    ├── HowItWorks
    ├── Readiness
    ├── Testimonials
    ├── Pricing
    ├── Faq
    ├── CallToAction
    └── Footer
```

---

## 25. Development Rules

- Treat this `design.md` as the visual source of truth.
- Use the approved teal palette only for branding and visual hierarchy.
- Reuse components instead of duplicating UI.
- Keep spacing and typography consistent.
- Do not introduce unnecessary dependencies.
- Do not break existing functionality.
- Avoid hardcoded colors outside the defined design tokens.
- Make all sections responsive.
- Keep components modular and maintainable.
- Preserve existing routing and business logic.
- Optimize images and assets.
- Maintain consistent hover, focus, and active states.

---

## 26. Final Design Standard

The completed landing page should feel:

```text
Modern
Clean
Premium
Minimal
Professional
Responsive
Consistent
Conversion-focused
Production-ready
```

Every new landing-page component must follow this file before introducing a new visual pattern.
