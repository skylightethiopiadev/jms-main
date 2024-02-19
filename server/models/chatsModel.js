import mongoose from "mongoose";

const chatsModel = mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: Object,
    },
    messageType: {
      type: String,
    },
    chatType: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
export const Chat = mongoose.model("chat", chatsModel);
