"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Crown,
  Gem,
  Headphones,
  LineChart,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const AccountStatsSection = dynamic(() => import("./AccountStatsSection"), {
  ssr: false,
  loading: () => <AccountStatsSectionSkeleton />,
});

const accounts = [
  {
    name: "Demo",
    icon: Sparkles,
    summary: "Risk-free access to live-style market conditions.",
    price: "$0",
    cta: "Start for Free",
    featured: false,
    stats: ["$10,000 virtual balance", "Live-style spreads", "Leverage up to 1:100"],
    accent: "text-sky-500",
  },
  {
    name: "Starter",
    icon: WalletCards,
    summary: "New traders, low capital, full platform access.",
    price: "$0",
    cta: "Get Started",
    featured: false,
    stats: ["Minimum deposit: $50", "Spreads from 1.0 pips", "No commission"],
    accent: "text-emerald-500",
  },
  {
    name: "Advanced",
    icon: Gem,
    summary: "Active traders who want tighter pricing and deeper access.",
    price: "$0",
    cta: "Get Started Now",
    featured: true,
    stats: ["Minimum deposit: $500", "Spreads from 0.5 pips", "$3 per lot per side"],
    note: "$49 inactivity fee only if 30 days pass without one trade.",
    accent: "text-indigo-500",
  },
  {
    name: "Elite",
    icon: Crown,
    summary: "Professional conditions for high-volume traders.",
    price: "$0",
    cta: "Talk to Us",
    featured: false,
    stats: ["Minimum deposit: $10,000", "Spreads from 0.0 pips", "Free VPS hosting"],
    note: "$99 inactivity fee only if 30 days pass without one trade.",
    accent: "text-amber-500",
  },
];

const comparisonGroups = [
  {
    label: "Cost",
    rows: [
      ["Monthly fee", "$0", "$0", "$49 inactive only", "$99 inactive only"],
      ["Minimum deposit", "None", "$50", "$500", "$10,000"],
      ["Spread from", "Live rates", "1.0 pips", "0.5 pips", "0.0 pips"],
      ["Commission", "None", "None", "$3 per lot per side", "$2.5 per lot per side"],
    ],
  },
  {
    label: "Trading Conditions",
    rows: [
      ["Leverage", "1:100", "1:1000", "1:500", "1:200"],
      ["Instruments", "Forex, metals, indices", "Forex, metals, indices", "+ crypto", "+ stocks and energies"],
      ["Margin call", "60%", "60%", "50%", "50%"],
      ["Stop out", "30%", "30%", "25%", "20%"],
    ],
  },
  {
    label: "Access",
    rows: [
      ["Base currency", "USD", "USD, EUR, GBP", "USD, EUR, GBP", "USD, EUR, GBP, AED"],
      ["Support", "Email and live chat", "Email and live chat", "Email, live chat, phone", "24/5 priority"],
      ["Swap-free option", "Available", "Available", "Available", "Available"],
      ["VPS hosting", "-", "-", "-", "Free"],
    ],
  },
];

const progression = [
  {
    title: "Start with Demo",
    desc: "Practise execution, charting and order types before adding capital.",
  },
  {
    title: "Move to Starter",
    desc: "Begin live trading with a low deposit and no commission.",
  },
  {
    title: "Upgrade to Advanced",
    desc: "Access tighter spreads, crypto markets and phone support.",
  },
  {
    title: "Graduate to Elite",
    desc: "Use professional conditions, priority service and VPS hosting.",
  },
];

const faqs = [
  {
    q: "Which account should I choose?",
    a: "Demo is best for practice, Starter is built for first live trades, Advanced suits active traders, and Elite is designed for higher-volume strategies.",
  },
  {
    q: "Can I request a swap-free option?",
    a: "Yes. Swap-free access is available across account types, subject to account review and eligibility.",
  },
  {
    q: "What documents are needed for KYC?",
    a: "A valid ID, proof of address dated within the last three months, and the completed application details are typically required.",
  },
  {
    q: "When do inactivity fees apply?",
    a: "Advanced and Elite inactivity fees apply only if 30 days pass without at least one trade on the account.",
  },
];

const sectionImages = {
  stats: {
    src: "/images/stocks_global_market.png",
    alt: "Global trading market overview",
    caption: "Multi-asset access",
  },
  fit: {
    src: "/images/stocks_trading_floor.png",
    alt: "Trader reviewing account conditions on market screens",
    caption: "Accounts for every trading stage",
  },
  compare: {
    src: "/images/indices_global.png",
    alt: "Global indices and trading data visualization",
    caption: "Compare every condition side by side",
  },
  progression: {
    src: "/images/forex_trading_desk.png",
    alt: "Professional trading desk with market terminals",
    caption: "Grow from demo practice to professional conditions",
  },
  faq: {
    src: "/images/crypto_trading.png",
    alt: "Secure trading workstation with digital market charts",
    caption: "Verification, support and account rules",
  },
  cta: {
    src: "/images/indices_trading.png",
    alt: "Trading platform dashboard with market instruments",
    caption: "One account, global markets",
  },
};

