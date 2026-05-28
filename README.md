# Clearline HMO Prototype

A responsive marketing site prototype for Clearline HMO, built with React 18, Vite 5, and Tailwind CSS v3.

## Stack

- **React 18** — UI components
- **Vite 5** — build tooling
- **Tailwind CSS v3** — utility-first styling
- **Lucide React** — icons
- **Google Fonts** — Inter + Outfit

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Hero.jsx          # Full-screen hero with floating glass navbar
    Header.jsx        # Sticky scroll-in header
    TrustBar.jsx      # 3-stat social proof bar
    LogoCarousel.jsx  # Infinite client logo ticker
    PlanMatrix.jsx    # 3-tier pricing cards with toggle
    ProofGrid.jsx     # Dual-row testimonial ticker
    FAQ.jsx           # Accordion FAQ with sticky image
    Footer.jsx        # Dark footer with link columns
    ActivateModal.jsx # 3-step plan activation flow
    ContactModal.jsx  # Contact inquiry form
    ClearlineLogo.jsx # Inline SVG brand mark
  hooks/
    useInView.js      # IntersectionObserver scroll animation hook
  App.jsx
  main.jsx
  index.css
```

## Notes

- PNG logo assets (`public/ClearlineFullLogo.png`, `public/logos/`) are not included in this repo — add them manually.
- The site is fully responsive across mobile (375px), tablet (768px), and desktop (1024px+).
