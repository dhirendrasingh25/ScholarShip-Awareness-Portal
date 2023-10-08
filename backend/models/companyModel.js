const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  ownerName: {
    type: String,
    required: [true, "A scholarship must have a name"],
  },
  description: {
    type: String,
    required: [true, "A scholarship must have a description"],
  },
  logo: String,
  organizationType: {
    type: String,
    enum: ["private", "government"],
    default: "private",
    required: [true, "A scholarship must have an organizationType"],
  },
  organizationName: {
    type: String,
    required: [true, "A scholarship must have an organizationName"],
  },
  country: {
    type: String,
    required: [true, "A scholarship must have a Country"],
  },
  address: {
    type: String,
    required: [true, "A scholarship must have a address"],
  },
});

exports.Company = mongoose.model("Company", companySchema);
