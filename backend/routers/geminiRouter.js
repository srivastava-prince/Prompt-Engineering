const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Models in fallback order
const GEMINI_MODELS = [
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
  "gemini-2.5-flash-lite",
];


// ==========================================
// GENERATE RESPONSE
// ==========================================

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    let lastError = null;

    // Try different models
    for (const model of GEMINI_MODELS) {
      console.log(`\nTrying model: ${model}`);

      try {
        const response = await ai.models.generateContent({
          model: model,
          contents: prompt,
        });

        console.log(`Success with model: ${model}`);

        return res.status(200).json({
          success: true,
          response: response.text,
          model: model,
        });

      } catch (error) {
        lastError = error;

        console.log(
          `Model ${model} failed`
        );

        console.log(
          "Error status:",
          error.status
        );

        // If not a 503, don't keep switching models
        if (error.status !== 503) {
          break;
        }

        // 503 = model temporarily unavailable
        console.log(
          `Trying next model...`
        );
      }
    }

    // All models failed
    console.error(
      "All Gemini models failed:",
      lastError
    );

    return res.status(503).json({
      success: false,
      error:
        "Gemini is currently experiencing high demand. Please try again in a few seconds.",
    });

  } catch (error) {
    console.error(
      "Gemini API Error:",
      error
    );

    return res.status(500).json({
      success: false,
      error:
        error.message ||
        "Something went wrong",
    });
  }
});


// ==========================================
// CHECK AVAILABLE MODELS
// ==========================================

router.get("/models", async (req, res) => {
  try {
    const models = await ai.models.list();

    const result = [];

    for await (const model of models) {
      result.push({
        name: model.name,
        supportedActions:
          model.supportedActions,
      });
    }

    res.status(200).json({
      success: true,
      models: result,
    });

  } catch (error) {
    console.error(
      "Models Error:",
      error
    );

    res.status(500).json({
      success: false,
      error:
        error.message ||
        "Unable to fetch models",
    });
  }
});


module.exports = router;