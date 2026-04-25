import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pangaea | One World. One Market.",
  description: "One World | One Market",
};

import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DynamicFavicon } from "@/components/DynamicFavicon";
import { GlobalLoader } from "@/components/GlobalLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <GlobalLoader />
          <DynamicFavicon />
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
