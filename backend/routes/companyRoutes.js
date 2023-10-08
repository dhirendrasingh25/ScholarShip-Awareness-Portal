const express = require("express");
const {
  createCompany,
  fetchAllCompanies,
  fetchCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const router = express.Router();

router
  .post("/", createCompany)
  .get("/", fetchAllCompanies)
  .get("/:id", fetchCompanyById)
  .patch("/:id", updateCompany)
  .delete("/:id", deleteCompany);

exports.router = router;
