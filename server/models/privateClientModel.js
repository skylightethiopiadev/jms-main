import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
      },
      middlename: {
          type: String,
          required: true
        },
      lastname:{
          type: String,
        required: true
      },
      sex:{
       type:String,
       required:true,
       unique:true
      },
    username:{
      type:String,
      required:true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    photo: {
      data: Buffer, // Store photo as binary data in Buffer
      contentType: String // Store the content type of the photo
    }
  });
  
  const User = mongoose.model('User', userSchema);

  export default User