import Link from "next/link"
import { Pill } from "@/components/pill"
import { Logo } from "@/components/logo"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <Pill className="mb-4">LEGAL</Pill>
            <h1 className="text-4xl md:text-5xl font-sentient mb-4">Privacy Policy</h1>
            <p className="font-mono text-foreground/70">Last updated: January 2025</p>
          </div>

          <div className="bg-[#262626]/20 border border-border p-8 md:p-12 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">1. Information We Collect</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Relmn collects information necessary to provide our decentralized finance services:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>
                      • <strong>Identity Information:</strong> Name, email, phone number for KYC/AML compliance
                    </li>
                    <li>
                      • <strong>Financial Information:</strong> Transaction history, credit scores, asset valuations
                    </li>
                    <li>
                      • <strong>Technical Information:</strong> Wallet addresses, device information, IP addresses
                    </li>
                    <li>
                      • <strong>Usage Data:</strong> Platform interactions, feature usage, performance metrics
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">2. How We Use Your Information</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Your information is used to:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• Provide and improve our platform services</li>
                    <li>• Comply with regulatory requirements (KYC/AML)</li>
                    <li>• Calculate credit scores and assess lending risks</li>
                    <li>• Prevent fraud and ensure platform security</li>
                    <li>• Communicate important updates and notifications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">3. Data Protection & Security</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Relmn implements industry-standard security measures:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• End-to-end encryption for sensitive data</li>
                    <li>• Decentralized identity management</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-signature wallet protection</li>
                    <li>• GDPR and CCPA compliance frameworks</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">4. Data Sharing</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• Regulatory authorities when required by law</li>
                    <li>• Service providers who assist in platform operations</li>
                    <li>• Creditcoin network for credit scoring purposes</li>
                    <li>• Community validators for lending risk assessment</li>
                  </ul>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mt-4">
                    We never sell your personal information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">5. Your Rights</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request data deletion (subject to regulatory requirements)</li>
                    <li>• Opt-out of non-essential communications</li>
                    <li>• Data portability where technically feasible</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">6. Cookies & Tracking</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    Relmn uses cookies and similar technologies to improve user experience, analyze platform usage, and
                    ensure security. You can manage cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">7. Contact Us</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    For privacy-related questions or to exercise your rights, contact us at privacy@relmn.com
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
