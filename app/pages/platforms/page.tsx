"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Download,
  Globe2,
  Laptop,
  Monitor,
  Server,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const platforms = [
  {
    eyebrow: "Desktop & Mobile",
    title: "MetaTrader 5",
    summary:
      "Use the industry-standard multi-asset terminal for deep charting, automated strategies and precision order management.",
    image: "/images/platform-desktop-generated.png",
    action: "Download MT5",
    tags: ["Expert Advisors", "Algo trading", "Multi-asset", "Advanced charts"],
    devices: ["Windows", "macOS", "iOS", "Android"],
    icon: Monitor,
  },
  {
    eyebrow: "Any Browser",
    title: "MT5 Web Terminal",
    summary:
      "Trade directly from a modern browser with live prices, charting, order execution and full account access without installing software.",
    image: "/images/platform-web-generated.png",
    action: "Open Web Terminal",
    tags: ["No download", "Browser access", "Real-time charts", "Instant execution"],
    devices: ["Chrome", "Safari", "Edge", "Firefox"],
    icon: Globe2,
  },
  {
    eyebrow: "Coming Soon",
    title: "Pangaea Mobile",
    summary:
      "A native mobile trading experience for traders who need watchlists, positions and one-tap execution while away from the desk.",
    image: "/images/platform-mobile-generated.png",
    action: "Get Notified",
    tags: ["Live prices", "One-tap trade", "Multi-asset", "Mobile-first"],
    devices: ["iOS", "Android"],
    icon: Smartphone,
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    desc: "Orders are routed through low-latency infrastructure designed to reduce delay during active market conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    desc: "Encrypted sessions, secure account access and monitored infrastructure help protect every trading workflow.",
  },
  {
    icon: Server,
    title: "Reliable Uptime",
    desc: "Resilient platform access keeps pricing, account data and order handling available through core market hours.",
  },
  {
    icon: BarChart3,
    title: "Professional Tools",
    desc: "Use advanced charts, multiple order types, indicators and cross-asset views from one account environment.",
  },
];

const workflow = [
  "Create or log in to your Pangaea account.",
  "Open a live or demo trading account.",
  "Choose MT5, Web Terminal or mobile access.",
  "Trade 1,000+ instruments with one balance.",
];

