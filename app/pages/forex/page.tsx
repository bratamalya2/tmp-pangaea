"use client";

import { useTheme } from "@/context/ThemeContext";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { 
  Globe2, Zap, Droplet, Layers, Scale, TrendingUp, 
  Landmark, BarChart3, Globe, ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ForexPage() {
  const { colors, theme } = useTheme();

  const advantages = [
    { icon: <Globe2 />, title: "Currency Pairs", desc: "Majors, minors and exotics. EUR/USD, GBP/JPY, USD/ZAR and dozens more, all in one place with consistent liquidity." },
    { icon: <Zap />, title: "Raw Spreads", desc: "Spreads from 0.0 pips on majors like EUR/USD and USD/JPY. No artificial markup, just the interbank rate passed directly to you." },
    { icon: <Droplet />, title: "Deep Liquidity", desc: "Aggregated pricing from multiple liquidity providers means tighter fills and consistent availability across all pairs." },
    { icon: <Layers />, title: "One Account, All Markets", desc: "Your FX positions sit alongside Stocks, Commodities and Indices. Hedge across asset classes from a single dashboard." },
    { icon: <Scale />, title: "Transparent Swaps", desc: "Overnight swap rates clearly displayed for every pair before you trade. No hidden charges, no surprises at rollover." },
    { icon: <TrendingUp />, title: "Leverage Up to 1:500", desc: "Control larger positions with a fraction of the capital. Flexible leverage available on major pairs for eligible accounts." }
  ];

  const drivers = [
    { icon: <Landmark />, title: "Central Bank Policy", desc: "Interest rate decisions from the Fed, ECB, BOE and BOJ are the single biggest driver of currency valuations. Rate hikes strengthen a currency; cuts weaken it." },
    { icon: <BarChart3 />, title: "Economic Data", desc: "Non-Farm Payrolls, CPI inflation, GDP growth and retail sales reports all cause significant intraday moves. Currencies can move 50-150 pips within minutes." },
    { icon: <Globe />, title: "Geopolitics & Risk", desc: "Trade wars, elections, conflicts and global risk-off events drive capital flows into safe-haven currencies like USD, CHF and JPY." }
  ];
  const borderColor = theme === "light" ? "#e5e7eb" : "#1f2937";
  const sectionBg = theme === "light" ? "#f9fafb" : "#020813";

  return (
    <main 
      className="flex flex-col min-h-screen transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Sparkles Hero Section */}
      <div className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesforex"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
            speed={1}
          />
        </div>
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center relative z-20 text-indigo-500 mb-4">
          Trade Forex
        </h1>
        <p className="text-xl md:text-2xl opacity-70 relative z-20 text-center max-w-2xl px-4 mb-8">
          The Smarter Trade. Experience deep liquidity and precision pricing on 70+ currency pairs.
        </p>
        <div className="flex gap-4 relative z-20">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors">Start Trading Now</button>
          <button className="px-8 py-3 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}>Open Demo Account</button>
        </div>
      </div>

      <LazyAnimatedStatsStrip
        stats={[
          { value: "70+", label: "Currency Pairs" },
          { value: "0.0", label: "Spreads From" },
          { value: "1:500", label: "Leverage Up To" },
          { value: "24/5", label: "FX Market Access" },
        ]}
        border={borderColor}
        backgroundColor={sectionBg}
        themeMode={theme}
        align="center"
        pyClassName="py-12"
        gridClassName="grid grid-cols-2 gap-y-10 md:grid-cols-4"
        valueClassName="mb-1 text-3xl font-black text-indigo-500 md:text-4xl"
        labelClassName="text-sm font-semibold uppercase tracking-widest opacity-70"
      />

      {/* Our Edge Section */}
      <section className="py-24" style={{ backgroundColor: theme === "light" ? "#f9fafb" : "#020813" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Your Advantage</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our edge. Your advantage.</h2>
            <p className="text-lg opacity-70">What makes forex trading with Panagea worth your attention.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
              {advantages.map((adv, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl",
                    theme === "light" ? "hover:bg-white" : "hover:bg-zinc-900/50"
                  )}
                  style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937", backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}
                >
                  <div className="text-indigo-500 mb-4">{adv.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                  <p className="opacity-70 leading-relaxed text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px] border relative" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                <img 
                  src="/images/forex_trading_desk.png" 
                  alt="Institutional Trading Desk" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Drivers Section */}
      <section className="py-24 border-t" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Market Movers</p>
              <h2 className="text-4xl font-semibold mb-6">Price Drivers</h2>
              <p className="text-lg opacity-70 mb-8">Three core forces that move currency pairs and create the opportunities forex traders act on daily.</p>
              
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border h-48 relative" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                <img 
                  src="/images/forex_global_news.png" 
                  alt="Global Macroeconomic Drivers" 
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                Practise with $10k Virtual Funds <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              {drivers.map((driver, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-3xl border flex gap-6"
                  style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937", backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}
                >
                  <div className="mt-1 p-4 rounded-xl bg-indigo-500/10 text-indigo-500 h-fit">
                    {driver.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{driver.title}</h3>
                    <p className="opacity-70 leading-relaxed">{driver.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t text-center" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937", backgroundColor: theme === "light" ? "#f9fafb" : "#020813" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Make Your Move.</h2>
          <p className="text-xl opacity-70 mb-10">Open a demo account and start exploring forex markets today.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-105 transition-all">
              Open Account
            </button>
            <button className="px-8 py-4 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}>
              Start with Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
