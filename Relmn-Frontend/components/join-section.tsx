import Link from "next/link"
import { Pill } from "./pill"
import { Button } from "./ui/button"

export function JoinSection() {
  return (
    <section id="join" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Pill className="mb-6">JOIN BETA</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Ready to <i className="font-light">transform</i> finance?
          </h2>
          <p className="font-mono text-foreground/70 leading-relaxed mb-12">
            Be among the first to experience the future of decentralized finance. Join our beta program and help shape
            the platform that will connect relationships, money, and networks globally.
          </p>

          <div className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(20px_0,calc(100%_-_20px)_0,100%_20px,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,20px_100%,0_calc(100%_-_20px),0_20px)] mb-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-sentient text-primary mb-2">Early Access</div>
                <div className="font-mono text-sm text-foreground/60">Beta features</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-sentient text-primary mb-2">$RELMN</div>
                <div className="font-mono text-sm text-foreground/60">Token rewards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-sentient text-primary mb-2">Community</div>
                <div className="font-mono text-sm text-foreground/60">Shape the future</div>
              </div>
            </div>

            <Button size="lg" className="font-mono" asChild>
              <Link href="/signup">Join Beta Program</Link>
            </Button>
          </div>

          <p className="font-mono text-sm text-foreground/50">Limited spots available • No commitment required</p>
        </div>
      </div>
    </section>
  )
}
