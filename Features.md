# Pangaea Frontend — Implemented Features

> **Project**: Pangaea Institutional Trading Platform  
> **Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui  
> **Last Updated**: April 2026

---

## 1. Global Application Shell

### 1.1 Root Layout (`app/layout.tsx`)
- **Typography System** — Poppins font loaded via `next/font/google` with weights 400, 500, 600, 700, 800. Applied globally via the `--font-sans` CSS variable and the `font-sans` Tailwind utility.
- **Theme Provider** — Wraps the entire application in `ThemeContext`, making light/dark mode available to every component tree leaf via `useTheme()`.
- **Global Loader** — `<GlobalLoader />` is mounted once in the layout (not per-page), ensuring it only shows once per session and never re-appears on back-navigation.
- **Dynamic Favicon** — `<DynamicFavicon />` swaps the browser favicon between `favicon-light.png` and `favicon-dark.png` based on the active theme.
- **Header & Footer** — Persistent across all routes; rendered outside the `{children}` slot so they survive client-side navigation without remounting.

### 1.2 Theme System (`context/ThemeContext.tsx`)
- Provides `theme` (`"light"` | `"dark"`), `toggleTheme()`, and a `colors` object (`{ background, text }`) to all consumers.
- Header background is locked to `#020E1E` (light) / `#030D20` (dark) for a "Premium Dark" institutional feel regardless of mode.
- All section backgrounds, borders, card backgrounds, and text contrasts react instantly on theme toggle.

---

## 2. Header (`components/Header.tsx`)

- **Fixed, backdrop-blurred** top bar with `z-50`.
- **Brand Logo** — Clicking the logo routes the user to `/` via `next/link` (SPA transition, no full reload). Subtle `hover:opacity-80` feedback.
- **Desktop Dropdown Navigation** — Four top-level menu groups with hover-activated dropdowns:
  - **Trading** — Account Types links to `/pages/account-types`, Platforms links to `/pages/platforms`, Deposits and Withdrawals links to `/pages/withdrawal-deposits`
  - **Markets** — Forex, Stocks, Indices, Commodities, Crypto (all linked to live pages)
  - **Resources** — Economic Calendar links to `/pages/economical-calendar`, Trading Calculator links to `/pages/trading-calculator`, Currency Converter links to `/pages/currency-converter`
  - **Company** — Introducing Broker links to `/pages/introducing-broker`, Contact Us links to `/pages/contact-us`, FAQs links to `/pages/faq`
- **Mobile Hamburger Menu** — Full-screen slide-in menu with `Menu` / `X` icons from `lucide-react`.
- **Light/Dark Toggle** — Prominent button with white outline in light mode; toggles between `Sun` and `Moon` icons.
- **Theme-aware text** — All header text is forced white in both light and dark modes for maximum legibility against the dark header background.

---

## 3. Footer (`components/Footer.tsx`)

- Five navigation columns: Trading, Markets, Resources, Help Centre, Legal.
- Trading column includes `/pages/account-types`, `/pages/platforms`, and `/pages/withdrawal-deposits` for fast access to live trading content pages.
- Help Centre column includes `/pages/introducing-broker`, `/pages/contact-us`, and `/pages/faq`.
- Legal column links to `/pages/privacy-policy`, `/pages/website-disclaimer`, `/pages/terms-and-conditions`, `/pages/risk-disclosure-statement`, `/pages/kyc-aml-policy`, and `/pages/risk-warning`.
- **Markets column** links (Forex, Stocks, Indices, Commodities, Crypto) all use `<Link>` from `next/link` for fast SPA transitions.
- Theme-aware logo: renders `logo-light.png` in light mode and `logo-dark.png` in dark mode.
- Full **Risk Warning** disclaimer displayed in the footer body.
- Theme-aware border and background colours via `useTheme()`.

---

## 4. Global Loader (`components/GlobalLoader.tsx`)

- Displays a **full-screen splash screen** (logo + animated `LoaderOne` dots) only on the user's **very first visit** in a browser session.
- Uses `sessionStorage` key `"hasVisitedGlobal"` to gate the display.
- **Defaults to hidden** (`useState(false)`) — the loader only becomes visible after `useEffect` confirms it is a first visit. This is the key design decision that prevents the loader from freezing on browser back-navigation (bfcache restores skip `useEffect`).
- CSS `transition-opacity` (not Framer Motion `AnimatePresence`) used for the fade-out, avoiding conflicts with Next.js Router Cache.
- `pointer-events-none` prevents the fading overlay from blocking clicks on content behind it.

