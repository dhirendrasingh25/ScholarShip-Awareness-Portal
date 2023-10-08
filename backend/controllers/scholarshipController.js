const { Scholarship } = require("../models/scholarshipModel");

exports.createScholarships = async (req, res) => {
  const scholarships = new Scholarship(req.body);
  try {
    const doc = await scholarships.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllScholarships = async (req, res) => {
  try {
    const scholarship = await Scholarship.find();
    res.status(200).json(scholarship);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchScholarshipsById = async (req, res) => {
  const { id } = req.params;

  try {
    const scholarship = await Scholarship.findById(id);
    res.status(200).json(scholarship);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateScholarships = async (req, res) => {
  const { id } = req.params;
  try {
    const scholarship = await Scholarship.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(scholarship);
  } catch (err) {
    res.status(400).json(err);
  }
};
