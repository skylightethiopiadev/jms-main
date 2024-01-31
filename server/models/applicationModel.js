import mongoose ,{Schema} from 'mongoose';

const ApplicationSchema = new Schema({
    applicantName:{
        type: String,
        required: true
      },
      applicationDate:{
       type:Date,
       default: Date.now,
       required:true
      },
      applicationDescription:{
        type:String,
        required:true
      },
      lawyerID:{
        type:Schema.Types.ObjectId,
        ref:'Lawyer'
      },
      customerID:{
        type:Schema.Types.ObjectId,
        ref:'User'
      },
      caseID:{
        type:Schema.Types.ObjectId,
        ref:'Case'
      }
})
const Application = mongoose.model('Case',ApplicationSchema);
export default Application;