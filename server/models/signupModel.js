import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import uniqueValidator from "mongoose-unique-validator";
import * as valid from "../utils/validator";

const signupSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      validate: valid.name("First name"),
      required: [true, "First name is required"],
    },

    middleName: {
      type: String,
      validate: valid.name("Middle name"),
      required: [true, "Middle name is required"],
    },

    lastName: {
      type: String,
      validate: valid.name("Last name"),
      required: [true, "Last name is required"],
    },

    gender: {
      type: String,
      validate: valid.gender("Gender"),
      required: [true, "Gender is required"],
    },

    userName: {
      type: String,
      unique: true,
      validate: valid.userName("User name"),
      required: [true, "User name is required"],
    },

    email: {
      type: String,
      unique: true,
      validate: valid.email("Email"),
      required: [true, "Email is required"],
    },

    phone: {
      type: String,
      validate: valid.phone("Phone"),
      required: [true, "Phone is required"],
    },

    address: {
      type: String,
      validate: valid.paragraph("Address", 4, 200),
      required: [true, "Address is required"],
    },

    role: { type: String, default: "customer" },
    userType: { type: String },
    nationality: {
      type: String,
      validate: valid.paragraph("Nationality", 4, 100),
    },
    userId: { type: String, required: [true, "User id is required"] },
    password: {
      type: String,
      select: false,
      validate: valid.password("Password"),
    },
    confirmPassword: {
      type: String,
      validate: valid.confirmPassword("Confirm password"),
    },
    modifiedDate: Number,
    createdAt: { type: Number, default: Date.now() },
    passwordChangedAt: Number,
    resetToken: String,
    resetTokenExpires: Number,
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dkvjvnil8/image/upload/v1689691516/defaultProfile.jpg",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

signupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

signupSchema.methods.passwordCheck = async (
  currentPassword,
  candidatePassword
) => {
  return await bcrypt.compare(candidatePassword, currentPassword);
};

signupSchema.methods.isPasswordChanged = async function (iat) {
  return iat <= parseInt(this.passwordChangedAt / 1000, 10);
};

signupSchema.methods.createResetToken = async function () {
  const resetToken = await crypto.randomBytes(32).toString("hex");
  this.resetToken = await crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetTokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

signupSchema.methods.isTokenExpired = async function () {
  return this.resetTokenExpires < Date.now();
};

signupSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() + 1000;
  next();
});

signupSchema.plugin(uniqueValidator);
export const User = mongoose.model("users", signupSchema);
