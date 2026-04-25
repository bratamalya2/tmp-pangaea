"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
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
    title: "Company",
    links: [
      { name: "Introducing Broker (IB)", href: "/pages/introducing-broker" },
      { name: "Contact Us", href: "/pages/contact-us" },
      { name: "FAQs", href: "/pages/faq" },
    ],
  },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b"
      style={{
        backgroundColor: theme === "light" ? "#030D20" : "#030D20E6", // E6 for ~90% opacity
        borderColor: "#1f2937",
        color: "#ffffff"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="/images/logo-dark.png"
                alt="Panagea Logo"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="cursor-pointer flex items-center space-x-1 py-2 text-sm font-medium hover:text-indigo-500 transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === item.title && "rotate-180")} />
                </button>

                {/* Dropdown Menu */}
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 transition-all duration-200 transform origin-top",
                  activeDropdown === item.title ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                )}>
                  <div
                    className="rounded-xl shadow-2xl border p-2 overflow-hidden"
                    style={{
                      backgroundColor: theme === "light" ? "#020E1E" : "#030D20",
                      borderColor: "#1f2937",
                      color: "#ffffff"
                    }}
                  >
                    {item.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm rounded-lg hover:bg-indigo-500 hover:text-white transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "cursor-pointer p-2 rounded-full transition-all duration-300",
                theme === "light" ? "hover:bg-zinc-200/20 text-white border border-white" : "hover:bg-zinc-800 text-zinc-100"
              )}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a href="#" className="text-sm font-medium hover:text-indigo-500 transition-colors">Login</a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all"
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                theme === "light" ? "hover:bg-zinc-200/20 border border-white text-white" : "hover:bg-zinc-800 text-white"
              )}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                theme === "light" ? "hover:bg-zinc-200/20 text-white" : "hover:bg-zinc-800 text-white"
              )}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen border-b shadow-xl" : "max-h-0 border-none"
      )} style={{ backgroundColor: theme === "light" ? "#020E1E" : "#030D20", borderColor: "#1f2937", color: "#ffffff" }}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {menuItems.map((item) => (
            <div key={item.title} className="py-2">
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-3 mb-2">{item.title}</div>
              <div className="grid grid-cols-1 gap-1">
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 flex flex-col space-y-3 px-3">
            <a href="#" className="flex items-center justify-center py-3 text-base font-medium border rounded-xl">Login</a>
            <a href="#" className="flex items-center justify-center py-3 text-base font-bold bg-indigo-600 text-white rounded-xl shadow-lg">Register</a>
          </div>
        </div>
      </div>
    </header>
  );
}
