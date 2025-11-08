"use client"

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic here
    console.log('Attempting login with:', { email, password });
    alert('Login form submitted. Implement actual authentication logic.');
  };

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
      <div style={{ textAlign: "center", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>
          Login
        </h1>
        <p style={{ fontSize: "18px", color: "#bbb", marginBottom: "30px" }}>
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontSize: "16px", fontWeight: 500, textAlign: "left" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #333",
                background: "#1a1a1a",
                color: "#ffffff",
                fontSize: "16px",
              }}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" style={{ display: "block", marginBottom: "8px", fontSize: "16px", fontWeight: 500, textAlign: "left" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #333",
                background: "#1a1a1a",
                color: "#ffffff",
                fontSize: "16px",
              }}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              background: "#007bff", // Example primary color
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'} // Darker shade on hover
            onMouseOut={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Log In
          </button>
        </form>
        <p style={{ marginTop: "30px", fontSize: "14px", color: "#bbb" }}>
          Don't have an account? <a href="/signup" style={{ color: "#007bff", textDecoration: "underline" }}>Sign Up</a>
        </p>
      </div>
    </div>
  )
}
