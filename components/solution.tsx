import { Brain, Zap, Plug, Cpu, Leaf, Lock } from "lucide-react"
import Image from "next/image"

export function Solution() {
  const features = [
    {
      icon: Brain,
      title: "Superior Intelligence",
      description:
        "Human-grade conversations with grounded memory, natural prosody, and intelligent turn-taking across 120 languages.",
    },
    {
      icon: Zap,
      title: "Cost Efficiency",
      description:
        "Proprietary LLM cuts inference costs by 3–5× with NoTokens pricing model for predictable, affordable scaling.",
    },
    {
      icon: Plug,
      title: "Plug-and-Play Integration",
      description:
        "Go live fast without rewiring your stack. Built-in conversational agent guides setup from pilot to production in days.",
    },
    {
      icon: Cpu,
      title: "Edge Deployment",
      description:
        "Run models locally on small-footprint data centers, smartphones, and edge devices for ultra-low latency and sovereignty.",
    },
    {
      icon: Leaf,
      title: "Energy Efficient",
      description:
        "Substantial reduction in electricity consumption and carbon footprint through local processing and optimized inference.",
    },
    {
      icon: Lock,
      title: "Security First",
      description:
        "Data never leaves your environment. On-premises deployment, proprietary DYNCA authentication, and post-quantum resilience.",
    },
  ]

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden border border-border/30 shadow-2xl">
            <Image
              src="/llm-technology-stack-architecture-diagram-with-neu.jpg"
              alt="Eburon Technology Stack"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Our Breakthrough</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eburon's proprietary LLM delivers superior, human-grade conversations while cutting inference costs
              dramatically. Deploy at the edge with complete sovereignty and security.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-card/50 border border-border/30 rounded-lg hover:border-accent/50 hover:bg-card/80 transition duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
