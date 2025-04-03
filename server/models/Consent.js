const mongoose = require("mongoose");

const consentSchema = new mongoose.Schema(
  {
    consent: {
      type: String,
      enum: ["all", "essential"], // Ensure consent is one of these values
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now, // Automatically set the timestamp when the consent is recorded
    },
    language: {
      type: String, // Store the user's language (e.g., "en", "ar")
      required: false,
    },
    userAgent: {
      type: String, // Store the user's browser or device information
      required: false,
    },
    consentTypes: {
      type: Map, // Store detailed consent types (e.g., essential, analytics, marketing)
      of: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Consent = mongoose.model("Consent", consentSchema);

module.exports = Consent;
