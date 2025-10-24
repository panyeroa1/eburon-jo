import { Phone, ShoppingCart, Cpu, Zap } from "lucide-react"
import Image from "next/image"

export function UseCases() {
  const useCases = [
    {
      icon: Phone,
      title: "Customer Support",
      description: "Halve support costs while lifting CSAT with intelligent, empathetic agent conversations.",
    },
    {
      icon: ShoppingCart,
      title: "Conversational Commerce",
      description:
        "Enable natural, context-aware shopping experiences that drive higher conversion and customer satisfaction.",
    },
    {
      icon: Cpu,
      title: "Humanoid Training",
      description: "Power on-device dialogue and task execution for robotics with natural language understanding.",
    },
    {
      icon: Zap,
      title: "Enterprise Automation",
      description: "Automate complex workflows and business processes with human-level reasoning and reliability.",
    },
  ]

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Use Cases</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy Eburon across your organization to unlock new possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8 bg-card/50 border border-border/30 rounded-lg hover:border-accent/50 hover:bg-card/80 transition duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{useCase.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative h-96 rounded-xl overflow-hidden border border-border/30 shadow-2xl">
          <Image
            src="/customer-support-call-center--e-commerce-chatbot--.jpg"
            alt="Eburon Use Cases"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
