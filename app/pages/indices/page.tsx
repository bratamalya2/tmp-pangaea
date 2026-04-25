"use client";

import { useTheme } from "@/context/ThemeContext";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import {
  BarChart3, Globe2, TrendingUp, Zap,
  ShieldCheck, Layers, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function IndicesPage() {
  const { colors, theme } = useTheme();

  const advantages = [
    { icon: <BarChart3 />, title: "20+ Global Indices", desc: "Trade the S&P 500, Dow Jones, FTSE 100, DAX, Nikkei 225, and more from one unified account." },
    { icon: <TrendingUp />, title: "Tight Spreads", desc: "Competitive spreads on all major indices with transparent pricing and no hidden markups." },
    { icon: <Zap />, title: "Fast Execution", desc: "Market orders filled in milliseconds with full stop-loss and take-profit support on every index instrument." },
    { icon: <Globe2 />, title: "US, EU & Asian Markets", desc: "Gain exposure to the world's largest economies through their flagship benchmark indices." },
    { icon: <Layers />, title: "Cash & Futures CFDs", desc: "Choose between continuous cash indices or futures-based contracts to suit your trading strategy." },
    { icon: <ShieldCheck />, title: "Regulated & Transparent", desc: "All index CFDs are traded under a fully regulated framework with real-time margin transparency." },
  ];

  const indices = [
    { name: "S&P 500", region: "United States", desc: "The benchmark for 500 of America's largest publicly traded companies.", change: "+0.82%", color: "from-blue-500/20 to-indigo-500/20" },
    { name: "Dow Jones", region: "United States", desc: "30 major blue-chip US companies tracked by the world's oldest index.", change: "+0.61%", color: "from-indigo-500/20 to-purple-500/20" },
    { name: "FTSE 100", region: "United Kingdom", desc: "The top 100 companies listed on the London Stock Exchange by market cap.", change: "-0.14%", color: "from-emerald-500/20 to-teal-500/20" },
    { name: "DAX 40", region: "Germany", desc: "40 of the largest and most liquid German companies on the Frankfurt exchange.", change: "+1.03%", color: "from-yellow-500/20 to-orange-500/20" },
    { name: "Nikkei 225", region: "Japan", desc: "225 leading companies on the Tokyo Stock Exchange, Asia's premier index.", change: "+0.47%", color: "from-rose-500/20 to-pink-500/20" },
    { name: "NASDAQ 100", region: "United States", desc: "The 100 largest non-financial companies on NASDAQ, dominated by tech giants.", change: "+1.21%", color: "from-cyan-500/20 to-blue-500/20" },
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
            id="tsparticlesindices"
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
          Trade Indices
        </h1>
        <p className="text-xl md:text-2xl opacity-70 relative z-20 text-center max-w-2xl px-4 mb-8">
          Speculate on the world&apos;s most influential benchmarks. 20+ global indices with precision CFD execution.
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
          { value: "20+", label: "Global Indices" },
          { value: "< 12ms", label: "Execution Speed" },
          { value: "1:100", label: "Max Leverage" },
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
            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Why trade indices with Pangaea.</h3>
            <p className="text-lg opacity-70">Get broad market exposure without picking individual stocks. Trade global benchmarks with a single position.</p>
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
                  src="/images/indices_trading.png"
                  alt="Global Indices Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Indices Section */}
      <section className="py-24 border-t" style={{ borderColor, backgroundColor: sectionBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Available Indices</h2>
              <h3 className="text-4xl font-semibold mb-6">The World&apos;s Top Benchmarks</h3>
              <p className="text-lg opacity-70 mb-8">
                From Wall Street to Tokyo — trade the indices that move global capital markets, all from one account.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border h-48 relative" style={{ borderColor }}>
                <img
                  src="/images/indices_global.png"
                  alt="Global Index Markets"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                View all available indices <ChevronRight size={20} />
              </button>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
              {indices.map((index, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border bg-gradient-to-br ${index.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  style={{ borderColor }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold">{index.name}</h4>
                      <p className="text-xs opacity-60 uppercase tracking-widest mt-0.5">{index.region}</p>
                    </div>
                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${index.change.startsWith("+") ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-400"}`}>
                      {index.change}
                    </span>
                  </div>
                  <p className="opacity-70 text-sm leading-relaxed">{index.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t text-center" style={{ borderColor, backgroundColor: colors.background }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trade the Benchmark.</h2>
          <p className="text-xl opacity-70 mb-10">Open a live or demo account and start speculating on global indices today.</p>
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
