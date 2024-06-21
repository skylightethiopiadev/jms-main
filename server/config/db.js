const mongoose = require("mongoose");
const mongodb = async () => {
  await mongoose.connect(
    // "mongodb+srv://user:z1OoheclB06GxVER@cluster0.rhayeki.mongodb.net/MAKUTA?retryWrites=true&w=majority",
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  ); //replace by MONGO_URL
  console.log("JMS database connected successfully");
};

module.exports = { mongodb };
