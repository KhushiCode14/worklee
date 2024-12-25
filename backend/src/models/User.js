// strategy
// ^ basic detail - both for client and freelancer
// name email passsword role country dob street address city provinces phone zip

// jobApply jobPosted

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true, // Required
  },
  lastName: {
    type: String,
    required: true, // Required
  },
  email: {
    type: String,
    required: true, // Required
    unique: true,
  },
  password: {
    type: String,
    required: true, // Required
  },
  role: {
    type: String,
    enum: ["freelancer", "client"],
    default: "freelancer",
  },
  freelancerDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
    // Don't require this during registration, will be populated later if the role is "freelancer"
  },
  clientDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    // Don't require this during registration, will be populated later if the role is "client"
  },
  country: {
    type: String,
    required: true, // Required
  },
  state: {
    type: String,
    required: true, // Required
  },
  city: {
    type: String,
    required: true, // Required
  },
  street: {
    type: String,
    required: true, // Required
  },
  zip: {
    type: Number,
    required: true, // Required
  },
  dob: {
    type: Date,
    required: true, // Required
  },
  phone: {
    type: Number,
    required: true, // Required
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;

// // For freelancers
// jobsApply: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Job", // References the Job model
//   },
// ],
// // For clients
// jobsPosted: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User", // References the Job model
//   },
// ],
