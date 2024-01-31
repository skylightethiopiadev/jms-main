import mongoose ,{Schema} from 'mongoose';

const CaseCatagorySchema = new Schema({
    caseType:{
        type: [String],
        required: true
      },
      caseSubCatagory:{
        type: [String],
        required: true
      },
      caseName:{
        type: String,
        required: true
      }
})
const CaseCatagory = mongoose.model('CaseCatagory',CaseCatagorySchema);
export default CaseCatagory;