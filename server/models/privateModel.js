import mongoose from "mongoose";
import * as valid from "../utils/validator.js";

const privateSchema = new mongoose.Schema(
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
      type: String,
      validate: valid.paragraph("Address", 4, 200),
    },

    nationality: {
      type: String,
      validate: valid.paragraph("Nationality", 4, 100),
    },

    isPro: {
      type: Boolean,
      default: false,
    },

    profilePicture: {
      type: String,
    },

    profileFillStatus: {
      type: Number,
      default: 20,
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

privateSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

privateSchema.pre("init", function (next) {
  let percent = 20;
  const fields = [
    "firstName",
    "middleName",
    "lastName",
    "gender",
    "phone",
    "address",
    "nationality",
    "profilePicture",
  ];
  fields.map((field) => {
    if (this[field]?.length > 0) {
      percent += 10;
    }
  }); 

  console.log(this, percent, "percent");
  this.profileFillStatus = percent;
  next();
});

export const Private = mongoose.model("private", privateSchema);
