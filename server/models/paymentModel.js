import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    case: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "case",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    createdBy: {
      type: Object,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },

    percent: {
      type: Number,
    },

    total: {
      type: Number,
    },

    remaining: {
      type: Number,
    },

    status: {
      type: String,
      default: "Pending",
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

paymentSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

export const Payment = mongoose.model("payment", paymentSchema);
