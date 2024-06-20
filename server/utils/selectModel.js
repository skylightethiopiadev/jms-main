const { Application } = require("../models/applicationModel.js");
const { CaseManager } = require("../models/caseManagerModel.js");
const { Case } = require("../models/caseModel.js");
const { Category } = require("../models/categoryModel.js");
const { Group } = require("../models/groupModel.js");
const { Lawyer } = require("../models/lawyerModel.js");
const { Business } = require("../models/businessModel.js");
const { Payment } = require("../models/paymentModel.js");
const { Permission } = require("../models/permissionModel.js");
const { User } = require("../models/userModel.js");
const AppError = require("./AppError.js");
const { Private } = require("../models/privateModel.js");

const selectModel = (name, next) => {
  let model;
  switch (name) {
    case "users":
      model = User;
      break;
    case "institutions":
      model = Institution;
      break;
    case "permissions":
      model = Permission;
      break;
    case "cases":
      model = Case;
      break;
    case "categories":
      model = Category;
      break;
    case "applications":
      model = Application;
      break;
    case "payments":
      model = Payment;
      break;
    case "case-managers":
      model = CaseManager;
      break;
    case "businesses":
      model = Business;
      break;
    case "lawyers":
      model = Lawyer;
      break;
    case "privates":
      model = Private;
      break;
    case "groups":
      model = Group;
      break;
    default:
      return next(new AppError("something went wrong please try again!.", 500));
  }
  return model;
};

module.exports = { selectModel };
