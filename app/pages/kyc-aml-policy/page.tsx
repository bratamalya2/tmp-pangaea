import { LegalPage, type LegalPageConfig } from "../_components/LegalPage";

const config: LegalPageConfig = {
  id: "kycamlpolicy",
  title: "KYC & AML Policy",
  subtitle:
    "How identity checks, anti-money-laundering controls and account reviews support safer client onboarding.",
  eyebrow: "Compliance Controls",
  image: "/images/stocks_trading_floor.png",
  imageAlt: "Compliance and account verification operations",
  stats: [
    ["KYC", "Identity review"],
    ["AML", "Monitoring controls"],
    ["Secure", "Document handling"],
    ["Ongoing", "Account review"],
  ],
  highlights: [
    "Identity and address verification",
    "Payment source review where required",
    "Transaction monitoring",
    "Enhanced due diligence when needed",
  ],
  sections: [
    {
      title: "Purpose of KYC and AML",
      body:
        "KYC and AML controls help verify clients, prevent misuse of services, detect suspicious activity and meet legal or regulatory expectations.",
    },
    {
      title: "Verification Requirements",
      body:
        "Clients may be asked to provide identity documents, proof of address, payment method evidence or other supporting information.",
      points: ["Proof of identity", "Proof of address", "Source of funds or payment ownership"],
    },
    {
      title: "Screening and Monitoring",
      body:
        "Account activity may be screened or monitored for fraud, sanctions, unusual behavior, payment inconsistencies or other risk indicators.",
    },
    {
      title: "Enhanced Due Diligence",
      body:
        "Additional review may be required for higher-risk profiles, unusual transactions, large transfers, mismatched payment methods or regulatory triggers.",
    },
    {
      title: "Account Restrictions",
      body:
        "Deposits, withdrawals, trading access or account updates may be delayed, restricted or declined while verification or review is pending.",
    },
    {
      title: "Client Cooperation",
      body:
        "Clients must provide accurate, complete and current information. Failure to cooperate may affect account access and service availability.",
    },
  ],
  finalTitle: "Need help with verification?",
  finalText:
    "Contact support if you need guidance on documents, account review or compliance-related requests.",
};

export default function KycAmlPolicyPage() {
  return <LegalPage config={config} />;
}
