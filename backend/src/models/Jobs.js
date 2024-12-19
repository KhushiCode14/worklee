import mongoose from "mongoose";
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
      enum: ["Web Development", "Mobile App Development", "Design", "Other"], // Example values
    },
    skills: {
      type: [String], // Allow multiple skills
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    // razopay
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
    // cloudinary and multer
    attachments: {
      type: [String],
    },
    tags: {
      type: [String], // Allow multiple tags
      required: true,
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    //
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
