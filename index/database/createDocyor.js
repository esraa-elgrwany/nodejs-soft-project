import { Schema, model } from "mongoose";
const createDoctor = new Schema(
  {
  
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default model('createDoctor', createDoctor);
