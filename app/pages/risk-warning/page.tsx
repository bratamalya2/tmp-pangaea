import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "riskwarning",
  title: "Risk Warning",
  subtitle:
    "A concise warning for clients considering leveraged trading, market exposure and speculative instruments.",
  eyebrow: "Client Warning",
  image: "/images/commodities_trading.png",
  imageAlt: "Market risk and commodity trading screens",
  stats: [
    ["Risk", "High level"],
    ["Loss", "Capital at risk"],
    ["Leverage", "Amplified exposure"],
    ["Review", "Before trading"],
  ],
  highlights: [
    "Do not trade money you cannot afford to lose",
    "Understand the instrument before opening positions",
    "Use risk controls and position sizing",
    "Seek independent advice if unsure",
  ],
  sections: [
    {
      title: "High-Risk Products",
      body:
        "Forex, CFDs, commodities, indices, shares and crypto-related products can be speculative and volatile. They may not be suitable for every client.",
    },
    {
      title: "Capital Loss",
      body:
        "Trading can result in partial or total loss of invested capital. Market conditions can change faster than expected and affect account equity.",
    },
    {
      title: "Leverage Risk",
      body:
        "Leverage allows larger exposure than deposited margin. It can magnify losses and may result in rapid margin calls or close-outs.",
    },
    {
      title: "Market and Execution Risk",
      body:
        "Spreads, slippage, gaps, low liquidity, platform delays and rejected orders may occur, especially during volatile market periods.",
    },
    {
      title: "Suitability",
      body:
        "Before trading, consider your objectives, experience, financial position, risk appetite and ability to absorb losses.",
    },
    {
      title: "Education and Advice",
      body:
        "Education, calculators, calendars or platform tools do not remove trading risk. Seek independent advice if you do not fully understand a product.",
    },
  ],
  finalTitle: "Trade only after understanding the warning.",
  finalText:
    "Use demo practice, review risk documents and contact support if any product, margin or platform condition is unclear.",
};

export default function RiskWarningPage() {
  return <LegalPage config={config} />;
}
