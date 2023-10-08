const { Company } = require("../models/companyModel");

exports.createCompany = async (req, res) => {
  const newCompany = new Company(req.body);
  try {
    const doc = await newCompany.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchCompanyById = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCompany = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCompany = await Company.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Company deleted successfully", deletedCompany });
  } catch (err) {
    res.status(400).json(err);
  }
};
