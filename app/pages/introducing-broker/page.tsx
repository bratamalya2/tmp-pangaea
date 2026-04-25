"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Check,
  ChevronRight,
  Globe2,
  Handshake,
  LineChart,
  Megaphone,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Flexible Rebates",
    desc: "Build a commercial model around referred client volume, account activity and long-term retention.",
  },
  {
    icon: WalletCards,
    title: "Fast Partner Payouts",
    desc: "Track partner earnings with clear reporting and a process built for repeat monthly settlement.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    desc: "Review client acquisition, conversion, trading volume and account growth from one partner workflow.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Access campaign guidance, product messaging and market material tailored to trading audiences.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    desc: "Operate with onboarding, KYC and risk messaging aligned with regulated financial promotion standards.",
  },
  {
    icon: Globe2,
    title: "Global Market Access",
    desc: "Refer clients into a multi-asset environment covering forex, stocks, indices, commodities and crypto.",
  },
];

const steps = [
  "Submit your partner interest form.",
  "Speak with the partnerships desk.",
  "Complete onboarding and receive tracking links.",
  "Refer clients and monitor partner performance.",
];

const toolkit = [
  "Partner-ready account onboarding flow",
  "Dedicated relationship support",
  "Market and platform education material",
  "Transparent commission and referral tracking",
  "Multi-asset product coverage",
  "Demo-first client education path",
];

export default function IntroducingBrokerPage() {
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
      <section className="min-h-[calc(60vh+6rem)] md:min-h-0 h-[60vh] relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlesintroducingbroker"
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
          Introducing Broker
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          Partner with Pangaea to introduce traders, grow a network and build
          recurring revenue around global market access.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#partner"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Become an IB
          </Link>
          <Link
            href="#benefits"
            className="rounded-full border px-8 py-3 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Program Benefits
          </Link>
        </motion.div>
      </section>

      <section className="border-y py-8" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["Multi", "Commission models"],
            ["1,000+", "Tradable markets"],
            ["24/5", "Partner support"],
            ["Live", "Referral tracking"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-indigo-500 md:text-4xl">{value}</div>
              <div className={cn("mt-1 text-sm font-medium", muted)}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="partner" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">
              Partnership Program
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">Turn trader relationships into a structured business.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              The IB program is designed for educators, signal communities,
              affiliates, trading offices and regional partners who need a
              professional broker relationship behind their client network.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Dedicated partner manager", "Transparent tracking", "Client-ready onboarding", "Marketing guidance"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                  <Check className="text-emerald-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/pages/contact-us"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Talk to Partnerships <ChevronRight size={18} />
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
              alt="Professional trading partnership team"
              className="h-full min-h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-[#030D20]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <Handshake size={16} /> Partner desk
              </div>
              <h3 className="max-w-xl text-3xl font-bold">Built for relationship-led growth.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Benefits</p>
            <h2 className="text-4xl font-semibold md:text-5xl">A partner framework with commercial clarity.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
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
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Partner Toolkit</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Everything needed to refer with confidence.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Give your clients a clear account path while your team gets the
              tools to monitor growth, answer product questions and manage
              partner activity.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/forex_trading_desk.png"
                alt="Trading desk partner dashboard"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {toolkit.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border p-5" style={{ backgroundColor: surface, borderColor: border }}>
                <Check className="shrink-0 text-emerald-500" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">How It Works</p>
            <h2 className="text-4xl font-semibold md:text-5xl">From application to active referrals.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              The onboarding path is designed to be clear for partners and safe
              for clients from the first conversation.
            </p>
          </div>
          <div className="space-y-5">
            {steps.map((step, index) => (
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

      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Users className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Build your partner channel with Pangaea.</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Speak with our partnerships desk and explore the model that fits
            your audience, region and trading community.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pages/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Contact Partnerships <ArrowRight size={18} />
            </Link>
            <Link
              href="/pages/platforms"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Explore Platforms <LineChart size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
