import { Pill } from "./pill"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">ABOUT RELMN</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Reinventing <i className="font-light">global</i> financial access
          </h2>
          <p className="font-mono text-foreground/80 max-w-4xl mx-auto text-lg leading-relaxed">
            Relmn is reinventing global financial access. As a decentralized super app, we connect relationships, money,
            and networks—empowering everyone to participate fully in the digital economy. Using Creditcoin at our core,
            Relmn makes financing, payments, and connectivity seamless and secure for individuals, SMEs, and communities
            worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-sentient mb-6">Our Mission</h3>
            <p className="font-mono text-foreground/70 leading-relaxed mb-6">
              Created by{" "}
              <a
                href="https://tomeku.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Tomeku
              </a>
              , Relmn brings together world-class expertise in blockchain, finance, and infrastructure from around the
              globe.
            </p>
            <p className="font-mono text-foreground/70 leading-relaxed">
              Our mission is to unlock financial potential for those excluded by legacy systems—starting with real-world
              asset tokenization, inclusive lending, and next-generation payment rails.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#262626]/30 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
              <div className="text-3xl font-sentient text-primary mb-2">$179T</div>
              <div className="font-mono text-sm text-foreground/60">Cross-border payments market</div>
            </div>
            <div className="bg-[#262626]/30 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
              <div className="text-3xl font-sentient text-primary mb-2">1.7B</div>
              <div className="font-mono text-sm text-foreground/60">Unbanked individuals globally</div>
            </div>
            <div className="bg-[#262626]/30 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
              <div className="text-3xl font-sentient text-primary mb-2">$50B</div>
              <div className="font-mono text-sm text-foreground/60">DeFi lending sector</div>
            </div>
            <div className="bg-[#262626]/30 border border-border p-6 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]">
              <div className="text-3xl font-sentient text-primary mb-2">$400B</div>
              <div className="font-mono text-sm text-foreground/60">Satellite services market</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
