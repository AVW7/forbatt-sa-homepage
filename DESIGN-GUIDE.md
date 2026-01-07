# Forbatt SA Design System Guide
## High-Tech B2B Command Center Aesthetic

> Version 1.0 | January 2026

---

## 🎯 Design Philosophy

The Forbatt SA website embodies a **High-Tech B2B Command Center** aesthetic inspired by the angular architecture of the Forbatt HQ building. Every design decision reinforces three core principles:

1. **Industrial Precision** - Sharp edges, technical typography, data-focused layouts
2. **Mission-Critical Reliability** - High contrast, clear hierarchy, professional interaction patterns
3. **Architectural Continuity** - Angular transitions echo the building's distinctive fin structure

---

## 🎨 Color System

### Brand Colors

```css
/* Primary Brand Colors */
--fb-red: #e31e24        /* Surveillance, Critical Actions, High Alert */
--fb-green: #007844      /* Energy, Success, Growth */
--fb-dark: #2d2e32       /* Text, Borders, UI Elements */
--fb-charcoal: #1a1b1e   /* Dark Backgrounds, Hero Overlays */
--fb-silver: #f3f4f6     /* Light Backgrounds, Subtle Elements */
```

### Usage Guidelines

#### Forbatt Red (`#e31e24`)
- **Primary Use:** Surveillance category, CTAs, critical alerts
- **Application:** Buttons, borders, accent lines, hover states
- **Psychological Association:** Urgency, security, attention
- **Examples:**
  - Hero CTA button background
  - Surveillance pillar accent border (4px left)
  - Search bar focus state
  - Brand tile hover overlays

#### Forbatt Green (`#007844`)
- **Primary Use:** Energy category, success states, sustainability messaging
- **Application:** Buttons, icons, progress indicators
- **Psychological Association:** Power, reliability, eco-consciousness
- **Examples:**
  - Energy pillar CTA and borders
  - Battery/power icons
  - Confirmation messages

#### Charcoal Dark (`#1a1b1e`)
- **Primary Use:** Hero backgrounds, section overlays, high-contrast cards
- **Application:** Backgrounds for technical sections, glassmorphic overlays
- **Best Practices:** Always pair with white/light text for WCAG AAA compliance

### Semantic Color Tokens

Use semantic tokens for automatic dark mode support:

```tsx
// ✅ Correct - Adapts to theme
className="bg-card text-foreground border-border"

// ❌ Avoid - Hardcoded colors
className="bg-white text-black border-gray-200"
```

**Available Tokens:**
- `background`, `foreground` - Page-level colors
- `card`, `card-foreground` - Card containers
- `muted`, `muted-foreground` - Secondary content
- `border`, `input`, `ring` - UI element states
- `primary`, `destructive`, `accent` - Action colors

---

## 📐 Sharp-Edge Aesthetic

### Core Principle
**Zero border radius across all components.** This mimics the angular fins of the Forbatt HQ building and reinforces the industrial, technical nature of B2B solutions.

### Implementation

```css
/* Global Override (app/globals.css) */
* {
  border-radius: 0 !important;
}
```

### Component-Level Application

```tsx
// All buttons, cards, inputs use rounded-none
<Button className="rounded-none" />
<Card className="rounded-none" />
<Input className="rounded-none" />
```

### Exceptions
**None.** This rule applies universally to maintain visual consistency.

---

## 🔤 Typography

### Font Stack

```tsx
// Primary: Inter (Variable)
font-family: 'Inter', sans-serif;

// Technical/Monospace: System Mono
font-family: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', monospace;
```

### Type Scale

```tsx
// Headings
text-6xl: 60px / 72px   // Hero headlines (desktop)
text-5xl: 48px / 56px   // Hero headlines (tablet)
text-4xl: 36px / 40px   // Section titles
text-3xl: 30px / 36px   // Subsection titles
text-2xl: 24px / 32px   // Card titles

// Body
text-xl:  20px / 28px   // Large body, subheadlines
text-lg:  18px / 28px   // Standard body
text-base: 16px / 24px  // Default
text-sm:  14px / 20px   // Secondary text
text-xs:  12px / 16px   // Technical specs, labels
```

### Usage Patterns

#### Headlines
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
  Mission-Critical Uptime
</h1>
```
- Always use `font-bold` for headlines
- Implement responsive sizing with breakpoints
- Use `text-balance` utility for better line breaks

#### Technical Content
```tsx
<code className="font-mono text-sm text-fb-red">
  SKU-12345-AI-NVR