---

## 5. Landing Page (`app/page.tsx` + `components/landing-sections.tsx`)

### 5.1 Hero Section (`components/demo.tsx` → `SparklesPreviewDark`)
- Full-height interactive particle canvas using `@tsparticles/react` and `@tsparticles/slim`.
- `SparklesCore` component renders 100 animated white particles on a transparent background.
- Heading text and CTAs layered above the canvas with `z-20`.

### 5.2 Stats Section
- 4-column responsive grid: `< 12ms` Average Execution · `0.0` Starting Spreads · `1000+` Trading Instruments · `24/7` Client Support.
- Indigo-coloured stat values with muted uppercase labels.
- `divide-x` separator lines between columns, theme-aware border colour.

### 5.3 Features Section
- 2×2 card grid on the left; large 500px tall stock image on the right (Unsplash).
- Four feature cards with `lucide-react` icons: Multi-Asset Trading, Instant Withdrawals, Advanced Analytics, Cross-Device Access.
- Hover: `shadow-xl` elevation with theme-aware background shift.

### 5.4 Markets Section
- 3-column card grid (2-col on tablet) for 5 asset classes.
- Each card has a **stock/AI image banner** at the top with a zoom-on-hover effect (`group-hover:scale-110`).
- Dark gradient overlay on each image for seamless text blending.
- **Click routing** via `useRouter().push()` to the corresponding `/pages/*` route:
  - Forex → `/pages/forex`
  - Stocks → `/pages/stocks`
  - Indices → `/pages/indices`
  - Commodities → `/pages/commodities`
  - Crypto → `/pages/crypto`
- Custom AI-generated image used for Commodities (`/images/commodities.png`).

### 5.5 Accounts Section
- 3-tier pricing cards: Standard, Advanced (Most Popular), Elite.
- "Most Popular" card has an indigo border, `scale-105` elevation, and a badge.
- Each card shows: Min Deposit, Leverage, Starting Spread, Commission.
- Popular tier has a filled indigo CTA button; others have bordered buttons that adapt to theme.

### 5.6 Steps Section
- Split layout: left side has heading + description + CTA; right side has a 2×2 grid of 4 numbered steps.
- Steps: Register → Verify → Deposit → Trade.
- Full-width cinematic banner image at the bottom with gradient overlay and tagline.

---

## 6. Market Pages (under `app/pages/`)

All 5 market pages share a consistent 4-section layout:

| Section | Description |
|---|---|
| **Sparkles Hero** | Full-height `SparklesCore` particle background, page title in indigo, subtitle, and dual CTA buttons |
| **Stats Strip** | 4-column stats bar (asset count, execution speed, leverage, hours) |
| **Advantages Grid** | 6-card 2-column feature grid with `lucide-react` icons + custom AI image on the right |
| **Instrument Grid** | 6-card 2-column grid with gradient backgrounds, live-style % change badges, and sticky sidebar image |
| **Final CTA** | Centred heading + 2 buttons (Open Account / Start with Demo) |

### 6.1 `/pages/forex`
- Hero: "Trade Forex | The Smarter Trade"
- Advantages: Currency Pairs, Raw Spreads, Deep Liquidity, One Account All Markets, Transparent Swaps, Leverage 1:500
- Price Drivers section: Central Bank Policy, Economic Data, Geopolitics & Risk
- Images: `forex_trading_desk.png`, `forex_global_news.png` (AI-generated)

### 6.2 `/pages/stocks`
- Hero: "Trade Stocks"
- Stats: 500+ Stocks · <12ms · 1:20 Leverage · 24/5
- Sectors: Technology, Energy, Healthcare, Finance (colour-coded gradient cards)
- Images: `stocks_trading_floor.png`, `stocks_global_market.png` (AI-generated)

### 6.3 `/pages/indices`
- Hero: "Trade Indices"
- Stats: 20+ Indices · <12ms · 1:100 · 24/5
- Instrument Grid: S&P 500, Dow Jones, FTSE 100, DAX 40, Nikkei 225, NASDAQ 100 — each with live-style price change badge
- Images: `indices_trading.png`, `indices_global.png` (AI-generated)

