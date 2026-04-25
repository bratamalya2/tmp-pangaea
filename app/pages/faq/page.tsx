"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FileCheck2,
  Headphones,
  Landmark,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { LazyAnimatedStatsStrip } from "@/components/LazyAnimatedStatsStrip";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

type Category = "All" | "Accounts" | "Trading" | "Funding" | "Platforms" | "Verification" | "Partners";

type FaqItem = {
  category: Exclude<Category, "All">;
  question: string;
  answer: string;
};

const categories: Category[] = ["All", "Accounts", "Trading", "Funding", "Platforms", "Verification", "Partners"];

const faqs: FaqItem[] = [
  {
    category: "Accounts",
    question: "Which account type should I choose?",
    answer:
      "Start with the account type that matches your deposit size, trading frequency and spread preference. Demo is best for practice, while funded accounts suit live execution after verification.",
  },
  {
    category: "Accounts",
    question: "Can I open more than one trading account?",
    answer:
      "Yes. Many traders keep separate accounts for demo practice, strategy testing and live trading. Account availability can depend on profile status and region.",
  },
  {
    category: "Trading",
    question: "What markets can I trade?",
    answer:
      "Pangaea supports a multi-asset trading experience across forex, stocks, indices, commodities and crypto references from one platform environment.",
  },
  {
    category: "Trading",
    question: "Does leverage change by market?",
    answer:
      "Yes. Leverage can differ by asset class, instrument, account type, region and risk conditions. Always check the final platform specification before trading.",
  },
  {
    category: "Funding",
    question: "How do deposits and withdrawals work?",
    answer:
      "Clients choose an available payment method, complete the request and follow any required verification checks. Withdrawal methods usually need to follow account and compliance rules.",
  },
  {
    category: "Funding",
    question: "Why might a withdrawal take longer?",
    answer:
      "Processing can be affected by bank holidays, blockchain confirmations, payment provider review, KYC status or additional compliance checks.",
  },
  {
    category: "Platforms",
    question: "Which platforms are available?",
    answer:
      "The platform suite includes MetaTrader 5, MT5 Web Terminal and the upcoming Pangaea mobile experience for multi-device account access.",
  },
  {
    category: "Platforms",
    question: "Can I trade from a browser?",
    answer:
      "Yes. MT5 Web Terminal allows browser-based access without installing desktop software, subject to account access and platform availability.",
  },
  {
    category: "Verification",
    question: "Why do I need KYC verification?",
    answer:
      "Verification helps protect accounts, meet AML obligations and confirm that account services are being used by the rightful profile owner.",
  },
  {
    category: "Verification",
    question: "What documents are usually required?",
    answer:
      "A typical review may request proof of identity, proof of address and supporting documents depending on account activity, payment method or region.",
  },
  {
    category: "Partners",
    question: "How does the Introducing Broker program work?",
    answer:
      "Approved partners refer clients, use partner tracking and work with the partnerships desk to manage onboarding, reporting and commercial terms.",
  },
  {
    category: "Partners",
    question: "Who can apply to become an IB?",
    answer:
      "Trading educators, communities, affiliates, regional partners and professional networks can apply, subject to compliance review and commercial fit.",
  },
];

const supportPaths = [
  {
    icon: WalletCards,
    title: "Funding Help",
    desc: "Review deposit and withdrawal rules before opening a support ticket.",
    href: "/pages/withdrawal-deposits",
  },
  {
    icon: MonitorSmartphone,
    title: "Platform Access",
    desc: "Compare desktop, web and mobile platform options.",
    href: "/pages/platforms",
  },
  {
    icon: FileCheck2,
    title: "Account Choice",
    desc: "Understand account types before you register or upgrade.",
    href: "/pages/account-types",
  },
];

