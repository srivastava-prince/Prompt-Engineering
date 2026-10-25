const express = require("express");
const cors = require("cors");

const UserRouter = require("./routers/userRouter");
const GeminiRouter = require("./routers/geminiRouter");

require("./connection");

const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Routes
app.use("/user", UserRouter);
app.use("/gemini", GeminiRouter);

// Home route
app.get("/", (req, res) => {
  res.send("response from the server");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});