### 6.4 `/pages/commodities`
- Hero: "Trade Commodities"
- Stats: 30+ Commodities · <12ms · 1:200 · 24/5
- Instrument Grid: Gold, Silver, Crude Oil WTI, Brent Crude, Natural Gas, Platinum — with % change badges
- Images: `commodities_trading.png`, `commodities_sidebar.png`, `commodities.png` (AI-generated)

### 6.5 `/pages/crypto`
- Hero: "Trade Crypto"
- Stats: 50+ Assets · <12ms · 1:2 · **24/7**
- Instrument Grid: Bitcoin, Ethereum, Solana, XRP, Cardano, Dogecoin — with % change badges and monospaced symbol tickers
- Images: `crypto_trading.png`, `crypto_sidebar.png` (AI-generated)

### 6.6 Trading Content Page (`/pages/account-types`)
- Full-bleed image + `SparklesCore` hero with two anchor CTAs.
- Four animated account cards: Demo, Starter, Advanced (Most Popular), Elite.
- Responsive comparison table grouped by Cost, Trading Conditions, and Access.
- Account progression path explains upgrade flow from Demo to Elite.
- FAQ section covers account selection, swap-free availability, KYC, and inactivity fee timing.
- Final CTA block provides Open Account and Ask Support actions.

### 6.7 Trading Content Page (`/pages/platforms`)
- Full-bleed image + `SparklesCore` hero inspired by the NavionFX Platforms page.
- MT5 Web Terminal feature section focused on no-download browser trading.
- Three animated platform cards: MetaTrader 5, MT5 Web Terminal, and Pangaea Trade.
- Why Choose Us section covers execution speed, security, uptime, and professional trading tools.
- Four-step workflow explains account login, live/demo access, platform choice, and trading.
- Final CTA block provides Start Trading Now and Try Demo Account actions.

### 6.8 Trading Content Page (`/pages/withdrawal-deposits`)
- Market-style `SparklesCore` hero with deposits and withdrawals CTAs.
- Security proof strip covers SSL encryption, segregated funds, KYC checks, and AML monitoring.
- Deposit Methods section covers Visa, Mastercard, USDT TRC-20, and Bank Wire.
- Funding workflow explains Register & KYC, Choose Method, Enter & Confirm, and Trade Live.
- Easy Withdrawals section covers card, bank wire, and crypto withdrawals.
- Policy notes explain same-method withdrawals and Advanced+ crypto availability.
- FAQ and final CTA sections support account funding conversion.

### 6.9 Resources Page (`/pages/economical-calendar`)
- Market-style `SparklesCore` hero with View Calendar and How to Read It CTAs.
- Stats strip summarizes event schedule, impact levels, currency coverage, and release tracking.
- Calendar preview table shows time, currency, event, impact, actual, forecast, and previous values.
- Filter/search control surface mirrors a trading-tool workflow.
- Calendar Features section covers alerts, impact filters, actual-vs-forecast comparison, and risk planning.
- How to Read It section explains release timing, impact levels, actual vs forecast, and currency/market matching.
- Event coverage checklist and FAQ sections support trader education before news events.

### 6.10 Resources Page (`/pages/trading-calculator`)
- Market-style `SparklesCore` hero with Open Calculator and How It Works CTAs.
- Interactive calculator for instrument, account currency, direction, lot size, leverage, open price, close price, and swap days.
- Live estimate outputs cover required margin, pip value, profit/loss, swap, notional value, pip movement, and total estimate.
- Workflow cards explain market selection, trade sizing, leverage application, and exposure review.
- Formula notes and FAQ sections explain how estimates should be used before confirming live values in the platform.

### 6.11 Resources Page (`/pages/currency-converter`)
- Market-style `SparklesCore` hero with Open Converter and Rate Notes CTAs.
- Interactive converter supports major fiat currencies plus BTC and XAU planning references.
- Local indicative rates calculate converted amount, direct rate, inverse rate, and an estimated spread buffer.
- Popular-pair shortcuts update the converter state for common FX, crypto, and funding conversions.
- Rate notes, use-case checklist, FAQ, and CTA sections explain how to use conversion estimates before confirming live values.

### 6.12 Company Page (`/pages/introducing-broker`)
- Market-style `SparklesCore` hero with Become an IB and Program Benefits CTAs.
- Rich photo-led partnership overview for educators, affiliates, regional partners, and trading communities.
- Benefits grid covers rebates, payouts, reporting, marketing support, compliance, and global market access.
- Partner toolkit checklist and onboarding steps explain how to apply, receive tracking links, and monitor referrals.
- `/page/introducing-broker` redirects to the canonical `/pages/introducing-broker` route.

