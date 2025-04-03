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
  },
  { timestamps: true }
);

const Consent = mongoose.model("Consent", consentSchema);

module.exports = Consent;
