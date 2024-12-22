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
  // for freelancers
  jobsApply: {
    type: [String],
    default: [],
  },
  // for clients
  jobsPosted: {
    type: [String],
    default: [],
  },
  country: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
