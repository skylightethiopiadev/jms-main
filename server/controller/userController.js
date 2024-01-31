const AppError = require("../utils/AppError");
const asyncCatch = require("express-async-catch");
const { User } = require("./../models/signupModel");
const { tokenGenerator } = require("../utils/tokenGenerator");
const crypto = require("crypto");
const { sendEmailMessage } = require("./emailHandler");

exports.signupHandler = asyncCatch(async (req, res, next) => {
  const profilePicture = req.files.profilePicture;

  const data = await User.create({
    ...req.body,
    profilePicture: profilePicture ? profilePicture[0].path : undefined,
  });

  const token = tokenGenerator(res, data._id);

  return res
    .status(200)
    .json({ message: "Account Created Successfully", token, data });
});

exports.loginHandler = asyncCatch(async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password)
    return next(new AppError("provide email and password", 404));
  const user = await User.findOne({ userName }).select("+password");
  if (!user)
    return next(
      new AppError(
        "there is no user found by this user name please register first",
        404
      )
    );

  const isPasswordCorrect = await user.passwordCheck(user.password, password);
  if (!isPasswordCorrect)
    return next(new AppError("Invalid user name or password", 404));
  const token = tokenGenerator(res, user._id);

  res.status(200).json({
    status: "success",
    message: "you are logged in successfully",
    data: user,
    token,
  });
});

exports.forgetPassword = asyncCatch(async (req, res, next) => {
  const { email } = req.body;
  if (!email)
    return next(new AppError("please provide your email address", 404));
  const user = await User.findOne({ email });
  if (!user)
    return next(new AppError("There is no email registered by this email"));

  const resetTokenUrl = await user.createResetToken();
  await user.save({ validateBeforeSave: false });
  const passwordResetUrl = `${req.protocol}:/${req.originalUrl}/${resetTokenUrl}`; // this url will sent via email

  //email sent logic here
  sendEmailMessage(passwordResetUrl);
});

exports.resetPassword = asyncCatch(async (req, res, next) => {
  const resetToken = await crypto
    .createHash("sha256")
    .update(req.query.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetToken,
  }).select("+password");

  if (!user) return next(new AppError("Invalid Token", 404));

  const isTokenExpired = await user.isTokenExpired();
  if (isTokenExpired) return next(new AppError("Token Expired", 404));

  user.password = req.body.password;
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;
  user.save({ validateBeforeSave: true });

  const token = tokenGenerator(res, user._id);

  res.status(201).json({
    status: "success",
    message: "Your password changed successfully",
    token,
  });
});

exports.readProfileInfo = asyncCatch(async (req, res, next) => {
  res.status(200).json({
    status: "READ",
    data: req.user,
  });
});

exports.updateProfileInfo = asyncCatch(async (req, res, next) => {
  const body = { ...req.body };
  body.role && delete body["role"];
  body.password && delete body["password"];
  const data = await User.findByIdAndUpdate(req.query.id, {
    $set: { ...body },
  });

  if (!data)
    return next(new AppError("Error unable to update the profile", 404));

  res
    .status(200)
    .json({ status: "Updated", message: "Profile updated successfully", data });
});

exports.updateProfilePicture = asyncCatch(async (req, res, next) => {
  if (!req.files || !req.files.profilePicture)
    return next(new AppError("please select your new profile picture", 404));

  const data = await User.findByIdAndUpdate(req.body.id, {
    $set: { profilePicture: req.files.profilePicture[0].path },
  });

  if (!data)
    return next(new AppError("Error unable to update the profile", 404));

  return res.status(200).json({
    status: "Updated",
    message: "Profile updated successfully",
    data,
  });
});

exports.updatePassword = asyncCatch(async (req, res, next) => {
  const body = { ...req.body };
  body.role && delete body["role"];
  body.permission && delete body["permission"];

  const user = await User.findOne({ _id: body.id }).select("+password");

  user.password = body.newPassword;
  await user.save();

  res
    .status(200)
    .json({ status: "Changed", message: "Password changed successfully" });
});

exports.getUsersHandler = asyncCatch(async (req, res, next) => {
  const data = await User.find().sort("-createdAt");
  res.status(200).json({ status: "success", length: data.length, data });
});
