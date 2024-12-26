import mongoose from "mongoose";
import config from "./config.js";
// dotenv.config();
const ConnectDb = async () => {
  // If mongo_url is not defined, log an error and exit the process
  if (!config.mongo_url || !config.mongo_second_url) {
    console.error("No MongoDB connection string found.");
    process.exit(1);
  }

  try {
    try {
      await mongoose.connect(config.mongo_second_url);
      console.log("Connected to MongoDB primary database");
    } catch (primaryError) {
      console.warn("Primary MongoDB connection failed:", primaryError.message);
      try {
        await mongoose.connect(config.mongo_second_url);
        console.log("Connected to MongoDB secondary database");
      } catch (secondaryError) {
        console.error(
          "Secondary MongoDB connection failed:",
          secondaryError.message
        );
        process.exit(1);
      }
    }

    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default ConnectDb;
