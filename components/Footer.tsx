"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Trading",
    links: [
      { name: "Account Types", href: "/pages/account-types" },
      { name: "Platforms", href: "/pages/platforms" },
      { name: "Deposits and Withdrawals", href: "/pages/withdrawal-deposits" },
    ],
  },
  {
    title: "Markets",
    links: [
      { name: "Forex", href: "/pages/forex" },
      { name: "Stocks", href: "/pages/stocks" },
      { name: "Indices", href: "/pages/indices" },
      { name: "Commodities", href: "/pages/commodities" },
      { name: "Crypto", href: "/pages/crypto" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Economic Calendar", href: "/pages/economical-calendar" },
      { name: "Trading Calculator", href: "/pages/trading-calculator" },
      { name: "Currency Converter", href: "/pages/currency-converter" },
    ],
  },
  {
    title: "Help Centre",
    links: [
      { name: "Introducing Broker", href: "/pages/introducing-broker" },
      { name: "Contact Us", href: "/pages/contact-us" },
      { name: "FAQ", href: "/pages/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/pages/privacy-policy" },
      { name: "Website Disclaimer", href: "/pages/website-disclaimer" },
      { name: "Terms & Conditions", href: "/pages/terms-and-conditions" },
      { name: "Risk Disclosure Statement", href: "/pages/risk-disclosure-statement" },
      { name: "KYC & AML Policy", href: "/pages/kyc-aml-policy" },
      { name: "Risk Warning", href: "/pages/risk-warning" },
    ],
  },
];

export function Footer() {
  const { colors, theme } = useTheme();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const borderColor = theme === "light" ? "#111d35" : "#1f2937";

  const toggleSection = (title: string) => {
    setOpenSections((current) =>
      current.includes(title)
        ? current.filter((sectionTitle) => sectionTitle !== title)
        : [...current, title]
    );
  };

  return (
    <footer
      className="pt-20 pb-10 transition-colors duration-300 border-t"
      style={{
        backgroundColor: theme === "light" ? "#040D22" : colors.background,
        color: theme === "light" ? "#ffffff" : colors.text,
        borderColor
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Footer navigation"
          className="md:hidden space-y-3"
        >
          {footerLinks.map((section) => {
            const isOpen = openSections.includes(section.title);
            const panelId = `footer-${section.title.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <div
                key={section.title}
                className={cn(
                  "overflow-hidden rounded-lg border transition-colors",
                  isOpen ? "bg-white/8" : "bg-white/[0.03]"
                )}
                style={{ borderColor }}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wider text-white/90">
                      {section.title}
                    </span>
                    <span className="mt-1 block text-xs text-white/50">
                      {section.links.length} links
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid border-t border-white/10 transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="grid grid-cols-1 gap-2 px-4 pb-4 min-[420px]:grid-cols-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group flex min-h-11 items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-indigo-400 hover:bg-indigo-500/15 hover:text-white"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              size={14}
                              className="-rotate-90 text-white/35 transition-colors group-hover:text-indigo-200"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <nav
          aria-label="Footer navigation"
          className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">
                {section.title}
              </p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/95 hover:text-indigo-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-20 pt-10 border-t opacity-100 text-xs leading-relaxed text-center" style={{ borderColor }}>
          <div className="flex flex-col items-center gap-6">
            <img
              src={theme === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"}
              alt="Pangaea Logo"
              className="h-12 w-auto opacity-100"
            />
            <p className="max-w-4xl">
              Risk Warning: Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to use the services of NavionFX Limited based on the legal requirements in his/her country of residence.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Pangaea United Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
