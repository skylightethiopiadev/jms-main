import express from "express";
const userRoute = express.Router();
import { upload } from "../utils/upload";
import { User } from "../models/signupModel";
import { authorization } from "../middleware/authorization";
import { authentication } from "../middleware/authentication";
const {
  passwordResetValidator,
  changePasswordValidator,
  notificationValidator,
  emailSendValidator,
  isValidated,
  signupValidator,
  updateInfoValidator,
} = require("../utils/validator");

const {
  signupHandler,
  loginHandler,
  getUsersHandler,
  forgetPassword,
  resetPassword,
  updateProfileInfo,
  updateProfilePicture,
  readProfileInfo,
  updatePassword,
} = require("../controller/userController");

const {
  createNotification,
  readNotification,
  updateNotification,
  deleteNotification,
} = require("../controller/notificationController");
const { sendEmailHandler } = require("../controller/emailHandler");

const files = upload.fields([{ name: "profilePicture", maxCount: 1 }]);

userRoute
  .route("/signup")
  .post(files, signupValidator, isValidated, signupHandler);

userRoute.route("/login").post(loginHandler);

userRoute.route("/getAllUsers").get(authentication, getUsersHandler);

userRoute.route("/readProfileInfo").get(authentication, readProfileInfo);

userRoute.route("/forgetPassword").post(forgetPassword);

userRoute
  .route("/resetPassword")
  .post(passwordResetValidator, isValidated, resetPassword);

userRoute
  .route("/updateProfileInfo")
  .patch(authentication, updateInfoValidator, isValidated, updateProfileInfo);

userRoute
  .route("/updateProfilePicture")
  .patch(
    authentication,
    files,
    isValidated("profilePicture"),
    updateProfilePicture
  );

userRoute
  .route("/changePassword")
  .patch(authentication, changePasswordValidator, isValidated, updatePassword);

userRoute
  .route("/notification")
  .post(authentication, notificationValidator, isValidated, createNotification)
  .get(authentication, readNotification)
  .patch(authentication, updateNotification)
  .delete(authentication, deleteNotification);

userRoute
  .route("/sendEmail")
  .post(emailSendValidator, isValidated, sendEmailHandler);

export default userRoute;
