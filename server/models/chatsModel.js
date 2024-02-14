const mongoose = require("mongoose");

const chatsModel = mongoose.Schema(
  {
    chatOwners: {
      type: String,
    },
    chatId: {
      type: String,
    },
    messages: {
      type: [Object],
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
module.exports.chats = mongoose.model("chat", chatsModel);