</code>
```
- Use monospace for: SKUs, product codes, technical specs
- Pair with brand colors (red/green) for emphasis

#### Body Text
```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  High‑performance gel and AGM solutions...
</p>
```
- Use `leading-relaxed` for readability
- `text-muted-foreground` for secondary content

---

## 🎬 Animation System

### Framer Motion Guidelines

#### Entrance Animations

```tsx
// Page-level fade-in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>

// Section slide-in
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Timing Standards:**
- **0.3s** - Micro-interactions (button hover)
- **0.6s** - Standard transitions (slide-in, fade)
- **0.8s** - Hero/complex animations
- **1.0s+** - Full-page transitions (rare)

#### Hover Effects

```tsx
// Lift + Scale (Professional)
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

**Best Practices:**
- Use spring physics for organic feel: `type: "spring"`
- Keep scale changes subtle: `1.02` max
- Vertical lifts: `-4px` to `-8px`
- Always include `transition` prop

#### Stagger Animations

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map(item => (
    <motion.div key={item.id} variants={item} />
  ))}
</motion.div>
```

### Performance Optimization

```tsx
// Prevent re-animation on scroll
viewport={{ once: true }}

// Disable animations for accessibility
transition={{ duration: 0.6 }}
// Framer Motion respects prefers-reduced-motion automatically
```

---

## 📦 Component Patterns

### 1. Glassmorphic Hero Card

```tsx
<div className="bg-black/40 backdrop-blur-md border-l-4 border-fb-red rounded-none p-8 md:p-12">
  {/* Content */}
</div>
```

**Key Properties:**
- `bg-black/40` - 40% opacity black background
- `backdrop-blur-md` - Frosted glass effect
- `border-l-4 border-fb-red` - 4px red left accent
- `rounded-none` - Sharp edges

**Use Cases:** Hero sections, featured content, overlay modals

### 2. Split-Pillar Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
  {/* Left: Light theme, green accents */}
  <div className="bg-background border-r-4 border-fb-green">
    {/* Energy content */}
  </div>
  
  {/* Right: Dark theme, red accents */}
  <div className="bg-muted border-l-4 border-fb-red">
    {/* Surveillance content */}
  </div>
</div>
```

**Principles:**
- Perfect vertical split (50/50)
- Contrasting backgrounds for visual separation
- Color-coded borders (4px) match category
- Minimum height enforces impact

### 3. Technical Spec Overlay

```tsx
<div className="group relative">
  {/* Base Content */}
  <div className="p-8">
    <h3>Product Name</h3>
  </div>
  
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <ul className="font-mono text-xs space-y-2">
      <li className="border-l-2 border-fb-red pl-3">AI-Powered</li>
      <li className="border-l-2 border-fb-red pl-3">Enterprise VMS</li>
    </ul>
  </div>
</div>
```

**Best Practices:**
- Use `group` on parent, `group-hover:` on overlay
- Always black/95% background for legibility
- Monospace font for technical specs
- Border-left accent matches category color

### 4. Angular Dividers

```tsx
<div className="relative h-24 w-full overflow-hidden">
  <div 
    className="absolute inset-0 bg-background"
    style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)" }}
  />
</div>
```

**Usage:**
- Between major sections (Hero → Pillars → Brands)
- Replaces flat horizontal spacing
- Echoes HQ building's angular architecture
- Height: `h-16` (64px) or `h-24` (96px)

### 5. High-Density Search Input

```tsx
<div className="relative flex-1">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
  <Input
    type="text"
    placeholder="Search by SKU or Product Name..."
    className="pl-10 h-12 bg-black/60 border-gray-700 text-white font-mono text-sm focus:border-fb-red focus:ring-fb-red rounded-none"
  />
</div>
```

**Design Notes:**
- Icon positioned absolute with Tailwind transforms
- Dark, semi-transparent background
- Monospace font for technical aesthetic
- Red focus state for command center feel
- Taller height (48px) for professional tools

---

## 📏 Layout System

### Container Widths

```tsx
// Standard container
<div className="container mx-auto px-4">
  {/* max-width: 1280px by default */}
</div>

// Narrow content (text-heavy)
<div className="max-w-4xl mx-auto">
  {/* max-width: 896px */}
</div>

// Wide showcase (galleries)
<div className="max-w-7xl mx-auto">
  {/* max-width: 1536px */}
</div>
```

### Spacing Scale

```tsx
// Section Padding
py-20    // 80px - Standard sections
py-16    // 64px - Compact sections
py-24    // 96px - Hero sections

// Component Spacing
gap-4    // 16px - Tight grids
gap-6    // 24px - Standard grids
gap-8    // 32px - Generous grids

