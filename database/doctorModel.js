import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
    name: {

        type: String,
        required: true
    
    },


    subject1:{
        type: String,
        required: true


    },


    subject2:{
        type: String,
        required: true


    },


    subject3:{
        type: String,
        required: true


    },


    subject4:{
        type: String,
        required: true

        
    }
})

export default model('doctor', doctorSchema)