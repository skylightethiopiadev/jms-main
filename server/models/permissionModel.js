import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "permission name is required"],
  },
  roles: {
    type: Object,
    required: [true, "roles are required"],
  },
});

export const Permission = mongoose.model("permission", permissionSchema);
