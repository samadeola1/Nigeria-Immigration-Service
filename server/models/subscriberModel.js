
import mongoose from "mongoose";
import validator from "validator";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
  },
  name: {
    type: String,
    trim: true,
  },
  dateSubscribed: {
    type: Date,
    default: Date.now,
  },
}, {timestamps: true});

const SUBSCRIBER = mongoose.model("subscriber", subscriberSchema);
export default SUBSCRIBER;