export default function PlatformsPage() {
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
            id="tsparticlesplatforms"
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
          Trading Platforms
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="text-xl md:text-2xl relative z-20 text-center max-w-3xl px-4 mb-8"
        >
          Professional trading made simple. Trade through MetaTrader 5,
          Web Terminal access and the upcoming Pangaea mobile experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="flex gap-4 relative z-20 flex-wrap justify-center px-4"
        >
          <Link
            href="#platforms"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Explore Platforms
          </Link>
          <Link
            href="#terminal"
            className="px-8 py-3 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Open Web Terminal
          </Link>
        </motion.div>
      </section>

      <LazyAnimatedStatsStrip
        stats={[
          { value: "3", label: "Platform Paths" },
          { value: "MT5", label: "Trading Terminal" },
          { value: "Web", label: "Browser Access" },
          { value: "1,000+", label: "Instruments" },
        ]}
        border={border}
        backgroundColor={altSurface}
        mutedClassName={muted}
        themeMode={theme}
        align="center"
        pyClassName="py-12"
        gridClassName="grid grid-cols-2 gap-y-10 md:grid-cols-4"
        valueClassName="mb-1 text-3xl font-black text-indigo-500 md:text-4xl"
        labelClassName="text-sm font-semibold uppercase tracking-widest opacity-70"
      />

      <section id="terminal" className="py-24" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">MT5 Web Terminal</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Launch the market from any browser.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Access MetaTrader 5 through Pangaea with no downloads or installations.
              Monitor live prices, manage orders and analyze charts from desktop, laptop
              or mobile browsers.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["No installation", "Full charting", "Live and demo access", "One account balance"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                  <Check className="text-emerald-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="#"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              Get Started Now <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[460px] overflow-hidden rounded-3xl border shadow-2xl"
            style={{ borderColor: border, backgroundColor: surface }}
          >
            <img
              src="/images/stocks_trading_floor.png"
              alt="Browser trading terminal"
              className="h-full min-h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-[#030D20]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <TerminalSquare size={16} /> WebTerminal ready
              </div>
              <h3 className="text-3xl font-bold">Same account. No setup delay.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="platforms"
        className="relative overflow-hidden border-y py-24"
        style={{ backgroundColor: altSurface, borderColor: border }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/platform-desktop-generated.png')" }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(135deg, rgba(249,250,251,0.95), rgba(239,246,255,0.78) 48%, rgba(4,13,34,0.22))"
                  : "linear-gradient(135deg, rgba(2,8,19,0.96), rgba(3,13,32,0.86) 50%, rgba(79,70,229,0.24))",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_44%,transparent_58%)] opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-14 flex flex-col justify-between gap-6 rounded-[2rem] border p-6 shadow-2xl backdrop-blur-2xl md:flex-row md:items-end md:p-8"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(135deg, rgba(255,255,255,0.68), rgba(255,255,255,0.34))"
                  : "linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.04))",
              borderColor: theme === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.16)",
              boxShadow:
                theme === "light"
                  ? "inset 0 1px 0 rgba(255,255,255,0.9), 0 24px 80px rgba(15,23,42,0.14)"
                  : "inset 0 1px 0 rgba(255,255,255,0.18), 0 24px 80px rgba(0,0,0,0.32)",
            }}
          >
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">One Login</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Choose your trading surface.</h2>
            </div>
            <p className={cn("max-w-xl text-lg leading-8", theme === "light" ? "text-zinc-700" : "text-zinc-200")}>
              Keep one account, one balance and one execution environment while moving
              between desktop, browser and mobile workflows.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.article
                  key={platform.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-[2rem] border p-1 shadow-2xl backdrop-blur-2xl"
                  style={{
                    background:
                      theme === "light"
                        ? "linear-gradient(135deg, rgba(255,255,255,0.76), rgba(255,255,255,0.28))"
                        : "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.035))",
                    borderColor: theme === "light" ? "rgba(255,255,255,0.76)" : "rgba(255,255,255,0.16)",
                    boxShadow:
                      theme === "light"
                        ? "inset 0 1px 0 rgba(255,255,255,0.95), 0 24px 70px rgba(15,23,42,0.16)"
                        : "inset 0 1px 0 rgba(255,255,255,0.2), 0 24px 70px rgba(0,0,0,0.42)",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.32)_34%,transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                  <div
                    className="relative h-full overflow-hidden rounded-[1.75rem]"
                    style={{
                      background:
                        theme === "light"
                          ? "linear-gradient(180deg, rgba(255,255,255,0.58), rgba(255,255,255,0.25))"
                          : "linear-gradient(180deg, rgba(4,13,34,0.5), rgba(4,4,4,0.34))",
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={platform.image}
                        alt={`${platform.title} interface`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030D20]/95 via-[#030D20]/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                        {platform.eyebrow}
                      </div>
                    </div>
                    <div className="p-7">
                      <div
                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-xl"
                        style={{
                          backgroundColor: theme === "light" ? "rgba(255,255,255,0.54)" : "rgba(255,255,255,0.08)",
                          borderColor: theme === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.14)",
                        }}
                      >
                        <Icon className="text-indigo-500" size={30} />
                      </div>
                      <h3 className="text-2xl font-bold">{platform.title}</h3>
                      <p className={cn("mt-3 min-h-24 text-sm leading-6", theme === "light" ? "text-zinc-700" : "text-zinc-300")}>{platform.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {platform.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md"
                            style={{
                              borderColor: theme === "light" ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.16)",
                              backgroundColor: theme === "light" ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.07)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7 border-t pt-5" style={{ borderColor: theme === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.12)" }}>
                        <div className={cn("mb-3 text-xs font-bold uppercase", theme === "light" ? "text-zinc-600" : "text-zinc-400")}>Available on</div>
                        <div className="flex flex-wrap gap-2">
                          {platform.devices.map((device) => (
                            <span key={device} className="text-sm font-semibold">
                              {device}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-indigo-500 transition-colors hover:text-indigo-400"
                      >
                        {platform.action} <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Why Choose Us</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Platform infrastructure for serious traders.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border p-7"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-6 text-indigo-500" size={32} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">How It Works</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Go from account to execution in minutes.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              The platform layer is built to stay simple: one verified profile, one account,
              multiple access points.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold" style={{ borderColor: border }}>
                <Laptop className="text-indigo-500" size={18} /> Desktop
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold" style={{ borderColor: border }}>
                <Globe2 className="text-indigo-500" size={18} /> Browser
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold" style={{ borderColor: border }}>
                <Smartphone className="text-indigo-500" size={18} /> Mobile
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {workflow.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.07 }}
                className="flex gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: surface, borderColor: border }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="self-center text-lg font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-3xl px-4">
          <Download className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Ready to start trading?</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Access global markets with the platform, account type and support path
            that fit the way you trade.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              Start Trading Now <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Try Demo Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
