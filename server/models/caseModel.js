import mongoose, { Schema } from "mongoose";

const caseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});
export const Case = mongoose.model("case", caseSchema);
