# Design System: Mouton's Station Guide
> Inherits from ~/Developer/DESIGN.md (ALSTIG global design system)

## Product Overrides

Mouton's Station Guide is a standalone full-stack guide app (React + Express, Radix UI, Tailwind, Drizzle). It has a web client UI.

- **Background (deepest):** `#0E0F16` (blue-dark, matches TRC palette)
- **Card surface:** `#1A1F2E`
- **Elevated surface:** `#1e2133`
- **Primary accent:** Gold `#B8860B` (web gold variant)
- **Text primary:** `#E8EAEE`
- **Text secondary:** `#9CA3AF`
- **Borders:** `rgba(255,255,255,0.06)` subtle, `rgba(255,255,255,0.12)` standard

Dark-mode-native. No light theme. Gold is reserved for interactive elements only.

## App-Specific Components

- **Guide content cards:** Card surface background, `rounded-xl`, `p-4` to `p-6`. Top border `2px solid #B8860B` for featured/active items.
- **Navigation:** Follow the TRC web sidebar pattern -- glass background with `backdrop-blur-md`, gold active state, responsive collapse to top bar on mobile.
- **Section headers:** `text-xs font-bold uppercase tracking-widest text-gold` (ALSTIG signature label).

## Typography

- **Body/UI:** DM Sans (consistent with TRC web conventions).
- **Headings:** DM Sans bold. Playfair Display may be used for editorial display headings where appropriate.
- **Hierarchy:** Follow the TRC web typography scale from the global design system.
