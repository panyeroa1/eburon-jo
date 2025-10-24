import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              LLM Studio for Conversational Agents
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Human-Quality Conversations at <span className="text-accent">3–5× Lower Cost</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto text-balance">
            Rooted in Belgium. Built for the World. Deploy advanced conversational AI at the edge with plug-and-play
            integration and predictable NoTokens pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition duration-300 transform hover:scale-105">
              Start Building
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card/50 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-xs mb-4 uppercase tracking-wide">
              Trusted by forward-thinking enterprises
            </p>
            <div className="flex flex-wrap gap-8 items-center justify-center opacity-60">
              <div className="text-foreground font-semibold text-sm">Enterprise Client 1</div>
              <div className="text-foreground font-semibold text-sm">Enterprise Client 2</div>
              <div className="text-foreground font-semibold text-sm">Enterprise Client 3</div>
            </div>
          </div>
        </div>

        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden border border-border/30 shadow-2xl">
          <Image
            src="/ai-conversational-agent-interface-with-voice-waves.jpg"
            alt="Eburon AI Conversational Agent"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
