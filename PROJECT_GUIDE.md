# Pangaea Frontend — AI Assistant Project Guide

> This document is intended to give any AI coding assistant (or new developer) a complete mental model of the Pangaea frontend project before making any changes. Read this in full before editing any file.

---

## 1. Project Identity

| Key | Value |
|---|---|
| **Product Name** | Pangaea |
| **Tagline** | One World. One Market. |
| **Type** | Institutional Fintech Trading Platform — Public-facing Landing & Market Pages |
| **Aesthetic** | "Premium Dark" — Dark navy backgrounds, indigo accents, Poppins typography, cinematic stock photography |

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| Component Primitives | shadcn/ui | ^4.4.0 |
| Animation | Framer Motion | ^12 |
| Particle Effects | @tsparticles/react + @tsparticles/slim | ^3 |
| Icons | lucide-react | ^1.9.0 |
| Utility | clsx, tailwind-merge, class-variance-authority | latest |
| Font | Poppins (via `next/font/google`) | — |

### Key Conventions
- **No `window.location.href`** anywhere — always use `next/link` or `useRouter().push()` for internal routing. Using `window.location.href` causes full page reloads, destroys component state, and breaks the bfcache, leading to bugs with the `GlobalLoader`.
- **No Framer Motion `AnimatePresence`** for conditionally mounted full-screen overlays — the Next.js App Router's aggressive page caching conflicts with Framer Motion unmount animations. Use pure CSS `transition-opacity` instead.
- All theme-dependent values are read from `useTheme()`, never hardcoded per-component.

---

## 3. Directory Structure

```
frontend/
├── app/
│   ├── globals.css          # Global Tailwind base + heading/body font overrides
│   ├── layout.tsx           # Root layout: font, ThemeProvider, Header, GlobalLoader, Footer
│   ├── page.tsx             # Landing page ("/") — assembles all section components
│   └── pages/               # Market and trading content pages
│       ├── account-types/page.tsx
│       ├── platforms/page.tsx
│       ├── withdrawal-deposits/page.tsx
│       ├── economical-calendar/page.tsx
│       ├── trading-calculator/page.tsx
│       ├── currency-converter/page.tsx
│       ├── introducing-broker/page.tsx
│       ├── contact-us/page.tsx
│       ├── faq/page.tsx
│       ├── privacy-policy/page.tsx
│       ├── website-disclaimer/page.tsx
│       ├── terms-and-conditions/page.tsx
│       ├── risk-disclosure-statement/page.tsx
│       ├── kyc-aml-policy/page.tsx
│       ├── risk-warning/page.tsx
│       ├── forex/page.tsx
│       ├── stocks/page.tsx
│       ├── indices/page.tsx
│       ├── commodities/page.tsx
│       └── crypto/page.tsx
│
├── components/
│   ├── Header.tsx           # Fixed nav bar with dropdowns, theme toggle, mobile menu
│   ├── Footer.tsx           # 5-column footer with themed links
│   ├── GlobalLoader.tsx     # Session-gated splash screen (shown once per session)
│   ├── DynamicFavicon.tsx   # Theme-aware favicon injector
│   ├── demo.tsx             # SparklesPreviewDark (landing page hero), LoaderDemo
│   ├── landing-sections.tsx # All landing page sections (Stats, Features, Markets, Accounts, Steps)
│   └── ui/
│       ├── sparkles.tsx     # SparklesCore — configurable particle canvas wrapper
│       ├── loader-one.tsx   # Three-dot bounce loader (Framer Motion)
│       ├── button.tsx       # shadcn Button primitive
│       ├── particle-text-effect.tsx
│       └── special-text.tsx
│
├── context/
│   └── ThemeContext.tsx     # Global light/dark theme state + colors object
│
├── lib/
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
│
├── public/
│   └── images/              # All brand assets and AI-generated market images
│
├── Features.md              # Full list of implemented features
├── PROJECT_GUIDE.md         # This file
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config (implicit via Tailwind v4 postcss plugin)
```

---

## 4. Core Patterns

### 4.1 Theme System

**File**: `context/ThemeContext.tsx`

Every component that needs to be theme-aware must call `useTheme()`. The hook returns:

```ts
const { theme, toggleTheme, colors } = useTheme();
// theme: "light" | "dark"
// toggleTheme: () => void
// colors: { background: string, text: string }
```

**Standard theme-conditional patterns used throughout the codebase:**

```tsx
// Background colour for alternating sections
style={{ backgroundColor: theme === "light" ? "#f9fafb" : "#020813" }}

// Card background
style={{ backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}

// Border colour
style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
```

**Header backgrounds are FIXED** to these specific dark values in both modes (institutional requirement):
- Light mode header: `#020E1E`
- Dark mode header: `#030D20`

### 4.2 Landing Page Sections

**File**: `components/landing-sections.tsx`

Each exported function is a self-contained section. Add new sections here and import them in `app/page.tsx`. Each section:
- Calls `useTheme()` for its own theming
- Is a `<section>` element with `py-24` vertical padding
- Uses `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` as the inner container

