import mongoose from "mongoose";
import * as valid from "../utils/validator.js";

const lawyerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      validate: valid.name("First name"),
    },

    middleName: {
      type: String,
      validate: valid.name("Middle name"),
    },

    lastName: {
      type: String,
      validate: valid.name("Last name"),
    },

    gender: {
      type: String,
      validate: valid.gender("Gender"),
    },

    phone: {
      type: String,
      validate: valid.phone("Phone"),
    },

    address: {
      default: "gedeon",
      type: String,
      validate: valid.paragraph("Address", 4, 200),
    },

    nationality: {
      type: String,
      validate: valid.paragraph("Nationality", 4, 100),
    },

    lawyerId: {
      type: String,
      // validate: valid.paragraph("ID", 4, 100),
    },

    acquireLicense: {
      default: false,
      type: Boolean,
    },

    licenseNumber: {
      type: String,
    },

    levelOfEducation: {
      type: String,
      // enum: ["LLB", "LLM", "PHD"],
    },

    areaOfExpertise: {
      type: String,
      // validate: valid.paragraph("Area of expertise", 4, 100),
    },

    yearOfExperience: {
      type: Number,
      // validate: valid.required("Year of experience"),
    },

    preferenceArea: {
      type: [String],
      // validate: valid.paragraph("Preference Area", 4, 100),
    },

    yearOfExpire: {
      type: Date,
    },

    resumeAndCoverLetter: {
      type: String,
    },

    additionalDocuments: {
      type: String,
    },

    bio: {
      type: String,
      // validate: valid.paragraph("Biography", 5, 400),
    },

    profilePicture: {
      type: String,
      default: "https",
    },

    profileFillStatus: {
      type: Number,
    },

    replacementAttorney: {
      type: Number,
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

lawyerSchema.pre("save", function (next) {
  let percent = 25;
  const fields = [
    "firstName",
    "middleName",
    "lastName",
    "gender",
    "phone",
    "address",
    "nationality",
    "ID",
    "acquireLicense",
    "licenseNo",
    "levelOfEducation",
    "areaOfExpertise",
    "yearOfExperience",
    "preferenceArea",
    "yearOfExpire",
    "profilePicture",
    "resumeAndCoverLetter",
    "bio",
  ];
  fields.map((field) => {
    if (this[field]?.length > 0) {
      percent += 5;
    }
  });

  this.profileFillStatus = percent;
  next();
});

export const Lawyer = mongoose.model("lawyer", lawyerSchema);
