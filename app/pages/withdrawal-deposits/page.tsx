"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  HelpCircle,
  Landmark,
  LockKeyhole,
  Repeat2,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: LockKeyhole,
    value: "256-bit SSL",
    label: "End-to-end transaction encryption",
  },
  {
    icon: Landmark,
    value: "Segregated",
    label: "Client funds held separately",
  },
  {
    icon: BadgeCheck,
    value: "KYC Verified",
    label: "Identity checks before funding",
  },
  {
    icon: ShieldCheck,
    value: "AML Monitored",
    label: "Secure same-name transactions",
  },
];

const depositMethods = [
  {
    icon: CreditCard,
    name: "Visa",
    type: "Credit & Debit",
    timing: "Instant to same day",
    note: "Cardholder name must match your Pangaea account.",
  },
  {
    icon: CreditCard,
    name: "Mastercard",
    type: "Credit & Debit",
    timing: "Instant to same day",
    note: "Fast card funding for verified trading accounts.",
  },
  {
    icon: Wallet,
    name: "USDT TRC-20",
    type: "Crypto - Advanced+",
    timing: "Network dependent",
    note: "Available for Advanced and Elite account holders.",
  },
  {
    icon: Building2,
    name: "Bank Wire",
    type: "SWIFT / SEPA",
    timing: "1-5 business days",
    note: "Best for larger verified transfers.",
  },
];

const fundingSteps = [
  {
    title: "Register & KYC",
    desc: "Create your account and complete identity verification once.",
    meta: "~3 min",
  },
  {
    title: "Choose Method",
    desc: "Select Visa, Mastercard, USDT TRC-20 or Bank Wire.",
    meta: "4 options",
  },
  {
    title: "Enter & Confirm",
    desc: "Set your amount, review the summary and submit securely.",
    meta: "1 click",
  },
  {
    title: "Trade Live",
    desc: "Once funds reflect, trade across all available instruments.",
    meta: "Ready",
  },
];

const withdrawalMethods = [
  {
    icon: CreditCard,
    title: "Card Withdrawals",
    desc: "Withdrawals return to the original deposit card. Funding source must match account name.",
    tags: ["Visa", "Mastercard"],
  },
  {
    icon: Building2,
    title: "Bank Wire",
    desc: "Transferred to your verified bank account on record through supported bank rails.",
    tags: ["SWIFT", "SEPA", "International"],
  },
  {
    icon: Wallet,
    title: "Crypto (USDT)",
    desc: "USDT TRC-20 withdrawals are available for Advanced and Elite accounts after enhanced checks.",
    tags: ["USDT TRC-20", "Advanced+"],
  },
];

const policies = [
  {
    icon: Repeat2,
    title: "Same Method Policy",
    desc: "Funds return to the original funding source wherever possible. This is required by AML controls and protects account ownership.",
  },
  {
    icon: AlertTriangle,
    title: "Crypto Availability",
    desc: "USDT TRC-20 deposits and withdrawals are available for Advanced and Elite accounts only. Always verify wallet details before submitting.",
  },
];

const faqs = [
  {
    q: "How do I make a deposit?",
    a: "Log in, open the Deposit section, choose a supported payment method and follow the secure confirmation flow. Your account must be KYC verified before first funding.",
  },
  {
    q: "What payment methods are supported?",
    a: "Pangaea supports Visa, Mastercard, Bank Wire through SWIFT or SEPA, and USDT TRC-20 for eligible Advanced and Elite accounts.",
  },
  {
    q: "Why must I withdraw using the same deposit method?",
    a: "Same-method withdrawals are an AML requirement. Funds should return to the original funding source and that source must match the account holder name.",
  },
  {
    q: "What do I need before my first withdrawal?",
    a: "Your account must be fully verified with valid identification and proof of address. Extra checks may apply for larger withdrawals or crypto transfers.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. Transactions use encrypted payment flows, identity checks, transaction monitoring and segregated client fund controls.",
  },
];

