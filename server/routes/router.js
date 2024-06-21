const express = require("express");
const { upload } = require("../utils/upload.js");
// const { authorization } =require("../middleware/authorization.js";
const { authentication } = require("../middleware/authentication.js");
const {
  _create,
  _delete,
  _read,
  _read_single,
  _update,
} = require("../controller/factoryController.js");

const {
  signupHandler,
  loginHandler,
  forgetPassword,
  resetPassword,
  updateProfileInfo,
  updateProfilePicture,
  readProfileInfo,
  updatePassword,
  logoutHandler,
  updateUsersCredentials,
} = require("../controller/userController.js");
const { aggregate } = require("../controller/aggregationController.js");
const {
  chatCreate,
  chatDelete,
  chatRead,
  chatUpdate,
} = require("../controller/chatController.js");
const CryptoJS = require("crypto-js");
const crypto = require("crypto");
const asyncCatch = require("express-async-catch");
const { authorization } = require("../middleware/authorization.js");

const router = express.Router();
const chatRouter = express.Router();
const accountRouter = express.Router();

const files = upload.fields([
  { name: "attachments", maxCount: 10 },
  { name: "profilePicture", maxCount: 1 },
  { name: "chatFile", maxCount: 10 },
]);

//user account route
router.route("/signup").post(files, signupHandler);

router.route("/login").post(loginHandler);

router.route("/logout").post(logoutHandler);

router.route("/forgetPassword").post(forgetPassword);

router.route("/resetPassword").post(resetPassword);

router.route("/readProfileInfo").get(authentication, readProfileInfo);

router.route("/updateProfileInfo").put(authentication, updateProfileInfo);

router
  .route("/updateProfilePicture")
  .put(authentication, files, updateProfilePicture);

accountRouter.route("/updatePassword").put(authentication, updatePassword);
accountRouter
  .route("/updateUsersCredentials")
  .put(authentication, updateUsersCredentials);
//factory route
router.route("/:table/:id").get(authentication, authorization, _read_single);

const decrypt = async (req, res, next) => {
  const ENC = "bf3c199c2470cb477d907b1e0917c17f";
  const IV = "5183666c72eec9e4";
  const ALGO = "aes-256-cbc";

  // let cipher = crypto.createCipheriv(ALGO, ENC, IV);
  // let encrypted = cipher.update("gedi", "utf8", "base64");
  // encrypted += cipher.final("base64");

  try {
    let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
    let decrypted = decipher.update(req.query.q, "base64", "utf8");
    decrypted + decipher.final("utf8");
    console.log(decrypted, "decrypted");
  } catch (e) {
    console.log(e.message, "eeeeeeeeeee");
  }

  // const encrypted_key = encrypt("HelloWorld");
  // const decrypted_key = decrypt(encrypted_key);

  // next();
};

router
  .route("/:table")
  .post(authentication, authorization, files, _create)
  .get(authentication, authorization, _read)
  .put(authentication, files, _update)
  .delete(authentication, authorization, _delete)
  .patch(authentication, authorization, aggregate);

//chat route
chatRouter.route("/:id").get(authentication, chatRead);
chatRouter
  .route("/")
  .post(authentication, files, chatCreate)
  .get(authentication, chatRead)
  .put(authentication, files, chatUpdate)
  .delete(authentication, chatDelete);

//aggregation
// router.route("/stats/:table").patch(authentication, authorization, firstPhase);
module.exports = { router, chatRouter, accountRouter };
