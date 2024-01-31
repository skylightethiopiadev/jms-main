import AppError  from "../utils/AppError";

const authorization = async (req, res, next) => {
  const method = "read"; //req.method
  const table = "users"; //model.collection.collectionName
  const role = "super-admin"; //req.user.role

  switch (role) {
    case "case-manager-main" ||
      "case-manager-regular" ||
      "case-manager-external": {
      //this data will be fetched from permission table in the database
      const data = {
        name: "role name",
        roles: {
          users: ["read", "update"],
          cases: ["delete", "update", "read", "create"],
        },
      };

      const step1 = Object.keys(data.roles).includes(table);
      const step2 = data.roles[table]?.includes(method) ? true : false;

      if (step1 && step2) {
        console.log("authorized", step1, step2);
      } else {
        console.log("not authorized", step1, step2);
      }
      break;
    }
    case "customer":
    //customer permission logic
    case "lawyer":
    //lawyer permission logic
  }
};
