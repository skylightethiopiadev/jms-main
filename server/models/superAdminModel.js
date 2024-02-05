import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const SuperAdmin = mongoose.model("super-admin", superAdminSchema);

export default SuperAdmin;
