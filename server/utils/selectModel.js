import { Application } from "../models/applicationModel.js";
import { CaseManager } from "../models/caseManagerModel.js";
import { Case } from "../models/caseModel.js";
import { Category } from "../models/categoryModel.js";
import { Group } from "../models/groupModel.js";
import { Lawyer } from "../models/lawyerModel.js";
import { Business } from "../models/businessModel.js";
import { Payment } from "../models/paymentModel.js";
import { Permission } from "../models/permissionModel.js";
import { User } from "../models/userModel.js";
import AppError from "./AppError.js";
import { Private } from "../models/privateModel.js";

export const selectModel = (name, next) => {
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
