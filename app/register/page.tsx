"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });

    setLoading(false);

    if (res.ok) {
      setMessage("Registered — redirecting to login...");
      setTimeout(() => router.push("/login"), 700);
      return;
    }

    const txt = await res.text();
    setError(txt || "Registration failed");
  }

  return (
    <main className="auth-page">
      <section className="auth-card auth-card-register">
        <div className="auth-card__header">
          <span className="auth-kicker">Create account</span>
          <h1>Join NovaMarket</h1>
          <p className="auth-subtitle">Start your modern shopping journey</p>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <div className="field-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              placeholder="Alex Morgan"
            />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Create a password"
            />
          </div>

          {message && <p className="auth-message">{message}</p>}
          {error && <p className="auth-error">{error}</p>}

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}
