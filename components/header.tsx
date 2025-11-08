"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="https://eburon.vercel.app/logo-dark.png"
              alt="Eburon"
              width={140}
              height={50}
              className="w-auto h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-muted-foreground hover:text-foreground transition text-sm">
              Solution
            </a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition text-sm">
              Use Cases
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition text-sm">
              Benefits
            </a>
            <a href="/demo" className="text-muted-foreground hover:text-foreground transition text-sm">
              Ye Demo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#solution" className="text-muted-foreground hover:text-foreground transition text-sm">
              Solution
            </a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition text-sm">
              Use Cases
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition text-sm">
              Benefits
            </a>
            <a href="/demo" className="text-muted-foreground hover:text-foreground transition text-sm">
              Login
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
