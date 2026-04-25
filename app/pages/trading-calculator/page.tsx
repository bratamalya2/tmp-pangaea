"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Calculator,
  Check,
  CircleDollarSign,
  Gauge,
  HelpCircle,
  LineChart,
  RefreshCcw,
  Ruler,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

type Direction = "Buy" | "Sell";
type AccountCurrency = "USD" | "EUR" | "GBP" | "AED";

type Instrument = {
  symbol: string;
  name: string;
  assetClass: string;
  contractSize: number;
  pipSize: number;
  defaultOpen: number;
  defaultClose: number;
  swapLong: number;
  swapShort: number;
};

const instruments: Instrument[] = [
  {
    symbol: "EUR/USD",
    name: "Euro vs US Dollar",
    assetClass: "Forex",
    contractSize: 100000,
    pipSize: 0.0001,
    defaultOpen: 1.0865,
    defaultClose: 1.092,
    swapLong: -5.8,
    swapShort: 2.1,
  },
  {
    symbol: "GBP/USD",
    name: "British Pound vs US Dollar",
    assetClass: "Forex",
    contractSize: 100000,
    pipSize: 0.0001,
    defaultOpen: 1.268,
    defaultClose: 1.274,
    swapLong: -4.7,
    swapShort: 1.6,
  },
  {
    symbol: "AUD/USD",
    name: "Australian Dollar vs US Dollar",
    assetClass: "Forex",
    contractSize: 100000,
    pipSize: 0.0001,
    defaultOpen: 0.652,
    defaultClose: 0.656,
    swapLong: -3.4,
    swapShort: 0.9,
  },
  {
    symbol: "XAU/USD",
    name: "Gold vs US Dollar",
    assetClass: "Metals",
    contractSize: 100,
    pipSize: 0.01,
    defaultOpen: 2320.5,
    defaultClose: 2336.8,
    swapLong: -16.5,
    swapShort: 8.2,
  },
  {
    symbol: "BTC/USD",
    name: "Bitcoin vs US Dollar",
    assetClass: "Crypto",
    contractSize: 1,
    pipSize: 1,
    defaultOpen: 64500,
    defaultClose: 65350,
    swapLong: -22,
    swapShort: -18,
  },
  {
    symbol: "US500",
    name: "S&P 500 Index CFD",
    assetClass: "Indices",
    contractSize: 1,
    pipSize: 1,
    defaultOpen: 5120,
    defaultClose: 5158,
    swapLong: -2.4,
    swapShort: 1.1,
  },
];

const accountRates: Record<AccountCurrency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
};

const leverageOptions = [30, 50, 100, 200, 500, 1000];

const workflow = [
  {
    icon: LineChart,
    title: "Select Market",
    desc: "Choose the instrument so contract size and pip size are applied automatically.",
  },
  {
    icon: Ruler,
    title: "Set Trade Size",
    desc: "Enter lot size, entry price and exit price for the position you want to test.",
  },
  {
    icon: Scale,
    title: "Apply Leverage",
    desc: "Preview how much margin is required before the trade reaches the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Check Exposure",
    desc: "Review pip value, profit or loss, swap and total estimate in one place.",
  },
];

const formulaNotes = [
  {
    label: "Margin",
    desc: "Notional value divided by selected leverage.",
  },
  {
    label: "Pip Value",
    desc: "Lot size multiplied by contract size and instrument pip size.",
  },
  {
    label: "Profit / Loss",
    desc: "Price movement multiplied by direction, lot size and contract size.",
  },
  {
    label: "Swap",
    desc: "Instrument daily swap estimate multiplied by lot size and holding days.",
  },
];

