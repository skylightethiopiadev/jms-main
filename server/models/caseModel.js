import mongoose ,{Schema} from 'mongoose';

const CaseSchema = new Schema({
    // casename:{
    //     type: String,
    //     required: true
    //   },
      apointmentDate:{
        type:Date,
        required:true
       },
     caseNumber:{
        type: String,
        required: true
      },
      caseType:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:'CaseCatagory'
      },
      caseDescription:{
        type:String,
        required:true
      },
      caseStatus:{
        type:String,
        required:true
      },
      ApplicationID:{
        type:Schema.Types.ObjectId,
        ref:'Application'
      }
})
const Case = mongoose.model('Case',CaseSchema);
export default Case;