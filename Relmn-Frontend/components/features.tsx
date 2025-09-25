import { Pill } from "./pill"

export function Features() {
  const features = [
    {
      title: "Relmn Bridge",
      subtitle: "RWA & Payments",
      description:
        "Transform invoices, receivables, and physical assets into secure digital tokens. Send and receive stablecoin payments instantly with minimal fees across borders.",
      highlights: ["Invoice & Asset Tokenization", "Global Payments", "AI Credit Scoring"],
      technicalSpecs: [
        "EVM-compatible smart contracts",
        "Chainlink oracle integration",
        "0.5-1% transaction fees",
        "Cross-border settlement in <2 minutes",
      ],
    },
    {
      title: "Relmn Credit",
      subtitle: "DeFi Lending",
      description:
        "Borrow and lend with under-collateralized loans, powered by Creditcoin's reputation engine. Get supported by local validators and global capital.",
      highlights: ["DeFi Lending", "Community Liquidity Pools", "Social Credit"],
      technicalSpecs: [
        "Under-collateralized loans up to 80% LTV",
        "2-5% lending spreads",
        "Community-backed risk assessment",
        "Mobile-first lending interface",
      ],
    },
    {
      title: "Relmn Space",
      subtitle: "Satellite Infrastructure",
      description:
        "Trade ground station capacity and connectivity as tokens, lowering barriers for remote users. Finance satellite and connectivity projects using Relmn's credit platform.",
      highlights: ["Satellite Bandwidth Marketplace", "Infrastructure Financing", "Integrated Networks"],
      technicalSpecs: [
        "Tokenized bandwidth trading",
        "Ground station capacity marketplace",
        "1-3% infrastructure fees",
        "Satellite project financing",
      ],
    },
  ]

  const platformBenefits = [
    {
      title: "Multi-Asset Wallet",
      description: "Manage stablecoins, tokenized assets, and network credits in one unified interface",
    },
    {
      title: "Universal Governance",
      description: "Community-driven platform updates and investment decisions via $RELMN token",
    },
    {
      title: "Mobile First",
      description: "Designed to deliver full-featured access on any smartphone globally",
    },
    {
      title: "Security & Privacy",
      description: "Built-in KYC/AML using decentralized identities and encrypted records",
    },
  ]

  const marketStats = [
    { label: "Cross-border Payments", value: "$179T", description: "Annual volume" },
    { label: "Global Remittances", value: "$700B+", description: "Annually" },
    { label: "DeFi Lending", value: "$50B+", description: "Total value locked" },
    { label: "Satellite Services", value: "$400B+", description: "Market growing 8% annually" },
  ]

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">KEY FEATURES</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Three platforms, <i className="font-light">one</i> ecosystem
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-sentient mb-2">{feature.title}</h3>
                <div className="font-mono text-sm text-primary mb-4">{feature.subtitle}</div>
                <p className="font-mono text-foreground/70 leading-relaxed text-sm mb-6">{feature.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-primary shadow-glow shadow-primary/50" />
                    <span className="font-mono text-sm text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border/30 pt-4">
                <h4 className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">Technical Specs</h4>
                <div className="space-y-2">
                  {feature.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="font-mono text-xs text-foreground/60">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-sentient mb-4">Platform Benefits</h3>
            <p className="font-mono text-foreground/70 max-w-2xl mx-auto">
              Built for global accessibility with enterprise-grade security and community governance
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {platformBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#262626]/30 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]"
              >
                <h4 className="font-sentient text-lg mb-2">{benefit.title}</h4>
                <p className="font-mono text-sm text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Pill className="mb-6">MARKET OPPORTUNITY</Pill>
          <h3 className="text-3xl font-sentient mb-8">Addressing Global Financial Infrastructure</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#262626]/20 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]"
              >
                <div className="text-2xl font-sentient text-primary mb-2">{stat.value}</div>
                <div className="font-mono text-sm font-medium mb-1">{stat.label}</div>
                <div className="font-mono text-xs text-foreground/60">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