The `MarketsSection` contains the market card grid. Each card's routing is handled via `useRouter()` from `next/navigation`. The routing map is explicit:

```ts
const href = isForex ? "/pages/forex"
  : isStocks ? "/pages/stocks"
  : isIndices ? "/pages/indices"
  : isCommodities ? "/pages/commodities"
  : isCrypto ? "/pages/crypto"
  : null;
```

When you add a new market page, update this map.

### 4.3 Market Page Template

All 5 market pages (`/pages/*`) follow an **identical structural template**. When creating a new market page, copy this structure:

1. **`SparklesCore` Hero** (60vh, particle canvas, page title in `text-indigo-500`, subtitle, 2 CTAs)
2. **Stats Strip** (4-column `border-y` bar with key numbers)
3. **Advantages Section** (6-card `sm:grid-cols-2` grid LEFT + tall image RIGHT, `flex-col lg:flex-row`)
4. **Instrument Grid** (sticky sidebar LEFT with image + CTA + `md:w-1/3`, 2-col instrument cards RIGHT `md:w-2/3`)
5. **Final CTA** (centred, 2 buttons, closing tagline)

### 4.4 SparklesCore Usage

**File**: `components/ui/sparkles.tsx`

Always assign a unique `id` prop per instance to avoid particle engine conflicts:

```tsx
<SparklesCore
  id="tsparticlesforex"          // Must be unique per page
  background="transparent"
  minSize={0.6}
  maxSize={1.4}
  particleDensity={100}
  className="w-full h-full"
  particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
  speed={1}
/>
```

The parent container must be `relative` with `overflow-hidden`. The `SparklesCore` wrapper must be `absolute inset-0`. Content goes above it with `relative z-20`.

### 4.5 GlobalLoader — Critical Rules

**File**: `components/GlobalLoader.tsx`

> ⚠️ This component has a non-obvious design that must not be broken.

- State initialises as `false` (hidden): `const [showLoader, setShowLoader] = useState(false)`
- `useEffect` runs on mount and checks `sessionStorage.getItem("hasVisitedGlobal")`
- If no key → calls `setShowLoader(true)` → starts the 1.5s timer → fades out → sets the key → `setShowLoader(false)`
- If key exists → does nothing (loader stays hidden)

**Why this approach:**
When the browser uses its Back/Forward Cache (bfcache) to restore a page, React's `useEffect` does **not** re-run. If the initial state were `true`, the loader would mount visible and never receive the signal to hide. By defaulting to `false`, a bfcache restore leaves the loader invisible by design.

**Do NOT:**
- Change `useState(false)` to `useState(true)`
- Wrap the loader in Framer Motion `AnimatePresence`
- Move the loader back into `app/page.tsx`

### 4.6 Navigation Rules

| Scenario | Correct Approach | Wrong Approach |
|---|---|---|
| Link to another page | `<Link href="/pages/forex">` | `<a href="/pages/forex">` |
| Programmatic navigation | `router.push("/pages/forex")` | `window.location.href = "/pages/forex"` |
| External link | `<a href="https://..." target="_blank">` | N/A |

Using `<a>` tags or `window.location.href` for internal routes triggers a **full page reload**, destroys the bfcache entry, and may cause the `GlobalLoader` to re-appear incorrectly.

---

## 5. Styling Guidelines

### Colours
| Role | Light Mode | Dark Mode |
|---|---|---|
| Page background | `#ffffff` / `#f9fafb` (alt sections) | `#0a0a0a` / `#020813` (alt sections) |
| Card background | `#ffffff` | `#040404` |
| Border | `#e5e7eb` | `#1f2937` |
| Header background | `#020E1E` (fixed) | `#030D20` (fixed) |
| Primary accent | `#6366f1` (indigo-500/600) | `#6366f1` |
| Text (body) | via `colors.text` | via `colors.text` |

### Typography
- **Font**: Poppins (loaded in `app/layout.tsx` via `next/font/google`)
- **Headings**: `font-semibold` or `font-bold` (enforced via `globals.css` `@layer base` rule)
- **Section eyebrow labels**: `text-sm font-bold uppercase tracking-widest text-indigo-500`
- **Section main headings**: `text-4xl md:text-5xl font-semibold`

### Spacing
- Section vertical padding: `py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` (compact) or `p-8` (comfortable)
- Card border radius: `rounded-2xl` (standard) / `rounded-3xl` (hero cards)

### Instrument/Asset Cards
Use gradient backgrounds from Tailwind's color palette at `/20` opacity:
```tsx
className={`bg-gradient-to-br ${item.color}`}
// e.g. "from-orange-500/20 to-amber-500/20"
```
Price change badges:
```tsx
className={item.change.startsWith("+") 
  ? "bg-emerald-500/20 text-emerald-500" 
  : "bg-red-500/20 text-red-400"}
```

---

## 6. Image Strategy

All images are stored in `public/images/`. Images fall into two categories:

1. **Brand Assets** (manually placed): `logo-dark.jpeg`, `logo-light.jpeg`, `favicon-light.png`, `favicon-dark.png`
2. **AI-Generated Market Images** (created via image generation tool and copied into public/images): All `*_trading.png`, `*_sidebar.png`, `*_global.png` files

