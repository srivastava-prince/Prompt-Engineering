"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="page">

        <div className="grid"></div>
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        {/* TOP */}
        <header className="topbar">
          <a href="/" className="brand">
            <span className="brandIcon">✦</span>
            <span>Promptly</span>
          </a>

          <div className="topText">
            New here?
            <a href="/signup"> Create account</a>
          </div>
        </header>

        {/* MAIN */}
        <section className="login-layout">

          {/* LEFT */}
          <div className="intro">

            <div className="number">
              <span>01</span>
              <i></i>
              <span>AUTHENTICATION</span>
            </div>

            <h1>
              Welcome back.
              <br />
              <em>Let's build.</em>
            </h1>

            <p>
              Your prompts, ideas and experiments are
              waiting for you.
            </p>

            <div className="prompt-line">
              <span className="line-dot"></span>
              <span>
                /workspace <b>→</b> /prompt-library
              </span>
            </div>

            {/* Prompt editor */}
            <div className="code-art">

              <div className="code-header">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>prompt.md</span>
                <small>saved</small>
              </div>

              <div className="code-body">
                <span className="line-no">01</span>
                <span className="code-coral">Create</span>{" "}
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
                <span>Ready</span>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="login-area">

            <div className="login-card">

              <div className="card-top">
                <div className="card-icon">✦</div>

                <div>
                  <span>YOUR WORKSPACE</span>
                  <strong>Sign in</strong>
                </div>
              </div>

              <div className="heading">
                <h2>Good to see you.</h2>
                <p>
                  Enter your details to continue to Promptly.
                </p>
              </div>

              {/* Google */}
              <button className="google">
                <span className="googleG">G</span>
                Continue with Google
              </button>

              <div className="or">
                <span></span>
                <small>OR</small>
                <span></span>
              </div>

              {/* Email */}
              <div className="field">
                <label>Email address</label>

                <div className="inputBox">
                  <span className="inputSymbol">@</span>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <div className="passwordHead">
                  <label>Password</label>

                  <button type="button">
                    Forgot password?
                  </button>
                </div>

                <div className="inputBox">
                  <span className="inputSymbol">••</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />

                  <button
                    className="show"
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="remember">
                <input type="checkbox" />
                <span className="fakeCheck"></span>
                Keep me signed in
              </label>

              {/* Login */}
              <button className="loginBtn">
                <span>Continue to workspace</span>
                <b>↗</b>
              </button>

              <div className="signup">
                Don't have an account?
                <a href="/signup"> Create one</a>
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

        /* =========================
           PAGE
        ========================= */

        .page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 8% 20%,
              rgba(239, 183, 164, .30),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(224, 201, 182, .32),
              transparent 30%
            ),
            #f7f2eb;

          color: #292522;

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;

          padding: 28px 5vw;
        }

        /* =========================
           BACKGROUND
        ========================= */

        .grid {
          position: absolute;
          inset: 0;

          opacity: .28;

          background-image:
            linear-gradient(
              rgba(90, 72, 60, .045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(90, 72, 60, .045) 1px,
              transparent 1px
            );

          background-size: 55px 55px;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .shape1 {
          width: 330px;
          height: 330px;
          left: -180px;
          top: 35%;

          background: #f1d5c9;
          filter: blur(15px);
        }

        .shape2 {
          width: 350px;
          height: 350px;
          right: -190px;
          top: 3%;

          background: #eadfd2;
          filter: blur(18px);
        }

        /* =========================
           TOP
        ========================= */

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
          gap: 10px;

          color: #292522;
          text-decoration: none;

          font-size: 20px;
          font-weight: 700;
          letter-spacing: -.5px;
        }

        .brandIcon {
          width: 35px;
          height: 35px;

          display: grid;
          place-items: center;

          border-radius: 10px;

          background: #c96d55;
          color: white;

          box-shadow:
            0 8px 20px rgba(180, 91, 70, .22);
        }

        .topText {
          color: #92877f;
          font-size: 11px;
        }

        .topText a {
          color: #bd5f49;
          font-weight: 700;
          text-decoration: none;
        }

        /* =========================
           LAYOUT
        ========================= */

        .login-layout {
          position: relative;
          z-index: 2;

          max-width: 1120px;
          min-height: calc(100vh - 130px);

          margin: auto;

          display: grid;
          grid-template-columns: 1fr 470px;

          align-items: center;
          gap: 80px;
        }

        /* =========================
           LEFT
        ========================= */

        .number {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 25px;

          color: #9a8e85;

          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .number span:first-child {
          color: #c96d55;
        }

        .number i {
          width: 35px;
          height: 1px;
          background: #d7c7bb;
        }

        .intro h1 {
          margin: 0;

          font-size: clamp(50px, 6vw, 78px);
          line-height: .98;

          letter-spacing: -4.5px;
          font-weight: 600;

          color: #292522;
        }

        .intro h1 em {
          color: #c96d55;
          font-style: normal;
        }

        .intro > p {
          max-width: 440px;

          margin: 28px 0 25px;

          color: #83786f;

          font-size: 14px;
          line-height: 1.75;
        }

        .prompt-line {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 28px;

          color: #91867e;

          font-family: monospace;
          font-size: 10px;
        }

        .line-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #c96d55;

          box-shadow:
            0 0 0 5px rgba(201, 109, 85, .11);
        }

        .prompt-line b {
          color: #c96d55;
          margin: 0 4px;
        }

        /* =========================
           PROMPT EDITOR
        ========================= */

        .code-art {
          width: min(455px, 100%);

          border: 1px solid #e5d9ce;
          border-radius: 17px;

          background: rgba(255, 252, 248, .78);

          box-shadow:
            0 22px 45px rgba(80, 61, 46, .09);

          overflow: hidden;

          transform: rotate(-1deg);

          transition: .3s ease;
        }

        .code-art:hover {
          transform: rotate(0deg) translateY(-3px);
        }

        .code-header {
          height: 42px;

          display: flex;
          align-items: center;

          padding: 0 15px;

          border-bottom: 1px solid #eee4db;

          color: #968a80;

          font-size: 9px;
        }

        .dots {
          display: flex;
          gap: 5px;
          margin-right: 14px;
        }

        .dots i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d8cbc1;
        }

        .code-header small {
          margin-left: auto;
          color: #72a083;
          font-size: 8px;
        }

        .code-body {
          padding: 22px 20px;

          color: #756a62;

          font-family: monospace;

          font-size: 11px;
          line-height: 2;
        }

        .line-no {
          display: inline-block;
          width: 28px;
          color: #c5b9b0;
        }

        .code-coral {
          color: #c45f49;
        }

        .code-dark {
          color: #66544a;
        }

        .code-footer {
          display: flex;
          justify-content: space-between;

          padding: 11px 15px;

          border-top: 1px solid #eee4db;

          color: #a0958c;
          font-size: 8px;
        }

        .code-footer span:last-child {
          color: #72a083;
        }

        /* =========================
           LOGIN CARD
        ========================= */

        .login-area {
          position: relative;
        }

        .login-card {
          padding: 38px 40px 32px;

          background: rgba(255, 253, 250, .94);

          border: 1px solid #e5d9cf;

          border-radius: 23px;

          box-shadow:
            0 28px 70px rgba(69, 52, 40, .12),
            0 5px 15px rgba(69, 52, 40, .04);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 11px;

          margin-bottom: 28px;
        }

        .card-icon {
          width: 39px;
          height: 39px;

          display: grid;
          place-items: center;

          border-radius: 11px;

          background: #f5dfd7;

          color: #c96d55;

          font-size: 15px;
        }

        .card-top div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .card-top span {
          color: #aa9e95;

          font-size: 7px;
          letter-spacing: 1.4px;
          font-weight: 800;
        }

        .card-top strong {
          color: #413a36;

          font-size: 12px;
          font-weight: 700;
        }

        /* =========================
           HEADING
        ========================= */

        .heading {
          margin-bottom: 25px;
        }

        .heading h2 {
          margin: 0;

          color: #2c2825;

          font-size: 29px;
          letter-spacing: -1.2px;

          font-weight: 600;
        }

        .heading p {
          margin: 9px 0 0;

          color: #998e86;

          font-size: 11px;
        }

        /* =========================
           GOOGLE
        ========================= */

        .google {
          width: 100%;
          height: 45px;

          border: 1px solid #e3d9d1;
          border-radius: 10px;

          background: #fffdfa;

          color: #554c46;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          font-size: 11px;
          font-weight: 650;

          cursor: pointer;

          transition: .2s;
        }

        .google:hover {
          background: #fff;
          border-color: #d3c5bb;
        }

        .googleG {
          color: #4285f4;
          font-size: 16px;
          font-weight: 800;
        }

        /* =========================
           DIVIDER
        ========================= */

        .or {
          display: flex;
          align-items: center;
          gap: 10px;

          margin: 21px 0;
        }

        .or span {
          flex: 1;
          height: 1px;
          background: #eee7e1;
        }

        .or small {
          color: #b0a59d;
          font-size: 8px;
        }

        /* =========================
           INPUTS
        ========================= */

        .field {
          margin-bottom: 16px;
        }

        .field label {
          display: block;

          margin-bottom: 7px;

          color: #665d56;

          font-size: 10px;
          font-weight: 650;
        }

        .inputBox {
          height: 46px;

          display: flex;
          align-items: center;

          border: 1px solid #dfd6cf;

          border-radius: 10px;

          background: #fffdfa;

          transition: .2s;
        }

        .inputBox:focus-within {
          border-color: #cf7862;

          box-shadow:
            0 0 0 4px rgba(201, 109, 85, .09);
        }

        .inputSymbol {
          width: 42px;

          text-align: center;

          color: #aa9c93;

          font-size: 12px;
        }

        .inputBox input {
          flex: 1;

          height: 100%;

          border: 0;
          outline: 0;

          background: transparent;

          color: #302a26;

          font-size: 11px;
        }

        .inputBox input::placeholder {
          color: #b7aea7;
        }

        .passwordHead {
          display: flex;
          justify-content: space-between;
        }

        .passwordHead button {
          border: 0;
          background: transparent;

          color: #bd644d;

          font-size: 9px;
          font-weight: 650;

          cursor: pointer;
        }

        .show {
          border: 0;
          background: transparent;

          color: #877b73;

          padding: 0 13px;

          font-size: 9px;

          cursor: pointer;
        }

        /* =========================
           REMEMBER
        ========================= */

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;

          margin: 3px 0 20px;

          color: #92877f;

          font-size: 9px;

          cursor: pointer;
        }

        .remember input {
          display: none;
        }

        .fakeCheck {
          width: 14px;
          height: 14px;

          border: 1px solid #d6cbc2;

          border-radius: 4px;

          background: #fff;
        }

        .remember input:checked + .fakeCheck {
          background: #c96d55;
          border-color: #c96d55;
        }

        /* =========================
           BUTTON
        ========================= */

        .loginBtn {
          width: 100%;
          height: 48px;

          border: 0;
          border-radius: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          background: #c96d55;

          color: white;

          font-size: 10px;
          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 12px 25px rgba(184, 91, 68, .22);

          transition: .25s;
        }

        .loginBtn:hover {
          background: #b95f49;
          transform: translateY(-2px);

          box-shadow:
            0 16px 30px rgba(184, 91, 68, .28);
        }

        .loginBtn b {
          font-size: 16px;
          font-weight: 400;

          transition: .25s;
        }

        .loginBtn:hover b {
          transform: translate(3px, -3px);
        }

        /* =========================
           FOOT
        ========================= */

        .signup {
          text-align: center;

          margin-top: 19px;

          color: #9c9189;

          font-size: 9px;
        }

        .signup a {
          color: #bd634d;

          text-decoration: none;
          font-weight: 700;
        }

        .secure {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          margin-top: 24px;

          color: #b0a59d;

          font-size: 8px;
        }

        .secure span {
          color: #6f9d81;
        }

        /* =========================
           SIDE LABEL
        ========================= */

        .side-label {
          position: absolute;

          right: -75px;
          top: 45%;

          display: flex;
          gap: 12px;

          color: #a99e96;

          font-size: 7px;
          letter-spacing: 1.5px;

          transform: rotate(90deg);
        }

        .side-label span:nth-child(2) {
          color: #c96d55;
        }

        /* =========================
           FOOTER
        ========================= */

        footer {
          position: absolute;

          bottom: 25px;
          left: 5vw;
          right: 5vw;

          display: flex;
          justify-content: space-between;

          color: #aaa097;

          font-size: 8px;
        }

        footer div {
          display: flex;
          gap: 20px;
        }

        footer a {
          color: #978c84;
          text-decoration: none;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 950px) {

          .login-layout {
            grid-template-columns: 1fr;

            max-width: 500px;
            min-height: calc(100vh - 90px);
          }

          .intro {
            display: none;
          }

          .login-area {
            width: 100%;
          }

          .side-label {
            display: none;
          }

          footer {
            display: none;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 520px) {

          .page {
            padding: 20px;
          }

          .topText {
            display: none;
          }

          .login-layout {
            min-height: calc(100vh - 80px);
          }

          .login-card {
            padding: 30px 22px 26px;
            border-radius: 18px;
          }

          .heading h2 {
            font-size: 27px;
          }
        }

      `}</style>
    </>
  );
}