### 6.13 Help Page (`/pages/contact-us`)
- Market-style `SparklesCore` hero with Send a Message and Support Desks CTAs.
- Local contact form captures name, email, phone, department, subject, and message for future backend wiring.
- Rich support imagery, support desk cards, channel details, safety note, and FAQ/partner CTAs.
- Support desks cover client support, compliance, partnerships, and trading services.

### 6.14 Help Page (`/pages/faq`)
- Market-style `SparklesCore` hero with Search FAQs and Contact Support CTAs.
- Searchable, category-filtered FAQ experience with accordion answers.
- FAQ categories cover accounts, trading, funding, platforms, verification, and partners.
- Rich photo-led support sections, quick links to relevant product pages, account safety guidance, and final CTA.

### 6.15 Legal Pages
- Shared legal page shell at `app/pages/_components/LegalPage.tsx`.
- Implemented `/pages/privacy-policy`, `/pages/website-disclaimer`, `/pages/terms-and-conditions`, `/pages/risk-disclosure-statement`, `/pages/kyc-aml-policy`, and `/pages/risk-warning`.
- Each legal page uses the current theme system, market-style `SparklesCore` hero, rich policy image, summary highlights, detailed policy sections, related links, and support CTA.
- Footer Legal links now route to live pages instead of placeholders.

---

## 7. UI Component Library (`components/ui/`)

| Component | File | Description |
|---|---|---|
| `SparklesCore` | `sparkles.tsx` | Configurable `@tsparticles` wrapper. Accepts `background`, `minSize`, `maxSize`, `speed`, `particleColor`, `particleDensity`. Used on the landing page hero and all 5 market page heroes. |
| `LoaderOne` | `loader-one.tsx` | Three bouncing dots animated with Framer Motion. Theme-aware: indigo-600 (light) / indigo-500 (dark). Used inside `GlobalLoader`. |
| `Button` | `button.tsx` | shadcn/ui base button with `class-variance-authority` variants. |
| `ParticleTextEffect` | `particle-text-effect.tsx` | Advanced text-to-particle disintegration animation. |
| `SpecialText` | `special-text.tsx` | Animated text highlight/reveal effect. |

---

## 8. Dynamic Favicon (`components/DynamicFavicon.tsx`)

- Listens to `theme` from `ThemeContext`.
- On theme change: removes all existing `<link rel="icon">` elements from `<head>`, then injects a new one pointing to either `favicon-light.png` or `favicon-dark.png`.
- Prevents stale icon caching by purging before injecting.

---

## 9. Public Assets (`public/images/`)

| File | Used In |
|---|---|
| `logo-dark.png` | Header, Footer (dark mode), GlobalLoader |
| `logo-light.png` | Footer (light mode) |
| `favicon-light.png` | Browser tab (light mode) |
| `favicon-dark.png` | Browser tab (dark mode) |
| `commodities.png` | MarketsSection Commodities card |
| `forex_trading_desk.png` | `/pages/forex` advantages section and `/pages/platforms` hero |
| `forex_global_news.png` | `/pages/forex` price drivers sidebar |
| `stocks_trading_floor.png` | `/pages/stocks` advantages section, `/pages/account-types` hero, and `/pages/platforms` Web Terminal section |
| `stocks_global_market.png` | `/pages/stocks` sectors sidebar and `/pages/platforms` Web Terminal card |
| `indices_trading.png` | `/pages/indices` advantages section and `/pages/platforms` MetaTrader 5 card |
| `indices_global.png` | `/pages/indices` instruments sidebar |
| `commodities_trading.png` | `/pages/commodities` advantages section |
| `commodities_sidebar.png` | `/pages/commodities` instruments sidebar |
| `crypto_trading.png` | `/pages/crypto` advantages section |
| `crypto_sidebar.png` | `/pages/crypto` instruments sidebar and `/pages/platforms` Pangaea Trade card |

---

## 10. Navigation & Routing

- All internal navigation uses `next/link` or `useRouter().push()` for client-side SPA transitions.
- `window.location.href` is intentionally **avoided** everywhere to prevent full page reloads and bfcache conflicts.
- The landing page (`/`), trading content pages, and all market pages share the same persistent layout (Header + Footer + GlobalLoader) — these components are never torn down during navigation.
