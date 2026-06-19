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
      {
        name: "Risk Disclosure Statement",
        href: "/pages/risk-disclosure-statement",
      },
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
        : [...current, title],
    );
  };

  return (
    <footer
      className="pt-20 pb-10 transition-colors duration-300 border-t"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#ffffff",
        color: "#000000ff",
        borderColor,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Footer navigation" className="md:hidden space-y-3">
          {footerLinks.map((section) => {
            const isOpen = openSections.includes(section.title);
            const panelId = `footer-${section.title.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <div
                key={section.title}
                className={cn(
                  "overflow-hidden rounded-lg border transition-colors",
                  isOpen ? "bg-white/8" : "bg-white/[0.03]",
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
                    <span className="block text-sm font-bold uppercase tracking-wider text-black/90">
                      {section.title}
                    </span>
                    <span className="mt-1 block text-xs text-black/50">
                      {section.links.length} links
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-black/80">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid border-t border-white/10 transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="grid grid-cols-1 gap-2 px-4 pb-4 min-[420px]:grid-cols-2 pt-5">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group flex min-h-11 items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-black/90 transition-colors hover:border-blue-500 hover:bg-blue-500/15 hover:text-black"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              size={14}
                              className="-rotate-90 text-black/35 transition-colors group-hover:text-blue-500"
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
          className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-10 pt-5"
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-bold uppercase tracking-wider mb-6 text-black/80">
                {section.title}
              </p>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/95 hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col items-center justify-center">
          <p className="font-semibold text-sm">Registered address:</p>
          <p className="text-xs font-regular">
            Lot 12, Office No. 2, St John's Street, Gros Islet, Saint Lucia
          </p>
        </div>

        <div
          className="mt-5 pt-10 border-t opacity-100 text-xs leading-relaxed text-center"
          style={{ borderColor }}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src={"/images/logo-dark.png"}
              alt="Pangaea Logo"
              className="h-12 w-auto opacity-100"
            />
            <p className="max-w-4xl">
              Risk statement: An investment in derivatives may mean investors
              may lose an amount even greater than their original investment.
              Anyone wishing to invest in any of the products mentioned in{" "}
              <span className="text-red-500 font-medium">
                https://pangaeamarkets.com
              </span>{" "}
              should seek their own financial or professional advice. Trading of
              securities, forex, stock market, commodities, options and futures
              may not be suitable for everyone and involves the risk of losing
              part or all of your money. Trading in the financial markets has
              large potential rewards, but also large potential risk. You must
              be aware of the risks and be willing to accept them in order to
              invest in the markets. Don't invest and trade with money which you
              can't afford to lose. Forex Trading are not allowed in some
              countries, before investing your money, make sure whether your
              country is allowing this or not.
            </p>{" "}
            <p className="max-w-4xl">
              You are strongly advised to obtain independent financial, legal
              and tax advice before proceeding with any currency or spot metals
              trade. Nothing in this site should be read or construed as
              constituting advice on the part of{" "}
              <span className="text-red-500 font-medium">
                Pangaea United Markets Limited
              </span>{" "}
              or any of its affiliates, directors, officers or employees.
            </p>
            <p className="max-w-4xl">
              Restricted Regions:{" "}
              <span className="text-red-500 font-medium">
                Pangaea United Markets Limited
              </span>{" "}
              does not provide services for citizens/residents of the United
              States, Cuba, Iraq, Myanmar, North Korea, Sudan, United Arab
              Emirates and India. The services of{" "}
              <span className="text-red-500 font-medium">
                Pangaea United Markets Limited
              </span>{" "}
              are not intended for distribution to, or use by, any person in any
              country or jurisdiction where such distribution or use would be
              contrary to local law or regulation.
            </p>
            <p className="max-w-4xl">OR</p>
            <p className="italic max-w-4xl">
              Information on this site is not directed at residents in any
              country or jurisdiction where such distribution or use would be
              contrary to local law or regulation.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Pangaea United Markets Limited.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
