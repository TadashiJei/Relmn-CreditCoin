import Link from "next/link"
import { Pill } from "./pill"

export function PartnersSection() {
  const partners = [
    {
      name: "CreditCoin",
      url: "https://creditcoin.org/",
      description: "Blockchain infrastructure for real-world credit",
    },
    {
      name: "Tomeku",
      url: "https://tomeku.com",
      description: "Digital innovation and development",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <Pill className="mb-6">OFFICIAL PARTNERS</Pill>
          <h2 className="text-3xl md:text-4xl font-sentient mb-6">
            Trusted <i className="font-light">partnerships</i>
          </h2>
          <p className="font-mono text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Building the future of decentralized finance with industry-leading partners who share our vision for global
            financial inclusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#262626]/20 border border-border p-8 [clip-path:polygon(20px_0,calc(100%_-_20px)_0,100%_20px,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,20px_100%,0_calc(100%_-_20px),0_20px)] hover:bg-[#262626]/30 transition-colors duration-300"
            >
              <div className="text-center">
                <h3 className="text-2xl font-sentient text-primary mb-4 group-hover:text-primary/80 transition-colors">
                  {partner.name}
                </h3>
                <p className="font-mono text-sm text-foreground/60 leading-relaxed">{partner.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
