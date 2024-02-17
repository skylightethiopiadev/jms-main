import express from "express";
import { upload } from "../utils/upload.js";
import { authorization } from "../middleware/authorization.js";
import { authentication } from "../middleware/authentication.js";
import {
  _create,
  _delete,
  _read,
  _read_single,
  _update,
} from "../controller/factoryController.js";

import {
  signupHandler,
  loginHandler,
  forgetPassword,
  resetPassword,
  updateProfileInfo,
  updateProfilePicture,
  readProfileInfo,
  updatePassword,
} from "../controller/userController.js";
import { aggregate } from "../controller/aggregationController.js";

const router = express.Router();

const files = upload.fields([
  { name: "attachments", maxCount: 10 },
  { name: "profilePicture", maxCount: 1 },
]);

router.route("/signup").post(files, signupHandler);

router.route("/login").post(loginHandler);

router.route("/forgetPassword").post(forgetPassword);

router.route("/resetPassword").post(resetPassword);

router.route("/readProfileInfo").get(authentication, readProfileInfo);

router.route("/updateProfileInfo").put(authentication, updateProfileInfo);

router
  .route("/updateProfilePicture")
  .put(authentication, files, updateProfilePicture);

router.route("/updatePassword").put(authentication, updatePassword);

router.route("/:table/:id").get(authentication, authorization, _read_single);

router
  .route("/:table")
  .post(authentication, authorization, files, _create)
  .get(authentication, authorization, _read)
  .put(authentication, authorization, files, _update)
  .delete(authentication, authorization, _delete)
  .patch(authentication, authorization, aggregate);

//aggregation
// router.route("/stats/:table").patch(authentication, authorization, firstPhase);
export default router;
