import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator.js";

const caseSchema = new Schema(
  {
    category: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },

    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "category",
    //   required: [true, "please select a category"],
    // },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      // required: [true, "please select a category"],
    },

    type: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },
    subType: {
      type: String,
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },
    services: {
      type: [String],
      // unique: [true, "This case name is taken"],
      required: [true, "Please select {PATH}"],
    },

    description: {
      type: String,
      validate: valid.paragraph("Description", 100, 1000),
      required: [true, "Description is required"],
    },

    // caseManager: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "case-manager",
    //   required: [true, "Please select case manager"],
    // },

    status: {
      type: String,
      default: "Pending",
    },

    year: {
      type: Number,
      default: new Date().getFullYear() * 1,
    },

    // deleted: {
    //   type: Boolean,
    //   default: false,
    // },
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

caseSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
caseSchema.plugin(uniqueValidator);
export const Case = mongoose.model("case", caseSchema);
