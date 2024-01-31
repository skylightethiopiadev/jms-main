const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRoute");
const { errorController } = require("./controller/errorController");

const authorization = async (req, res, next) => {
  const method = "read"; //req.method
  const table = "users"; //model.collection.collectionName
  const role = "super-admin"; //req.user.role

  switch (role) {
    case "case-manager-main" ||
      "case-manager-regular" ||
      "case-manager-external": {
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
    //customer permission logiccase
    case "customer":
    //customer permission logic
  }
};

const mongodb = require("./config/db");
process.on("uncaughtException", (err) => {
  console.log("SHUTTING DOWN ");
  console.log(err.name, err.message);
  process.exit(1);
});

app.use(
  cors({
    origin: ["https://http://127.0.0.1:4000"],
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/jms/app/v1/user", userRoute);

app.get("/", (req, res) => {
  res.json("Hello from jms server");
});

app.all("*", (req, res, next) => {
  res.status(200).json({ message: `${req.originalUrl} is Invalid url` });
  next();
});

app.use(errorController);

authorization();
mongodb()
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      if (err) console.log(err);
      console.log("JMS server connected on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

process.on("unhandledRejection", (err) => {
  console.log("SHUTTING DOWN");
  console.log(err.message, err.name);
  server.close(() => {
    process.exit(1);
  });
});
