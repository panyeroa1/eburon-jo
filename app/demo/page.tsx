"use client"

import { useState } from "react"

const DEMO_EMAIL = "demo@eburon.ai"
const DEMO_PASSWORD = "Eburon2025"
const REDIRECT_URL = "https://eburon.ai/agent/index.html"

export default function DemoPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const emailOk = email.trim().toLowerCase() === DEMO_EMAIL.toLowerCase()
    const passOk = password === DEMO_PASSWORD

    if (emailOk && passOk) {
      setError("")
      if (typeof window !== "undefined") {
        window.location.href = REDIRECT_URL
      }
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#ffffff",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          borderRadius: "20px",
          border: "1px solid #1f2937",
          background:
            "radial-gradient(circle at top left, #1db95422, transparent 55%), radial-gradient(circle at bottom right, #0ea5e922, transparent 55%), #020617",
          padding: "24px 22px 20px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.75)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "18px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "6px",
            }}
          >
            Eburon / EY Demo
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Agent Console Login
          </h1>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "13px",
              color: "#9ca3af",
            }}
          >
            Access the Eburon Callcenter AI agent dashboard.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          style={{ display: "grid", gap: "12px", marginTop: "4px" }}
        >
          <div style={{ display: "grid", gap: "4px" }}>
            <label
              htmlFor="email"
              style={{ fontSize: "12px", color: "#d1d5db" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={DEMO_EMAIL}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                background: "#020617",
                color: "#f9fafb",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "4px" }}>
            <label
              htmlFor="password"
              style={{ fontSize: "12px", color: "#d1d5db" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={DEMO_PASSWORD}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                background: "#020617",
                color: "#f9fafb",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {error && (
            <div
              style={{
                fontSize: "12px",
                color: "#fecaca",
                background: "#451b1b",
                borderRadius: "8px",
                padding: "6px 8px",
                border: "1px solid #b91c1c",
                marginTop: "2px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "none",
              background:
                "linear-gradient(135deg, #22c55e, #16a34a, #22c55e, #0ea5e9)",
              color: "#020617",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        {/* Demo hint */}
        <div
          style={{
            marginTop: "14px",
            fontSize: "11px",
            color: "#9ca3af",
            lineHeight: 1.5,
          }}
        >
          <div>Use the demo credentials:</div>
          <div style={{ marginTop: "3px" }}>
            <code style={{ fontSize: "11px" }}>{DEMO_EMAIL}</code> /{" "}
            <code style={{ fontSize: "11px" }}>{DEMO_PASSWORD}</code>
          </div>
          <div style={{ marginTop: "8px", opacity: 0.9 }}>
            On success you&apos;ll be redirected to:
            <br />
            <code style={{ fontSize: "11px" }}>{REDIRECT_URL}</code>
          </div>
        </div>
      </div>
    </div>
  )
}