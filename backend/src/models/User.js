// strategy
// ^ basic detail - both for client and freelancer
// name email passsword role country dob street address city provinces phone zip

// jobApply jobPosted

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    enum: ["freelancer", "client"],
    default: "freelancer",
  },
  freelancerDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
    required: function () {
      return this.role === "freelancer";
    }, // Conditionally required based on role
  },
  clientDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    // required: function () {
    //   return this.role === "client";
    // }, // Conditionally required based on role
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  zip: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  phone: {
    type: Number,
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
