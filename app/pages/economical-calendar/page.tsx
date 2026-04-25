"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  CalendarClock,
  Check,
  Clock3,
  Filter,
  Globe2,
  Landmark,
  LineChart,
  RefreshCcw,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import calendarEvents from "./calendar-events.json";

type Impact = "High" | "Medium" | "Low";
type CalendarTab = "Today" | "Tomorrow" | "This Week" | "High Impact";

type CalendarEvent = {
  id: string;
  day: Exclude<CalendarTab, "High Impact">;
  time: string;
  currency: string;
  event: string;
  impact: Impact;
  actual: string;
  forecast: string;
  previous: string;
};

const impactStyles: Record<Impact, string> = {
  High: "bg-red-500/15 text-red-500",
  Medium: "bg-amber-500/15 text-amber-500",
  Low: "bg-emerald-500/15 text-emerald-500",
};

const events = calendarEvents as CalendarEvent[];
const calendarTabs: CalendarTab[] = ["Today", "Tomorrow", "This Week", "High Impact"];

const features = [
  {
    icon: Bell,
    title: "Market Alerts",
    desc: "Track upcoming releases before volatility hits the spread.",
  },
  {
    icon: Filter,
    title: "Filter by Impact",
    desc: "Focus on high, medium or low impact events by currency and region.",
  },
  {
    icon: BarChart3,
    title: "Actual vs Forecast",
    desc: "Compare expected numbers with the released value at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Planning",
    desc: "Plan entries, exits and position size around known event windows.",
  },
];

const eventTypes = [
  "Interest rate decisions",
  "Consumer Price Index",
  "GDP releases",
  "Employment reports",
  "Central bank speeches",
  "PMI and retail sales data",
];

const faqs = [
  {
    q: "What is an economic calendar?",
    a: "It is a schedule of market-moving data releases, central bank events and economic reports that can affect currencies, indices, commodities and equities.",
  },
  {
    q: "How should traders read forecast and actual values?",
    a: "Forecast is the market expectation before release. Actual is the published number. Large differences between the two can trigger stronger volatility.",
  },
  {
    q: "Which events usually matter most?",
    a: "Interest rate decisions, inflation data, jobs reports, GDP numbers and central bank speeches often create the largest short-term moves.",
  },
  {
    q: "Should I trade during high-impact news?",
    a: "News trading carries higher execution and volatility risk. Many traders reduce exposure, wait for spreads to normalize, or practise the setup on demo first.",
  },
];

