"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const contactChannels = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@pangaea.com",
    desc: "Best for account, document and platform questions.",
  },
  {
    icon: MessageSquare,
    title: "Client Desk",
    value: "Live chat request",
    desc: "Use the form to route your request to the right team.",
  },
  {
    icon: Phone,
    title: "Call Back",
    value: "Request a call",
    desc: "Ask for a callback from support, sales or partnerships.",
  },
  {
    icon: Globe2,
    title: "Global Coverage",
    value: "24/5 market week",
    desc: "Support aligned to active market hours and trading workflows.",
  },
];

const departments = [
  {
    icon: Headphones,
    title: "Client Support",
    desc: "Account access, verification, deposits, withdrawals and general account questions.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Desk",
    desc: "KYC, AML, document reviews, profile updates and account safety checks.",
  },
  {
    icon: Building2,
    title: "Partnerships",
    desc: "Introducing broker applications, affiliate conversations and regional partnerships.",
  },
  {
    icon: Users,
    title: "Trading Services",
    desc: "Platform guidance, product access, demo setup and market workflow support.",
  },
];

export default function ContactUsPage() {
  const { colors, theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const surface = theme === "light" ? "#ffffff" : "#040404";
  const altSurface = theme === "light" ? "#f9fafb" : "#020813";
  const border = theme === "light" ? "#e5e7eb" : "#1f2937";
  const muted = theme === "light" ? "text-zinc-600" : "text-zinc-400";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <section className="min-h-[calc(60vh+6rem)] md:min-h-0 h-[60vh] relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlescontactus"
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.72, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="relative z-20 mb-8 max-w-3xl px-4 text-center text-xl md:text-2xl"
        >
          Reach the right desk for account support, trading questions,
          partnerships and platform access.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="relative z-20 flex flex-wrap justify-center gap-4 px-4"
        >
          <Link
            href="#contact-form"
            className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Send a Message
          </Link>
          <Link
            href="#support"
            className="rounded-full border px-8 py-3 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: theme === "light" ? "#e5e7eb" : "#374151" }}
          >
            Support Desks
          </Link>
        </motion.div>
      </section>

      <section className="border-y py-8" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["24/5", "Market week support"],
            ["4", "Specialist desks"],
            ["Secure", "Request routing"],
            ["Fast", "Callback triage"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-indigo-500 md:text-4xl">{value}</div>
              <div className={cn("mt-1 text-sm font-medium", muted)}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Contact Desk</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Tell us what you need help with.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Send one request and route it to support, compliance, trading
              services or partnerships. The form is local for now and ready for
              backend wiring later.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border shadow-2xl" style={{ borderColor: border }}>
              <img
                src="/images/stocks_global_market.png"
                alt="Global support team monitoring market requests"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border p-6 shadow-2xl sm:p-8"
            style={{ backgroundColor: surface, borderColor: border }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold">Full Name</span>
                <input
                  required
                  type="text"
                  className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                  style={{ borderColor: border }}
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Email Address</span>
                <input
                  required
                  type="email"
                  className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                  style={{ borderColor: border }}
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Phone Number</span>
                <input
                  type="tel"
                  className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                  style={{ borderColor: border }}
                  placeholder="+1 000 000 0000"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Department</span>
                <select
                  className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                  style={{ borderColor: border }}
                  defaultValue="Support"
                >
                  <option>Support</option>
                  <option>Compliance</option>
                  <option>Partnerships</option>
                  <option>Trading Services</option>
                </select>
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-bold">Subject</span>
                <input
                  required
                  type="text"
                  className="h-12 rounded-xl border bg-transparent px-4 text-sm outline-none"
                  style={{ borderColor: border }}
                  placeholder="How can we help?"
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-bold">Message</span>
                <textarea
                  required
                  rows={6}
                  className="resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
                  style={{ borderColor: border }}
                  placeholder="Share your request details"
                />
              </label>
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.01] hover:bg-indigo-700 sm:w-auto">
              Send Request <Send size={18} />
            </button>

            {submitted && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-500">
                <Check className="mt-0.5 shrink-0" size={18} />
                Your request has been captured locally. Backend delivery can be
                connected when the support endpoint is ready.
              </div>
            )}
          </form>
        </div>
      </section>

      <section id="support" className="border-y py-24" style={{ backgroundColor: altSurface, borderColor: border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Support Desks</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Route questions to the right team.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((department, index) => {
              const Icon = department.icon;
              return (
                <motion.article
                  key={department.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border p-7"
                  style={{ backgroundColor: surface, borderColor: border }}
                >
                  <Icon className="mb-6 text-indigo-500" size={34} />
                  <h3 className="text-xl font-bold">{department.title}</h3>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{department.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500">Contact Channels</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Choose the channel that fits the request.</h2>
            <p className={cn("mt-6 text-lg leading-8", muted)}>
              Keep account-sensitive details inside official support channels
              and never share passwords, private keys or full card details.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border p-5" style={{ backgroundColor: surface, borderColor: border }}>
              <MapPin className="shrink-0 text-indigo-500" size={24} />
              <span className="font-semibold">Global online support for eligible client regions.</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className="rounded-2xl border p-6" style={{ backgroundColor: surface, borderColor: border }}>
                  <Icon className="mb-5 text-indigo-500" size={30} />
                  <h3 className="text-xl font-bold">{channel.title}</h3>
                  <div className="mt-2 font-semibold text-indigo-500">{channel.value}</div>
                  <p className={cn("mt-3 text-sm leading-6", muted)}>{channel.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 text-center" style={{ backgroundColor: altSurface }}>
        <div className="mx-auto max-w-3xl px-4">
          <Clock3 className="mx-auto mb-6 text-indigo-500" size={44} />
          <h2 className="text-4xl font-bold md:text-5xl">Need a faster answer?</h2>
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-8", muted)}>
            Check the FAQ first for account, funding, platform and verification
            guidance, then contact us if you need a desk to review your request.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pages/faq"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-700"
            >
              View FAQ <ArrowRight size={18} />
            </Link>
            <Link
              href="/pages/introducing-broker"
              className="inline-flex items-center justify-center rounded-full border px-8 py-4 font-bold transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              style={{ borderColor: border }}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
