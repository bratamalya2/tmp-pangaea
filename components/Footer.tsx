"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

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

  return (
    <footer
      className="pt-20 pb-10 transition-colors duration-300 border-t"
      style={{
        backgroundColor: theme === "light" ? "#040D22" : colors.background,
        color: theme === "light" ? "#ffffff" : colors.text,
        borderColor: theme === "light" ? "#111d35" : "#1f2937"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 opacity-50">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-indigo-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t opacity-100 text-xs leading-relaxed text-center" style={{ borderColor: theme === "light" ? "#111d35" : "#1f2937" }}>
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
