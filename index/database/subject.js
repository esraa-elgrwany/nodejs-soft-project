import { Schema,model } from "mongoose";
import doctor from "./doctor.js";
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
        required:true,
    
    },
    stname:{
        type :String,
        required:true,
    },
    doctor:{
        type : Schema.Types.ObjectId,
        required:false,
        ref:"doctor",
    },
},
{timestamps:true});
 
export default model("subject",subject);