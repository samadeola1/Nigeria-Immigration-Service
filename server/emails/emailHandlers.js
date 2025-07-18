import { createTransport } from "nodemailer";
import {
  resetPasswordEmailTemplate,
  welcomeEmailTemplate,
} from "./emailTemplate.js"; // Ensure emailTemplate.js contains both templates

export const sendForgotPasswordMail = (options) => {
  return new Promise((resolve, reject) => {
    // Wrap in a Promise
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: options.to,
      subject: "Reset password",
      html: resetPasswordEmailTemplate(options.firstName, options.resetUrl),
      category: "Reset password",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending forgot password email:", error); // Use console.error for errors
        return reject(error); // Reject the Promise on error
      } else {
        console.log("Forgot password email sent successfully:", info.response);
        resolve(info); // Resolve the Promise on success
      }
    });
  });
};

export const sendWelcomEmail = (options) => {
  return new Promise((resolve, reject) => {
    // Wrap in a Promise
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: options.to,
      subject: options.subject || "Welcome to Nigeria Immigration Service",
      html: welcomeEmailTemplate(options.firstName),
      category: "Welcome Email",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending welcome email:", error); // Use console.error for errors
        return reject(error); // Reject the Promise on error
      } else {
        console.log("Welcome email sent successfully:", info.response);
        resolve(info); // Resolve the Promise on success
      }
    });
  });
};
