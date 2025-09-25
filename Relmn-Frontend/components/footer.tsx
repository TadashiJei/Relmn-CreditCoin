import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "Roadmap", href: "#roadmap" },
      { name: "Founders", href: "#founder" },
      { name: "White Paper", href: "/white-paper" }, // Added White Paper to footer links
    ],
    Account: [
      { name: "Sign Up", href: "/signup" },
      { name: "Login", href: "/login" },
      { name: "Forgot Password", href: "/forgot-password" },
    ],
    Legal: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Service Level Agreement", href: "/sla" },
    ],
    Connect: [
      { name: "Support", href: "mailto:support@relmn.com" },
      { name: "Partnership", href: "mailto:partnerships@relmn.com" },
      { name: "Press", href: "mailto:press@relmn.com" },
    ],
  }

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="font-mono text-sm text-foreground/70 leading-relaxed mb-6 max-w-md">
              Relmn is reinventing global financial access through decentralized infrastructure. Connect relationships,
              money, and networks in one unified platform.
            </p>
            <div className="text-center">
              <p className="font-mono text-xs text-foreground/60 mb-2">Created by</p>
              <Link
                href="https://tomeku.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
              >
                tomeku.com
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-sentient text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-foreground/60">
              © 2025 Relmn. All rights reserved. Built on Creditcoin.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms-of-service"
                className="font-mono text-xs text-foreground/50 hover:text-foreground/70 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                className="font-mono text-xs text-foreground/50 hover:text-foreground/70 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/sla"
                className="font-mono text-xs text-foreground/50 hover:text-foreground/70 transition-colors"
              >
                SLA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
