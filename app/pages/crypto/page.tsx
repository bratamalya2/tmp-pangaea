"use client";

import { useTheme } from "@/context/ThemeContext";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Zap, ShieldCheck, Globe2, TrendingUp,
  Clock, BarChart3, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CryptoPage() {
  const { colors, theme } = useTheme();

  const advantages = [
    { icon: <TrendingUp />, title: "50+ Crypto Assets", desc: "Trade Bitcoin, Ethereum, Solana, XRP, and dozens more top digital assets as CFDs without managing a wallet." },
    { icon: <Clock />, title: "24/7 Markets", desc: "Crypto never sleeps. Trade around the clock, every day of the week, including weekends and holidays." },
    { icon: <Zap />, title: "Instant Execution", desc: "Millisecond order fills with no re-quotes. Set limit, stop-loss, and take-profit orders on every asset." },
    { icon: <Globe2 />, title: "No Wallet Needed", desc: "Trade crypto price movements as CFDs — no private keys, no custody risk, no exchange hacks to worry about." },
    { icon: <BarChart3 />, title: "Advanced Charting", desc: "Full technical analysis suite built into MT5 with 80+ indicators and customizable time frames." },
    { icon: <ShieldCheck />, title: "Regulated Framework", desc: "All crypto CFD trades are processed under a regulated framework with full client fund segregation." },
  ];

  const coins = [
    { name: "Bitcoin", symbol: "BTC/USD", desc: "The original cryptocurrency and the world's largest digital asset by market capitalisation.", change: "+2.14%", color: "from-orange-500/20 to-amber-500/20" },
    { name: "Ethereum", symbol: "ETH/USD", desc: "The leading smart contract platform powering DeFi, NFTs, and the decentralised economy.", change: "+3.27%", color: "from-blue-500/20 to-indigo-500/20" },
    { name: "Solana", symbol: "SOL/USD", desc: "High-speed layer-1 blockchain built for scalable decentralised applications and low-cost transactions.", change: "+5.61%", color: "from-purple-500/20 to-violet-500/20" },
    { name: "XRP", symbol: "XRP/USD", desc: "Ripple's fast payment protocol designed for cross-border transfers between financial institutions.", change: "-1.08%", color: "from-cyan-500/20 to-teal-500/20" },
    { name: "Cardano", symbol: "ADA/USD", desc: "Proof-of-stake blockchain focused on sustainability, research-driven development, and scalability.", change: "+1.72%", color: "from-blue-400/20 to-sky-500/20" },
    { name: "Dogecoin", symbol: "DOGE/USD", desc: "The original meme coin, now a widely traded digital asset with significant retail trading volume.", change: "+0.93%", color: "from-yellow-400/20 to-lime-500/20" },
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
      <div className="min-h-[calc(60vh+6rem)] md:min-h-0 h-[60vh] relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlescrypto"
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
          Trade Crypto
        </h1>
        <p className="text-xl md:text-2xl opacity-70 relative z-20 text-center max-w-2xl px-4 mb-8">
          Bitcoin, Ethereum, Solana and 50+ more. 24/7 crypto CFD trading with institutional-grade execution.
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
      <section className="py-12 border-y" style={{ borderColor, backgroundColor: sectionBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x" style={{ borderColor }}>
            {[
              { value: "50+", label: "Crypto Assets" },
              { value: "< 12ms", label: "Execution Speed" },
              { value: "1:2", label: "Max Leverage" },
              { value: "24/7", label: "Market Hours" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-black mb-1 text-indigo-500">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24" style={{ backgroundColor: colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Your Edge</h2>
            <h3 className="text-4xl md:text-5xl font-semibold mb-6">Why trade crypto with Pangaea.</h3>
            <p className="text-lg opacity-70">All the volatility. None of the custody risk. Trade crypto price action as CFDs under a regulated framework.</p>
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
                  src="/images/crypto_trading.png"
                  alt="Cryptocurrency Trading Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Coins Grid */}
      <section className="py-24 border-t" style={{ borderColor, backgroundColor: sectionBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Available Assets</h2>
              <h3 className="text-4xl font-semibold mb-6">Top Crypto Pairs</h3>
              <p className="text-lg opacity-70 mb-8">
                From Bitcoin to emerging altcoins — access the most liquid and actively traded digital assets 24 hours a day.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-8 border h-48 relative" style={{ borderColor }}>
                <img
                  src="/images/crypto_sidebar.png"
                  alt="Bitcoin and Crypto Coins"
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
                View all 50+ crypto assets <ChevronRight size={20} />
              </button>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-5">
              {coins.map((coin, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border bg-gradient-to-br ${coin.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  style={{ borderColor }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold">{coin.name}</h4>
                      <p className="text-xs opacity-60 uppercase tracking-widest mt-0.5 font-mono">{coin.symbol}</p>
                    </div>
                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${coin.change.startsWith("+") ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-400"}`}>
                      {coin.change}
                    </span>
                  </div>
                  <p className="opacity-70 text-sm leading-relaxed">{coin.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t text-center" style={{ borderColor, backgroundColor: colors.background }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Enter the Digital Economy.</h2>
          <p className="text-xl opacity-70 mb-10">Open a live or demo account and start trading the world&apos;s top cryptocurrencies today.</p>
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
