const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

exports.router = router;
