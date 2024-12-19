import mongoose from "mongoose";
import config from "./config.js";
// dotenv.config();
const ConnectDb = async () => {
  // If mongo_url is not defined, log an error and exit the process
  if (!config.mongo_url) {
    console.error("No MongoDB connection string found.");
    process.exit(1);
  }

  try {
    // Attempt to connect to MongoDB with the correct options
    await mongoose.connect(config.mongo_url);

    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default ConnectDb;
