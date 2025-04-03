const express = require("express");
const Survey = require("../models/Survey");

const router = express.Router();

// POST route to save survey data
router.post("/", async (req, res) => {
  try {
    if (!req.body.gdprConsent) {
      return res
        .status(400)
        .json({ error: "Consent is required to submit the survey." });
    }

    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({ message: "Survey data saved successfully!" });
  } catch (error) {
    console.error("Error saving survey:", error);
    res.status(500).json({ error: "Failed to save survey data." });
  }
});

module.exports = router;
