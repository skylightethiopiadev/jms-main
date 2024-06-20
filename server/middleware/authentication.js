const { User } = require("../models/userModel.js");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError.js");

const authentication = async (req, res, next) => {
  // console.log(req.cookies, "cookies");
  // console.log(req.headers,'headers');
  let token, user;
  const header = req.cookies._m_l_f_s;
  if (header && header !== "null" && header !== "") {
    token = header;
  }
  if (token === "null" || !token || token === "")
    return next(new AppError("Please login to proceed!"));

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

  user = await User.findById(decode.id);
  if (!user) return next(new AppError("users not found", 404));

  if (await user.isPasswordChanged(decode.iat))
    return next(
      new AppError(
        "you have recently changed your password # please login again",
        400
      )
    );
  req.user = user;
  next();
};

module.exports = { authentication };
