import transporter from "../../registerMail.js";
import config from "../config/config.js";

const { sender_email } = config();

const sendMail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: sender_email,
      to, // Use the 'to' parameter passed to the function
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
"hii"
export default sendMail;
