"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  HelpCircle,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export type LegalPageSection = {
  title: string;
  body: string;
  points?: string[];
};

export type LegalPageConfig = {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  stats: Array<[string, string]>;
  highlights: string[];
  sections: LegalPageSection[];
  finalTitle: string;
  finalText: string;
};

type LegalPageProps = {
  config: LegalPageConfig;
};

export function LegalPage({ config }: LegalPageProps) {
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
            id={`tsparticles${config.id}`}
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
          {config.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          {config.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#summary"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Read Summary
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

      <section className="border-y py-8" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {config.stats.map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-indigo-500 md:text-4xl">{value}</div>
              <div className={cn("mt-1 text-sm font-medium", muted)}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="summary" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">
              {config.eyebrow}
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">Important points at a glance.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              These pages summarize core website, trading, privacy and compliance
              terms for visitors and clients. They are written for clarity and
              should be reviewed alongside account agreements and platform notices.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {config.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                  <Check className="shrink-0 text-emerald-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[440px] overflow-hidden rounded-3xl border shadow-2xl"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            <img
              src={config.image}
              alt={config.imageAlt}
              className="h-full min-h-[440px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030D20] via-[#030D20]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <ShieldCheck size={16} /> Policy reference
              </div>
              <h3 className="max-w-xl text-3xl font-bold">Review before using live services.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Policy Details</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Read the full page sections.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {config.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-2xl border p-7"
                style={{ backgroundColor: surface, borderColor: border }}
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                    <FileText size={21} />
                  </div>
                  <div>
                    <div className={cn("text-xs font-bold uppercase tracking-widest", muted)}>
                      Section {index + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{section.title}</h3>
                  </div>
                </div>
                <p className={cn("leading-7", muted)}>{section.body}</p>
                {section.points && (
                  <div className="mt-5 grid gap-3">
                    {section.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm font-semibold">
                        <Check className="mt-0.5 shrink-0 text-emerald-500" size={17} />
                        {point}
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Related Pages</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Review the linked service areas.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Legal and risk content connects directly to account opening,
              deposits, platform access and support workflows.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: "Account Types",
                desc: "Compare account access, minimums and conditions.",
                href: "/pages/account-types",
              },
              {
                icon: BookOpen,
                title: "Funding Rules",
                desc: "Review deposits, withdrawals and processing notes.",
                href: "/pages/withdrawal-deposits",
              },
              {
                icon: HelpCircle,
                title: "FAQ",
                desc: "Search practical answers before opening a ticket.",
                href: "/pages/faq",
              },
            ].map((item) => {
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

      <section className="py-24 text-center" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-3xl px-4">
          <ShieldCheck className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">{config.finalTitle}</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            {config.finalText}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pages/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              Contact Support <ArrowRight size={18} />
            </Link>
            <Link
              href="/pages/faq"
              className="inline-flex items-center justify-center rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
