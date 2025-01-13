// email.js (in the utils folder)
import nodemailer from "nodemailer";
import { emailConfirmationTemplate } from "../MailTemplate/Email.Template.js";
import { config } from "dotenv";
config();
// Setting up the email transporter
console.log(
  process.env.MAIL_HOST,
  process.env.MAIL_USER,
  process.env.MAIL_PASS
);
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

//sending the confirmation email
export const sendConfirmationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Confirm Your Email Address",
    html: emailConfirmationTemplate(code,process.env.MAIL_USER), // email body with HTML content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
