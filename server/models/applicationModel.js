const mongoose = require("mongoose");
const valid = require("../utils/validator");
const uniqueValidator = require("mongoose-unique-validator");

const applicationSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: [true, "please select case category"],
    },

    case: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "case",
      required: [true, "please select your case"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "please select user"],
    },

    lawyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "lawyer",
    },

    caseManager: {
      //from case
      type: mongoose.Schema.Types.ObjectId,
      ref: "case-manager",
      required: [true, "please select category"],
    },

    lawyerAssignedBy: {
      type: String,
      default: "user",
    },

    lawyerAssignmentStatus: {
      type: String,
      default: "assigned",
    },

    description: {
      type: String,
      validate: valid.paragraph("Description", 100, 1000),
      required: [true, "Description is required"],
    },

    status: {
      type: String,
      default: "Pending",
    },

    attachments: {
      type: [String],
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

applicationSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

uniqueValidator.defaults.message = "{PATH} '{VALUE}' is taken";
applicationSchema.plugin(uniqueValidator);
const Application = mongoose.model("application", applicationSchema);
module.exports = { Application };
