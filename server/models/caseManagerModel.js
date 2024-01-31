import mongoose from "mongoose";

const CaseManagerSchema = new mongoose.Schema({
  
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
    levelOfEducation: {
      type: String,
      required: true
    },
    StartingDate: {
        type: String,
        required: true
      },
    licenseType:{
      type: String,
      required: true
    },
    licenseLevel:{
        type: String,
        required: true
      },
    spectializedArea:{
        type: String,
        required: true
      },
     additionalSkills:{
        type: [String]
      },
      languageSkills:{
        type: [String]
      },
      liscenseFile:{
         type:Buffer,
         required:true
      },
      userId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
      },
  });
  
  const CaseManager = mongoose.model('CaseManager', CaseManagerSchema);

  export default CaseManager