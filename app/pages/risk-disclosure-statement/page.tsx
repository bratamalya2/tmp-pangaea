import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "riskdisclosurestatement",
  title: "Risk Disclosure Statement",
  subtitle:
    "A clear overview of trading risks, leveraged products, market volatility and client responsibility.",
  eyebrow: "Trading Risk",
  image: "/images/crypto_trading.png",
  imageAlt: "Volatile trading market screens and risk controls",
  stats: [
    ["High", "Trading risk"],
    ["Leverage", "Can magnify losses"],
    ["Volatile", "Market movement"],
    ["Capital", "At risk"],
  ],
  highlights: [
    "Losses can exceed expectations",
    "Leverage increases exposure",
    "Execution can be affected by volatility",
    "Past performance is not a guarantee",
  ],
  sections: [
    {
      title: "Trading Involves Risk",
      body:
        "Trading forex, CFDs, crypto references and other leveraged instruments involves significant risk and may not be suitable for all clients.",
    },
    {
      title: "Leverage and Margin",
      body:
        "Leverage can increase both gains and losses. Small market movements may create large account impacts and margin close-out risk.",
      points: ["Monitor margin levels", "Use appropriate position size", "Understand stop-out rules"],
    },
    {
      title: "Market Volatility",
      body:
        "Prices can move quickly around news events, market opens, low liquidity, economic releases and unexpected global developments.",
    },
    {
      title: "Execution and Pricing",
      body:
        "Orders may be affected by spreads, slippage, gaps, liquidity, platform latency, rejected orders or fast-changing market conditions.",
    },
    {
      title: "No Guaranteed Outcome",
      body:
        "Charts, education, analysis, examples, tools and historical performance do not guarantee future results or reduce the need for risk management.",
    },
    {
      title: "Client Responsibility",
      body:
        "You should trade only with funds you can afford to lose and seek independent advice if you do not understand the risks.",
    },
  ],
  finalTitle: "Understand the risk before trading.",
  finalText:
    "Review the risk statement, use demo practice and contact support before live trading if any product risk is unclear.",
};

export default function RiskDisclosureStatementPage() {
  return <LegalPage config={config} />;
}
