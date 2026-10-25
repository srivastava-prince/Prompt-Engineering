
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home">
      <div className="glow glow1" />
      <div className="glow glow2" />

      {/* NAVBAR */}
      <header className="navbar">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span>
          promptly<span className="logo-dot">.</span>
        </Link>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="browse-chapter">Chapters</a>
        </nav>

        <div className="nav-right">
          <Link href="/login" className="login">Log in</Link>
          <Link href="/Signup" className="nav-btn">
            Get started <span>↗</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="live-dot" />
            AI PROMPT ENGINEERING
          </div>

          <h1>
            Turn your ideas
            <br />
            into <span className="highlight">powerful</span>
            <br />
            prompts<span className="period">.</span>
          </h1>

          <p className="hero-desc">
            Create, test and improve your AI prompts in one intelligent
            workspace. Turn simple thoughts into meaningful results.
          </p>

          <div className="hero-buttons">
            <Link href="/Signup" className="primary-btn">
              Start creating <span>↗</span>
            </Link>
            <Link href="/playground" className="outline-btn">
              <span className="play">▷</span>
              Explore playground
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-icon">✧</span>
            <div>
              <strong>Think clearly. Create smarter.</strong>
              <p>Your ideas, amplified by AI.</p>
            </div>
          </div>
        </div>

        {/* WORKSPACE PREVIEW */}
        <div className="visual" id="workspace">
          <div className="back-card back-one" />
          <div className="back-card back-two" />

          <div className="floating-label">
            <span>✦</span> Your AI workspace
          </div>

          <div className="app-card">
            <div className="app-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>promptly / playground</span>
              <span className="menu-dots">•••</span>
            </div>

            <div className="app-body">
              <div className="app-heading">
                <div>
                  <span className="mini-label">YOUR WORKSPACE</span>
                  <h3>Prompt studio</h3>
                </div>
                <span className="connected">
                  <i /> Connected
                </span>
              </div>

              <div className="field-heading">
                <label>YOUR PROMPT</label>
                <span>01 / DRAFT</span>
              </div>

              <div className="prompt-box">
                <span className="prompt-sparkle">✦</span>
                <p>
                  Act as an expert content strategist.
                  Create a compelling product launch
                  strategy for a modern AI tool.
                </p>
                <span className="typing-cursor" />
              </div>

              <div className="settings-row">
                <div className="setting">
                  <span className="setting-icon">◈</span>
                  <div>
                    <small>AI MODEL</small>
                    <strong>Gemini Flash</strong>
                  </div>
                </div>

                <div className="setting-divider" />

                <div className="setting">
                  <span className="setting-icon">◉</span>
                  <div>
                    <small>TEMPERATURE</small>
                    <strong>0.7</strong>
                  </div>
                </div>
              </div>

              <Link href="/playground" className="run-btn">
                <span>✦</span>
                Run your prompt
                <span className="run-arrow">↗</span>
              </Link>

              <div className="result-box">
                <div className="result-heading">
                  <span>✧</span>
                  <strong>AI response</strong>
                  <small>PREVIEW</small>
                </div>

                <div className="skeleton">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="result-footer">
                  <span>Ready to refine</span>
                  <span>✦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="score-card">
            <div className="score-circle">94</div>
            <div>
              <strong>Prompt score</strong>
              <p>Excellent clarity</p>
            </div>
            <span className="check">✓</span>
          </div>

          <div className="tip-card">
            <span>✧</span>
            <div>
              <strong>Think better.</strong>
              <p>Prompt smarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <span className="highlight-label">YOUR IDEAS, AMPLIFIED</span>
        <div className="highlight-divider" />
        <p><span>✳</span> Create with clarity</p>
        <p><span>◈</span> Experiment freely</p>
        <p><span>↗</span> Improve continuously</p>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-heading">
          <span className="section-label">LESS GUESSWORK. BETTER RESULTS.</span>
          <h2>
            Your ideas deserve
            <br />
            <span>better prompts.</span>
          </h2>
          <p>
            Everything you need to turn rough thoughts into clear,
            effective AI instructions.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-top">
              <div className="feature-icon lavender">✳</div>
              <span>01</span>
            </div>
            <h3>Build with clarity</h3>
            <p>
              Structure your thoughts into meaningful prompts that tell AI
              exactly what you need.
            </p>
            <Link href="/playground" className="feature-link">
              Start building <span>↗</span>
            </Link>
          </article>

          <article className="feature-card featured">
            <div className="feature-top">
              <div className="feature-icon indigo">◈</div>
              <span>02</span>
            </div>
            <h3>Experiment freely</h3>
            <p>
              Test different instructions, explore new approaches and
              discover what works best.
            </p>
            <Link href="/playground" className="feature-link">
              Try playground <span>↗</span>
            </Link>
          </article>

          <article className="feature-card">
            <div className="feature-top">
              <div className="feature-icon silver">↗</div>
              <span>03</span>
            </div>
            <h3>Improve what works</h3>
            <p>
              Refine your approach with every experiment and build a better
              prompting workflow.
            </p>
            <Link href="/playground" className="feature-link">
              Improve prompts <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="how-intro">
          <span className="section-label">A SIMPLE WORKFLOW</span>
          <h2>
            From first thought
            <br />
            to <span>better output.</span>
          </h2>
          <p>
            No complicated process. Just a smarter way to work with AI.
          </p>
          <Link href="/playground" className="primary-btn how-btn">
            Open workspace <span>↗</span>
          </Link>
        </div>

        <div className="steps">
          <article className="step">
            <span className="step-number">01</span>
            <div>
              <h3>Write your idea</h3>
              <p>Start with a thought, a question or a task you want to solve.</p>
            </div>
            <span className="step-arrow">↗</span>
          </article>

          <article className="step">
            <span className="step-number">02</span>
            <div>
              <h3>Run your prompt</h3>
              <p>Send your instructions to AI and explore the response.</p>
            </div>
            <span className="step-arrow">↗</span>
          </article>

          <article className="step">
            <span className="step-number">03</span>
            <div>
              <h3>Refine the result</h3>
              <p>Adjust your wording and discover a better way to ask.</p>
            </div>
            <span className="step-arrow">↗</span>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-decoration">✦</div>
        <span className="section-label">YOUR NEXT IDEA STARTS HERE</span>
        <h2>
          Make every prompt
          <br />
          <span>count.</span>
        </h2>
        <p>
          Bring your ideas. Explore what’s possible.
          <br />
          Build something better with Promptly.
        </p>
        <Link href="/Signup" className="cta-button">
          Get started for free <span>↗</span>
        </Link>
        <small>A smarter workspace for your AI journey.</small>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span>
          promptly<span className="logo-dot">.</span>
        </Link>
        <p>Prompt Engineering Playground</p>
        <div className="footer-right">
          <span>Made for curious minds</span>
          <span>© 2026 Promptly</span>
        </div>
      </footer>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #f1f2f6;
          color: #22263c;
          font-family: Arial, Helvetica, sans-serif;
        }

        :global(a) {
          text-decoration: none;
        }

        .home {
          --indigo: #3949ab;
          --indigo-dark: #293783;
          --ink: #22263c;
          --muted: #747b90;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          isolation: isolate;
          background: #f1f2f6;
        }

        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.36;
          z-index: -1;
          pointer-events: none;
        }

        .glow1 {
          top: 60px;
          right: 0;
          background: #cbd0f5;
        }

        .glow2 {
          top: 600px;
          left: -260px;
          background: #dfe4f0;
        }

        .navbar {
          max-width: 1240px;
          width: calc(100% - 80px);
          height: 92px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-bottom: 1px solid #dfe1eb;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--ink);
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1.2px;
          flex-shrink: 0;
        }

        .logo-icon {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 11px;
          color: white;
          background: var(--indigo);
          box-shadow: 0 5px 15px #3949ab30;
          font-size: 22px;
        }

        .logo-dot {
          color: var(--indigo);
          margin-left: -9px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .nav-links a,
        .login {
          color: #656b80;
          font-size: 13px;
          font-weight: 600;
          transition: color 0.2s;
        }

        .nav-links a:hover,
        .login:hover {
          color: var(--indigo);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-btn,
        .primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          border-radius: 10px;
          background: var(--indigo);
          color: white;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 7px 18px #3949ab25;
          transition: all 0.25s;
        }

        .nav-btn {
          padding: 13px 17px;
        }

        .nav-btn:hover,
        .primary-btn:hover,
        .cta-button:hover {
          background: var(--indigo-dark);
          transform: translateY(-3px);
          box-shadow: 0 12px 25px #3949ab35;
        }

        .hero {
          max-width: 1240px;
          width: calc(100% - 80px);
          min-height: 660px;
          margin: auto;
          padding: 70px 0 85px;
          display: grid;
          grid-template-columns: 0.96fr 1.04fr;
          align-items: center;
          gap: 48px;
        }

        .hero-content {
          animation: appear 0.7s ease both;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--indigo);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6576d8;
          box-shadow: 0 0 0 4px #3949ab12;
        }

        .hero h1 {
          margin: 29px 0 22px;
          color: var(--ink);
          font-size: clamp(48px, 5.1vw, 72px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -4px;
        }

        .hero h1 .highlight {
          position: relative;
          color: var(--indigo);
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 2px;
          width: 94%;
          height: 5px;
          border-radius: 5px;
          background: #a7b0f0;
          opacity: 0.7;
        }

        .period {
          color: #8793e8;
        }

        .hero-desc {
          max-width: 455px;
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 30px;
        }

        .primary-btn {
          padding: 17px 21px;
          min-height: 52px;
        }

        .outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 14px 16px;
          border: 1px solid #d7dae7;
          border-radius: 10px;
          background: #ffffffa8;
          color: #454b62;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.25s;
        }

        .outline-btn:hover {
          background: white;
          border-color: #aeb7e9;
          transform: translateY(-2px);
        }

        .play {
          display: grid;
          place-items: center;
          width: 23px;
          height: 23px;
          border-radius: 7px;
          background: #eaecfc;
          color: var(--indigo);
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
        }

        .note-icon {
          display: grid;
          place-items: center;
          width: 37px;
          height: 37px;
          border: 1px solid #dfe2ed;
          border-radius: 11px;
          background: #ffffffad;
          color: var(--indigo);
          font-size: 20px;
        }

        .hero-note strong {
          color: #454b61;
          font-size: 12px;
        }

        .hero-note p {
          margin: 5px 0 0;
          color: #8a90a2;
          font-size: 11px;
        }

        .visual {
          min-width: 0;
          position: relative;
          padding: 35px 0 25px 15px;
          animation: appear 0.9s 0.12s ease both;
        }

        .back-card {
          position: absolute;
          width: 80%;
          height: 76%;
          right: -8px;
          top: 65px;
          border: 1px solid #d9dced;
          border-radius: 25px;
          background: #e3e6f2a3;
        }

        .back-one {
          transform: rotate(5deg);
        }

        .back-two {
          transform: rotate(-4deg);
          background: #e8eaf4ad;
        }

        .floating-label {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 15px;
          border: 1px solid #e3e5ee;
          border-radius: 12px;
          background: white;
          box-shadow: 0 10px 25px #252d580d;
          color: #4d5368;
          font-size: 11px;
          font-weight: 700;
        }

        .floating-label span {
          color: var(--indigo);
          font-size: 17px;
        }

        .app-card {
          position: relative;
          z-index: 2;
          overflow: hidden;
          border: 1px solid #e0e2ec;
          border-radius: 19px;
          background: white;
          box-shadow: 0 28px 80px #30396317;
        }

        .app-top {
          height: 49px;
          padding: 0 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ececf3;
          background: #fdfdff;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }

        .window-dots i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d6d8e5;
        }

        .window-dots i:first-child {
          background: #aeb8ee;
        }

        .app-top > span:nth-child(2) {
          color: #9297a9;
          font-size: 10px;
          font-weight: 600;
        }

        .menu-dots {
          color: #8b90a3;
          letter-spacing: 2px;
          font-size: 13px;
        }

        .app-body {
          padding: 24px 24px 20px;
        }

        .app-heading,
        .field-heading,
        .result-heading,
        .result-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mini-label,
        .field-heading label {
          color: #9298ac;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .app-heading h3 {
          margin: 7px 0 0;
          color: #282d43;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .connected {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 9px;
          border: 1px solid #dfe9db;
          border-radius: 20px;
          background: #f5f9f2;
          color: #5c7d54;
          font-size: 9px;
          font-weight: 700;
        }

        .connected i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7ba66d;
        }

        .field-heading {
          margin: 27px 0 10px;
        }

        .field-heading > span {
          color: #9a9eb0;
          font-size: 9px;
          font-weight: 700;
        }

        .prompt-box {
          position: relative;
          min-height: 116px;
          padding: 17px 15px 15px 40px;
          border: 1px solid #dfe2ef;
          border-radius: 11px;
          background: #fafaff;
        }

        .prompt-sparkle {
          position: absolute;
          top: 17px;
          left: 14px;
          color: var(--indigo);
          font-size: 15px;
        }

        .prompt-box p {
          max-width: 340px;
          margin: 0;
          color: #60667b;
          font-size: 12px;
          line-height: 1.85;
        }

        .typing-cursor {
          display: block;
          width: 2px;
          height: 12px;
          margin-top: 7px;
          background: #6979dc;
          animation: blink 1s step-end infinite;
        }

        .settings-row {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 18px 0;
        }

        .setting {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .setting-icon {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #eef0fc;
          color: var(--indigo);
          font-size: 14px;
        }

        .setting small,
        .setting strong {
          display: block;
        }

        .setting small {
          color: #9b9fb0;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .setting strong {
          margin-top: 4px;
          color: #454b60;
          font-size: 10px;
        }

        .setting-divider {
          width: 1px;
          height: 27px;
          background: #e7e8f0;
        }

        .run-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          min-height: 43px;
          padding: 0 14px;
          border-radius: 9px;
          background: var(--indigo);
          color: white;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 5px 14px #3949ab22;
          transition: background 0.2s;
        }

        .run-btn:hover {
          background: var(--indigo-dark);
        }

        .run-arrow {
          margin-left: auto;
          font-size: 15px;
        }

        .result-box {
          margin-top: 18px;
          padding: 13px 14px 10px;
          border: 1px solid #e9eaf2;
          border-radius: 10px;
          background: #fdfdff;
        }

        .result-heading {
          justify-content: flex-start;
          gap: 8px;
        }

        .result-heading > span {
          color: var(--indigo);
          font-size: 18px;
        }

        .result-heading strong {
          color: #454b61;
          font-size: 10px;
        }

        .result-heading small {
          margin-left: auto;
          padding: 5px 7px;
          border-radius: 5px;
          background: #eeeffa;
          color: var(--indigo);
          font-size: 8px;
          font-weight: 800;
        }

        .skeleton {
          display: grid;
          gap: 7px;
          margin: 14px 0;
        }

        .skeleton i {
          height: 5px;
          border-radius: 10px;
          background: #e9eaf3;
        }

        .skeleton i:nth-child(1) {
          width: 94%;
        }

        .skeleton i:nth-child(2) {
          width: 75%;
        }

        .skeleton i:nth-child(3) {
          width: 48%;
        }

        .result-footer {
          padding-top: 9px;
          border-top: 1px solid #ececf4;
          color: #9297aa;
          font-size: 9px;
        }

        .result-footer span:last-child {
          color: #6575d5;
          font-size: 14px;
        }

        .score-card {
          position: absolute;
          right: -25px;
          bottom: 67px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border: 1px solid #e4e5ef;
          border-radius: 14px;
          background: white;
          box-shadow: 0 15px 35px #30385f17;
          animation: float 4s ease-in-out infinite;
        }

        .score-circle {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 4px solid #e0e4fb;
          border-top-color: var(--indigo);
          border-right-color: var(--indigo);
          border-radius: 50%;
          color: var(--indigo);
          font-size: 12px;
          font-weight: 800;
        }

        .score-card strong {
          display: block;
          color: #42485e;
          font-size: 10px;
          white-space: nowrap;
        }

        .score-card p {
          margin: 5px 0 0;
          color: #898fa3;
          font-size: 9px;
        }

        .check {
          display: grid;
          place-items: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #eaf3e6;
          color: #57804e;
          font-size: 11px;
        }

        .tip-card {
          position: absolute;
          bottom: 3px;
          left: -8px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border: 1px solid #e3e5ef;
          border-radius: 12px;
          background: white;
          box-shadow: 0 12px 30px #30385f0c;
        }

        .tip-card > span {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #eff0fc;
          color: var(--indigo);
          font-size: 18px;
        }

        .tip-card strong {
          color: #454b60;
          font-size: 10px;
        }

        .tip-card p {
          margin: 4px 0 0;
          color: #9297a8;
          font-size: 9px;
        }

        .highlights {
          max-width: 1240px;
          width: calc(100% - 80px);
          min-height: 85px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid #dfe1eb;
          border-bottom: 1px solid #dfe1eb;
        }

        .highlight-label {
          color: #898fa2;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .highlight-divider {
          width: 1px;
          height: 28px;
          background: #d8dbe6;
        }

        .highlights p {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0;
          color: #60667a;
          font-size: 11px;
          font-weight: 700;
        }

        .highlights p span {
          color: var(--indigo);
          font-size: 17px;
        }

        .features {
          max-width: 1240px;
          width: calc(100% - 80px);
          margin: auto;
          padding: 110px 0;
        }

        .section-heading {
          max-width: 650px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .section-label {
          color: var(--indigo);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .section-heading h2,
        .how-intro h2,
        .cta-section h2 {
          margin: 18px 0 14px;
          color: var(--ink);
          font-size: clamp(36px, 4vw, 51px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -2px;
        }

        .section-heading h2 span,
        .how-intro h2 span {
          color: var(--indigo);
        }

        .section-heading > p,
        .how-intro > p {
          max-width: 480px;
          margin: auto;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 19px;
        }

        .feature-card {
          min-height: 275px;
          display: flex;
          flex-direction: column;
          padding: 25px;
          border: 1px solid #e0e2ed;
          border-radius: 16px;
          background: #ffffffba;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: #c8ceef;
          box-shadow: 0 18px 40px #30385f0c;
        }

        .feature-card.featured {
          background: #e9eaf7;
          border-color: #d7daf0;
        }

        .feature-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feature-top > span {
          color: #a3a7b8;
          font-size: 11px;
          font-weight: 700;
        }

        .feature-icon {
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          font-size: 22px;
        }

        .lavender {
          background: #eeeafd;
          color: #7562ba;
        }

        .indigo {
          background: #d9defb;
          color: var(--indigo);
        }

        .silver {
          background: #e8eaf0;
          color: #636c87;
        }

        .feature-card h3 {
          margin: 24px 0 10px;
          color: #292e44;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.4px;
        }

        .feature-card > p {
          margin: 0 0 23px;
          color: #777e92;
          font-size: 12px;
          line-height: 1.85;
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: auto;
          color: var(--indigo);
          font-size: 11px;
          font-weight: 800;
        }

        .feature-link span {
          transition: transform 0.2s;
        }

        .feature-link:hover span {
          transform: translate(3px, -3px);
        }

        .how-section {
          max-width: 1240px;
          width: calc(100% - 80px);
          margin: 0 auto 115px;
          padding: 55px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
          gap: 70px;
          border: 1px solid #dfe2ed;
          border-radius: 23px;
          background: #e9eaf3;
        }

        .how-intro h2 {
          font-size: clamp(34px, 3.8vw, 46px);
        }

        .how-intro > p {
          margin: 0;
          font-size: 13px;
        }

        .how-btn {
          margin-top: 25px;
          font-size: 12px;
        }

        .steps {
          display: grid;
        }

        .step {
          display: grid;
          grid-template-columns: 44px 1fr 20px;
          align-items: center;
          gap: 17px;
          padding: 23px 0;
          border-bottom: 1px solid #d5d8e5;
        }

        .step:first-child {
          padding-top: 0;
        }

        .step:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .step-number {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid #d3d7e9;
          border-radius: 11px;
          background: #f5f5fa;
          color: var(--indigo);
          font-size: 12px;
          font-weight: 800;
        }

        .step h3 {
          margin: 0 0 6px;
          color: #343950;
          font-size: 14px;
          font-weight: 800;
        }

        .step p {
          margin: 0;
          color: #777e92;
          font-size: 11px;
          line-height: 1.7;
        }

        .step-arrow {
          color: var(--indigo);
          font-size: 17px;
        }

        .cta-section {
          position: relative;
          overflow: hidden;
          max-width: 1240px;
          width: calc(100% - 80px);
          margin: 0 auto 80px;
          padding: 73px 20px;
          border: 1px solid #dfe2f2;
          border-radius: 23px;
          background: #e5e7f4;
          text-align: center;
        }

        .cta-decoration {
          position: absolute;
          top: -105px;
          right: 9%;
          color: #3949ab0a;
          font-size: 260px;
          transform: rotate(15deg);
          pointer-events: none;
        }

        .cta-section h2 {
          position: relative;
          margin: 17px 0 13px;
          font-size: clamp(38px, 4.5vw, 55px);
        }

        .cta-section h2 span {
          color: var(--indigo);
        }

        .cta-section > p {
          position: relative;
          margin: 0;
          color: #737a91;
          font-size: 13px;
          line-height: 1.9;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 25px;
          padding: 16px 22px;
          border-radius: 10px;
          background: var(--indigo);
          color: white;
          font-size: 12px;
          font-weight: 800;
          box-shadow: 0 8px 20px #3949ab26;
          transition: all 0.25s;
        }

        .cta-section > small {
          position: relative;
          display: block;
          margin-top: 15px;
          color: #898fa3;
          font-size: 10px;
        }

        .footer {
          max-width: 1240px;
          width: calc(100% - 80px);
          min-height: 100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid #dfe1eb;
        }

        .footer .logo {
          font-size: 21px;
        }

        .footer .logo-icon {
          width: 31px;
          height: 31px;
          font-size: 19px;
        }

        .footer > p {
          color: #83899c;
          font-size: 11px;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #858b9d;
          font-size: 10px;
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @media (min-width: 1450px) {
          .hero {
            min-height: 700px;
          }
        }

        @media (max-width: 1050px) {
          .navbar,
          .hero,
          .highlights,
          .features,
          .how-section,
          .cta-section,
          .footer {
            width: calc(100% - 48px);
          }

          .nav-links {
            gap: 19px;
          }

          .hero {
            grid-template-columns: 1fr 1fr;
            gap: 27px;
          }

          .hero h1 {
            font-size: clamp(45px, 5.5vw, 60px);
            letter-spacing: -3px;
          }

          .visual {
            padding-left: 5px;
          }

          .app-body {
            padding: 20px 17px 17px;
          }

          .score-card {
            right: -8px;
          }

          .highlights {
            gap: 12px;
          }

          .how-section {
            padding: 38px;
            gap: 35px;
          }
        }

        @media (max-width: 760px) {
          .navbar {
            width: calc(100% - 36px);
            height: 76px;
            gap: 12px;
          }

          .logo {
            font-size: 22px;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
          }

          .nav-links {
            display: none;
          }

          .nav-right {
            gap: 13px;
          }

          .nav-btn {
            padding: 11px 12px;
            font-size: 11px;
          }

          .login {
            font-size: 12px;
          }

          .hero {
            width: calc(100% - 40px);
            padding: 65px 0 75px;
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .hero h1 {
            font-size: clamp(47px, 9vw, 68px);
            letter-spacing: -3px;
          }

          .hero-desc {
            max-width: 530px;
          }

          .visual {
            width: 100%;
            max-width: 560px;
            margin: 0 auto;
            padding: 35px 8px 27px;
          }

          .floating-label {
            left: 4px;
          }

          .tip-card {
            left: 0;
          }

          .score-card {
            right: -3px;
          }

          .highlights {
            width: calc(100% - 40px);
            padding: 20px 0;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 19px 25px;
          }

          .highlight-divider {
            display: none;
          }

          .highlights p {
            font-size: 11px;
          }

          .features {
            width: calc(100% - 40px);
            padding: 80px 0;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .feature-card {
            min-height: 240px;
          }

          .how-section {
            width: calc(100% - 40px);
            margin-bottom: 75px;
            padding: 30px 23px;
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .cta-section {
            width: calc(100% - 40px);
            margin-bottom: 45px;
            padding: 58px 16px;
          }

          .footer {
            width: calc(100% - 40px);
            padding: 25px 0;
            flex-wrap: wrap;
          }

          .footer > p {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .hero h1 {
            font-size: 46px;
            letter-spacing: -2.7px;
          }

          .eyebrow {
            font-size: 9px;
            letter-spacing: 1.4px;
          }

          .hero-buttons {
            align-items: stretch;
            flex-direction: column;
          }

          .primary-btn,
          .outline-btn {
            width: 100%;
          }

          .workspace-heading h3 {
            font-size: 19px;
          }

          .app-body {
            padding: 19px 13px 14px;
          }

          .settings-row {
            gap: 11px;
          }

          .setting {
            gap: 6px;
          }

          .setting-icon {
            width: 27px;
            height: 27px;
          }

          .setting small {
            font-size: 7px;
          }

          .setting strong {
            font-size: 9px;
          }

          .score-card {
            gap: 7px;
            padding: 9px;
          }

          .score-circle {
            width: 34px;
            height: 34px;
            font-size: 10px;
          }

          .tip-card {
            padding: 9px;
          }

          .highlights p {
            font-size: 10px;
          }

          .footer-right {
            gap: 8px;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

