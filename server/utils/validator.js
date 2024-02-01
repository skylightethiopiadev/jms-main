// import { body, validationResult } from "express-validator";
// import { User } from "../models/signupModel.js";
// import fs from "fs";
// import bcrypt from "bcrypt";
// import path from "path";
// const __dirname = path.resolve();

// //for character like first name with out space eg. gedeon
// const onlyCharacter = (field, min, max, allowSpace) => {
//   return body(field)
//     .isLength({ min })
//     .withMessage(`${field} must be greater than ${min - 1} character`)
//     .isLength({ max })
//     .withMessage(`${field} must be less than ${max} character`)
//     .isAlpha("en-US", { ignore: allowSpace ? " " : "" })
//     .withMessage(`${field} must contains only character`);
// };

// //character and number
// const alphaNumeric = (field, min, max) => {
//   return body(field)
//     .isLength({ min })
//     .withMessage(`${field} must be greater than ${min - 1} character`)
//     .isLength({ max })
//     .withMessage(`${field} must be less than ${max} character`);
// };

// //only validate an empty value
// const numeric = (field, min) => {
//   return body(field)
//     .isLength({ min })
//     .withMessage(`${field} must have a value`);
// };

// const password = (filed) => {
//   return body(filed)
//     .isLength({ min: 8 })
//     .withMessage("minimum password length is 8")
//     .isLength({ max: 16 })
//     .withMessage("maximum password length is 16")
//     .isStrongPassword({
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 1,
//       returnScore: false,
//       pointsPerUnique: 1,
//       pointsPerRepeat: 0.5,
//       pointsForContainingLower: 10,
//       pointsForContainingUpper: 10,
//       pointsForContainingNumber: 10,
//       pointsForContainingSymbol: 10,
//     })
//     .withMessage(
//       "password must contains at least 1 number, 1 # capital letter, 1 small letter, 1 special character"
//     );
// };

// const confirmPassword = (field) => {
//   return body(field).custom((val, { req }) => {
//     if (req.body.password !== val) throw new Error("password not much");
//     return true;
//   });
// };

// const currentPassword = (field) => {
//   return body(field).custom(async (val, { req }) => {
//     const user = await User.findById(req.user._id).select("+password");
//     if (!(await bcrypt.compare(val, user.password)))
//       throw new Error("Your current password is Incorrect");
//     return true;
//   });
// };

// const confirmPasswordChange = (field) => {
//   return body(field).custom((val, { req }) => {
//     if (req.body.newPassword !== val) throw new Error("password not much");
//     return true;
//   });
// };

// const emailUpdate = (field, model) => {
//   return body(field)
//     .isEmail()
//     .withMessage(`invalid email`)
//     .custom(async (val, { req }) => {
//       const data = await model.find({ email: req.body.email });
//       if (data?.length > 0 && req.query.id !== data[0]?.id)
//         throw new Error(
//           `this email is already registered try with different email`
//         );
//       return true;
//     });
// };

// const fileValidator = (field) => {
//   return body(field).custom(async function (val, { req }) {
//     if (!req.files || !req.files[field]) {
//       // fs.unlink(`${req.files[field][0].path}`, (err) => err);
//       throw new Error(`${field} is required`);
//     }
//     return true;
//   });
// };

// const userNameUpdate = (field, model) => {
//   return body(field)
//     .isAlphanumeric()
//     .withMessage("in user name space is not allowed")
//     .isLength({ max: 30 })
//     .withMessage("maximum user name length is 30")
//     .isLength({ min: 3 })
//     .withMessage("user name must be greater than 2 character")
//     .custom(async (val, { req }) => {
//       const data = await model.find({ userName: req.body.userName });
//       if (data?.length > 0 && req.query.id !== data[0]?.id)
//         throw new Error(
//           `this user name is already taken try with different one`
//         );
//       return true;
//     });
// };

// const email = (field, model) => {
//   return body(field)
//     .isEmail()
//     .withMessage(`invalid email`)
//     .custom(async (val, { req }) => {
//       const data = await model.find({ email: req.body.email });
//       if (data.length !== 0)
//         throw new Error(
//           `this email is already registered try with different email`
//         );
//       return true;
//     });
// };

// const amount = (field) => {
//   return body(field).custom(function (val, { req }) {
//     if (!req.body.amount || req.body.amount * 1 < 0) {
//       throw new Error("amount value must be greater than 0");
//     }
//     return true;
//   });
// };

// const notification = (field) => {
//   return body(field).custom((val, { req }) => {
//     if (req.body.receiver?.length < 2)
//       throw new Error("please select at least one receiver");
//     return true;
//   });
// };

