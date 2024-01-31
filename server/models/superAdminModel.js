import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    photo: {
      data: Buffer, // Store photo as binary data in Buffer
      contentType: String // Store the content type of the photo
    }
  });
  
  const User = mongoose.model('Super', userSchema);

  export default SuperAdmin