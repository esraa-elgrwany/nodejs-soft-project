import { Schema,model } from "mongoose";
const subject = new Schema({
   
    name:{
        type :String,
        required:true,
    },
    code:{
        type :String,
        required:false,
    },
  
    department:{
        type : Schema.Types.ObjectId,
        required:false,
        ref:"department",
    },
    requirements:{
        type :String,
        required:false,
    
    },
    stname:{
        type :String,
        required:true,
    }
},
{timestamps:true});
 
export default model("subject",subject);