export default function EconomicalCalendarPage() {
  const { colors, theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<CalendarTab>("Today");

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";
  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const tabEvents = events.filter((item) =>
      activeTab === "High Impact" ? item.impact === "High" : item.day === activeTab
    );

    if (!query) return tabEvents;

    return tabEvents.filter((item) =>
      [
        item.day,
        item.time,
        item.currency,
        item.event,
        item.impact,
        item.actual,
        item.forecast,
        item.previous,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [activeTab, searchQuery]);

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-[calc(60vh+6rem)] md:min-h-0 h-[60vh] relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticleseconomicalcalendar"
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
          Economic Calendar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="text-xl md:text-2xl relative z-20 text-center max-w-3xl px-4 mb-8"
        >
          Track scheduled economic releases, central bank decisions and global
          news events before they move the markets.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="flex gap-4 relative z-20 flex-wrap justify-center px-4"
        >
          <Link
            href="#calendar"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            View Calendar
          </Link>
          <Link
            href="#how-to-read"
            className="px-8 py-3 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            How to Read It
          </Link>
        </motion.div>
      </section>

      <section className="border-y py-8" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["24h", "Event schedule"],
            ["3", "Impact levels"],
            ["6", "Major currencies"],
            ["Live", "Release tracking"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-indigo-500 md:text-4xl">{value}</div>
              <div className={cn("mt-1 text-sm font-medium", muted)}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="calendar" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Calendar Preview</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Plan around market-moving events.</h2>
              <p className={cn("mt-6 text-lg leading-8", muted)}>
                View event time, currency, impact, previous value and market
                forecast in one scan-friendly table.
              </p>
            </div>
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: surface, borderColor: border }}
            >
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <label className="flex items-center gap-3 rounded-full border px-4 py-3" style={{ borderColor: border }}>
                  <Search size={18} className="text-indigo-500" />
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    type="search"
                    placeholder="Search country, currency or event"
                    className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
                    aria-label="Search calendar events"
                  />
                </label>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold" style={{ borderColor: border }}>
                  <Filter size={17} /> Filters
                </button>
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
                >
                  <RefreshCcw size={17} /> Refresh
                </button>
              </div>
              <p className={cn("mt-4 text-sm", muted)}>
                Showing {filteredEvents.length} of {events.length} events in {activeTab}
                {searchQuery.trim() ? ` for "${searchQuery.trim()}"` : ""}.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ backgroundColor: surface, borderColor: border }}>
            <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between" style={{ borderColor: border }}>
              <div className="flex items-center gap-3">
                <CalendarClock className="text-indigo-500" size={26} />
                <div>
                  <h3 className="text-xl font-bold">{activeTab} Events</h3>
                  <p className={cn("text-sm", muted)}>Times shown in local platform time.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {calendarTabs.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(label)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-bold transition-colors",
                      activeTab === label && "bg-indigo-600 text-white"
                    )}
                    style={{ borderColor: activeTab === label ? "transparent" : border }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: border }}>
                    {["Time", "Currency", "Event", "Impact", "Actual", "Forecast", "Previous"].map((heading) => (
                      <th key={heading} className="px-6 py-5 text-xs font-bold uppercase tracking-widest opacity-70">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0" style={{ borderColor: border }}>
                      <td className="px-6 py-5 text-sm font-bold">{item.time}</td>
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-bold text-indigo-500">
                          {item.currency}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-semibold">{item.event}</td>
                      <td className="px-6 py-5">
                        <span className={cn("rounded-full px-3 py-1 text-xs font-bold", impactStyles[item.impact])}>
                          {item.impact}
                        </span>
                      </td>
                      <td className={cn("px-6 py-5 text-sm", muted)}>{item.actual}</td>
                      <td className={cn("px-6 py-5 text-sm", muted)}>{item.forecast}</td>
                      <td className={cn("px-6 py-5 text-sm", muted)}>{item.previous}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredEvents.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <Search className="mx-auto mb-4 text-indigo-500" size={34} />
                  <h3 className="text-xl font-bold">No events found</h3>
                  <p className={cn("mx-auto mt-2 max-w-md text-sm leading-6", muted)}>
                    Try another tab or search by currency, event name, impact level,
                    forecast, previous value or release time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Calendar Features</p>
            <h2 className="text-4xl font-semibold md:text-5xl">The data points traders watch before volatility.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border p-7"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-6 text-indigo-500" size={34} />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{feature.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-to-read" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">How to Read It</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Use the calendar to prepare, not chase.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Economic releases can widen spreads and accelerate price movement.
              Use the calendar to know what is coming before you open or manage
              a position.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/forex_global_news.png"
                alt="Global economic news and market data"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {[
              {
                icon: Clock3,
                title: "Watch the release time",
                desc: "Know when data is scheduled and avoid placing rushed orders as spreads change.",
              },
              {
                icon: AlertTriangle,
                title: "Respect impact level",
                desc: "High-impact events often carry the greatest execution and slippage risk.",
              },
              {
                icon: LineChart,
                title: "Compare actual vs forecast",
                desc: "The market reacts most when the published value differs from expectations.",
              },
              {
                icon: Globe2,
                title: "Match currencies and markets",
                desc: "USD events can move gold, indices, crypto and major FX pairs at the same time.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.07 }}
                  className="flex gap-5 rounded-2xl border p-6"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className={cn("mt-2 leading-7", muted)}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Event Coverage</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Major releases in one workflow.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Follow scheduled reports across inflation, employment, growth,
              monetary policy and sentiment indicators.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {eventTypes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border p-5" style={{ backgroundColor: surface, borderColor: border }}>
                <Check className="shrink-0 text-emerald-500" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Common Questions</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Trade news with context.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Use calendar data as planning context alongside your strategy,
              risk limits and market conditions.
            </p>
          </div>
          <div className="grid gap-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                <h3 className="flex items-start gap-3 text-lg font-bold">
                  <Landmark className="mt-1 shrink-0 text-indigo-500" size={20} />
                  {item.q}
                </h3>
                <p className={cn("mt-3 leading-7", muted)}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-3xl px-4">
          <TrendingUp className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Prepare for the next market move.</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Check upcoming releases, practise on demo, and trade only when your
            risk plan is clear.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#calendar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              View Calendar <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Open Demo Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
