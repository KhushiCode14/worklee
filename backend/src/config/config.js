import dotenv from "dotenv";

dotenv.config();

console.log("Loaded Environment Variables:");

const {
  MONGO_URL,
  API_KEY,
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  NODEMAILER_SENDER_EMAIL,
  NODEMAILER_SENDER_PASSWORD,
  PORT,
} = process.env;

// Check for missing required variables
if (!MONGO_URL || !JWT_SECRET || !JWT_EXPIRATION_TIME || !PORT) {
  ("Missing required environment variables.");
}

const config = {
  mongo_url: MONGO_URL,
  api_key: API_KEY,
  jwt_secret: JWT_SECRET,
  jwt_expiration_time: JWT_EXPIRATION_TIME,
  sender_email: NODEMAILER_SENDER_EMAIL,
  sender_password: NODEMAILER_SENDER_PASSWORD,
  port: PORT || 3000, // Default to 3000 if PORT is not provided
};

export default config;
