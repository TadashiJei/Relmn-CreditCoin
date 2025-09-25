import Link from "next/link"
import { Pill } from "@/components/pill"
import { Logo } from "@/components/logo"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <Pill className="mb-4">LEGAL</Pill>
            <h1 className="text-4xl md:text-5xl font-sentient mb-4">Terms of Service</h1>
            <p className="font-mono text-foreground/70">Last updated: January 2025</p>
          </div>

          <div className="bg-[#262626]/20 border border-border p-8 md:p-12 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">1. Acceptance of Terms</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    By accessing and using Relmn ("the Platform"), you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    Relmn is a decentralized finance platform that provides real-world asset tokenization, lending
                    services, and satellite infrastructure connectivity. These terms govern your use of all Relmn
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">2. Platform Services</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Relmn provides three core services:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>
                      • <strong>Relmn Bridge:</strong> Invoice and asset tokenization with cross-border payment
                      capabilities
                    </li>
                    <li>
                      • <strong>Relmn Credit:</strong> Decentralized lending and borrowing services
                    </li>
                    <li>
                      • <strong>Relmn Space:</strong> Satellite bandwidth marketplace and infrastructure financing
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">3. User Responsibilities</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Users are responsible for:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• Maintaining the security of their wallet and private keys</li>
                    <li>• Providing accurate information during KYC/AML processes</li>
                    <li>• Complying with local laws and regulations</li>
                    <li>• Understanding the risks associated with DeFi and cryptocurrency transactions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">4. Risk Disclosure</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    DeFi and cryptocurrency investments carry significant risks including but not limited to:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• Volatility in cryptocurrency values</li>
                    <li>• Smart contract vulnerabilities</li>
                    <li>• Regulatory changes</li>
                    <li>• Loss of funds due to user error</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">5. Limitation of Liability</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    Relmn shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
                    damages resulting from your use of the platform. Users acknowledge that they use the platform at
                    their own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">6. Modifications</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    Relmn reserves the right to modify these terms at any time. Users will be notified of significant
                    changes through the platform or email notifications.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">7. Contact Information</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    For questions about these Terms of Service, please contact us at legal@relmn.com
                  </p>
                </section>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="font-mono text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
