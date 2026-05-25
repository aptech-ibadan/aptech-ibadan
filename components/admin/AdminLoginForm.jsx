"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #0d1b3e;
    --navy-2: #162348;
    --navy-3: #1e2f5a;
    --navy-4: #253870;
    --gold: #f5a800;
    --gold-2: #ffc72c;
    --gold-dim: rgba(245,168,0,0.14);
    --gold-border: rgba(245,168,0,0.28);
    --white: #ffffff;
    --muted: rgba(255,255,255,0.45);
    --muted-2: rgba(255,255,255,0.18);
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.13);
    --danger: #f87171;
    --danger-bg: rgba(248,113,113,0.1);
    --danger-border: rgba(248,113,113,0.28);
    --mono: 'Space Mono', monospace;
    --sans: 'Nunito Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--sans);
    background: var(--navy);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Full-bleed split ── */
  .login-root {
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1fr 480px;
  }

  @media (max-width: 820px) {
    .login-root { grid-template-columns: 1fr; }
    .login-aside { display: none; }
  }

  /* ── Left panel ── */
  .login-aside {
    background: var(--navy-2);
    border-right: 1px solid var(--border);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  /* Subtle dot-grid texture matching the site */
  .aside-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(245,168,0,0.08) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* Decorative corner accent */
  .aside-corner {
    position: absolute;
    bottom: -60px; right: -60px;
    width: 280px; height: 280px;
    border-radius: 50%;
    border: 1px solid var(--gold-border);
    pointer-events: none;
  }

  .aside-corner-2 {
    position: absolute;
    bottom: -20px; right: -20px;
    width: 180px; height: 180px;
    border-radius: 50%;
    border: 1px solid rgba(245,168,0,0.1);
    pointer-events: none;
  }

  .aside-top { position: relative; }

  .aside-logo {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 4rem;
  }

  .aside-logo-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0;
  }

  .aside-logo-name {
    font-size: 12px; font-weight: 800;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--muted);
  }

  .aside-tagline {
    font-family: var(--mono);
    font-size: 10px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--gold);
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 20px;
  }

  .tagline-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--gold);
  }

  .aside-headline {
    font-size: 38px; font-weight: 800;
    letter-spacing: -0.03em; line-height: 1.1;
    color: var(--white); margin-bottom: 16px;
  }

  .aside-headline span { color: var(--gold); display: block; }

  .aside-body {
    font-size: 14px; color: var(--muted);
    line-height: 1.7; max-width: 320px;
  }

  .aside-bottom { position: relative; }

  .aside-stats {
    display: flex; gap: 0;
    border: 1px solid var(--border);
    border-radius: 12px; overflow: hidden;
  }

  .aside-stat {
    flex: 1; padding: 18px 20px;
    border-right: 1px solid var(--border);
  }

  .aside-stat:last-child { border-right: none; }

  .aside-stat-num {
    font-family: var(--mono);
    font-size: 22px; font-weight: 700;
    color: var(--gold); line-height: 1;
    margin-bottom: 4px;
  }

  .aside-stat-label {
    font-size: 11px; color: var(--muted);
    letter-spacing: 0.02em;
  }

  /* ── Right panel ── */
  .login-panel {
    background: var(--navy);
    display: flex; flex-direction: column;
    justify-content: center;
    padding: 3rem;
    border-left: 1px solid var(--border);
  }

  @media (max-width: 820px) {
    .login-panel { padding: 2.5rem 1.5rem; min-height: 100vh; border-left: none; }
  }

  .login-eyebrow {
    font-family: var(--mono);
    font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 12px;
    display: flex; align-items: center; gap: 6px;
  }

  .login-eyebrow::before {
    content: '';
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%; background: var(--gold);
  }

  .login-heading {
    font-size: 28px; font-weight: 800;
    letter-spacing: -0.02em; line-height: 1.15;
    color: var(--white); margin-bottom: 6px;
  }

  .login-heading span { color: var(--gold); }

  .login-sub {
    font-size: 13px; color: var(--muted);
    line-height: 1.6; margin-bottom: 36px;
  }

  /* ── Fields ── */
  .field { margin-bottom: 18px; }

  .field-label {
    display: block;
    font-size: 10px; font-weight: 800;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 7px;
  }

  .field-wrap { position: relative; }

  .field-input {
    font-family: var(--sans); font-size: 14px;
    color: var(--white); background: var(--navy-3);
    border: 1px solid var(--border-strong);
    border-radius: 8px; padding: 12px 16px;
    width: 100%; outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    -webkit-appearance: none;
  }

  .field-input:hover { border-color: rgba(255,255,255,0.22); }

  .field-input:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px var(--gold-dim);
  }

  .field-input::placeholder { color: var(--muted); opacity: 0.5; }

  .pw-toggle {
    position: absolute; right: 14px; top: 50%;
    transform: translateY(-50%);
    background: none; border: none; cursor: pointer;
    font-family: var(--mono); font-size: 10px;
    color: var(--muted); letter-spacing: 0.04em;
    text-transform: uppercase; padding: 2px 4px;
    border-radius: 4px; transition: color 0.12s;
  }

  .pw-toggle:hover { color: var(--gold); }

  /* ── Error ── */
  .error-msg {
    display: flex; align-items: center; gap: 8px;
    background: var(--danger-bg);
    border: 1px solid var(--danger-border);
    border-radius: 8px; padding: 10px 14px;
    font-size: 12px; color: var(--danger);
    margin-bottom: 16px;
  }

  /* ── Submit ── */
  .submit-btn {
    font-family: var(--sans);
    font-size: 13px; font-weight: 800;
    letter-spacing: 0.07em; text-transform: uppercase;
    width: 100%; padding: 13px 20px;
    background: var(--gold); color: var(--navy);
    border: none; border-radius: 8px;
    cursor: pointer; transition: all 0.15s;
    display: flex; align-items: center;
    justify-content: center; gap: 8px;
    margin-top: 4px;
  }

  .submit-btn:hover:not(:disabled) { background: var(--gold-2); }
  .submit-btn:active:not(:disabled) { transform: scale(0.99); }
  .submit-btn:disabled { opacity: 0.45; cursor: not-allowed; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(13,27,62,0.25);
    border-top-color: var(--navy);
    border-radius: 50%;
    animation: spin 0.7s linear infinite; flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Footer ── */
  .login-footer {
    margin-top: 28px; padding-top: 20px;
    border-top: 1px solid var(--border);
    display: flex; align-items: center;
    justify-content: space-between;
    font-family: var(--mono); font-size: 10px;
    color: var(--muted); letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .footer-live {
    display: flex; align-items: center; gap: 6px;
  }

  .footer-live-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #4ade80;
    animation: livepulse 2s ease-in-out infinite;
  }

  @keyframes livepulse {
    0%, 100% { opacity: 1; } 50% { opacity: 0.35; }
  }
`;

const AdminLoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("adminToken");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ identifier: username, password }),
    });

    setLoading(false);
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/admin/dashboard");
    } else {
      setError(data?.error || "Unable to login");
    }
  };

  return (
    <div className="login-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Left aside */}
      <aside className="login-aside">
        <div className="aside-grid" />
        <div className="aside-corner" />
        <div className="aside-corner-2" />

        <div className="aside-top">
          <div className="aside-logo">
            <span className="aside-logo-dot" />
            <span className="aside-logo-name">Aptech Computer Education</span>
          </div>

          <div className="aside-tagline">
            <span className="tagline-dot" />
            ACE · Arena Multimedia
          </div>

          <h2 className="aside-headline">
            Nigeria's Premier
            <span>I.T Institute</span>
          </h2>

          <p className="aside-body">
            Sign in to manage blog content, active offers, and media uploads for
            the Aptech platform.
          </p>
        </div>

        <div className="aside-bottom">
          <div className="aside-stats">
            <div className="aside-stat">
              <div className="aside-stat-num">2000+</div>
              <div className="aside-stat-label">Graduates</div>
            </div>
            <div className="aside-stat">
              <div className="aside-stat-num">20+</div>
              <div className="aside-stat-label">Years</div>
            </div>
            <div className="aside-stat">
              <div className="aside-stat-num">30+</div>
              <div className="aside-stat-label">Courses</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right form panel */}
      <section className="login-panel">
        <p className="login-eyebrow">Admin Portal</p>
        <h1 className="login-heading">
          Welcome <span>Back.</span>
        </h1>
        <p className="login-sub">
          Sign in to manage posts, offers, and platform content.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="field-label" htmlFor="username">
              Username
            </label>
            <div className="field-wrap">
              <input
                id="username"
                className="field-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          <div className="field">
            <label className="field-label" htmlFor="password">
              Password
            </label>
            <div className="field-wrap">
              <input
                id="password"
                className="field-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                style={{ paddingRight: 60 }}
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-msg">
              <span>⚠</span> {error}
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" />
                Signing in…
              </>
            ) : (
              "Sign in →"
            )}
          </button>
        </form>

        <div className="login-footer">
          <span className="footer-live">
            <span className="footer-live-dot" />
            System online
          </span>
          <span>production</span>
        </div>
      </section>
    </div>
  );
};

export default AdminLoginForm;
