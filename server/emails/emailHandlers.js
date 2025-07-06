import {createTransport} from "nodemailer";
import { resetPasswordEmailTemplate, welcomeEmailTemplate } from "./emailTemplate.js";




export const sendForgotPasswordMail = (options) => {
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
      html:  resetPasswordEmailTemplate(options.firstName, options.resetUrl),
      category: "Reset password",
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };



export const sendWelcomEmail = (order) => {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: welcome.recipientInfo.email,
      subject: "You Are Welcome - Nigeria Immigration Service",
      html: welcomeEmailTemplate(welcome),
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending welcome email:", error);
      } else {
        console.log("welcome email sent successfully:", info.response);
      }
    });
  };


