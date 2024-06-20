const jwt = require("jsonwebtoken");

const tokenGenerator = (res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOption = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true, //  only for production
    sameSite: "none",
  };

  const MAX_AGE = 30 * 24 * 60 * 60 * 1000;
  res.cookie("_m_l_f_s", token, {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  return token;
};

module.exports = { tokenGenerator };
