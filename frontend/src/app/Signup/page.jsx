
"use client";

import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          background: #f1f3f6;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          font-family: Inter, Arial, sans-serif;
          color: #202638;
        }

        .card {
          width: 100%;
          max-width: 1100px;
          min-height: 670px;
          display: grid;
          grid-template-columns: 47% 53%;
          background: #ffffff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(32, 38, 56, 0.10);
          border: 1px solid #e4e7ed;
        }

        /* LEFT SIDE */

        .left {
          position: relative;
          padding: 42px 48px;
          background: linear-gradient(
            145deg,
            #e8ebf2,
            #f5f6f9 55%,
            #e9edf5
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .circle1 {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(49, 85, 198, 0.09);
          right: -100px;
          top: -100px;
        }

        .circle2 {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(92, 120, 205, 0.08);
          left: -100px;
          bottom: -100px;
        }

        .brand {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 23px;
          font-weight: 750;
          letter-spacing: -0.6px;
          color: #202638;
        }

        .brandIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #3155c6;
          color: white;
          font-size: 20px;
          box-shadow: 0 8px 22px rgba(49, 85, 198, 0.20);
        }

        .content {
          position: relative;
          z-index: 2;
        }

        .tag {
          color: #3155c6;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
          margin-bottom: 18px;
          display: block;
        }

        .content h1 {
          margin: 0;
          font-size: 42px;
          line-height: 1.12;
          letter-spacing: -1.5px;
          font-weight: 750;
          color: #202638;
        }

        .content h1 span {
          color: #3155c6;
        }

        .description {
          max-width: 420px;
          margin: 20px 0 32px;
          color: #687286;
          font-size: 14px;
          line-height: 1.7;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .featureIcon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e1e6f1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3155c6;
          box-shadow: 0 5px 15px rgba(32, 38, 56, 0.04);
        }

        .feature strong {
          display: block;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #293247;
        }

        .feature small {
          font-size: 10px;
          color: #7c8597;
        }

        .footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #858da0;
          font-size: 10px;
        }

        /* RIGHT SIDE */

        .right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 42px 65px;
          background: #ffffff;
        }

        .form {
          width: 100%;
          max-width: 430px;
        }

        .mobileBrand {
          display: none;
        }

        .heading {
          margin-bottom: 27px;
        }

        .heading h2 {
          margin: 0 0 8px;
          font-size: 29px;
          font-weight: 750;
          letter-spacing: -0.8px;
          color: #202638;
        }

        .heading p {
          margin: 0;
          color: #7b8496;
          font-size: 13px;
        }

        .formBody {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
        }

        .group {
          display: flex;
          flex-direction: column;
          gap: 7px;
          min-width: 0;
        }

        .group label {
          font-size: 12px;
          font-weight: 650;
          color: #414b60;
        }

        .group input {
          width: 100%;
          height: 45px;
          border: 1px solid #dfe3eb;
          border-radius: 10px;
          outline: none;
          padding: 0 13px;
          font-size: 13px;
          color: #202638;
          background: #f8f9fb;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .group input::placeholder {
          color: #a0a7b5;
        }

        .group input:focus {
          border-color: #3155c6;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(49, 85, 198, 0.10);
        }

        .password {
          position: relative;
        }

        .password input {
          padding-right: 58px;
        }

        .show {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #3155c6;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .show:hover {
          color: #243f9b;
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #727c8f;
          font-size: 11px;
          line-height: 1.6;
          margin-top: 1px;
        }

        .terms input {
          margin-top: 3px;
          accent-color: #3155c6;
          flex-shrink: 0;
        }

        .terms a {
          color: #3155c6;
          text-decoration: none;
          font-weight: 650;
        }

        .terms a:hover,
        .login a:hover {
          text-decoration: underline;
        }

        .button {
          min-height: 47px;
          border: none;
          border-radius: 11px;
          background: #3155c6;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 9px 22px rgba(49, 85, 198, 0.20);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }

        .button:hover {
          background: #2746aa;
          transform: translateY(-1px);
          box-shadow: 0 12px 25px rgba(49, 85, 198, 0.25);
        }

        .button:active {
          transform: translateY(0);
        }

        .arrow {
          font-size: 17px;
          transition: transform 0.2s;
        }

        .button:hover .arrow {
          transform: translateX(3px);
        }

        .login {
          text-align: center;
          margin-top: 23px;
          color: #81899a;
          font-size: 12px;
        }

        .login a {
          color: #3155c6;
          text-decoration: none;
          font-weight: 700;
        }

        /* RESPONSIVE */

        @media (max-width: 850px) {
          .page {
            padding: 18px;
          }

          .card {
            grid-template-columns: 1fr;
            max-width: 520px;
          }

          .left {
            display: none;
          }

          .right {
            padding: 45px 35px;
          }

          .mobileBrand {
            display: block;
            color: #3155c6;
            font-size: 16px;
            font-weight: 750;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .page {
            padding: 0;
            background: #ffffff;
          }

          .card {
            min-height: 100vh;
            border-radius: 0;
            box-shadow: none;
            border: none;
          }

          .right {
            padding: 35px 22px;
          }

          .row {
            grid-template-columns: 1fr;
          }

          .heading h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <main className="page">
        <div className="card">
          {/* LEFT */}
          <section className="left">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <div className="brand">
              <div className="brandIcon">✦</div>
              <span>Promptly</span>
            </div>

            <div className="content">
              <span className="tag">
                PROMPT ENGINEERING PLAYGROUND
              </span>

              <h1>
                Build better prompts.
                <br />
                <span>Get better results.</span>
              </h1>

              <p className="description">
                Create, test and improve your AI prompts in one
                simple and powerful workspace.
              </p>

              <div className="features">
                <div className="feature">
                  <div className="featureIcon">✦</div>
                  <div>
                    <strong>Create smarter prompts</strong>
                    <small>Turn ideas into structured prompts.</small>
                  </div>
                </div>

                <div className="feature">
                  <div className="featureIcon">◈</div>
                  <div>
                    <strong>Test &amp; refine</strong>
                    <small>Experiment and improve your results.</small>
                  </div>
                </div>

                <div className="feature">
                  <div className="featureIcon">⌁</div>
                  <div>
                    <strong>Keep everything organized</strong>
                    <small>Manage your prompts in one place.</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer">
              <span>© 2026 Promptly</span>
              <span>AI • Prompts • Creativity</span>
            </div>
          </section>

          {/* RIGHT */}
          <section className="right">
            <div className="form">
              <div className="heading">
                <span className="mobileBrand">✦ Promptly</span>
                <h2>Create Your Account</h2>
                <p>Start building powerful prompts today.</p>
              </div>

              <form className="formBody">
                <div className="row">
                  <div className="group">
                    <label htmlFor="firstName">First name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="password">Password</label>
                  <div className="password">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      required
                    />

                    <button
                      type="button"
                      className="show"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <div className="password">
                    <input
                      id="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      required
                    />

                    <button
                      type="button"
                      className="show"
                      onClick={() => setShowConfirm(!showConfirm)}
                      aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                    >
                      {showConfirm ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <label className="terms">
                  <input type="checkbox" required />
                  <span>
                    I agree to the{" "}
                    <a href="#">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#">Privacy Policy</a>.
                  </span>
                </label>

                <button type="submit" className="button">
                  Create account
                  <span className="arrow">→</span>
                </button>
              </form>

              <div className="login">
                Already have an account?{" "}
                <a href="/login">Sign in</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
