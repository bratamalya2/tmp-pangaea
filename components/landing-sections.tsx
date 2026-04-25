"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  ShieldCheck, Zap,
  Laptop, Wallet, ChevronRight, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  intensity = 56,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  intensity?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover will-change-transform", imageClassName)}
        style={{ y, scale: 1.14 }}
      />
    </div>
  );
}

export function StatsSection() {
  const { theme } = useTheme();
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });
  const valueParallaxY = useTransform(scrollYProgress, [0, 1], [24, -16]);
  const labelParallaxY = useTransform(scrollYProgress, [0, 1], [12, -8]);

  const stats = [
    { value: "< 12ms", label: "Average Execution" },
    { value: "0.0", label: "Starting Spreads" },
    { value: "1000+", label: "Trading Instruments" },
    { value: "24/7", label: "Client Support" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 border-y"
      style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.11,
              },
            },
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={cn(
                "px-4 text-center",
                idx % 2 === 0 && "border-r",
                idx < stats.length - 1 && "md:border-r"
              )}
              style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <motion.div
                className="relative isolate will-change-transform"
                style={{ y: valueParallaxY }}
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-12 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-xl md:h-16 md:w-32"
                  variants={{
                    hidden: { opacity: 0, scale: 0.45 },
                    visible: {
                      opacity: [0, 0.9, 0.2],
                      scale: [0.55, 1.35, 1],
                      transition: {
                        duration: 0.75,
                        delay: 0.08,
                        ease: "easeOut",
                      },
                    },
                  }}
                />
                <motion.div
                  className="relative mx-auto mb-2 inline-block overflow-hidden text-3xl font-bold text-indigo-500 drop-shadow-[0_0_18px_rgba(99,102,241,0.35)] md:text-5xl"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 18,
                      scale: 0.9,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: [0.9, 1.08, 1],
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.72,
                        delay: 0.12,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {stat.value}
                  <motion.span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-y-0 -left-16 w-12 skew-x-[-18deg] bg-gradient-to-r from-transparent to-transparent",
                      theme === "light" ? "via-white/90" : "via-indigo-100/90"
                    )}
                    variants={{
                      hidden: { x: "-120%", opacity: 0 },
                      visible: {
                        x: "420%",
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 0.85,
                          delay: 0.2 + idx * 0.08,
                          ease: "easeOut",
                        },
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="will-change-transform"
                style={{ y: labelParallaxY }}
              >
                <motion.div
                  className="text-sm font-semibold uppercase tracking-widest opacity-70"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 0.7,
                      y: 0,
                      transition: {
                        duration: 0.45,
                        delay: 0.2,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  const { theme } = useTheme();

  const features = [
    {
      icon: <Wallet size={32} className="text-indigo-500" />,
      title: "Flexible Accounts",
      description: "Choose from Standard, Swap-Free, Zero Spread, or 100% Bonus accounts - tailored to your style."
    },
    {
      icon: <Zap size={32} className="text-indigo-500" />,
      title: "Institutional Grade",
      description: "Ultra-low latency execution, precision pricing, and 99.9% uptime - built for serious traders."
    },
    {
      icon: <Laptop size={32} className="text-indigo-500" />,
      title: "Multi-Platform Access",
      description: "MetaTrader 5, WebTrader, or our native mobile app - one account, any device, anywhere."
    },
    {
      icon: <ShieldCheck size={32} className="text-indigo-500" />,
      title: "Secure & Regulated",
      description: "Client funds held in segregated tier-1 bank accounts with negative balance protection."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Why Choose Us</p>
          <h2 className="text-2xl md:text-5xl font-semibold mb-6">Institutional-grade technology, tailored for retail traders.</h2>
          <p className="text-lg opacity-70">From smart account types to advanced infrastructure — we deliver trading built for performance, trust, and speed.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={cn(
                  "p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl",
                  theme === "light" ? "hover:bg-zinc-50" : "hover:bg-zinc-900/50"
                )}
                style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937", backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}
              >
                <div className="mb-4 p-3 rounded-xl inline-block" style={{ backgroundColor: theme === "light" ? "#f3f4f6" : "#111827" }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 w-full">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000"
              alt="Stock Market Data"
              className="rounded-3xl shadow-2xl h-[500px] border"
              intensity={70}
              imageClassName="rounded-3xl"
            />
            <div
              className="pointer-events-none -mt-[500px] h-[500px] rounded-3xl border"
              style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRouter } from "next/navigation";

export function MarketsSection() {
  const { theme } = useTheme();
  const router = useRouter();

  const markets = [
    { title: "Forex", desc: "Trade major, minor, and exotic pairs.", pairs: "70+ Pairs", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800" },
    { title: "Stocks", desc: "Invest in leading global companies.", pairs: "500+ Stocks", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800" },
    { title: "Indices", desc: "Speculate on top market indices.", pairs: "20+ Indices", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800" },
    { title: "Commodities", desc: "Trade gold, oil, and more.", pairs: "Precious Metals & Energies", image: "/images/commodities.png" },
    { title: "Crypto", desc: "Access top crypto assets instantly.", pairs: "50+ Coins", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: theme === "light" ? "#f9fafb" : "#020813" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Global Markets</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Trade Across Global Markets</h2>
            <p className="text-lg opacity-70">Diversify your trading portfolio with broad access to global FX, stocks, indices, and commodities, all in one place.</p>
          </div>
          <button className="flex items-center gap-2 font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
            View All Markets <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, idx) => {
            const isForex = market.title === "Forex";
            const isStocks = market.title === "Stocks";
            const isIndices = market.title === "Indices";
            const isCommodities = market.title === "Commodities";
            const isCrypto = market.title === "Crypto";
            const href = isForex ? "/pages/forex"
              : isStocks ? "/pages/stocks"
                : isIndices ? "/pages/indices"
                  : isCommodities ? "/pages/commodities"
                    : isCrypto ? "/pages/crypto"
                      : null;

            return (
              <div
                key={idx}
                onClick={() => { if (href) router.push(href) }}
                className="group p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col"

                style={{
                  borderColor: theme === "light" ? "#e5e7eb" : "#1f2937",
                  backgroundColor: theme === "light" ? "#ffffff" : "#040404"
                }}
              >
                <ParallaxImage
                  src={market.image}
                  alt={market.title}
                  className="h-40 w-full mb-6 rounded-xl"
                  imageClassName="transition-transform duration-500 group-hover:scale-110"
                  intensity={24}
                />
                <div className="-mt-[184px] h-40 w-full mb-6 rounded-xl overflow-hidden relative pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{market.title}</h3>
                  <div className="p-2 rounded-full border opacity-0 group-hover:opacity-100 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                    <ChevronRight size={20} />
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="opacity-70 mb-4 min-h-[48px]">{market.desc}</p>
                  <div className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">{market.pairs}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AccountsSection() {
  const { theme } = useTheme();

  const accounts = [
    {
      name: "Standard",
      target: "New traders. Low capital.",
      deposit: "$50",
      spreads: "from 1.0 pips",
      leverage: "1:500",
      commission: "Zero",
      popular: false
    },
    {
      name: "Advanced",
      target: "Active traders demanding better pricing.",
      deposit: "$500",
      spreads: "from 0.5 pips",
      leverage: "1:100",
      commission: "Zero*",
      popular: true
    },
    {
      name: "Elite",
      target: "Pros. High volume. Maximum benefits.",
      deposit: "$10,000",
      spreads: "from 0.0 pips",
      leverage: "1:100",
      commission: "$3 per lot",
      popular: false
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-3">Find Your Fit</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Built for every trader.</h2>
          <p className="text-lg opacity-70">Pick your level, match your strategy, and trade without limits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-3xl border p-8 relative transition-transform duration-300 hover:-translate-y-2",
                acc.popular ? "shadow-2xl md:scale-105" : ""
              )}
              style={{
                borderColor: acc.popular ? "#6366f1" : (theme === "light" ? "#e5e7eb" : "#1f2937"),
                backgroundColor: theme === "light" ? "#ffffff" : "#040404",
                zIndex: acc.popular ? 10 : 1
              }}
            >
              {acc.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{acc.name}</h3>
              <p className="opacity-70 text-sm mb-8 h-10">{acc.target}</p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                  <span className="opacity-70">Min Deposit</span>
                  <span className="font-bold">{acc.deposit}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                  <span className="opacity-70">Spreads</span>
                  <span className="font-bold">{acc.spreads}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                  <span className="opacity-70">Max Leverage</span>
                  <span className="font-bold">{acc.leverage}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
                  <span className="opacity-70">Commission</span>
                  <span className="font-bold">{acc.commission}</span>
                </div>
              </div>

              <button
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all duration-300",
                  acc.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25"
                    : "border hover:bg-indigo-50"
                )}
                style={{
                  borderColor: acc.popular ? "transparent" : (theme === "light" ? "#e5e7eb" : "#374151"),
                  color: !acc.popular && theme === "dark" ? "#ffffff" : undefined,
                  backgroundColor: !acc.popular && theme === "dark" ? "transparent" : undefined
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  const { theme } = useTheme();

  const steps = [
    { num: "01", title: "Register", desc: "Quickly create your account in under 2 minutes." },
    { num: "02", title: "Verify", desc: "Submit your documents for instant AI verification." },
    { num: "03", title: "Fund", desc: "Deposit instantly with 0% fees via crypto or card." },
    { num: "04", title: "Trade", desc: "Access 1,000+ instruments and start trading." },
  ];

  return (
    <section className="py-24 border-t" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937", backgroundColor: theme === "light" ? "#ffffff" : "#040404" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Get started in minutes.</h2>
            <p className="text-lg opacity-70 mb-8">Four simple steps to your first trade. Join thousands of traders worldwide who trust Pangaea.</p>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-105 transition-all">
              Create Free Account
            </button>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-indigo-500/10 absolute -top-6 -left-4 z-0">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm">{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="opacity-70 ml-11">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[400px] relative border" style={{ borderColor: theme === "light" ? "#e5e7eb" : "#1f2937" }}>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000"
            alt="Trading Platform Dashboard"
            className="h-full w-full"
            intensity={64}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] to-transparent opacity-60"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Advanced Trading Infrastructure</h3>
            <p className="text-sm sm:text-base opacity-90 max-w-lg">Execute trades with millisecond precision across global markets using our state-of-the-art terminal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
