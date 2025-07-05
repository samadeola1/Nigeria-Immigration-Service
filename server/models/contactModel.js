import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
  }
}, { timestamps: true });

const CONTACT = mongoose.model("contact", contactSchema);
export default CONTACT;