const faqs = [
  {
    q: "Is this calculator connected to live pricing?",
    a: "No. It uses editable dummy prices and simple instrument settings so traders can understand the calculation workflow before checking live platform quotes.",
  },
  {
    q: "Why can margin differ from the final platform value?",
    a: "Live margin depends on the exact symbol specification, account type, leverage tier, currency conversion and platform price at execution time.",
  },
  {
    q: "Can I use it for risk planning?",
    a: "Yes, as an indicative planning tool. Always confirm live margin, swap and order cost in the trading platform before placing a position.",
  },
];

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function TradingCalculatorPage() {
  const { colors, theme } = useTheme();
  const [instrumentSymbol, setInstrumentSymbol] = useState(instruments[0].symbol);
  const [accountCurrency, setAccountCurrency] = useState<AccountCurrency>("USD");
  const [direction, setDirection] = useState<Direction>("Buy");
  const [lotSize, setLotSize] = useState(1);
  const [leverage, setLeverage] = useState(100);
  const [openPrice, setOpenPrice] = useState(instruments[0].defaultOpen);
  const [closePrice, setClosePrice] = useState(instruments[0].defaultClose);
  const [swapDays, setSwapDays] = useState(1);

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";

  const selectedInstrument = instruments.find((item) => item.symbol === instrumentSymbol) ?? instruments[0];

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: accountCurrency,
      maximumFractionDigits: Math.abs(value) >= 1000 ? 0 : 2,
    }).format(value * accountRates[accountCurrency]);

  const calculation = useMemo(() => {
    const safeLot = Math.max(lotSize, 0);
    const safeLeverage = Math.max(leverage, 1);
    const safeOpen = Math.max(openPrice, 0);
    const safeClose = Math.max(closePrice, 0);
    const safeDays = Math.max(swapDays, 0);
    const notional = safeLot * selectedInstrument.contractSize * safeOpen;
    const margin = notional / safeLeverage;
    const pipValue = safeLot * selectedInstrument.contractSize * selectedInstrument.pipSize;
    const directionalMove = (safeClose - safeOpen) * (direction === "Buy" ? 1 : -1);
    const profitLoss = directionalMove * safeLot * selectedInstrument.contractSize;
    const swapRate = direction === "Buy" ? selectedInstrument.swapLong : selectedInstrument.swapShort;
    const swap = swapRate * safeLot * safeDays;
    const total = profitLoss + swap;
    const pips = directionalMove / selectedInstrument.pipSize;

    return {
      notional,
      margin,
      pipValue,
      profitLoss,
      swap,
      total,
      pips,
    };
  }, [closePrice, direction, leverage, lotSize, openPrice, selectedInstrument, swapDays]);

  const handleInstrumentChange = (symbol: string) => {
    const nextInstrument = instruments.find((item) => item.symbol === symbol) ?? instruments[0];
    setInstrumentSymbol(symbol);
    setOpenPrice(nextInstrument.defaultOpen);
    setClosePrice(nextInstrument.defaultClose);
  };

  const resetCalculator = () => {
    setDirection("Buy");
    setLotSize(1);
    setLeverage(100);
    setSwapDays(1);
    setOpenPrice(selectedInstrument.defaultOpen);
    setClosePrice(selectedInstrument.defaultClose);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlestradingcalculator"
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
          Trading Calculator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          Estimate margin, pip value, swap and potential profit before a trade
          reaches your platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#calculator"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Open Calculator
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-full border px-8 py-3 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            How It Works
          </Link>
        </motion.div>
      </section>

      <LazyAnimatedStatsStrip
        stats={[
          { value: "6", label: "Sample instruments" },
          { value: "4", label: "Core outputs" },
          { value: "Live", label: "Editable inputs" },
          { value: "MT5", label: "Planning workflow" },
        ]}
        border={border}
        backgroundColor={altSurface}
        mutedClassName={muted}
        themeMode={theme}
      />

      <section id="calculator" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">
                Calculator Preview
              </p>
              <h2 className="text-4xl font-semibold md:text-5xl">Model the trade before you place it.</h2>
              <p className={cn("mt-6 text-lg leading-8", muted)}>
                Adjust market, lot size, price, leverage and holding days to see
                indicative exposure in your chosen account currency.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/indices_trading.png"
                alt="Trading desk with market charts and risk tools"
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
                    <Calculator size={28} />
                    <span className="text-sm font-bold uppercase tracking-widest">Inputs</span>
                  </div>
                  <h3 className="text-2xl font-bold">Position details</h3>
                </div>
                <button
                  onClick={resetCalculator}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  style={{ borderColor: border }}
                >
                  <RefreshCcw size={17} />
                  Reset
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold">Instrument</span>
                  <select
                    value={instrumentSymbol}
                    onChange={(event) => handleInstrumentChange(event.target.value)}
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  >
                    {instruments.map((item) => (
                      <option key={item.symbol} value={item.symbol}>
                        {item.symbol} - {item.assetClass}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Account Currency</span>
                  <select
                    value={accountCurrency}
                    onChange={(event) => setAccountCurrency(event.target.value as AccountCurrency)}
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  >
                    {(["USD", "EUR", "GBP", "AED"] as AccountCurrency[]).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid gap-2 md:col-span-2">
                  <span className="text-sm font-bold">Direction</span>
                  <div className="grid grid-cols-2 gap-3">
                    {(["Buy", "Sell"] as Direction[]).map((item) => (
                      <button
                        key={item}
                        onClick={() => setDirection(item)}
                        className={cn(
                          "h-12 rounded-xl border text-sm font-bold transition-colors",
                          direction === item && "bg-indigo-600 text-white"
                        )}
                        style={{ borderColor: direction === item ? "transparent" : border }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Lot Size</span>
                  <input
                    value={lotSize}
                    onChange={(event) => setLotSize(toNumber(event.target.value))}
                    type="number"
                    min="0"
                    step="0.01"
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Leverage</span>
                  <select
                    value={leverage}
                    onChange={(event) => setLeverage(toNumber(event.target.value))}
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  >
                    {leverageOptions.map((item) => (
                      <option key={item} value={item}>
                        1:{item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Open Price</span>
                  <input
                    value={openPrice}
                    onChange={(event) => setOpenPrice(toNumber(event.target.value))}
                    type="number"
                    min="0"
                    step="0.0001"
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Close Price</span>
                  <input
                    value={closePrice}
                    onChange={(event) => setClosePrice(toNumber(event.target.value))}
                    type="number"
                    min="0"
                    step="0.0001"
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  />
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm font-bold">Swap Days</span>
                  <input
                    value={swapDays}
                    onChange={(event) => setSwapDays(toNumber(event.target.value))}
                    type="number"
                    min="0"
                    step="1"
                    className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                    style={{ borderColor: border }}
                  />
                </label>
              </div>
            </div>

            <div className="p-6 sm:p-8" style={{ backgroundColor: altSurface }}>
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3 text-indigo-500">
                  <SlidersHorizontal size={28} />
                  <span className="text-sm font-bold uppercase tracking-widest">Results</span>
                </div>
                <h3 className="text-2xl font-bold">{selectedInstrument.symbol} estimate</h3>
                <p className={cn("mt-2 text-sm leading-6", muted)}>{selectedInstrument.name}</p>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: WalletCards,
                    label: "Required Margin",
                    value: formatMoney(calculation.margin),
                    hint: `Notional ${formatMoney(calculation.notional)}`,
                  },
                  {
                    icon: BadgeDollarSign,
                    label: "Pip Value",
                    value: formatMoney(calculation.pipValue),
                    hint: `${calculation.pips.toFixed(1)} pips estimated move`,
                  },
                  {
                    icon: BarChart3,
                    label: "Profit / Loss",
                    value: formatMoney(calculation.profitLoss),
                    hint: direction === "Buy" ? "Buy direction applied" : "Sell direction applied",
                  },
                  {
                    icon: CircleDollarSign,
                    label: "Swap Estimate",
                    value: formatMoney(calculation.swap),
                    hint: `${swapDays} holding day${swapDays === 1 ? "" : "s"}`,
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
                      <div className="min-w-0 flex-1">
                        <div className={cn("text-sm font-medium", muted)}>{item.label}</div>
                        <div className="mt-1 text-2xl font-bold">{item.value}</div>
                        <div className={cn("mt-1 text-xs", muted)}>{item.hint}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={cn(
                  "mt-5 rounded-2xl border p-6",
                  calculation.total >= 0 ? "border-emerald-500/40" : "border-red-500/40"
                )}
                style={{ backgroundColor: surface }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className={cn("text-sm font-medium", muted)}>Total Estimate</div>
                    <div className={cn("mt-1 text-4xl font-bold", calculation.total >= 0 ? "text-emerald-500" : "text-red-500")}>
                      {formatMoney(calculation.total)}
                    </div>
                  </div>
                  <Gauge className={calculation.total >= 0 ? "text-emerald-500" : "text-red-500"} size={42} />
                </div>
                <p className={cn("mt-4 text-sm leading-6", muted)}>
                  Indicative only. Live platform values can change with price,
                  account settings, leverage tier and symbol specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">How It Works</p>
            <h2 className="text-4xl font-semibold md:text-5xl">A quick workflow for trade planning.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Formula Notes</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Know what each estimate means.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              The calculator keeps the formulas transparent so traders can
              understand how size, price movement and leverage affect exposure.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {formulaNotes.map((item) => (
              <div key={item.label} className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                  <Check size={19} />
                </div>
                <h3 className="text-xl font-bold">{item.label}</h3>
                <p className={cn("mt-3 text-sm leading-6", muted)}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Common Questions</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Use estimates with discipline.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Treat the result as a planning preview before checking your final
              ticket in the platform.
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

      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <TrendingUp className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Plan the trade. Then place it with confidence.</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Estimate exposure, practise the setup on demo, and confirm live
            values in your platform before execution.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Open Calculator <ArrowRight size={18} />
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
