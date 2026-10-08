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

Use the following palette as the source of truth for the landing page.

```css
:root {
  --color-teal-100: #D0DFE1;
  --color-teal-300: #76A7AD;
  --color-teal-500: #3B737A;
  --color-teal-800: #144147;
  --color-teal-950: #042E33;

  --background: #FFFFFF;
  --foreground: #042E33;

  --primary: #3B737A;
  --primary-hover: #144147;
  --primary-foreground: #FFFFFF;

  --secondary: #D0DFE1;
  --secondary-foreground: #144147;

  --accent: #76A7AD;
  --accent-foreground: #042E33;

  --muted: #F4F8F8;
  --muted-foreground: #3B737A;

  --border: #D0DFE1;
  --card: #FFFFFF;
  --card-foreground: #042E33;

  --footer-background: #042E33;
  --footer-foreground: #FFFFFF;
}
```

### Palette Reference

| Color | Hex | RGB | Recommended Use |
|---|---|---|---|
| Light Teal | `#D0DFE1` | 208, 223, 225 | Borders, light backgrounds, muted sections |
| Soft Teal | `#76A7AD` | 118, 167, 173 | Accents, icons, secondary UI |
| Primary Teal | `#3B737A` | 59, 115, 122 | Main buttons, highlights, active states |
| Dark Teal | `#144147` | 20, 65, 71 | Headings, hover states, dark sections |
| Deep Teal | `#042E33` | 4, 46, 51 | Primary text, footer, strong contrast areas |

### Color Usage Rules

- Use `#FFFFFF` or very light neutral backgrounds for most page sections.
- Use `#3B737A` as the main CTA and brand color.
- Use `#144147` for hover states, strong headings, and secondary dark UI.
- Use `#042E33` for the strongest contrast, footer, and primary text where appropriate.
- Use `#76A7AD` for icons, highlights, decorative accents, charts, and secondary actions.
- Use `#D0DFE1` for borders, soft cards, badges, and subtle section backgrounds.
- Avoid introducing unrelated accent colors unless needed for semantic states such as success, warning, or error.
- Avoid heavy gradients. If a gradient is used, only blend colors from this palette.

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
