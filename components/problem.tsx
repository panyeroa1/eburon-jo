import { AlertCircle, Zap, Link2 } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Expensive",
      description:
        "Per-token LLM fees plus stacked ASR→LLM→TTS pipeline drive high GPU usage, streaming overhead, and retries.",
    },
    {
      icon: Zap,
      title: "Robotic",
      description:
        "Lacking grounded memory, prosody, and turn-taking, replies feel generic, hesitant, and untrustworthy.",
    },
    {
      icon: Link2,
      title: "Hard to Integrate",
      description:
        "Fragmented telephony, ASR/NLU/TTS, and analytics ecosystems force brittle glue code, vendor lock-in, and heavy security/data mapping.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            The Problem with Current AI Voice Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voice remains broken in customer service. Expensive, robotic, and hard to integrate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 bg-card/50 border border-border/30 rounded-lg hover:border-accent/50 hover:bg-card/80 transition duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
