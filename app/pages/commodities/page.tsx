"use client";

import { useTheme } from "@/context/ThemeContext";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import {
  Flame, CircleDollarSign, Gem, Wheat,
  TrendingUp, ShieldCheck, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CommoditiesPage() {
  const { colors, theme } = useTheme();

  const advantages = [
    { icon: <Gem />, title: "Precious Metals", desc: "Trade Gold, Silver, Platinum and Palladium with tight spreads and deep liquidity from institutional providers." },
    { icon: <Flame />, title: "Energy Markets", desc: "Access Crude Oil (WTI & Brent), Natural Gas, and Heating Oil — the commodities that fuel global economies." },
    { icon: <Wheat />, title: "Agricultural Goods", desc: "Speculate on Corn, Wheat, Soybeans, Coffee, Sugar, and more from a single unified trading account." },
    { icon: <CircleDollarSign />, title: "Transparent Pricing", desc: "Real-time bid/ask pricing sourced from multiple liquidity providers. No hidden markups, no re-quotes." },
    { icon: <TrendingUp />, title: "Leverage Available", desc: "Control large commodity positions with a fraction of the capital. Flexible leverage available across all instruments." },
    { icon: <ShieldCheck />, title: "Regulated & Secure", desc: "Trade commodities under a fully regulated framework with segregated client funds and robust risk management." },
  ];

  const commodities = [
    { name: "Gold (XAU/USD)", category: "Precious Metals", desc: "The world's premier safe-haven asset. Moves on inflation fears, USD strength, and geopolitical risk.", change: "+0.54%", color: "from-yellow-500/20 to-amber-500/20" },
    { name: "Silver (XAG/USD)", category: "Precious Metals", desc: "Industrial and monetary metal. Highly sensitive to manufacturing data and clean energy demand.", change: "+0.32%", color: "from-zinc-400/20 to-slate-500/20" },
    { name: "Crude Oil (WTI)", category: "Energy", desc: "West Texas Intermediate — the US benchmark oil price driven by OPEC decisions and supply data.", change: "-0.87%", color: "from-orange-500/20 to-red-500/20" },
    { name: "Brent Crude", category: "Energy", desc: "The global benchmark for two-thirds of the world's internationally traded crude oil supplies.", change: "-0.71%", color: "from-red-500/20 to-rose-500/20" },
    { name: "Natural Gas", category: "Energy", desc: "Highly volatile seasonal commodity driven by weather, storage levels, and LNG export demand.", change: "+1.43%", color: "from-blue-400/20 to-cyan-500/20" },
    { name: "Platinum (XPT)", category: "Precious Metals", desc: "Rare industrial metal critical to automotive catalysts and hydrogen fuel cell technology.", change: "+0.19%", color: "from-emerald-400/20 to-teal-500/20" },
  ];

  const borderColor = theme === "light" ? "#e5e7eb" : "#1f2937";
  const cardBg = theme === "light" ? "#ffffff" : "#040404";
  const sectionBg = theme === "light" ? "#f9fafb" : "#020813";

  return (
    <main
      className="flex flex-col min-h-screen transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Sparkles Hero */}
      <div className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlescommodities"
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
          Trade Commodities
        </h1>
        <p className="text-xl md:text-2xl opacity-70 relative z-20 text-center max-w-2xl px-4 mb-8">
          Gold, Oil, Silver and more. Access the raw materials that drive the global economy.
        </p>
        <div className="flex gap-4 relative z-20 flex-wrap justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors">
            Start Trading Now
          </button>
          <button
            className="px-8 py-3 border rounded-full font-bold transition-colors"
            style={{ borderColor }}
          >
            Open Demo Account
          </button>
        </div>
      </div>

      {/* Stats Strip */}
      <LazyAnimatedStatsStrip
        stats={[
          { value: "30+", label: "Commodities" },
          { value: "< 12ms", label: "Execution Speed" },
          { value: "1:200", label: "Max Leverage" },
          { value: "24/5", label: "Trading Hours" },
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

      {/* Advantages Section */}
      <section className="py-24" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Your Edge</h2>
            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Why trade commodities with Pangaea.</h3>
            <p className="text-lg opacity-70">Hedge inflation, diversify your portfolio, and capture real-world supply and demand dynamics.</p>
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
                  style={{ borderColor, backgroundColor: cardBg }}
                >
                  <div className="text-indigo-500 mb-4">{adv.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{adv.title}</h4>
                  <p className="opacity-70 leading-relaxed text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px] border relative" style={{ borderColor }}>
                <img
                  src="/images/commodities_trading.png"
                  alt="Commodities Trading — Oil Refinery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Commodities Grid */}
      <section className="py-24 border-t" style={{ borderColor, backgroundColor: sectionBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Available Instruments</h2>
              <h3 className="text-4xl font-semibold mb-6">Metals & Energy</h3>
              <p className="text-lg opacity-70 mb-8">
                From safe-haven gold to volatile crude oil — access the commodities that shape global trade and inflation.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border h-48 relative" style={{ borderColor }}>
                <img
                  src="/images/commodities_sidebar.png"
                  alt="Precious Metals and Energy"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                View all commodities <ChevronRight size={20} />
              </button>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
              {commodities.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border bg-gradient-to-br ${item.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  style={{ borderColor }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <p className="text-xs opacity-60 uppercase tracking-widest mt-0.5">{item.category}</p>
                    </div>
                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${item.change.startsWith("+") ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-400"}`}>
                      {item.change}
                    </span>
                  </div>
                  <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t text-center" style={{ borderColor, backgroundColor: colors.background }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tap Into Real Assets.</h2>
          <p className="text-xl opacity-70 mb-10">Open a live or demo account and start trading precious metals, oil, and agricultural commodities today.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-105 transition-all">
              Open Account
            </button>
            <button
              className="px-8 py-4 border rounded-full font-bold hover:scale-105 transition-all"
              style={{ borderColor }}
            >
              Start with Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
