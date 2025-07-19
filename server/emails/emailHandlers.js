import { createTransport } from "nodemailer";
import {
  resetPasswordEmailTemplate,
  welcomeEmailTemplate,
} from "./emailTemplate.js"; // Ensure emailTemplate.js contains both templates

export const sendForgotPasswordMail = (options) => {
  return new Promise((resolve, reject) => {
    // Wrap in a Promise to handle asynchronous email sending
    const transporter = createTransport({
      service: "gmail", // Using Gmail service for sending emails
      auth: {
        user: process.env.EMAIL_USERNAME, // Email username from environment variables
        pass: process.env.EMAIL_PASSWORD, // Email password from environment variables
      },
    });

    // Mail options for the forgot password email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // Sender email address
      to: options.to, // Recipient email address
      subject: "Reset password", // Email subject
      html: resetPasswordEmailTemplate(options.name, options.resetUrl), // HTML content generated from template, using 'name'
      category: "Reset password", // Email category for tracking
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending forgot password email:", error); // Log error if email sending fails
        return reject(error); // Reject the Promise with the error
      } else {
        console.log("Forgot password email sent successfully:", info.response); // Log success message and response info
        resolve(info); // Resolve the Promise with the info object on success
      }
    });
  });
};

export const sendWelcomEmail = (options) => {
  return new Promise((resolve, reject) => {
    // Wrap in a Promise to handle asynchronous email sending
    const transporter = createTransport({
      service: "gmail", // Using Gmail service for sending emails
      auth: {
        user: process.env.EMAIL_USERNAME, // Email username from environment variables
        pass: process.env.EMAIL_PASSWORD, // Email password from environment variables
      },
    });

    // Mail options for the welcome email
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // Sender email address
      to: options.to, // Recipient email address
      subject: options.subject || "Welcome to Nigeria Immigration Service", // Email subject, with a default value
      html: welcomeEmailTemplate(options.name), // HTML content generated from template, using 'name'
      category: "Welcome Email", // Email category for tracking
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending welcome email:", error); // Log error if email sending fails
        return reject(error); // Reject the Promise with the error
      } else {
        console.log("Welcome email sent successfully:", info.response); // Log success message and response info
        resolve(info); // Resolve the Promise with the info object on success
      }
    });
  });
};
