
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="page">
        <div className="grid" />
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />

        <header className="topbar">
          <a href="/" className="brand">
            <span className="brandIcon">✦</span>
            <span>Promptly</span>
          </a>

          <div className="topText">
            New here?
            <a href="/Signup"> Create account</a>
          </div>
        </header>

        <section className="login-layout">
          <div className="intro">
            <div className="number">
              <span>01</span>
              <i />
              <span>AUTHENTICATION</span>
            </div>

            <h1>
              Welcome back.
              <br />
              <em>Let&apos;s build.</em>
            </h1>

            <p>
              Your prompts, ideas and experiments are waiting for you.
              Pick up where your creativity left off.
            </p>

            <div className="prompt-line">
              <span className="line-dot" />
              <span>
                /workspace <b>→</b> /prompt-library
              </span>
            </div>

            <div className="code-art">
              <div className="code-header">
                <div className="dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>prompt.md</span>
                <small>● saved</small>
              </div>

              <div className="code-body">
                <span className="line-no">01</span>
                <span className="code-blue">Create</span>{" "}
                a compelling prompt
                <br />
                <span className="line-no">02</span>
                for an AI writing assistant.
                <br />
                <span className="line-no">03</span>
                <span className="code-dark">Focus</span>{" "}
                on clarity &amp; context.
              </div>

              <div className="code-footer">
                <span>✦ Promptly Engine</span>
                <span>Ready to create</span>
              </div>
            </div>

            <div className="intro-bottom">
              <span className="mini-star">✦</span>
              <span>Think clearly. Prompt better. Build more.</span>
            </div>
          </div>

          <div className="login-area">
            <div className="login-card">
              <div className="card-top">
                <div className="card-icon">✦</div>
                <div>
                  <span>YOUR WORKSPACE</span>
                  <strong>Promptly Account</strong>
                </div>
                <div className="online">
                  <i />
                  SECURE
                </div>
              </div>

              <div className="heading">
                <span className="eyebrow">WELCOME BACK</span>
                <h2>Good to see you.</h2>
                <p>Enter your details to continue to Promptly.</p>
              </div>

              <button className="google" type="button">
                <span className="googleG">G</span>
                Continue with Google
              </button>

              <div className="or">
                <span />
                <small>OR CONTINUE WITH EMAIL</small>
                <span />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <div className="inputBox">
                    <span className="inputSymbol">@</span>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="passwordHead">
                    <label htmlFor="password">Password</label>
                    <button type="button">
                      Forgot password?
                    </button>
                  </div>

                  <div className="inputBox">
                    <span className="inputSymbol">⌑</span>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                    />
                    <button
                      className="show"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <label className="remember">
                  <input type="checkbox" />
                  <span className="fakeCheck" />
                  Keep me signed in
                </label>

                <button className="loginBtn" type="submit">
                  <span>Continue to workspace</span>
                  <b>↗</b>
                </button>
              </form>

              <div className="signup">
                Don&apos;t have an account?
                <a href="/Signup"> Create one</a>
              </div>

              <div className="secure">
                <span>✦</span>
                Your workspace is protected
              </div>
            </div>

            <div className="side-label">
              <span>BUILD</span>
              <span>REFINE</span>
              <span>TEST</span>
            </div>
          </div>
        </section>

        <footer>
          <span>© 2026 Promptly</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </footer>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          --mist: #f1f2f6;
          --indigo: #3949ab;
          --indigo-dark: #293783;
          --ink: #22263c;
          --muted: #777d91;
          --line: #e0e3ed;

          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 28px 5vw;
          background:
            radial-gradient(
              circle at 7% 18%,
              rgba(57, 73, 171, 0.09),
              transparent 27%
            ),
            radial-gradient(
              circle at 94% 83%,
              rgba(106, 117, 177, 0.10),
              transparent 29%
            ),
            var(--mist);
          color: var(--ink);
          font-family: Arial, "Segoe UI", sans-serif;
        }

        .grid {
          position: absolute;
          inset: 0;
          opacity: 0.28;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(57, 73, 171, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 73, 171, 0.045) 1px, transparent 1px);
          background-size: 54px 54px;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(35px);
        }

        .shape1 {
          width: 330px;
          height: 330px;
          left: -190px;
          top: 32%;
          background: #dfe2f1;
        }

        .shape2 {
          width: 350px;
          height: 350px;
          right: -210px;
          top: -70px;
          background: #e0e3ef;
        }

        .shape3 {
          width: 210px;
          height: 210px;
          right: 32%;
          bottom: -150px;
          background: #d4d9f0;
          opacity: 0.65;
        }

        .topbar {
          position: relative;
          z-index: 5;
          max-width: 1280px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--ink);
          text-decoration: none;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .brandIcon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--indigo);
          color: white;
          font-size: 19px;
          box-shadow: 0 8px 20px rgba(57, 73, 171, 0.22);
        }

        .topText {
          color: var(--muted);
          font-size: 13px;
        }

        .topText a,
        .signup a {
          color: var(--indigo);
          font-weight: 750;
          text-decoration: none;
        }

        .topText a:hover,
        .signup a:hover {
          color: var(--indigo-dark);
          text-decoration: underline;
        }

        .login-layout {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          min-height: calc(100vh - 130px);
          margin: auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 470px;
          align-items: center;
          gap: 70px;
          padding: 30px 0 55px;
        }

        .number {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 27px;
          color: #858ba0;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .number span:first-child {
          color: var(--indigo);
        }

        .number i {
          width: 36px;
          height: 1px;
          background: #c8cce0;
        }

        
