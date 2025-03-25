const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  ageGroup: String,
  country: String,
  province: String,
  email: String,
  phone: String,
  abroadDuration: String,
  educationLevel: String,
  specialization: String,
  currentJob: String,
  workExperience: String,
  willingToContribute: String,
  contributionFields: [String],
  contributionMethod: String,
  additionalComments: String,
});

module.exports = mongoose.model("Survey", SurveySchema);
