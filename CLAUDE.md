# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jay Wadhwani, a Product Manager with 12+ years experience at Meta, LinkedIn, Macy's, and startups. Built as a single-page React application.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000 (auto-opens browser)
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

## Tech Stack

- **React 18** with Vite 5
- **Tailwind CSS** for styling
- **Fonts**: Work Sans (sans), Libre Baskerville (serif) - loaded via Google Fonts in index.html

## Architecture

This is a simple single-page application with minimal structure:

- `src/Portfolio.jsx` - Main component (~950 lines). Contains all sections: Home, Work, AI Projects, About, Footer. Uses section-based navigation with opacity transitions.
- `src/ColorOptions.jsx` - Color scheme definitions (not currently integrated)
- `src/index.css` - Global styles and animations (fadeIn, fadeInUp)
- `public/images/` - Directory for project screenshots (currently empty)

## Key Patterns

**Navigation**: Uses `activeSection` state to show/hide sections with fade transitions. No routing library.

**Project Data**: Hardcoded in `projects` array within Portfolio.jsx. Each project has `title`, `company`, `year`, `role`, `impact`, `description`, `tags`, `image`, and `details` (problem/solution/impact/approach).

**Modals**: Project detail modals use `selectedProject` state with body scroll locking.

## Color Scheme

- Primary: #001F3F (Deep Navy)
- Accent: #0074D9 (Bright Blue)
- Text: #5A7A9A (Muted Blue-Gray)
- Background: #E6F0F8 (Light Blue)
