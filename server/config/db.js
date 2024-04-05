import mongoose from "mongoose";
const mongodb = async () => {
  await mongoose.connect(
    "mongodb+srv://user:z1OoheclB06GxVER@cluster0.rhayeki.mongodb.net/MAKUTA?retryWrites=true&w=majority"
  ); //replace by MONGO_URL
  console.log("MAKUTA database connected successfully");
};

export default mongodb;
