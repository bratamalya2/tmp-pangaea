"use client";

import { useState, useEffect } from "react";
import LoaderOne from "@/components/ui/loader-one";

export function GlobalLoader() {
  // Start HIDDEN — only reveal after useEffect confirms it's the first visit.
  // On bfcache restores, useEffect does NOT run, so the loader stays hidden.
  const [showLoader, setShowLoader] = useState(false);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("hasVisitedGlobal")) return;

    // First ever visit — show the loader, fade it out, then remove it.
    const show = setTimeout(() => setShowLoader(true), 0);
    const t1 = setTimeout(() => setFadeLoader(true), 1500);
    const t2 = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem("hasVisitedGlobal", "true");
    }, 2000);

    return () => {
      clearTimeout(show);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${fadeLoader ? "opacity-0" : "opacity-100"
        }`}
      style={{ backgroundColor: "#030D20" }}
    >
      <img
        src="/images/logo-dark.png"
        alt="Panagea Logo"
        className="h-12 w-auto mb-8 animate-pulse"
      />
      <LoaderOne />
    </div>
  );
}
