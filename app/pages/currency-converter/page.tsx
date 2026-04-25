"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ArrowRight,
  Banknote,
  Calculator,
  Check,
  Clock3,
  Coins,
  Globe2,
  HelpCircle,
  Landmark,
  RefreshCcw,
  Repeat2,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "AED"
  | "JPY"
  | "AUD"
  | "CAD"
  | "CHF"
  | "INR"
  | "BTC"
  | "XAU";

type Currency = {
  code: CurrencyCode;
  name: string;
  region: string;
  usdValue: number;
  type: "Fiat" | "Crypto" | "Metal";
};

const currencies: Currency[] = [
  { code: "USD", name: "US Dollar", region: "United States", usdValue: 1, type: "Fiat" },
  { code: "EUR", name: "Euro", region: "Eurozone", usdValue: 1.0865, type: "Fiat" },
  { code: "GBP", name: "British Pound", region: "United Kingdom", usdValue: 1.268, type: "Fiat" },
  { code: "AED", name: "UAE Dirham", region: "United Arab Emirates", usdValue: 0.2723, type: "Fiat" },
  { code: "JPY", name: "Japanese Yen", region: "Japan", usdValue: 0.0064, type: "Fiat" },
  { code: "AUD", name: "Australian Dollar", region: "Australia", usdValue: 0.652, type: "Fiat" },
  { code: "CAD", name: "Canadian Dollar", region: "Canada", usdValue: 0.735, type: "Fiat" },
  { code: "CHF", name: "Swiss Franc", region: "Switzerland", usdValue: 1.105, type: "Fiat" },
  { code: "INR", name: "Indian Rupee", region: "India", usdValue: 0.012, type: "Fiat" },
  { code: "BTC", name: "Bitcoin", region: "Crypto", usdValue: 64500, type: "Crypto" },
  { code: "XAU", name: "Gold Ounce", region: "Metals", usdValue: 2320.5, type: "Metal" },
];

const popularPairs: Array<[CurrencyCode, CurrencyCode]> = [
  ["EUR", "USD"],
  ["GBP", "USD"],
  ["USD", "JPY"],
  ["USD", "AED"],
  ["AUD", "USD"],
  ["BTC", "USD"],
];

const workflow = [
  {
    icon: Banknote,
    title: "Enter Amount",
    desc: "Type the balance, transfer amount or notional value you want to convert.",
  },
  {
    icon: ArrowLeftRight,
    title: "Choose Currencies",
    desc: "Select base and quote currencies from major fiat, crypto and metal references.",
  },
  {
    icon: Calculator,
    title: "Review Rate",
    desc: "See the converted amount, direct rate, inverse rate and indicative spread buffer.",
  },
  {
    icon: ShieldCheck,
    title: "Confirm Live Values",
    desc: "Use the preview for planning, then confirm execution values inside the platform.",
  },
];

const useCases = [
  "Estimate deposits before funding",
  "Compare account currency exposure",
  "Check FX value before opening trades",
  "Translate crypto or gold values into USD",
  "Review transfer estimates before support contact",
  "Plan withdrawals in another currency",
];

const faqs = [
  {
    q: "Are these live exchange rates?",
    a: "No. This page uses local indicative rates for the demo experience. Always confirm the latest live rate before trading or transferring funds.",
  },
  {
    q: "Why can the platform conversion differ?",
    a: "Execution values can include live market movement, spreads, liquidity, account currency, payment provider rates and product-specific conditions.",
  },
  {
    q: "Can I convert crypto and gold?",
    a: "Yes. BTC and XAU are included as planning references so traders can compare digital assets and metals against fiat currencies.",
  },
];

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getCurrency(code: CurrencyCode) {
  return currencies.find((currency) => currency.code === code) ?? currencies[0];
}

function formatAmount(value: number, code: CurrencyCode) {
  const absolute = Math.abs(value);
  const fractionDigits = code === "BTC" ? 6 : absolute >= 1000 ? 2 : 4;

  return `${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: code === "BTC" ? 2 : 2,
    maximumFractionDigits: fractionDigits,
  }).format(value)} ${code}`;
}

