const express = require("express");
const cors = require("cors");
require("dotenv").config();
const lessonRoutes = require("./routes/lessonRoutes");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use("/api", lessonRoutes);
app.get("/", (req, res) => {
  res.send("Lesson Planner API Running");
});
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log(
  process.env.HF_TOKEN ? "HF Token Loaded" : "No HF Token"
);
console.log(
  process.env.HF_TOKEN
    ? "HF Token Loaded finallyyyy"
    : "HF Token Missing"
);