export default function FaqPage() {
  const { colors, theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question);

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !query ||
        [item.category, item.question, item.answer].join(" ").toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-screen h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlesfaq"
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
          FAQs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          Search practical answers about accounts, trading, funding,
          verification, platforms and partnerships.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#faq-search"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Search FAQs
          </Link>
          <Link
            href="/pages/contact-us"
            className="rounded-full border px-8 py-3 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Contact Support
          </Link>
        </motion.div>
      </section>

      <LazyAnimatedStatsStrip
        stats={[
          { value: "6", label: "FAQ categories" },
          { value: "12", label: "Core answers" },
          { value: "Fast", label: "Search filters" },
          { value: "24/5", label: "Support path" },
        ]}
        border={border}
        backgroundColor={altSurface}
        mutedClassName={muted}
        themeMode={theme}
      />

      <section id="faq-search" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Help Centre</p>
              <h2 className="text-4xl font-semibold md:text-5xl">Find the answer before opening a ticket.</h2>
              <p className={cn("mt-6 text-lg leading-8", muted)}>
                Filter by category or search across account, funding, platform
                and partner topics.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/forex_global_news.png"
                alt="Support knowledge base and global market information"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div
            className="rounded-2xl border p-5"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="flex items-center gap-3 rounded-full border px-4 py-3" style={{ borderColor: border }}>
                <Search size={18} className="text-indigo-500" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  type="search"
                  placeholder="Search accounts, deposits, platforms or partners"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
                  aria-label="Search FAQs"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-bold transition-colors",
                      activeCategory === category && "bg-indigo-600 text-white"
                    )}
                    style={{ borderColor: activeCategory === category ? "transparent" : border }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className={cn("mt-4 text-sm", muted)}>
              Showing {filteredFaqs.length} of {faqs.length} answers
              {searchQuery.trim() ? ` for "${searchQuery.trim()}"` : ""}.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {filteredFaqs.map((item, index) => {
              const isOpen = openQuestion === item.question;
              return (
                <motion.article
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="overflow-hidden rounded-2xl border"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <button
                    onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span>
                      <span className="mb-2 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-500">
                        {item.category}
                      </span>
                      <span className="block text-lg font-bold">{item.question}</span>
                    </span>
                    <ChevronDown className={cn("shrink-0 text-indigo-500 transition-transform", isOpen && "rotate-180")} size={22} />
                  </button>
                  {isOpen && (
                    <div className="border-t px-6 pb-6 pt-5" style={{ borderColor: border }}>
                      <p className={cn("leading-7", muted)}>{item.answer}</p>
                    </div>
                  )}
                </motion.article>
              );
            })}
            {filteredFaqs.length === 0 && (
              <div className="rounded-2xl border p-10 text-center" style={{ backgroundColor: surface, borderColor: border }}>
                <CircleHelp className="mx-auto mb-4 text-indigo-500" size={38} />
                <h3 className="text-xl font-bold">No matching answers</h3>
                <p className={cn("mx-auto mt-2 max-w-md text-sm leading-6", muted)}>
                  Try another category or contact support with your account,
                  platform or funding question.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Quick Paths</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Jump to the page behind the answer.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Some questions are easier to solve when you go straight to the
              detailed product page.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {supportPaths.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:border-indigo-500"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-5 text-indigo-500" size={32} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border shadow-2xl" style={{ borderColor: border }}>
            <img
              src="/images/stocks_trading_floor.png"
              alt="Client support and trading operations desk"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-[#030D20]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <BookOpen size={16} /> Help Centre
              </div>
              <h3 className="text-3xl font-bold">Answers built around real trading workflows.</h3>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Still Need Help?</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Contact the desk with account context.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              If the FAQ does not cover your request, send support the relevant
              account, payment or platform details so the desk can route it
              properly.
            </p>
            <div className="mt-8 grid gap-4">
              {["Do not share passwords", "Include ticket or account reference", "Attach documents only through official channels"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/pages/contact-us"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 text-center" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-3xl px-4">
          <Landmark className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Need account-specific help?</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Contact support for account review, compliance checks, funding
            questions or platform access guidance.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pages/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Send a Request <Headphones size={18} />
            </Link>
            <Link
              href="/pages/withdrawal-deposits"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Funding Guide <ShieldCheck size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
