import mongoose from "mongoose";
import * as valid from "../utils/validator.js";

const lawyerSchema = new mongoose.Schema(
  {
    levelOfEducation: {
      type: String,
      validate: valid.paragraph("Level of education", 4, 50),
      required: [true, "Level of education is required"],
    },

    startingDate: {
      type: String,
      // validate: valid.date("Starting date"),
      // required: [true, "Starting date is required"],
    },

    licenseType: {
      type: String,
      validate: valid.paragraph("License type", 4, 50),
      required: [true, "License type is required"],
    },

    licenseLevel: {
      type: String,
      validate: valid.numberBetween("License level", 1, 5),
      required: [true, "License level is required"],
    },

    specializedArea: {
      type: String,
      validate: valid.paragraph("Specialized area", 3, 100),
      required: [true, "Specialized area is required"],
    },

    additionalSkills: {
      type: [String],
      // validate: valid.paragraph("Additional skills", 3, 100),
      required: [true, "Additional skills is required"],
    },

    languageSkills: {
      type: [String],
      // validate: valid.paragraph("Language skills", 3, 100),
      required: [true, "Language skills is required"],
    },

    lawyerType: {
      type: String,
      // validate: valid.paragraph("Language skills", 3, 100),
      required: [true, "Lawyer type is required"],
    },

    status: {
      type: String,
      default: "Active",
    },

    licenseFile: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

lawyerSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

export const Lawyer = mongoose.model("lawyer", lawyerSchema);
