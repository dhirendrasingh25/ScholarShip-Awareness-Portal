const express = require("express");
const {
  createScholarships,
  fetchAllScholarships,
  fetchScholarshipsById,
  updateScholarships,
} = require("../controllers/scholarshipController");

const router = express.Router();

router
  .post("/", createScholarships)
  .get("/", fetchAllScholarships)
  .get("/:id", fetchScholarshipsById)
  .patch("/:id", updateScholarships);

exports.router = router;
