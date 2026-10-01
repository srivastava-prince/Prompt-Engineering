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
          background: #eef7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          font-family: Inter, Arial, sans-serif;
          color: #172033;
        }

        .card {
          width: 100%;
          max-width: 1100px;
          min-height: 670px;
          display: grid;
          grid-template-columns: 47% 53%;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(50, 90, 125, 0.14);
        }

        /* LEFT SIDE */

        .left {
          position: relative;
          padding: 42px 48px;
          background: linear-gradient(
            145deg,
            #e5f4ff,
            #f5fbff 55%,
            #eaf5ff
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
          background: rgba(99, 181, 239, 0.13);
          right: -100px;
          top: -100px;
        }

        .circle2 {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(145, 211, 255, 0.14);
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
          font-weight: 700;
        }

        .brandIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: white;
          color: #438dcc;
          font-size: 20px;
          box-shadow: 0 8px 22px rgba(50, 120, 170, 0.13);
        }

        .content {
          position: relative;
          z-index: 2;
        }

        .tag {
          color: #5796c8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
          margin-bottom: 18px;
          display: block;
        }

        .content h1 {
          margin: 0;
          font-size: 42px;
          line-height: 1.12;
          letter-spacing: -1.5px;
          font-weight: 700;
        }

        .content h1 span {
          color: #438dcc;
        }

        .description {
          max-width: 420px;
          margin: 20px 0 32px;
          color: #63778b;
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
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #438dcc;
          box-shadow: 0 5px 15px rgba(60, 120, 160, 0.08);
        }

        .feature strong {
          display: block;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 3px;
          color: #26384d;
        }

        .feature small {
          font-size: 10px;
          color: #7d8d9d;
        }

        .footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          color: #899aaa;
          font-size: 10px;
        }

        /* RIGHT SIDE */

        .right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 65px;
          background: white;
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
          font-weight: 700;
          letter-spacing: -0.6px;
        }

        .heading p {
          margin: 0;
          color: #8290a0;
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
        }

        .group label {
          font-size: 11px;
          font-weight: 600;
          color: #48586b;
        }

        .group input {
          width: 100%;
          height: 45px;
          border: 1px solid #dce5ed;
          border-radius: 10px;
          outline: none;
          padding: 0 13px;
          font-size: 12px;
          color: #26364a;
          background: #fbfdff;
          transition: 0.2s;
        }

        .group input::placeholder {
          color: #aab5bf;
        }

        .group input:focus {
          border-color: #72afe0;
          background: white;
          box-shadow: 0 0 0 3px rgba(92, 164, 218, 0.1);
        }

        .password {
          position: relative;
        }

        .password input {
          padding-right: 55px;
        }

        .show {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #438dcc;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #7e8a98;
          font-size: 10px;
          line-height: 1.5;
          margin-top: 1px;
        }

        .terms input {
          margin-top: 2px;
          accent-color: #4d96d2;
        }

        .terms a {
          color: #438dcc;
          text-decoration: none;
        }

        .button {
          height: 47px;
          border: none;
          border-radius: 11px;
          background: #4d96d2;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 9px 22px rgba(67, 145, 207, 0.2);
          transition: 0.2s;
        }

        .button:hover {
          background: #3988c8;
          transform: translateY(-1px);
        }

        .arrow {
          font-size: 16px;
          transition: 0.2s;
        }

        .button:hover .arrow {
          transform: translateX(3px);
        }

        .login {
          text-align: center;
          margin-top: 23px;
          color: #8995a2;
          font-size: 11px;
        }

        .login a {
          color: #438dcc;
          text-decoration: none;
          font-weight: 600;
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
            color: #438dcc;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .page {
            padding: 0;
            background: white;
          }

          .card {
            min-height: 100vh;
            border-radius: 0;
            box-shadow: none;
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
                    <strong>Test & refine</strong>
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
                    <label>First name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="group">
                    <label>Last name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="@example.com"
                    required
                  />
                </div>

                <div className="group">
                  <label>Password</label>

                  <div className="password">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      required
                    />

                    <button
                      type="button"
                      className="show"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="group">
                  <label>Confirm password</label>

                  <div className="password">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                    />

                    <button
                      type="button"
                      className="show"
                      onClick={() =>
                        setShowConfirm(!showConfirm)
                      }
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
