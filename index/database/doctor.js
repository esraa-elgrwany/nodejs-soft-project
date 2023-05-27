import { Schema, model } from "mongoose";
const doctor = new Schema(
  {
  
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default model('doctor', doctor);
