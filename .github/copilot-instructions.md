# Forbatt SA Homepage - AI Agent Instructions

## Project Overview
Next.js 16 application for Forbatt SA's corporate website, showcasing energy, surveillance, and automation solutions. Uses App Router, React 19, Tailwind CSS 4, and shadcn/ui components with TypeScript.

## Architecture & Tech Stack
- **Framework**: Next.js 16.0.10 with App Router in `app/` directory
- **React**: v19.2.0 (latest features, React Server Components by default)
- **Styling**: Tailwind CSS 4 with custom brand colors defined as CSS variables in `app/globals.css`
  - Brand colors: `--fb-red: #e31e24`, `--fb-green: #007844`, `--fb-dark: #2d2e32`
  - Design tokens use oklch color space for better color manipulation
- **Components**: shadcn/ui built on Radix UI primitives in `components/ui/`
- **Theme System**: next-themes v0.4.6 with class-based dark mode (`.dark` class on `<html>`)
- **Package Manager**: pnpm (lock file present)

## Page Structure & Routing
Each category page follows consistent layout:
```
app/{category}/page.tsx → Hero → Commitment → Products/Solutions → Case Studies → Contact → Footer
```
Examples: `app/energy/page.tsx`, `app/automation/page.tsx`, `app/solutions/page.tsx`

## Component Organization
- **Layout**: `components/layout/` - Header (TopBar + MainNav), Footer
- **Sections**: `components/sections/{category}/` - Page-specific sections (e.g., `energy-hero.tsx`)
- **UI Components**: `components/ui/` - Reusable shadcn components
- **Theme Components**: `components/theme-provider.tsx`, `components/theme-toggle.tsx`

## Critical Patterns

### Dark Mode Implementation
- ThemeProvider wraps app in `app/layout.tsx` with `attribute="class"`, `defaultTheme="system"`
- Add `suppressHydrationWarning` to `<html>` tag to prevent hydration mismatch
- Use semantic color tokens: `bg-card`, `text-foreground`, `border-border` (NOT hardcoded colors)
- Theme toggle in header uses Sun/Moon icons with CSS transitions

### MegaMenu Component (`components/layout/header/mega-menu.tsx`)
- Client component with 300ms hover delay on close (prevents flickering)
- Uses `useRef` for timeout management, `useEffect` for cleanup
- Dark mode compatible: `bg-card border-border` instead of `bg-white`
- Structure: Button trigger → Dropdown with optional Overview link → Menu items

### Custom CSS Variables in Tailwind
Use parentheses syntax for custom properties: `bg-(--color-fb-red)`, `text-(--color-fb-green)`
Compiler may suggest shorthand: `bg-fb-red` works if configured in Tailwind theme

### Client vs Server Components
- Default: Server Components (no `'use client'`)
- Add `'use client'` for: interactivity, hooks (useState, useEffect, useTheme), event handlers
- Examples: MegaMenu, ThemeToggle, MainNav (uses useState for mobile menu)

## Development Workflows
```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (localhost:3000)
pnpm run build        # Production build
pnpm run start        # Run production server
```

## Conventions & Best Practices
- **File Naming**: Kebab-case for files (`energy-hero.tsx`), PascalCase for components (`EnergyHero`)
- **Imports**: Use `@/` alias for absolute imports: `@/components/ui/button`
- **Props**: Define TypeScript interfaces above component (e.g., `interface MegaMenuProps`)
- **Responsive Design**: Mobile-first with `md:` (768px) and `lg:` (1024px) breakpoints
- **Icons**: Lucide React for all icons (e.g., `Zap`, `Briefcase`, `Sun`, `Moon`)
- **Links**: Currently using `<a href="...">` tags (consider migrating to Next.js `Link` for client-side routing)

## Common Tasks

### Adding a New Category Page
1. Create `app/{category}/page.tsx` with layout structure
2. Create section components in `components/sections/{category}/`
3. Import sections in page: Hero, Commitment, Products, CaseStudies, Contact
4. Add navigation entry in `components/layout/header/main-nav.tsx` MegaMenu

### Creating Theme-Aware Components
```tsx
// Use semantic tokens for automatic dark mode
<div className="bg-card border-border text-foreground">
<Button className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90">
```

### Implementing Hover Interactions
Follow MegaMenu pattern: 300ms delay on mouse leave, immediate open on enter, cleanup with useEffect

## Project-Specific Notes
- Vercel Analytics integrated in root layout
- Uses Google Fonts: Inter (primary), Roboto (secondary)
- Placeholder images use `/placeholder.svg` with query parameters
- Section backgrounds alternate: `bg-background`, `bg-muted/30` for visual hierarchy