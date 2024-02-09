import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator.js";

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    validate: valid.paragraph("Address", 4, 200),
    required: [true, "Service area name is required"],
  },
  type: {
    type: String,
    enum: {
      values: ["civil", "crime"],
      message: "Type must be either 'civil' or 'crime'",
    },
    required: [true, "Type must be either 'civil' or 'crime'"],
  },
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
categorySchema.plugin(uniqueValidator);

export const Category = mongoose.model("categories", categorySchema);