// Internal Padding
p-8      // 32px - Cards (mobile)
p-12     // 48px - Cards (tablet)
p-16     // 64px - Cards (desktop)
```

### Grid Patterns

```tsx
// Three-column feature grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// Two-column split (50/50)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// Four-column product grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Breakpoints:**
- `sm:` 640px - Mobile landscape
- `md:` 768px - Tablet
- `lg:` 1024px - Desktop
- `xl:` 1280px - Large desktop

---

## 🖼️ Imagery Guidelines

### Hero Backgrounds

**Requirements:**
- Minimum resolution: 1920x1080px
- Format: WebP (with JPG fallback)
- Compression: 70-80% quality
- Subject: HQ building, industrial environments, technical operations

**Overlay Treatment:**
```tsx
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
```

### Product Images

**Aspect Ratios:**
- Product cards: `16:9` or `4:3`
- Brand logos: `2:1` (rectangular) or `1:1` (square)
- Case studies: `16:9`

**Styling:**
```tsx
<img 
  className="w-full h-64 object-cover rounded-none"
  alt="Descriptive alt text"
/>
```

---

## ♿ Accessibility Standards

### Color Contrast

All text meets **WCAG AAA** standards:
- Normal text: 7:1 contrast ratio
- Large text (18pt+): 4.5:1 contrast ratio

**Testing:**
```tsx
// Light background + dark text
bg-background text-foreground  // ✅ 15:1 ratio

// Dark background + light text  
bg-fb-charcoal text-white      // ✅ 16:1 ratio

// Red background + white text
bg-fb-red text-white           // ✅ 5.2:1 ratio
```

### Motion Preferences

Framer Motion automatically respects `prefers-reduced-motion`. No additional code needed.

### Keyboard Navigation

All interactive elements must be keyboard accessible:
```tsx
<Button 
  className="focus:ring-2 focus:ring-fb-red focus:ring-offset-2"
  aria-label="Search products"
>
```

---

## 🚀 Implementation Checklist

### Starting a New Component

- [ ] Import site data: `import { siteData } from "@/lib/site-data"`
- [ ] Use `"use client"` if using Framer Motion or hooks
- [ ] Apply `rounded-none` to all UI elements
- [ ] Use semantic color tokens (`bg-card`, not `bg-white`)
- [ ] Add proper TypeScript interfaces
- [ ] Include responsive breakpoints (`md:`, `lg:`)
- [ ] Add Framer Motion entrance animations
- [ ] Test with keyboard navigation
- [ ] Verify color contrast ratios

### Code Quality Standards

```tsx
// ✅ Good: Data-driven, typed, accessible
interface ProductCardProps {
  product: typeof siteData.products.categories[0];
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border-border rounded-none p-6"
      role="article"
      aria-labelledby={`product-${product.name}`}
    >
      <h3 id={`product-${product.name}`} className="text-2xl font-bold">
        {product.name}
      </h3>
    </motion.article>
  );
}
```

---

## 📚 Component Library Reference

### High-Level Sections
- `<HeroSectionV2 />` - Full-screen hero with glassmorphic card & search
- `<DualPillar />` - Split Energy/Surveillance section
- `<BrandTiles />` - Animated brand showcase with spec overlays
- `<AngledDivider />` - Angular section transitions

### UI Components (shadcn/ui)
All components in `components/ui/` follow sharp-edge aesthetic:
- `<Button />` - Primary, outline, ghost variants
- `<Card />` - Container with header/content/footer
- `<Input />` - Form inputs with focus states
- `<Badge />` - Small labels/tags

### Usage Example

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteData } from "@/lib/site-data";

export function ExampleSection() {
  return (
    <Card className="rounded-none border-l-4 border-fb-red">
      <h2>{siteData.home.hero.headline}</h2>
      <Button className="bg-fb-red hover:bg-fb-red/90 rounded-none">
        {siteData.site.primaryCTA}
      </Button>
    </Card>
  );
}
```

---

## 🎯 Brand Voice in Design

The visual design should reinforce these brand attributes:

**Reliable** → Sharp edges, strong contrast, industrial materials  
**Technical** → Monospace fonts, data-focused layouts, precision spacing  
**Mission-Critical** → High density, command center aesthetic, alert colors  
**Professional** → Subtle animations, muted palette, clean hierarchy  

---

## 📞 Support

For design questions or component requests:
- Review this guide first
- Check existing components in `components/ui/` and `components/sections/`
- Reference site data structure in `lib/site-data.ts`
- Follow established patterns for consistency

**Version History:**
- 1.0 (Jan 2026) - Initial B2B Command Center design system

---

*This design guide is a living document. Update as patterns evolve.*
