import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="https://eburon.vercel.app/logo-dark.png"
                alt="Eburon"
                width={140}
                height={50}
                className="w-auto h-6"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              LLM Studio for Conversational Agents. Rooted in Belgium. Built for the World.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Studio
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Eburon. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