**Unsplash URLs** are used for some background images (in `landing-sections.tsx`). If an Unsplash URL breaks, replace it with an AI-generated image saved to `public/images/`.

---

## 7. Adding New Pages — Checklist

When adding a new market or content page:

- [ ] Create `app/pages/<name>/page.tsx` using the market page template (Section 4.3)
- [ ] Assign a unique `id` to `SparklesCore` (e.g., `"tsparticles<name>"`)
- [ ] Generate and save any required images to `public/images/`
- [ ] Add the route to the `href` map in `components/landing-sections.tsx` → `MarketsSection`
- [ ] Add the link to `components/Header.tsx` → `menuItems` → Markets array
- [ ] Add the link to `components/Footer.tsx` → `footerLinks` → Markets array
- [ ] Use `router.push()` or `<Link>` — never `window.location.href`

### 7.1 Account Types Page

`/pages/account-types` is a trading content page, not a market page. It uses a full-bleed image + `SparklesCore` hero, animated account cards, a side-by-side comparison table, progression path, FAQ section, and final CTA. The route is linked from the Trading menus in both `Header.tsx` and `Footer.tsx`.

### 7.2 Platforms Page

`/pages/platforms` is a trading content page for platform access. It uses a full-bleed image + `SparklesCore` hero, MT5 Web Terminal section, platform option cards for MetaTrader 5, MT5 Web Terminal and Pangaea Trade, infrastructure proof points, workflow steps, and a final CTA. The route is linked from the Trading menus in both `Header.tsx` and `Footer.tsx`.

### 7.3 Withdrawal Deposits Page

`/pages/withdrawal-deposits` is a trading content page for funding and withdrawals. It uses the market-style `SparklesCore` hero, security proof strip, deposit methods, funding workflow, withdrawal methods, same-method and crypto policy notes, FAQ section, and final CTA. The route is linked from the Trading menus in both `Header.tsx` and `Footer.tsx`.

### 7.4 Economical Calendar Page

`/pages/economical-calendar` is a resources page for economic event planning. It uses the market-style `SparklesCore` hero, calendar preview table, filters, impact badges, event education sections, event coverage checklist, FAQs, and final CTA. The route is linked from the Resources menus in both `Header.tsx` and `Footer.tsx`.

### 7.5 Trading Calculator Page

`/pages/trading-calculator` is a resources page for pre-trade planning. It uses the market-style `SparklesCore` hero, an interactive calculator for margin, pip value, swap, profit/loss and total estimate, formula notes, workflow cards, FAQs, and final CTA. The route is linked from the Resources menus in both `Header.tsx` and `Footer.tsx`.

### 7.6 Currency Converter Page

`/pages/currency-converter` is a resources page for quick currency conversion. It uses the market-style `SparklesCore` hero, an interactive converter with local indicative rates, popular pair shortcuts, rate notes, use-case checklist, FAQs, and final CTA. The route is linked from the Resources menus in both `Header.tsx` and `Footer.tsx`.

### 7.7 Introducing Broker Page

`/pages/introducing-broker` is a company page for partner acquisition. It uses the market-style `SparklesCore` hero, photo-led partnership overview, benefits grid, partner toolkit, onboarding steps, and final CTA. The legacy typo path `/page/introducing-broker` redirects to this canonical route.

### 7.8 Contact Us Page

`/pages/contact-us` is a support page for routing client, compliance, trading services, and partnership requests. It uses the market-style `SparklesCore` hero, rich photo sections, a local contact form, support desk cards, contact channel details, and FAQ CTA.

### 7.9 FAQ Page

`/pages/faq` is a help-centre page with searchable and category-filtered FAQs. It uses the market-style `SparklesCore` hero, photo-led help sections, accordion answers, quick links to relevant pages, support guidance, and final CTA.

### 7.10 Legal Pages

The Legal footer column links to six implemented legal pages: `/pages/privacy-policy`, `/pages/website-disclaimer`, `/pages/terms-and-conditions`, `/pages/risk-disclosure-statement`, `/pages/kyc-aml-policy`, and `/pages/risk-warning`. These pages use the shared `app/pages/_components/LegalPage.tsx` shell with market-style `SparklesCore` heroes, photo-led policy summaries, policy detail sections, related page links, and final support CTA.

---

## 8. Known Gotchas & Decisions

| Issue | Root Cause | Resolution Applied |
|---|---|---|
| `GlobalLoader` freezes on back navigation | bfcache restores skip `useEffect`; loader initialized as `true` | Loader now initializes as `false`; only shown after `useEffect` confirms first visit |
| Framer Motion `AnimatePresence` breaks on back-nav | Next.js Router Cache conflicts with unmount animations | Replaced with pure CSS `transition-opacity` |
| `window.location.href` causes page reload | Not an SPA navigation | Replaced with `router.push()` everywhere |
| Stale favicons | Browser caches old `<link>` tags | `DynamicFavicon` purges all existing icon tags before injecting new ones |
| Tailwind `divideColor` in inline styles | Not a valid CSS property | Use `borderColor` on the container instead |
