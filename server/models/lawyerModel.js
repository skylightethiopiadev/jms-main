import mongoose from "mongoose";
import validate from "mongoose-validator";
import validator from "validator";

var nameValidator = [
  validate({
    validator: "isLength",
    arguments: [3, 50],
    message: "Name should be between {ARGS[0]} and {ARGS[1]} characters",
  }),
  validate({
    validator: "isAlphanumeric",
    passIfEmpty: true,
    message: "Name should contain alpha-numeric characters only",
  }),
];
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const LawyerSchema = new mongoose.Schema({
  levelOfEducation: {
    type: String,
  },
  phone: {
    type: String,
  },
  startingDate: {
    type: String,
  },
  licenseType: {
    type: String,
  },
  licenseLevel: {
    type: String,
  },
  specializedArea: {
    type: String,
  },
  additionalSkills: {
    type: [String],
  },
  languageSkills: {
    type: [String],
  },
  licenseFile: {
    type: Buffer,
  },
});

const Lawyer = mongoose.model("lawyer", LawyerSchema);

export default Lawyer;
