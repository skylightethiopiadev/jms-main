import express from "express";
import { upload } from "../utils/upload.js";
import { User } from "../models/signupModel.js";
import { authorization } from "../middleware/authorization.js";
import { authentication } from "../middleware/authentication.js";
import {
  passwordResetValidator,
  changePasswordValidator,
  notificationValidator,
  emailSendValidator,
  isValidated,
  signupValidator,
  updateInfoValidator,
  lawyerValidator,
} from "../utils/validator.js";

import {
  signupHandler,
  loginHandler,
  getUsersHandler,
  forgetPassword,
  resetPassword,
  updateProfileInfo,
  updateProfilePicture,
  readProfileInfo,
  updatePassword,
} from "../controller/userController.js";

import {
  createNotification,
  readNotification,
  updateNotification,
  deleteNotification,
} from "../controller/notificationController.js";
import { sendEmailHandler } from "../controller/emailHandler.js";
const userRoute = express.Router();
const files = upload.fields([{ name: "profilePicture", maxCount: 1 }]);

userRoute.route("/signup").post(files, signupHandler);

userRoute.route("/login").post(loginHandler);

userRoute.route("/getAllUsers").get(authentication, getUsersHandler);

userRoute.route("/readProfileInfo").get(authentication, readProfileInfo);

userRoute.route("/forgetPassword").post(forgetPassword);

userRoute
  .route("/resetPassword")
  .post(passwordResetValidator, isValidated(), resetPassword);

userRoute
  .route("/updateProfileInfo")
  .patch(authentication, updateInfoValidator, isValidated(), updateProfileInfo);

userRoute
  .route("/updateProfilePicture")
  .patch(authentication, files, isValidated(), updateProfilePicture);

userRoute
  .route("/changePassword")
  .patch(
    authentication,
    changePasswordValidator,
    isValidated(),
    updatePassword
  );

userRoute
  .route("/notification")
  .post(
    authentication,
    notificationValidator,
    isValidated(),
    createNotification
  )
  .get(authentication, readNotification)
  .patch(authentication, updateNotification)
  .delete(authentication, deleteNotification);

userRoute
  .route("/sendEmail")
  .post(emailSendValidator, isValidated(), sendEmailHandler);

export default userRoute;
