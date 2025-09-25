import Link from "next/link"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { PartnersSection } from "./partners-section"

export function GetStarted() {
  const steps = [
    "Create your digital wallet",
    "Tokenize your assets",
    "Apply for financing",
    "Explore satellite-powered payments",
    "Join platform governance with $RELMN",
  ]

  return (
    <section id="get-started" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">GET STARTED</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Join the future of <i className="font-light">global</i> finance
          </h2>
          <p className="font-mono text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            relmn.com is the official gateway to the Relmn decentralized finance platform. Connect your accounts,
            tokenize your business assets, and participate in the new economy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#262626]/20 border border-border p-4 [clip-path:polygon(12px_0,calc(100%_-_12px)_0,100%_12px,100%_calc(100%_-_12px),calc(100%_-_12px)_100%,12px_100%,0_calc(100%_-_12px),0_12px)]"
              >
                <div className="flex items-center justify-center size-8 rounded-full bg-primary text-black font-mono text-sm font-bold">
                  {index + 1}
                </div>
                <span className="font-mono text-foreground/80">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-mono" asChild>
              <Link href="/signup">Join Beta Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono border-border text-foreground hover:bg-primary hover:text-black bg-transparent"
              asChild
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          <div className="relative">
            <p className="font-mono text-sm text-foreground/60 relative z-10 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md inline-block">
              Sign up. Connect. Prosper.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block bg-[#262626]/30 border border-border p-6 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)]">
            <div className="font-mono text-sm text-foreground/60 mb-2">Official Platform</div>
            <div className="text-xl font-sentient text-primary">relmn.com</div>
          </div>
        </div>

        <PartnersSection />
      </div>
    </section>
  )
}
