import mongoose from "mongoose";

const InstitutionSchema = new mongoose.Schema({
    companyName:{
      type:String,
      required:true,
      unique:true
    },
    Contact:{
        type:String,
        required:true,
        unique:true
      },
    tinNumber: {
      type: String,
      required: true,
      unique:true
    },
    userId:{
      type: Schema.Types.ObjectId,
      required: true,
      ref:'User'
    }
  });
  
  const Institution = mongoose.model('Institution', InstitutionSchema);

  export default Institution