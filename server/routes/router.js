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
import {
  chatCreate,
  chatDelete,
  chatRead,
  chatUpdate,
} from "../controller/chatController.js";

const router = express.Router();
const chatRouter = express.Router();

const files = upload.fields([
  { name: "attachments", maxCount: 10 },
  { name: "profilePicture", maxCount: 1 },
]);

//user account route
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

//factory route
router.route("/:table/:id").get(authentication, authorization, _read_single);

router
  .route("/:table")
  .post(authentication, authorization, files, _create)
  .get(_read)
  .put(authentication, authorization, files, _update)
  .delete(authentication, authorization, _delete)
  .patch(authentication, authorization, aggregate);

//chat route
chatRouter.route("/:id").get(chatRead);
chatRouter
  .route("/")
  .post(files, chatCreate)
  .get(chatRead)
  .put(files, chatUpdate)
  .delete(chatDelete);

//aggregation
// router.route("/stats/:table").patch(authentication, authorization, firstPhase);
export { router, chatRouter };
