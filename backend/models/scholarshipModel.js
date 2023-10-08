const mongoose = require("mongoose");
const { Schema } = mongoose;

const scholarshipSchema = new Schema({
  title: {
    type: String,
    required: [true, "A scholarship must have a name"],
  },
  description: {
    type: String,
    required: [true, "A scholarship must have a description"],
  },
  image: String,
  organizationType: {
    type: String,
    enum: ["private", "government"],
    required: [true, "A scholarship must have an organizationType"],
  },
  organizationName: {
    type: String,
    required: [true, "A scholarship must have an organizationName"],
  },
  field: {
    type: String,

    required: [true, "A scholarship must have a field"],
  },
  hostCountry: {
    type: String,
    required: [true, "A scholarship must have a hostCountry"],
  },
  university: {
    type: String,
    required: [true, "A scholarship must have a university"],
  },
  course: {
    type: String,
    required: [true, "A scholarship must have a course"],
  },
  eligibilityString: {
    type: String,
    enum: [
      "High School Diploma",
      "Secondary Education",
      "Higher Secondary Education",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctoral Degree (Ph.D.)",
    ],
    required: [true, "A scholarship must have eligibility criteria"],
  },
  incomeRange: {
    type: Number,
    required: [true, "Income range is required"],
  },

  registrationEndDate: {
    type: Date,
    required: [true, "A scholarship must have a registration end date"],
  },
  fundingType: {
    type: String,
    required: [true, "A scholarship must have a fundingType"],
  },
  fundingValue: {
    type: Number,
    required: [true, "A scholarship must have a fundingValue"],
  },
  caste: {
    type: String,
    enum: ["SC", "ST", "OBC", "General"],
  },
});

exports.Scholarship = mongoose.model("Scholarship", scholarshipSchema);
