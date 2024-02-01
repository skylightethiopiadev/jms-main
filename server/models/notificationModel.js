import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  receiver: { type: [mongoose.Schema.Types.ObjectId], ref: "users" },
  date: { type: Number, default: Date.now() },
  description: String,
});

export const Notification = mongoose.model("notifications", notificationSchema);
