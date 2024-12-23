import mongoose from "mongoose";
const { Schema } = mongoose;

const freelancerSchema = new Schema(
  {
    // Basic information
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true, // Ensures each freelancer is linked to only one user
    },

    // Freelancer information
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    portfolioStatus: {
      // Renamed to clarify that it's for the status
      type: String,
      enum: ["published", "drafts"], // Add enum for status (example)
    },
    language: [
      {
        // Fixed typo
        type: String,
      },
    ],
    linkedAccounts: {
      type: String,
      unique: true, // Ensure linked accounts (like social media or freelance profiles) are unique
    },
    totalEarning: {
      type: Number,
    },
    totalHours: {
      type: Number,
      default: 0,
    },
    totalJobs: {
      type: Number,
      default: 0,
    },
    workHistory: [
      {
        type: String, // You could add more detailed structure for each project
      },
    ],
    verification: {
      type: Boolean,
      default: false, // Default verification status
    },
    testimonials: [
      {
        type: String,
      },
    ],
    skills: [{ type: String }], // Corrected the type from 'string' to 'String'
    portfolioLinks: [{ type: String }], // Corrected from 'portfolio' to 'portfolioLinks'
  },
  { timestamps: true }
);

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

export default Freelancer;
