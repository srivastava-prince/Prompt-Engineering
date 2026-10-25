
"use client";

import { useState } from "react";
import "./Playground.css";

export default function PlaygroundPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0.7);

  const suggestions = [
    "Write a professional product description",
    "Explain this concept in simple words",
    "Create a social media caption",
  ];

  const runPrompt = async () => {
    if (!prompt.trim()) {
      setResponse("Please write a prompt first.");
      return;
    }

    try {
      setLoading(true);
      setResponse("");

      const res = await fetch(
        "http://localhost:5000/gemini/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong"
        );
      }

      setResponse(data.response);
    } catch (error) {
      console.error("Gemini Error:", error);

      setResponse(
        "Gemini is temporarily busy right now. Please try again in a few seconds."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearWorkspace = () => {
    setPrompt("");
    setResponse("");
  };

  const copyResponse = async () => {
    if (!response) return;

    try {
      await navigator.clipboard.writeText(response);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const useSuggestion = (text) => {
    setPrompt(text);
  };

  return (
    <main className="pg-page">

      {/* Background decorations */}
      <div className="pg-orb pg-orb-one"></div>
      <div className="pg-orb pg-orb-two"></div>
      <div className="pg-grid"></div>

      {/* HEADER */}
      <header className="pg-header">

        <div className="pg-brand">
          <div className="pg-logo">
            <span>✦</span>
          </div>

          <div>
            <h2>Promptly</h2>
            <p>Prompt Engineering Playground</p>
          </div>
        </div>

        <div className="pg-header-center">
          <span className="live-dot"></span>
          Gemini connected
        </div>

        <button
          className="pg-clear"
          onClick={clearWorkspace}
        >
          <span>↻</span>
          Reset
        </button>

      </header>

      {/* HERO */}
      <section className="pg-hero">

        <div className="hero-tag">
          <span>✦</span>
          AI PROMPT LAB
        </div>

        <h1>
          Build better
          <span>Prompts.</span>
        </h1>

        <p>
          Write an instruction, experiment with it,
          and see how Gemini transforms your idea
          into a useful response.
        </p>

      </section>

      {/* MAIN WORKSPACE */}
      <section className="pg-workspace">

        {/* PROMPT SIDE */}
        <div className="pg-prompt-card">

          <div className="card-glow"></div>

          <div className="card-header">

            <div className="card-title">
              <span className="step-badge">01</span>

              <div>
                <span>PROMPT INPUT</span>
                <h3>Your instruction</h3>
              </div>
            </div>

            <span className="live-label">
              DRAFT
            </span>

          </div>

          <div className="prompt-box">

            <div className="prompt-top">
              <div className="window-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>prompt.md</span>
            </div>

            <textarea
              value={prompt}
              onChange={(e) =>
                setPrompt(e.target.value)
              }
              placeholder={`Start with an idea...

Example:
Create a premium product description
for a wireless headphone. Use a modern,
confident and concise tone.`}
            />

            <div className="prompt-bottom">
              <span>
                {prompt.length} characters
              </span>

              <span>
                Gemini / text generation
              </span>
            </div>

          </div>

          <div className="suggestion-area">

            <span className="suggestion-title">
              TRY A STARTER
            </span>

            <div className="suggestions">

              {suggestions.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    useSuggestion(item)
                  }
                >
                  <span>0{index + 1}</span>
                  {item}
                  <b>↗</b>
                </button>
              ))}

            </div>

          </div>

        </div>

        {/* RESPONSE SIDE */}
        <div className="pg-response-card">

          <div className="response-accent"></div>

          <div className="card-header">

            <div className="card-title">

              <span className="step-badge response-step">
                02
              </span>

              <div>
                <span>MODEL OUTPUT</span>
                <h3>Gemini response</h3>
              </div>

            </div>

            <button
              className="copy-response"
              onClick={copyResponse}
              disabled={!response}
            >
              COPY
            </button>

          </div>

          <div className="response-content">

            {loading ? (
              <div className="loading-screen">

                <div className="loading-orbit">
                  <span></span>
                </div>

                <h3>Thinking...</h3>

                <p>
                  Gemini is generating your response
                </p>

              </div>
            ) : response ? (
              <pre>{response}</pre>
            ) : (
              <div className="empty-response">

                <div className="empty-art">
                  <span>✦</span>
                  <i></i>
                  <b></b>
                </div>

                <h3>
                  Your output starts here
                </h3>

                <p>
                  Write a prompt and hit
                  <strong> Run prompt </strong>
                  to generate your first response.
                </p>

              </div>
            )}

          </div>

          <div className="response-footer">

            <span>
              GEMINI 3.8 FLASH
            </span>

            <span>
              {response ? "● READY" : "○ IDLE"}
            </span>

          </div>

        </div>

      </section>

      {/* CONTROL BAR */}
      <section className="pg-controls">

        <div className="control-item model-control">

          <span>MODEL</span>

          <div className="model-value">
            <div className="gemini-icon">
              ✦
            </div>

            <strong>Gemini 3.8 Flash</strong>

            <small>⌄</small>
          </div>

        </div>

        <div className="control-item">

          <span>TEMPERATURE</span>

          <div className="temp-control">

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) =>
                setTemperature(
                  Number(e.target.value)
                )
              }
            />

            <strong>
              {temperature.toFixed(1)}
            </strong>

          </div>

        </div>

        <div className="control-item token-control">

          <span>MAX TOKENS</span>

          <strong>2048</strong>

        </div>

        <button
          className="run-prompt"
          onClick={runPrompt}
          disabled={loading}
        >
          <div>
            <span>
              {loading
                ? "GENERATING"
                : "RUN PROMPT"}
            </span>

            <small>
              {loading
                ? "Gemini is thinking..."
                : "Execute your instruction"}
            </small>
          </div>

          <b>
            {loading ? "..." : "↗"}
          </b>
        </button>

      </section>

      {/* BOTTOM INFO */}
      <section className="pg-bottom">

        <div className="bottom-title">
          <span>01 / PROMPTING TIP</span>

          <h3>
            Context creates clarity.
          </h3>
        </div>

        <div className="bottom-tip">
          <span>ROLE</span>
          <p>
            Tell the model who it should act as.
          </p>
        </div>

        <div className="bottom-tip">
          <span>CONTEXT</span>
          <p>
            Give useful background information.
          </p>
        </div>

        <div className="bottom-tip">
          <span>OUTPUT</span>
          <p>
            Clearly define the result you expect.
          </p>
        </div>

      </section>

    </main>
  );
}