.intro h1 {
  margin: 0;
  font-size: clamp(42px, 4.5vw, 62px);
  line-height: 1.05;
  letter-spacing: -3px;
  font-weight: 600;
  color: var(--ink);
}

.intro h1 em {
  color: var(--indigo);
  font-style: normal;
}


        .intro > p {
          max-width: 430px;
          margin: 25px 0;
          color: #73798e;
          font-size: 15px;
          line-height: 1.85;
        }

        .prompt-line {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 27px;
          color: #7f8499;
          font-family: monospace;
          font-size: 12px;
        }

        .line-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--indigo);
          box-shadow: 0 0 0 5px rgba(57, 73, 171, 0.10);
        }

        .prompt-line b {
          color: var(--indigo);
          margin: 0 5px;
        }

        .code-art {
          width: min(455px, 100%);
          overflow: hidden;
          border: 1px solid #dfe2ed;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 22px 55px rgba(40, 46, 89, 0.08);
          transform: rotate(-1deg);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .code-art:hover {
          transform: rotate(0) translateY(-4px);
          box-shadow: 0 28px 60px rgba(40, 46, 89, 0.12);
        }

        .code-header {
          height: 46px;
          display: flex;
          align-items: center;
          padding: 0 17px;
          border-bottom: 1px solid #eaebf2;
          color: #858ba0;
          font-size: 11px;
        }

        .dots {
          display: flex;
          gap: 5px;
          margin-right: 14px;
        }

        .dots i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c8ccdc;
        }

        .dots i:first-child {
          background: #8b91ba;
        }

        .code-header small {
          margin-left: auto;
          color: var(--indigo);
          font-size: 10px;
        }

        .code-body {
          padding: 23px 21px;
          color: #555b70;
          font-family: monospace;
          font-size: 12px;
          line-height: 2.2;
        }

        .line-no {
          display: inline-block;
          width: 32px;
          color: #a9aec0;
        }

        .code-blue {
          color: var(--indigo);
          font-weight: 700;
        }

        .code-dark {
          color: #454b70;
          font-weight: 700;
        }

        .code-footer {
          display: flex;
          justify-content: space-between;
          padding: 13px 17px;
          border-top: 1px solid #eaebf2;
          color: #858ba0;
          font-size: 10px;
        }

        .code-footer span:last-child {
          color: var(--indigo);
          font-weight: 700;
        }

        .intro-bottom {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 27px;
          color: #81869a;
          font-size: 11px;
          letter-spacing: 0.2px;
        }

        .mini-star {
          color: var(--indigo);
        }

        .login-area {
          position: relative;
        }

        .login-card {
          padding: 36px 38px 30px;
          border: 1px solid rgba(222, 225, 237, 0.95);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow:
            0 28px 75px rgba(42, 47, 91, 0.09),
            0 4px 15px rgba(42, 47, 91, 0.035);
          backdrop-filter: blur(18px);
          animation: cardIn 0.6s ease both;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 29px;
        }

        .card-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #eef0fb;
          color: var(--indigo);
          font-size: 18px;
          box-shadow: inset 0 0 0 1px #e0e3f4;
        }

        .card-top > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .card-top span {
          color: #858ba0;
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 800;
        }

        .card-top strong {
          color: var(--ink);
          font-size: 13px;
          font-weight: 750;
        }

        .online {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-left: auto;
          color: #747b91;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .online i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6877bd;
        }

        .heading {
          margin-bottom: 24px;
        }

        .eyebrow {
          display: block;
          margin-bottom: 9px;
          color: var(--indigo);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .heading h2 {
          margin: 0;
          color: var(--ink);
          font-size: 30px;
          line-height: 1.2;
          letter-spacing: -1.2px;
          font-weight: 800;
        }

        .heading p {
          margin: 10px 0 0;
          color: #7b8094;
          font-size: 12px;
          line-height: 1.6;
        }

        .google {
          width: 100%;
          height: 47px;
          border: 1px solid #dfe2ec;
          border-radius: 11px;
          background: white;
          color: #41465b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .google:hover {
          background: #f8f8fc;
          border-color: #bfc5e2;
          transform: translateY(-1px);
        }

        .googleG {
          color: #4285f4;
          font-size: 17px;
          font-weight: 800;
        }

        .or {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 22px 0;
        }

        .or span {
          flex: 1;
          height: 1px;
          background: #e8e9f0;
        }

        .or small {
          color: #9297a9;
          font-size: 8px;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .field {
          margin-bottom: 18px;
        }

        .field label {
          display: block;
          margin-bottom: 8px;
          color: #454a60;
          font-size: 12px;
          font-weight: 700;
        }

        .inputBox {
          height: 48px;
          display: flex;
          align-items: center;
          border: 1px solid #dfe2ec;
          border-radius: 11px;
          background: #fafafe;
          transition: 0.2s;
        }

        .inputBox:focus-within {
          border-color: var(--indigo);
          background: white;
          box-shadow: 0 0 0 4px rgba(57, 73, 171, 0.09);
        }

        .inputSymbol {
          width: 43px;
          text-align: center;
          color: #858ba5;
          font-size: 14px;
        }

        .inputBox input {
          flex: 1;
          width: 0;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--ink);
          font-size: 12px;
        }

        .inputBox input::placeholder {
          color: #a3a7b8;
        }

        .passwordHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .passwordHead button {
          border: 0;
          background: transparent;
          color: var(--indigo);
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .show {
          border: 0;
          background: transparent;
          color: var(--indigo);
          padding: 0 13px;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 3px 0 21px;
          color: #6f758a;
          font-size: 11px;
          cursor: pointer;
        }

        .remember input {
          position: absolute;
          opacity: 0;
          width: 1px;
          height: 1px;
        }

        .fakeCheck {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          border: 1px solid #cdd1e0;
          border-radius: 5px;
          background: white;
          transition: 0.2s;
        }

        .remember input:checked + .fakeCheck {
          background: var(--indigo);
          border-color: var(--indigo);
          box-shadow: inset 0 0 0 3px white;
        }

        .loginBtn {
          width: 100%;
          min-height: 50px;
          border: 0;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--indigo);
          color: white;
          font-size: 12px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 10px 23px rgba(57, 73, 171, 0.20);
          transition: 0.25s ease;
        }

        .loginBtn:hover {
          background: var(--indigo-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(57, 73, 171, 0.25);
        }

        .loginBtn b {
          font-size: 18px;
          font-weight: 400;
          transition: 0.2s;
        }

        .loginBtn:hover b {
          transform: translate(3px, -3px);
        }

        .signup {
          margin-top: 21px;
          text-align: center;
          color: #858a9d;
          font-size: 11px;
        }

        .secure {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 25px;
          padding-top: 18px;
          border-top: 1px solid #ececf3;
          color: #9297a8;
          font-size: 10px;
        }

        .secure span {
          color: var(--indigo);
        }

        .side-label {
          position: absolute;
          right: -65px;
          top: 43%;
          display: flex;
          gap: 13px;
          color: #969bb0;
          font-size: 8px;
          letter-spacing: 1.5px;
          transform: rotate(90deg);
        }

        .side-label span:nth-child(2) {
          color: var(--indigo);
          font-weight: 800;
        }

        footer {
          position: absolute;
          bottom: 24px;
          left: 5vw;
          right: 5vw;
          display: flex;
          justify-content: space-between;
          color: #969bad;
          font-size: 10px;
        }

        footer div {
          display: flex;
          gap: 22px;
        }

        footer a {
          color: #777d92;
          text-decoration: none;
        }

        footer a:hover {
          color: var(--indigo);
        }

        @media (max-width: 1100px) {
          .login-layout {
            grid-template-columns: minmax(0, 1fr) 430px;
            gap: 40px;
          }

          .login-card {
            padding: 32px 28px;
          }

          .side-label {
            display: none;
          }
        }

        @media (max-width: 850px) {
          .login-layout {
            grid-template-columns: 1fr;
            max-width: 480px;
            min-height: calc(100vh - 115px);
            padding: 35px 0 45px;
          }

          .intro {
            display: none;
          }

          .login-area {
            width: 100%;
          }

          footer {
            position: relative;
            inset: auto;
            margin: 10px auto 0;
            max-width: 480px;
          }
        }

        @media (max-width: 520px) {
          .page {
            padding: 20px;
          }

          .brand {
            font-size: 21px;
          }

          .brandIcon {
            width: 37px;
            height: 37px;
          }

          .topText {
            font-size: 11px;
          }

          .login-layout {
            min-height: calc(100vh - 105px);
            padding: 28px 0;
          }

          .login-card {
            padding: 28px 21px 24px;
            border-radius: 19px;
          }

          .heading h2 {
            font-size: 27px;
          }

          .online {
            font-size: 7px;
          }

          footer {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
