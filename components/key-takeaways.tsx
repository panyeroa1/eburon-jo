export function KeyTakeaways() {
  const takeaways = [
    {
      title: "Edge Intelligence",
      description:
        "Deploy high-intelligence AI at the edge—in data centers, branches, vehicles, and consumer devices—without relying on hyperscale cloud.",
    },
    {
      title: "Energy & Cost Savings",
      description:
        "Reduce electricity consumption, OpEx, and carbon footprint through local processing and optimized inference.",
    },
    {
      title: "Predictable Scaling",
      description:
        "Expand capacity by adding lightweight edge nodes. No token meters, flat usage fees, and no surprise bills.",
    },
    {
      title: "Fast Onboarding",
      description:
        "Built-in conversational agent guides setup, data connection, and policy configuration. Go from pilot to production in days.",
    },
    {
      title: "Human-Level Conversations",
      description:
        "Understand nuance, context, and tone across 120 languages. Pass Turing-style evaluations with higher containment rates.",
    },
    {
      title: "Voice-Driven Development",
      description:
        "Eburon Studio enables production-ready app generation in minutes. No coding required—describe workflows in natural language.",
    },
    {
      title: "Security & Privacy",
      description:
        "Data never leaves your environment. On-premises deployment, proprietary DYNCA authentication, and post-quantum resilience.",
    },
    {
      title: "Move Faster with Less Risk",
      description: "Deploy sovereign, secure, and intelligent AI solutions that scale without friction or compromise.",
    },
  ]

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Key Takeaways</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why Eburon is the future of conversational AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {takeaways.map((takeaway, index) => (
            <div
              key={index}
              className="p-8 bg-card/50 border border-border/30 rounded-lg hover:border-accent/50 hover:bg-card/80 transition duration-300 group"
            >
              <h3 className="text-lg font-bold text-accent mb-3 group-hover:text-accent/80 transition">
                {takeaway.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{takeaway.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
