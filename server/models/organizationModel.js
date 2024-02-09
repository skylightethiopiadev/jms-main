import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator.js";

const institutionSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Company name is required"],
    unique: [true, "This name is taken"],
  },
  tinNumber: {
    type: String,
    required: [true, "Tin number is required"],
    validate: valid.paragraph("Address", 4, 200),
    unique: [true, "This Tin number is taken"],
  },
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
institutionSchema.plugin(uniqueValidator);

export const Institution = mongoose.model("Institution", institutionSchema);
