const express = require("express");
const { generateLesson } =
  require("../services/huggingfaceService");

const router = express.Router();

router.post("/generate", async (req, res) => {

  try {

    const { topic, difficulty, action } = req.body;

    const lesson =
  await generateLesson(
    topic,
    difficulty,
    action
  );

    res.json({
      success: true,
      lesson
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

module.exports = router;