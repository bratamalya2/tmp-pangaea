import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "privacypolicy",
  title: "Privacy Policy",
  subtitle:
    "How Pangaea handles personal, account, verification and website data across client and visitor workflows.",
  eyebrow: "Data Protection",
  image: "/images/stocks_global_market.png",
  imageAlt: "Secure financial data and market operations desk",
  stats: [
    ["Secure", "Data handling"],
    ["KYC", "Verification support"],
    ["Client", "Privacy rights"],
    ["Policy", "Review required"],
  ],
  highlights: [
    "Personal and contact information",
    "Account and verification records",
    "Platform and website usage data",
    "Marketing preference controls",
  ],
  sections: [
    {
      title: "Information We Collect",
      body:
        "We may collect information provided during registration, support conversations, account verification, platform access and website interactions.",
      points: ["Identity and contact details", "KYC and address documents", "Device, browser and usage signals"],
    },
    {
      title: "How Information Is Used",
      body:
        "Information is used to operate accounts, complete verification checks, provide support, improve services, manage risk and meet legal or compliance obligations.",
      points: ["Account administration", "Fraud and AML monitoring", "Service and platform improvement"],
    },
    {
      title: "Sharing and Processing",
      body:
        "Data may be shared with payment providers, technology partners, compliance vendors, professional advisers or authorities where required to deliver services or meet obligations.",
    },
    {
      title: "Retention and Security",
      body:
        "Records are retained for operational, legal, risk and compliance purposes. Controls are used to protect data from unauthorized access, loss or misuse.",
      points: ["Restricted access", "Encrypted workflows where applicable", "Retention aligned to compliance needs"],
    },
    {
      title: "Client Choices",
      body:
        "Clients may request access, correction or review of personal information subject to account, regulatory, security and identity verification requirements.",
    },
    {
      title: "Updates to This Policy",
      body:
        "This policy may be updated as products, regulations, vendors or data practices change. Continued use of the website or services means the latest policy applies.",
    },
  ],
  finalTitle: "Have a privacy question?",
  finalText:
    "Contact support if you need help understanding data handling, account records or verification information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage config={config} />;
}