function AccountStatsSectionSkeleton() {
  const { theme } = useTheme();
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const mutedPulse = theme === "light" ? "#e5e7eb" : "#1f2937";

  return (
    <section
      className="border-y py-8"
      style={{ borderColor: border, backgroundColor: altSurface }}
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_260px] lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx}>
              <div className="mb-3 h-9 w-24 animate-pulse rounded bg-indigo-500/20 md:h-10" />
              <div className="h-3 w-28 animate-pulse rounded" style={{ backgroundColor: mutedPulse }} />
            </div>
          ))}
        </div>
        <div
          className="hidden h-28 animate-pulse rounded-2xl lg:block"
          style={{ backgroundColor: mutedPulse }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

function SectionImage({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border shadow-2xl", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030D20]/90 via-[#030D20]/20 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 text-sm font-bold uppercase tracking-widest text-white/90">
        {caption}
      </div>
    </div>
  );
}

export default function AccountTypesPage() {
  const { colors, theme } = useTheme();

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesaccounttypes"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
            speed={1}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="md:text-7xl text-4xl lg:text-8xl font-bold text-center relative z-20 text-indigo-500 mb-4 px-4"
        >
          Account Types
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="text-xl md:text-2xl relative z-20 text-center max-w-3xl px-4 mb-8"
        >
          Choose the trading account that fits your next move. Compare Demo,
          Starter, Advanced and Elite conditions in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="flex gap-4 relative z-20 flex-wrap justify-center px-4"
        >
          <Link
            href="#compare"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Compare Accounts
          </Link>
          <Link
            href="#progression"
            className="px-8 py-3 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            See Progression Path
          </Link>
        </motion.div>
      </section>

      <AccountStatsSection
        border={border}
        altSurface={altSurface}
        muted={muted}
        image={sectionImages.stats}
        themeMode={theme}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Find Your Fit</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Built for every stage.</h2>
            </div>
            <p className={cn("max-w-xl text-lg leading-8", muted)}>
              Start without risk, go live with lower capital, then upgrade as your strategy
              demands better pricing, more markets and priority support.
            </p>
          </div>

          <SectionImage {...sectionImages.fit} className="mb-10 h-80" />

          <div className="grid gap-6 lg:grid-cols-4">
            {accounts.map((account, index) => {
              const Icon = account.icon;
              return (
                <motion.article
                  key={account.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={cn(
                    "relative flex min-h-[430px] flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                    account.featured && "shadow-2xl shadow-indigo-500/15"
                  )}
                  style={{
                    backgroundColor: surface,
                    borderColor: account.featured ? "#6366f1" : border,
                  }}
                >
                  {account.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <Icon className={cn("mb-6", account.accent)} size={34} />
                  <h3 className="text-2xl font-bold">{account.name}</h3>
                  <p className={cn("mt-3 min-h-16 text-sm leading-6", muted)}>{account.summary}</p>
                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-5xl font-bold">{account.price}</span>
                    <span className={cn("pb-2 text-sm", muted)}>/mo</span>
                  </div>
                  {account.note && <p className={cn("mt-3 text-xs leading-5", muted)}>{account.note}</p>}
                  <ul className="mt-7 space-y-4">
                    {account.stats.map((stat) => (
                      <li key={stat} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 shrink-0 text-emerald-500" size={18} />
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className={cn(
                      "mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all",
                      account.featured
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "border hover:bg-indigo-500 hover:text-white"
                    )}
                    style={{ borderColor: account.featured ? "transparent" : border }}
                  >
                    {account.cta}
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="compare" className="py-24" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Compare Account Types</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Every condition, side by side.</h2>
            </div>
            <SectionImage {...sectionImages.compare} className="h-56" />
          </div>

          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: border, backgroundColor: surface }}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: border }}>
                    <th className="w-[28%] px-6 py-5 text-sm font-bold">Feature</th>
                    {accounts.map((account) => (
                      <th key={account.name} className="px-6 py-5 text-sm font-bold">
                        {account.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonGroups.map((group) => (
                    <Fragment key={group.label}>
                      <tr>
                        <td colSpan={5} className="bg-indigo-500/10 px-6 py-3 text-xs font-bold uppercase text-indigo-500">
                          {group.label}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={`${group.label}-${row[0]}`} className="border-b last:border-b-0" style={{ borderColor: border }}>
                          {row.map((cell, index) => (
                            <td
                              key={`${row[0]}-${index}`}
                              className={cn("px-6 py-5 text-sm", index === 0 ? "font-semibold" : muted)}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="progression" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Account Progression</p>
              <h2 className="text-4xl font-semibold md:text-5xl">A clear path from practice to professional conditions.</h2>
              <p className={cn("mt-6 text-lg leading-8", muted)}>
                Your account can grow with your confidence, trade size and market coverage.
                Upgrade only when the next tier gives your strategy a measurable edge.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold" style={{ borderColor: border }}>
                  <ShieldCheck size={18} className="text-emerald-500" /> KYC verified
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold" style={{ borderColor: border }}>
                  <LineChart size={18} className="text-indigo-500" /> MT5 ready
                </div>
              </div>
              <SectionImage {...sectionImages.progression} className="mt-8 h-72" />
            </motion.div>

            <div className="relative">
              <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-indigo-500/40 sm:block" />
              <div className="space-y-5">
                {progression.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="relative flex gap-5 rounded-2xl border p-6"
                    style={{ backgroundColor: surface, borderColor: border }}
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className={cn("mt-2 leading-7", muted)}>{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ borderColor: border, backgroundColor: altSurface }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Common Questions</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Know before you open.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Fast answers for account selection, verification and ongoing account conditions.
            </p>
            <SectionImage {...sectionImages.faq} className="mt-8 h-72" />
          </div>
          <div className="grid gap-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                <h3 className="flex items-start gap-3 text-lg font-bold">
                  <BarChart3 className="mt-1 shrink-0 text-indigo-500" size={20} />
                  {item.q}
                </h3>
                <p className={cn("mt-3 leading-7", muted)}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <SectionImage {...sectionImages.cta} className="mb-10 h-72" />
          <CircleDollarSign className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Ready to choose your account?</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Open the account that fits today. Upgrade when your strategy is ready for the next tier.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              Open Account <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              <Headphones size={18} /> Ask Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
