"use client"

export default function PortalPage() {
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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>
          Welcome to the Portal!
        </h1>
        <p style={{ fontSize: "18px", color: "#bbb" }}>
          You have successfully logged in.
        </p>
        <div style={{ marginTop: "30px", width: "100%", height: "100vh" }}>
          <iframe
            src="https://special-adventure-q7p744wvrxpw3rw4-3000.app.github.dev/portal"
            title="Eburon AI Portal"
            allow="microphone; audio-capture; autoplay; fullscreen; clipboard-write"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "16px",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
