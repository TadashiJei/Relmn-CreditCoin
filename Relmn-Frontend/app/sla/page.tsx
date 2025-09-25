import Link from "next/link"
import { Pill } from "@/components/pill"
import { Logo } from "@/components/logo"

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <Pill className="mb-4">LEGAL</Pill>
            <h1 className="text-4xl md:text-5xl font-sentient mb-4">Service Level Agreement</h1>
            <p className="font-mono text-foreground/70">Last updated: January 2025</p>
          </div>

          <div className="bg-[#262626]/20 border border-border p-8 md:p-12 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">1. Service Availability</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Relmn commits to the following uptime targets:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#262626]/30 border border-border p-4 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                      <h3 className="font-sentient text-lg mb-2">Platform Uptime</h3>
                      <p className="font-mono text-2xl text-primary mb-1">99.9%</p>
                      <p className="font-mono text-xs text-foreground/60">Monthly availability target</p>
                    </div>
                    <div className="bg-[#262626]/30 border border-border p-4 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                      <h3 className="font-sentient text-lg mb-2">API Response Time</h3>
                      <p className="font-mono text-2xl text-primary mb-1">&lt;200ms</p>
                      <p className="font-mono text-xs text-foreground/60">95th percentile response time</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">2. Transaction Processing</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sentient text-lg mb-2">Cross-Border Payments</h3>
                      <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-1 ml-6">
                        <li>• Settlement time: &lt;2 minutes (95% of transactions)</li>
                        <li>• Transaction fees: 0.5-1% of transaction value</li>
                        <li>• Success rate: &gt;99.5%</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-sentient text-lg mb-2">Lending Operations</h3>
                      <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-1 ml-6">
                        <li>• Loan approval: &lt;24 hours for standard applications</li>
                        <li>• Fund disbursement: &lt;1 hour after approval</li>
                        <li>• Interest rate calculation: Real-time updates</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">3. Support Response Times</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#262626]/30 border border-border p-4 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                      <h3 className="font-sentient text-base mb-2 text-red-400">Critical Issues</h3>
                      <p className="font-mono text-xl text-primary mb-1">&lt;1 hour</p>
                      <p className="font-mono text-xs text-foreground/60">Platform outages, security breaches</p>
                    </div>
                    <div className="bg-[#262626]/30 border border-border p-4 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                      <h3 className="font-sentient text-base mb-2 text-yellow-400">High Priority</h3>
                      <p className="font-mono text-xl text-primary mb-1">&lt;4 hours</p>
                      <p className="font-mono text-xs text-foreground/60">Transaction failures, account issues</p>
                    </div>
                    <div className="bg-[#262626]/30 border border-border p-4 [clip-path:polygon(8px_0,calc(100%_-_8px)_0,100%_8px,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,8px_100%,0_calc(100%_-_8px),0_8px)]">
                      <h3 className="font-sentient text-base mb-2 text-green-400">Standard</h3>
                      <p className="font-mono text-xl text-primary mb-1">&lt;24 hours</p>
                      <p className="font-mono text-xs text-foreground/60">General inquiries, feature requests</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">4. Security Commitments</h2>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• 24/7 security monitoring and incident response</li>
                    <li>• Quarterly security audits by third-party firms</li>
                    <li>• Multi-signature wallet protection for all funds</li>
                    <li>• Insurance coverage for platform-related losses</li>
                    <li>• Immediate notification of security incidents</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">5. Maintenance Windows</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    Scheduled maintenance will be performed:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• During low-traffic periods (typically 2-6 AM UTC)</li>
                    <li>• With 48-hour advance notice for major updates</li>
                    <li>• Maximum 4 hours duration for planned maintenance</li>
                    <li>• Emergency maintenance as needed for security</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">6. Service Credits</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mb-4">
                    If we fail to meet our SLA commitments:
                  </p>
                  <ul className="font-mono text-sm text-foreground/80 leading-relaxed space-y-2 ml-6">
                    <li>• 99.0-99.9% uptime: 10% service credit</li>
                    <li>• 95.0-99.0% uptime: 25% service credit</li>
                    <li>• &lt;95.0% uptime: 50% service credit</li>
                  </ul>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed mt-4">
                    Service credits are applied to your next billing cycle automatically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sentient mb-4 text-primary">7. Contact Information</h2>
                  <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                    For SLA-related questions or to report service issues, contact us at support@relmn.com
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
