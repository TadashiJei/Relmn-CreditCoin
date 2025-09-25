import { Pill } from "./pill"

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      timeline: "Q1 2025",
      status: "In Progress",
      features: [
        "Core MVP with basic functionality",
        "Creditcoin integration",
        "Basic tokenization features",
        "Mobile wallet prototype",
      ],
    },
    {
      phase: "Phase 2",
      title: "Platform Launch",
      timeline: "Q2 2025",
      status: "Planned",
      features: [
        "Advanced lending features",
        "Pilot market deployments",
        "Community governance launch",
        "Cross-border payment rails",
      ],
    },
    {
      phase: "Phase 3",
      title: "Global Expansion",
      timeline: "Q3-Q4 2025",
      status: "Planned",
      features: [
        "Full platform launch",
        "Satellite infrastructure integration",
        "Multi-market scaling",
        "Enterprise partnerships",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16">
          <Pill className="mb-6">ROADMAP</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Building the <i className="font-light">future</i> of finance
          </h2>
          <p className="font-mono text-foreground/70 max-w-2xl mx-auto">
            Our strategic development phases to deliver a comprehensive Web3 financial infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[#262626]/20 border border-border p-8 [clip-path:polygon(16px_0,calc(100%_-_16px)_0,100%_16px,100%_calc(100%_-_16px),calc(100%_-_16px)_100%,16px_100%,0_calc(100%_-_16px),0_16px)] relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-sentient mb-1">{phase.phase}</h3>
                  <div className="font-mono text-sm text-primary">{phase.title}</div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-mono ${
                    phase.status === "In Progress"
                      ? "bg-primary/20 text-primary"
                      : "bg-foreground/10 text-foreground/60"
                  }`}
                >
                  {phase.status}
                </div>
              </div>

              <div className="font-mono text-sm text-foreground/60 mb-6">{phase.timeline}</div>

              <div className="space-y-3">
                {phase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="size-2 rounded-full bg-primary shadow-glow shadow-primary/50 mt-2 flex-shrink-0" />
                    <span className="font-mono text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