// const userName = (filed, model) => {
//   return body(filed)
//     .isAlphanumeric()
//     .withMessage("in user name space is not allowed")
//     .isLength({ max: 30 })
//     .withMessage("maximum user name length is 30")
//     .isLength({ min: 3 })
//     .withMessage("user name must be greater than 2 character")
//     .custom(async (val, { req }) => {
//       const data = await model.find({ userName: req.body.userName });
//       if (data.length !== 0)
//         throw new Error(
//           `this user name is already taken try with different one`
//         );
//       return true;
//     });
// };

// const onlyEmail = (field) => {
//   return body(field)
//     .isEmail()
//     .withMessage(`Invalid email please use the valid one`);
// };

// export const emailSendValidator = [
//   onlyCharacter("fullName", 3, 100, true),
//   onlyEmail("email"),
//   alphaNumeric("description", 3, 500),
// ];

// export const lawyerValidator = [
//   alphaNumeric("levelOfEducation", 3, 200),
//   alphaNumeric("startingDate", 3, 200),
//   alphaNumeric("licenseType", 3, 200),
// ];

// export const signupValidator = [
//   onlyCharacter("firstName", 4, 100, false),
//   onlyCharacter("lastName", 4, 100, false),
//   onlyCharacter("middleName", 4, 100, true),
//   email("email", User),
//   userName("userName", User),
//   numeric("phone", 9),
//   alphaNumeric("nationality", 3, 200),
//   alphaNumeric("address", 3, 200),
//   alphaNumeric("userType", 3, 200),
//   password("password"),
//   confirmPassword("confirmPassword"),
// ];

// const helper = (req, res, next) => {
//   console.log(req.body.userType, "from validator");
//   if (req.body.userType === "lawyer") {
//     signupValidator.push(...lawyerValidator);
//   }
//   return next();
//   // return signupValidator;
// };

// export const updateInfoValidator = [
//   onlyCharacter("firstName", 4, 100, false),
//   onlyCharacter("lastName", 4, 100, false),
//   onlyCharacter("city", 4, 100, true),
//   emailUpdate("email", User),
//   userNameUpdate("userName", User),
//   numeric("phone", 6),
// ];

// export const passwordResetValidator = [
//   password("password"),
//   confirmPassword("confirmPassword"),
// ];

// export const changePasswordValidator = [
//   currentPassword("currentPassword"),
//   password("newPassword"),
//   confirmPasswordChange("confirmPassword"),
// ];

// export const notificationValidator = [
//   alphaNumeric("description", 3, 1200),
//   notification("receiver"),
// ];

// export const isValidated = () => async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     if (req.files?.profilePicture !== undefined) {
//       fs.unlink(
//         path.join(__dirname, req.files.profilePicture[0].path),
//         (err) => err
//       );
//     }
//     return res.status(400).json({ msg: errors.array() });
//   }
//   return next();
// };

// // .isAlpha("en-US", { ignore: " " }) for allowing space

export const name = (field) => {
  return {
    validator: function (v) {
      return /^(?=.{3,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(v);
    },
    message: `${field} must contain only character and must be between 3 and 50 character`,
  };
};

export const gender = (field) => {
  return {
    validator: function (v) {
      return /^(?:male|female)$/gim.test(v);
    },
    message: `${field} must must be either male or female`,
  };
};

export const userName = (field) => {
  return {
    validator: function (v) {
      return /^[a-z0-9_.]+$/.test(v);
    },
    message: `${field} can only contains letters, numbers, underscores, and periods.`,
  };
};

export const email = (field) => {
  return {
    validator: function (v) {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
    },
    message: `Invalid email`,
  };
};

export const password = (field) => {
  return {
    validator: function (v) {
      return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(
        v
      );
    },
    message: `${field} must have a minimum of 8 characters,
      maximum of 20 characters,
      at least one uppercase character,
      at least one lowercase character,
      at least one digit and 
      at least one special character`,
  };
};

export const confirmPassword = (field) => {
  return {
    validator: function (v) {
      return v === this.password;
    },
    message: `password not match`,
  };
};

export const paragraph = (field, min, max) => {
  return {
    validator: function (v) {
      return v.toString().length < max && v.toString().length > min;
    },
    message: `${field} must between ${min} and ${max} characters`,
  };
};

export const numberLower = (field, min) => {
  return {
    validator: function (v) {
      return v > min;
    },
    message: `${field} must be greater than ${min}`,
  };
};

export const numberUpper = (field, max) => {
  return {
    validator: function (v) {
      return v < max;
    },
    message: `${field} must be less than ${max}`,
  };
};

export const numberBetween = (field, min, max) => {
  return {
    validator: function (v) {
      return v > min && v <= max;
    },
    message: `${field} must be between ${min} and ${max}`,
  };
};

export const phone = (field) => {
  return {
    validator: function (v) {
      return /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(
        v
      );
    },
    message: `${field} must must be either male or female`,
  };
};