function convertAmount(amount: number, fromCode: CurrencyCode, toCode: CurrencyCode) {
  const from = getCurrency(fromCode);
  const to = getCurrency(toCode);

  return (amount * from.usdValue) / to.usdValue;
}

export default function CurrencyConverterPage() {
  const { colors, theme } = useTheme();
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD");
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("EUR");

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";

  const conversion = useMemo(() => {
    const safeAmount = Math.max(amount, 0);
    const converted = convertAmount(safeAmount, fromCurrency, toCurrency);
    const rate = convertAmount(1, fromCurrency, toCurrency);
    const inverseRate = convertAmount(1, toCurrency, fromCurrency);
    const spreadBuffer = converted * 0.0015;

    return {
      converted,
      rate,
      inverseRate,
      spreadBuffer,
    };
  }, [amount, fromCurrency, toCurrency]);

  const fromMeta = getCurrency(fromCurrency);
  const toMeta = getCurrency(toCurrency);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const resetConverter = () => {
    setAmount(1000);
    setFromCurrency("USD");
    setToCurrency("EUR");
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlescurrencyconverter"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
            speed={1}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-20 mb-4 px-4 text-center text-4xl font-bold text-indigo-500 md:text-7xl lg:text-8xl"
        >
          Currency Converter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          Convert major currencies, crypto and gold references instantly with
          an indicative planning rate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#converter"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Open Converter
          </Link>
          <Link
            href="#rate-notes"
            className="rounded-full border px-8 py-3 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Rate Notes
          </Link>
        </motion.div>
      </section>

      <LazyAnimatedStatsStrip
        stats={[
          { value: "11", label: "Currency references" },
          { value: "6", label: "Popular pairs" },
          { value: "0.15%", label: "Indicative buffer" },
          { value: "Instant", label: "Local conversion" },
        ]}
        border={border}
        backgroundColor={altSurface}
        mutedClassName={muted}
        themeMode={theme}
      />

      <section id="converter" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">
                Converter Preview
              </p>
              <h2 className="text-4xl font-semibold md:text-5xl">Check value before money moves.</h2>
              <p className={cn("mt-6 text-lg leading-8", muted)}>
                Quickly estimate account funding, withdrawals and market values
                across major currencies without leaving the site.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/forex_global_news.png"
                alt="Global currency market data and financial news"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div
            className="grid gap-0 overflow-hidden rounded-2xl border shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            <div className="border-b p-6 sm:p-8 lg:border-b-0 lg:border-r" style={{ borderColor: border }}>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-indigo-500">
                    <Coins size={28} />
                    <span className="text-sm font-bold uppercase tracking-widest">Inputs</span>
                  </div>
                  <h3 className="text-2xl font-bold">Conversion details</h3>
                </div>
                <button
                  onClick={resetConverter}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  style={{ borderColor: border }}
                >
                  <RefreshCcw size={17} />
                  Reset
                </button>
              </div>

              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-bold">Amount</span>
                  <input
                    value={amount}
                    onChange={(event) => setAmount(toNumber(event.target.value))}
                    type="number"
                    min="0"
                    step="0.01"
                    className="h-14 rounded-xl border bg-transparent px-4 text-lg font-bold outline-none"
                    style={{ borderColor: border }}
                  />
                </label>

                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
                  <label className="grid gap-2">
                    <span className="text-sm font-bold">From</span>
                    <select
                      value={fromCurrency}
                      onChange={(event) => setFromCurrency(event.target.value as CurrencyCode)}
                      className="h-14 rounded-xl border bg-transparent px-4 text-sm outline-none"
                      style={{ borderColor: border }}
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button
                    onClick={swapCurrencies}
                    aria-label="Swap currencies"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
                  >
                    <Repeat2 size={20} />
                  </button>

                  <label className="grid gap-2">
                    <span className="text-sm font-bold">To</span>
                    <select
                      value={toCurrency}
                      onChange={(event) => setToCurrency(event.target.value as CurrencyCode)}
                      className="h-14 rounded-xl border bg-transparent px-4 text-sm outline-none"
                      style={{ borderColor: border }}
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[fromMeta, toMeta].map((currency) => (
                    <div key={currency.code} className="rounded-2xl border p-5" style={{ borderColor: border }}>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xl font-bold text-indigo-500">{currency.code}</div>
                          <div className={cn("mt-1 text-sm", muted)}>{currency.name}</div>
                        </div>
                        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-500">
                          {currency.type}
                        </span>
                      </div>
                      <div className={cn("mt-4 text-xs uppercase tracking-widest", muted)}>
                        {currency.region}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8" style={{ backgroundColor: altSurface }}>
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3 text-indigo-500">
                  <ArrowLeftRight size={28} />
                  <span className="text-sm font-bold uppercase tracking-widest">Result</span>
                </div>
                <h3 className="text-2xl font-bold">
                  {fromCurrency} to {toCurrency}
                </h3>
                <p className={cn("mt-2 text-sm leading-6", muted)}>
                  Indicative rates are calculated locally from demo reference data.
                </p>
              </div>

              <div className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                <div className={cn("text-sm font-medium", muted)}>Converted Amount</div>
                <div className="mt-3 break-words text-4xl font-bold text-indigo-500 md:text-5xl">
                  {formatAmount(conversion.converted, toCurrency)}
                </div>
                <p className={cn("mt-4 text-sm leading-6", muted)}>
                  {formatAmount(amount, fromCurrency)} equals approximately{" "}
                  {formatAmount(conversion.converted, toCurrency)}.
                </p>
              </div>

              <div className="mt-5 grid gap-4">
                {[
                  {
                    icon: TrendingUp,
                    label: "Indicative Rate",
                    value: `1 ${fromCurrency} = ${formatAmount(conversion.rate, toCurrency)}`,
                  },
                  {
                    icon: ArrowLeftRight,
                    label: "Inverse Rate",
                    value: `1 ${toCurrency} = ${formatAmount(conversion.inverseRate, fromCurrency)}`,
                  },
                  {
                    icon: SearchCheck,
                    label: "Spread Buffer",
                    value: formatAmount(conversion.spreadBuffer, toCurrency),
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border p-5"
                      style={{ backgroundColor: surface, borderColor: border }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className={cn("text-sm font-medium", muted)}>{item.label}</div>
                        <div className="mt-1 font-bold">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className={cn("mt-5 rounded-2xl border p-5 text-sm leading-6", muted)} style={{ backgroundColor: surface, borderColor: border }}>
                Rates change constantly. Confirm the latest live platform or
                payment-provider value before trading, funding or withdrawing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Popular Pairs</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Common conversions in one scan.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularPairs.map(([from, to], index) => {
              const rate = convertAmount(1, from, to);
              return (
                <motion.button
                  key={`${from}-${to}`}
                  onClick={() => {
                    setFromCurrency(from);
                    setToCurrency(to);
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 hover:border-indigo-500"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-2xl font-bold">
                      {from}/{to}
                    </div>
                    <Globe2 className="text-indigo-500" size={24} />
                  </div>
                  <div className={cn("mt-4 text-sm", muted)}>
                    1 {from} = {formatAmount(rate, to)}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rate-notes" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Rate Notes</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Use conversion data as a planning checkpoint.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Exchange rates can shift quickly around market opens, economic
              releases and liquidity gaps. Treat this preview as a decision aid.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border p-7"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-6 text-indigo-500" size={34} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Use Cases</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Built for trading account decisions.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Convert values before you fund, withdraw, size a position or
              compare exposure across account currencies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
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
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Common Questions</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Convert with context.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Use this tool for quick planning, then confirm final pricing in
              the platform or with the payment provider.
            </p>
          </div>
          <div className="grid gap-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                <h3 className="flex items-start gap-3 text-lg font-bold">
                  <HelpCircle className="mt-1 shrink-0 text-indigo-500" size={20} />
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
          <Landmark className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Check the rate before you act.</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Convert your amount, review the estimate, and confirm live values
            before opening, funding or withdrawing from an account.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#converter"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Open Converter <ArrowRight size={18} />
            </Link>
            <Link
              href="/pages/trading-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Trading Calculator <Clock3 size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
