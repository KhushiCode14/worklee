import mongoose from "mongoose";

const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    // basic detail about client
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // company name
    companyName: {
      type: String,
      required: true,
    },
    // job posted by client
    jobPostedByClient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
    // description of client's work
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", ClientSchema);

export default Client;
