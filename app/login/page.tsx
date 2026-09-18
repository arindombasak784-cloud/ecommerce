'use client';

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res && res.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  }

  return (
    <main className="auth-page">
      <section className="auth-card auth-card-login">
        <div className="auth-card__header">
          <span className="auth-kicker">NovaMarket</span>
          <h1>Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue shopping</p>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
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
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="auth-switch">
          New to NovaMarket? <Link href="/register">Create an account</Link>
        </p>
      </section>
    </main>
  );
}
