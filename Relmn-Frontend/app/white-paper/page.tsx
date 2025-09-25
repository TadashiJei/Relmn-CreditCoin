import { Pill } from "@/components/pill"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhitePaper() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <Pill className="mb-6">WHITE PAPER</Pill>
          <h1 className="text-4xl md:text-6xl font-sentient mb-8">Relmn White Paper</h1>
          <p className="text-xl font-mono text-foreground/70 leading-relaxed">
            Connecting Relationships, Money, and Networks for Global Financial Inclusion
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-[#262626]/20 border border-border p-8 mb-12 [clip-path:polygon(20px_0,calc(100%_-_20px)_0,100%_20px,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,20px_100%,0_calc(100%_-_20px),0_20px)]">
            <h2 className="text-2xl font-sentient text-primary mb-6">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <div>1. Introduction</div>
                <div>2. Vision & Mission</div>
                <div>3. Problem Statement</div>
                <div>4. The Relmn Solution</div>
                <div>5. Relmn Product Modules</div>
                <div className="ml-4 text-foreground/60">
                  <div>5.1 Relmn Bridge (RWA + Payments)</div>
                  <div>5.2 Relmn Credit (DeFi Lending)</div>
                  <div>5.3 Relmn Space (DePIN + Satellite)</div>
                </div>
              </div>
              <div className="space-y-2">
                <div>6. Technical Architecture</div>
                <div>7. Market Opportunity</div>
                <div>8. Tokenomics: The $RELMN Token</div>
                <div>9. Security & Compliance</div>
                <div>10. Roadmap & Milestones</div>
                <div>11. Team & Advisors</div>
                <div>12. Conclusion</div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">1. Introduction</h2>
            <p className="font-mono text-foreground/80 leading-relaxed mb-6">
              Relmn is a decentralized super app built on the Creditcoin blockchain, designed to power real-world
              financial inclusion by interconnecting relationships, money, and decentralized networks. Relmn tackles the
              global challenge of fragmented financial services, lack of credit access, and infrastructure gaps to
              unlock value for underserved individuals and businesses worldwide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">2. Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
                <h3 className="text-xl font-sentient text-primary mb-4">Vision</h3>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                  To become the world's leading super app empowering billions worldwide to participate fully in the
                  decentralized economy through seamless access to asset tokenization, inclusive lending, and
                  decentralized infrastructure.
                </p>
              </div>
              <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
                <h3 className="text-xl font-sentient text-primary mb-4">Mission</h3>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                  To build a unified platform that integrates real-world asset tokenization, decentralized finance, and
                  satellite infrastructure that delivers trust, accessibility, and prosperity to emerging economies and
                  beyond.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">3. Problem Statement</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-sentient mb-3">Fragmented Financial Ecosystem</h3>
                <p className="font-mono text-foreground/80 leading-relaxed">
                  Current financial services remain siloed, leaving small businesses, remote workers, and communities
                  disenfranchised with poor or no credit access and slow, costly cross-border payments.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-sentient mb-3">Infrastructure Barriers</h3>
                <p className="font-mono text-foreground/80 leading-relaxed">
                  Rural and remote regions often lack reliable internet and connectivity, hindering digital financial
                  inclusion and economic growth.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-sentient mb-3">Credit Exclusion</h3>
                <p className="font-mono text-foreground/80 leading-relaxed">
                  More than 1.7 billion people remain unbanked or underbanked due to a lack of formal credit history,
                  blocking access to even basic financial products.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">4. The Relmn Solution</h2>
            <p className="font-mono text-foreground/80 leading-relaxed mb-6">
              Relmn's unified platform integrates three core pillars: real-world asset tokenization (RWA), decentralized
              finance lending (DeFi), and decentralized physical infrastructure (DePIN). By leveraging blockchain
              technology and Creditcoin's unique credit-scoring ecosystem, Relmn delivers:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                <div className="size-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-sentient text-primary">Trust</div>
                  <div className="font-mono text-sm text-foreground/60">
                    Verifiable on-chain histories build credit profiles
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                <div className="size-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-sentient text-primary">Accessibility</div>
                  <div className="font-mono text-sm text-foreground/60">Mobile-first design for emerging markets</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                <div className="size-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-sentient text-primary">Interoperability</div>
                  <div className="font-mono text-sm text-foreground/60">Shared credit and liquidity across modules</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                <div className="size-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-sentient text-primary">Scalability</div>
                  <div className="font-mono text-sm text-foreground/60">
                    Infrastructure to onboard millions of users
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">5. Relmn Product Modules</h2>
            <div className="space-y-8">
              <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
                <h3 className="text-xl font-sentient text-primary mb-4">5.1 Relmn Bridge (RWA + Payments)</h3>
                <ul className="font-mono text-sm text-foreground/80 space-y-2">
                  <li>• Tokenizes invoices, receivables, and assets as tradable tokens</li>
                  <li>• Enables near-instant stablecoin-based cross-border payments</li>
                  <li>• AI-powered credit scoring improves financing terms and speeds</li>
                </ul>
              </div>
              <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
                <h3 className="text-xl font-sentient text-primary mb-4">5.2 Relmn Credit (DeFi Lending)</h3>
                <ul className="font-mono text-sm text-foreground/80 space-y-2">
                  <li>• Under-collateralized loans leveraging Creditcoin credit scores</li>
                  <li>• Community-backed liquidity pools reduce risks and costs</li>
                  <li>• Peer endorsements foster trust for new borrowers</li>
                </ul>
              </div>
              <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
                <h3 className="text-xl font-sentient text-primary mb-4">5.3 Relmn Space (DePIN + Satellite)</h3>
                <ul className="font-mono text-sm text-foreground/80 space-y-2">
                  <li>• Tokenizes satellite bandwidth and ground station capacity</li>
                  <li>• Facilitates financing for infrastructure to improve connectivity</li>
                  <li>• Builds credit history through infrastructure usage and payments</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">6. Technical Architecture</h2>
            <p className="font-mono text-foreground/80 leading-relaxed mb-6">
              Relmn operates on the Creditcoin blockchain using EVM-compatible smart contracts. Key architectural
              components include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Universal Credit Score",
                  desc: "Aggregates transaction, repayment, and infrastructure usage data",
                },
                { title: "Multi-Asset Wallet", desc: "Manages native tokens, stablecoins, and asset-backed tokens" },
                { title: "Decentralized Governance", desc: "DAO mechanisms enable community-led protocol upgrades" },
                { title: "Oracles & AI", desc: "For external data feeding and credit risk evaluations" },
                { title: "Mobile SDK & APIs", desc: "Facilitate easy integration and user accessibility" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]"
                >
                  <div className="font-sentient text-primary mb-2">{item.title}</div>
                  <div className="font-mono text-sm text-foreground/60">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">7. Market Opportunity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                  <div className="font-sentient text-primary">Cross-border Payments & Remittances</div>
                  <div className="font-mono text-2xl text-foreground/80">$179 trillion</div>
                  <div className="font-mono text-sm text-foreground/60">annual market volume</div>
                </div>
                <div className="bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                  <div className="font-sentient text-primary">DeFi Lending</div>
                  <div className="font-mono text-2xl text-foreground/80">$50+ billion</div>
                  <div className="font-mono text-sm text-foreground/60">total value locked with rapid growth</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                  <div className="font-sentient text-primary">Satellite & Infrastructure</div>
                  <div className="font-mono text-2xl text-foreground/80">$400 billion</div>
                  <div className="font-mono text-sm text-foreground/60">expanding connectivity market</div>
                </div>
                <div className="bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
                  <div className="font-sentient text-primary">Underbanked Populations</div>
                  <div className="font-mono text-2xl text-foreground/80">1.7 billion</div>
                  <div className="font-mono text-sm text-foreground/60">with unmet credit needs</div>
                </div>
              </div>
            </div>
            <p className="font-mono text-sm text-foreground/70 mt-6">
              Relmn targets SME financing, migrant remittances, rural connectivity, and space infrastructure funding as
              primary use cases.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">8. Tokenomics: The $RELMN Token</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-sentient text-primary mb-4">Utility</h3>
                <ul className="font-mono text-sm text-foreground/80 space-y-2">
                  <li>• Governance voting rights for protocol changes</li>
                  <li>• Payment of transaction and platform fees with discounts</li>
                  <li>• Staking rewards via liquidity provision and lending participation</li>
                  <li>• Access to premium platform features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-sentient text-primary mb-4">Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#262626]/10 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                    <span className="font-mono text-sm">Team & Advisors (vested)</span>
                    <span className="font-sentient text-primary">20%</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#262626]/10 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                    <span className="font-mono text-sm">Community & Users</span>
                    <span className="font-sentient text-primary">40%</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#262626]/10 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                    <span className="font-mono text-sm">Ecosystem Development</span>
                    <span className="font-sentient text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#262626]/10 border border-border p-3 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                    <span className="font-mono text-sm">Treasury & Reserves</span>
                    <span className="font-sentient text-primary">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">9. Security & Compliance</h2>
            <p className="font-mono text-foreground/80 leading-relaxed">
              Relmn emphasizes security through regular smart contract audits, decentralized identities for privacy, and
              KYC/AML layered compliance integrated seamlessly with Creditcoin's infrastructure to comply with global
              regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">10. Roadmap & Milestones</h2>
            <div className="space-y-4">
              {[
                { period: "Q4 2025", milestone: "Hackathon MVP launch, global demo day presentation" },
                { period: "Q1 2026", milestone: "Pilot launch in Korea-Vietnam corridor" },
                { period: "Q2 2026", milestone: "Beta release with core modules fully integrated" },
                { period: "Q3 2026", milestone: "Onboard first 50,000 users, start community governance" },
                { period: "Q4 2026", milestone: "Strategic partnerships in Latin America and Africa" },
                { period: "2027", milestone: "Global scale with multi-chain support and advanced AI credit scoring" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-[#262626]/10 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]"
                >
                  <div className="font-sentient text-primary min-w-[80px]">{item.period}</div>
                  <div className="font-mono text-sm text-foreground/80">{item.milestone}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">11. Team & Advisors</h2>
            <div className="bg-[#262626]/10 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
              <h3 className="text-xl font-sentient text-primary mb-3">Java Jay Bartolome – Founder & CEO</h3>
              <p className="font-mono text-sm text-foreground/80 mb-4">
                Blockchain and fintech expert with extensive experience in digital banking and emerging markets.
              </p>
              <p className="font-mono text-sm text-foreground/70">
                Core team includes blockchain developers, product strategists, AI experts, and business development
                professionals located across Asia and Singapore.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-sentient text-primary mb-6">12. Conclusion</h2>
            <p className="font-mono text-foreground/80 leading-relaxed mb-6">
              Relmn ushers in a new era of financial inclusion and connectivity by bridging the digital divide with
              technology that connects relationships, finances, and physical networks. Our platform empowers individuals
              and businesses worldwide with trust, access, and opportunity—leveraging the power of blockchain and
              community-driven governance to unlock a decentralized financial future.
            </p>
            <div className="text-center">
              <p className="font-mono text-sm text-foreground/60 mb-6">
                Join us at{" "}
                <Link href="/" className="text-primary hover:text-primary/80">
                  relmn.com
                </Link>{" "}
                and be part of the global financial revolution.
              </p>
              <Button size="lg" className="font-mono" asChild>
                <Link href="/#join">Join Beta Program</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
