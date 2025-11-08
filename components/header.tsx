"use client"

import { useState } from "react"

const DEMO_EMAIL = "demo@eburon.ai"
const DEMO_PASSWORD = "Eburon2025"
const REDIRECT_URL = "/portal"

export default function Header() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: any) => {
    e.preventDefault()

    const emailOk = email.trim().toLowerCase() === DEMO_EMAIL.toLowerCase()
    const passOk = password === DEMO_PASSWORD

    if (emailOk && passOk) {
      setError("")
      if (typeof window !== "undefined") {
        window.location.href = REDIRECT_URL
      }
    } else {
      setError("Invalid username or password.")
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        padding: "16px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "360px",
          background: "#141414",
          border: "1px solid #2a2a2a",
          borderRadius: "16px",
          padding: "32px 28px",
          boxShadow: "0 20px 45px rgba(0,0,0,.6)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "22px",
            fontWeight: 600,
          }}
        >
          Eburon Login
        </h2>

        <div style={{ display: "grid", gap: "12px", marginTop: "18px" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter username"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#0f0f0f",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#0f0f0f",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          {error && (
            <div
              style={{
                color: "#ff6b6b",
                fontSize: "12px",
                textAlign: "center",
                marginTop: "4px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "12px",
              borderRadius: "999px",
              border: "none",
              fontSize: "14px",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #1DB954, #17a34a, #1DB954, #14b8a6)",
              color: "#000",
              cursor: "pointer",
              transition: "opacity .2s ease",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
