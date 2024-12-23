import mongoose from "mongoose";
const { Schema } = mongoose;
const freelancerSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    skills: [{ type: string }],
    portfolio: [{ type: string }],
  },
  { timestamps: true }
);
const Freelancer = mongoose.model("Freelancer", freelancerSchema);

export default Freelancer;