export default function WithdrawalDepositsPage() {
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
            id="tsparticleswithdrawaldeposits"
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
          Deposits & Withdrawals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="text-xl md:text-2xl relative z-20 text-center max-w-3xl px-4 mb-8"
        >
          Fund your Pangaea account securely, withdraw through verified methods,
          and keep every transaction transparent from first deposit to payout.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="flex gap-4 relative z-20 flex-wrap justify-center px-4"
        >
          <Link
            href="#deposit-methods"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors"
          >
            View Deposit Methods
          </Link>
          <Link
            href="#withdrawals"
            className="px-8 py-3 border rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Withdrawal Rules
          </Link>
        </motion.div>
      </section>

      <LazyAnimatedStatsStrip
        stats={trustItems.map(({ icon, value, label }) => ({ icon, value, label }))}
        border={border}
        backgroundColor={altSurface}
        mutedClassName={muted}
        themeMode={theme}
        valueClassName="text-xl font-bold text-indigo-500 md:text-2xl"
        labelClassName="text-sm"
      />

      <section id="deposit-methods" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Deposit Methods</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Choose a secure funding route.</h2>
            </div>
            <p className={cn("max-w-xl text-lg leading-8", muted)}>
              Select from card, wire and eligible crypto methods. All funding
              sources must match your verified account name.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border p-7"
              style={{ backgroundColor: surface, borderColor: border }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className={cn("text-xs font-bold uppercase", muted)}>pangaea::payment_gateway</p>
                  <h3 className="mt-2 text-2xl font-bold">Live Funding Status</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  live
                </div>
              </div>
              <div className="space-y-4">
                {depositMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.name}
                      className="flex items-center justify-between gap-4 rounded-xl border p-4"
                      style={{ borderColor: border }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="font-bold">{method.name}</h4>
                          <p className={cn("text-sm", muted)}>{method.type}</p>
                        </div>
                      </div>
                      <span className={cn("text-right text-xs font-semibold", muted)}>{method.timing}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {depositMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.article
                    key={method.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ backgroundColor: surface, borderColor: border }}
                  >
                    <Icon className="mb-6 text-indigo-500" size={34} />
                    <h3 className="text-2xl font-bold">{method.name}</h3>
                    <p className={cn("mt-2 text-sm font-semibold", muted)}>{method.type}</p>
                    <p className={cn("mt-5 leading-7", muted)}>{method.note}</p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-500">
                      <Clock3 size={16} /> {method.timing}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Fund Your Account</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Fully funded and live in minutes.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Complete verification once, choose a payment route, and move from
              funding to live trading through a simple account flow.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["4", "Payment methods"],
                ["256-bit", "SSL encryption"],
                ["KYC", "Verified accounts"],
                ["AML", "Monitored transfers"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border p-5" style={{ backgroundColor: surface, borderColor: border }}>
                  <div className="text-2xl font-bold text-indigo-500">{value}</div>
                  <div className={cn("mt-1 text-sm", muted)}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {fundingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.07 }}
                className="flex gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: surface, borderColor: border }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <span className={cn("text-sm font-bold", muted)}>{step.meta}</span>
                  </div>
                  <p className={cn("mt-2 leading-7", muted)}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="withdrawals" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Easy Withdrawals</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Withdraw through your verified funding source.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Withdrawal requests follow account-name matching and same-method
              controls so funds move back through approved routes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {withdrawalMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.article
                  key={method.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border p-7"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-6 text-indigo-500" size={34} />
                  <h3 className="text-2xl font-bold">{method.title}</h3>
                  <p className={cn("mt-4 leading-7", muted)}>{method.desc}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {method.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-semibold"
                        style={{ borderColor: border }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <div key={policy.title} className="rounded-2xl border p-7" style={{ backgroundColor: altSurface, borderColor: border }}>
                  <Icon className="mb-5 text-indigo-500" size={32} />
                  <h3 className="text-xl font-bold">{policy.title}</h3>
                  <p className={cn("mt-3 leading-7", muted)}>{policy.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-indigo-500">Got Questions?</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Funding answers before you move money.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Clear guidance for first deposits, same-method withdrawals, crypto
              eligibility and account verification.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
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
          <CircleDollarSign className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Ready to fund and trade?</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Choose your funding method, complete verification and start trading
            across Pangaea markets.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:scale-105"
            >
              Start Trading Now <Zap size={18} />
            </Link>
            <Link
              href="#deposit-methods"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Make a Deposit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
