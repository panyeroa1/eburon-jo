import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { UseCases } from "@/components/use-cases"
import { KeyTakeaways } from "@/components/key-takeaways"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <UseCases />
      <KeyTakeaways />
      <Footer />
    </main>
  )
}
