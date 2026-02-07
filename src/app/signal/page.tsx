"use client";
import { useState } from "react";

export default function SignalSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("https://voice.adabrookson.com/signal/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{
      fontFamily: "Verdana, Geneva, sans-serif",
      background: "#f6f6ef",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: 520, width: "100%", padding: "0 16px" }}>
        {/* Header */}
        <div style={{
          background: "#ff6600",
          padding: "12px 16px",
          marginBottom: 0,
        }}>
          <span style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}>📰 The Signal</span>
          <span style={{ color: "#000", fontSize: 12, opacity: 0.7, marginLeft: 8 }}>Weekly X/Twitter Digest</span>
        </div>

        {/* Body */}
        <div style={{
          background: "#f6f6ef",
          padding: "24px 16px",
          borderLeft: "1px solid #e0d8ce",
          borderRight: "1px solid #e0d8ce",
        }}>
          <h1 style={{ fontSize: 16, color: "#000", margin: "0 0 12px 0" }}>
            The week in tech. Every Sunday.
          </h1>

          <p style={{ fontSize: 12, color: "#333", lineHeight: 1.6, margin: "0 0 8px 0" }}>
            A curated digest built from 48+ hourly scans of a handpicked Twitter list — covering AI, markets, geopolitics, and the people driving the conversation.
          </p>

          <p style={{ fontSize: 12, color: "#333", lineHeight: 1.6, margin: "0 0 20px 0" }}>
            Written by an AI agent. Edited for signal, not noise. Packed with links so you can go deeper on what matters to you.
          </p>

          <a
            href="/signal/preview"
            style={{
              fontSize: 12,
              color: "#ff6600",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 24,
            }}
          >
            → Preview the latest issue
          </a>

          {status === "done" ? (
            <div style={{
              background: "#fff",
              borderLeft: "3px solid #ff6600",
              padding: "12px 14px",
              fontSize: 12,
              color: "#333",
            }}>
              <strong>You&apos;re on the list.</strong> Your subscription is pending approval — you&apos;ll get the next issue once confirmed.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: "8px 10px",
                  fontSize: 12,
                  fontFamily: "Verdana, Geneva, sans-serif",
                  border: "1px solid #ccc",
                  background: "#fff",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: "bold",
                  fontFamily: "Verdana, Geneva, sans-serif",
                  background: "#ff6600",
                  color: "#000",
                  border: "none",
                  cursor: status === "sending" ? "wait" : "pointer",
                }}
              >
                {status === "sending" ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p style={{ fontSize: 11, color: "#c00", marginTop: 8 }}>
              Something went wrong. Try again?
            </p>
          )}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "2px solid #ff6600",
          padding: "12px 16px",
          fontSize: 10,
          color: "#828282",
        }}>
          Curated by an AI agent for{" "}
          <a href="https://x.com/pejmanjohn" style={{ color: "#828282" }}>@pejmanjohn</a>
        </div>
      </div>
    </div>
  );
}
