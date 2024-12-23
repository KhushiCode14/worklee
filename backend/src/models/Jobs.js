//^ job details
//  title skiils require
// scope: large medium small
// long time :1 to 3 months ,3 to 6 months , more than 6
// level of experience: entry,intermediate,expert
// contract-to-hire: yes(full time),no
// budget: [hourly ,fixed], amount[min, max]
// descripiton:
// attachments:(max 100mb)

import mongoose from "mongoose";
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: [String], // Allow multiple skills
      required: true,
    },
    scope: {
      type: String,
      enum: ["large", "medium", "small"],
    },
    duration: {
      type: String,
      required: true,
    },
    levelOfExperience: {
      type: String,
      enum: ["entry", "intermediate", "expert"],
    },
    contractToHire: {
      type: Boolean,
    },
    budget: {
      type: {
        type: String,
        enum: ["Fixed", "Hourly"],
        required: true,
      },
      // razopay
      amount: {
        type: Number,
      },

      hourly_rate: {
        min: { type: Number },
        max: { type: Number },
      },
    },
    description: {
      type: String,
      required: true,
    },
    attachments: {
      type: [String],
    },
    location: {
      type: String,
      required: true,
    },
    connectionRequired: {
      type: Boolean, // Use boolean for true/false values
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["open", "closed"],
      default: "open",
    },
    proposals_count: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String], // Allow multiple tags
      required: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Freelancer",
      },
    ],
    visibility: {
      type: String,
      enum: ["Public", "Private", "Invite-only"],
      default: "Public",
    },
    deadline: {
      type: Date,
      //   required: true,
    },
  },
  { timestamps: true }
); // Automatically adds `createdAt` and `updatedAt` fields

const Job = mongoose.model("Job", JobSchema);

export default Job;
