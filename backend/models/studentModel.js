const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const studentSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email address",
    },
  },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  educationalDetails: {
    type: String,
    required: true,
    enum: [
      "High School Diploma",
      "Secondary Education",
      "Higher Secondary Education",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctoral Degree (Ph.D.)",
    ],
  },
  interestedScholarshipCategories: {
    type: [String],
    enum: [
      "Accounting",
      "Agriculture",
      "Engineering",
      "Economics",
      "Law",
      "Arts",
      "Hospitality",
    ],
  },
  createdTimestamp: { type: Date, default: Date.now },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  caste: {
    type: String,
    enum: ["SC", "ST", "OBC", "General"],
  },
  staredScholarships: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Scholarship",
      required: true,
    },
  ],
});

studentSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  if (candidatePassword === userPassword) {
    return true;
  } else {
    return false;
  }
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
