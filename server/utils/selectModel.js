import { Case } from "../models/caseModel.js";
import { Category } from "../models/categoryModel.js";
import { Institution } from "../models/organizationModel.js";
import { Permission } from "../models/permissionModel.js";
import { User } from "../models/userModel.js";
import AppError from "./AppError.js";

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
    default:
      return next(
        new AppError("something went wrong unable to fetch the data.", 500)
      );
  }
  return model;
};
