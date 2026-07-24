# BookingBase landing page refresh - design

Date: 2026-07-24

## Goal

Make the marketing landing page look less like a generic AI-generated template. Keep the
real product screenshots, add an onboarding walkthrough that explains how the system works,
remove all em dashes, and move off the purple/indigo palette to emerald green on near-black
while keeping the dark theme.

## Problems in the current page

- Violet/indigo palette throughout (the strongest "template" signal).
- Large centered radial glow blob behind the hero (recognisable AI-generated pattern).
- Emoji feature icons (calendar, bag, lock, etc.) - the clearest "AI slop" tell.
- "How it works" is text-only numbered steps despite 6 real product screenshots existing.
- 9 em dashes across the source.
- Everything dead-centered with generic glows; no layout personality.

## Design decisions

### Colour system (emerald / mint on near-black)
- Background: green-tinted near-black (`#080b0a` range) instead of blue-black `#0a0a0f`.
  Avoid pure `#000` (OLED smear).
- Accent: emerald `#10b981` primary, mint `#34d399` / `#6ee7b7` highlights, deep `#059669`
  for borders/pressed states.
- Emerald focus rings and CTA glow (subtle, not the current large blob).
- Every `violet-*` / `indigo-*` utility replaced with the emerald scale.

### Typography
- Replace `system-ui` with **Plus Jakarta Sans** (Google Fonts, loaded in `index.html`).
  Distinctive, modern, professional - stops the page reading as a default template.

### Anti-generic changes
- Replace all 8 emoji feature icons with inline stroke SVG icons (Lucide-style),
  emerald-tinted.
- Remove the hero radial glow blob; replace with a subtle layered gradient plus a faint
  grid texture, slightly off-center, for depth without the template glow.
- Tighten browser-frame mock and shadows.

### Onboarding walkthrough (core ask)
Rebuild "How it works" as an illustrated, alternating left/right walkthrough using the real
screenshots. **ProductShowcase is merged into this section** (it overlapped) so there is one
strong end-to-end story instead of two similar screenshot sections.

Steps:
1. Get in touch, we create your account (icon-led card, no screenshot).
2. Add your services -> `dashboard-services.png`.
3. Set opening hours and breaks -> `dashboard-hours.png`.
4. Share your link, clients book themselves -> `public-business-times.png`.
5. Manage everything from one dashboard -> `dashboard-bookings.png`.

Hero keeps `dashboard-calendar.png`.

### Motion
- Subtle scroll-reveal (fade + rise) on section entry via a small IntersectionObserver hook
  and CSS. No new libraries. Respects `prefers-reduced-motion`.

### Punctuation
- Remove every em dash (`-`) from the page copy and replace with a normal hyphen `-`.

## Scope / structure after change

Navbar -> Hero -> Features -> How it works (illustrated onboarding, ProductShowcase merged)
-> Pricing -> Footer. EnquiryFormModal restyled to emerald.

## Non-goals
- No backend, routing, or copywriting rewrite beyond removing em dashes.
- No new dependencies.
