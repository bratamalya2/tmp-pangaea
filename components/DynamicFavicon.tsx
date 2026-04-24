"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export function DynamicFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    // Remove all existing favicons to prevent conflicts
    document.querySelectorAll("link[rel~='icon']").forEach(link => link.remove());
    
    // Create new favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = theme === "light" ? "/images/favicon-light.png" : "/images/favicon-dark.png";
    document.head.appendChild(link);
  }, [theme]);

  return null;
}
