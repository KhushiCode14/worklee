import nodemailer from "nodemailer";
import config from "./config.js";

const { sender_email, sender_password } = config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: sender_email,
    pass: sender_password,
  },
});

// Verify the transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter setup error:", error);
  } else {
    console.log("Transporter is ready to send emails");
  }
});

export default transporter;
