export function resetPasswordEmailTemplate(name, resetUrl) {
  return `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #F1F1F1; /* Changed to grey background for the whole body */
    }
    .container {
      background-color: #ffffff; /* Remains white for the main card */
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      text-align: center; /* Centralize all content in the main container */
    }
    .header-content {
      padding: 30px 20px 20px 20px; /* Adjusted padding for top section */
    }
    .grey-background-div {
      background-color: #F1F1F1; /* Changed to match body background */
      padding: 20px; /* Kept padding for content spacing */
      text-align: center; /* This centers the div itself, but its content will be left-aligned below */
      /* border-radius: 0 0 10px 10px; Removed border-radius as it blends with body */
    }
    .button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #00AA55; /* Green button background */
      color: #ffffff; /* Button text color */
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 16px;
    }
    /* Added styles for the new text elements in the grey div */
    .grey-background-div p {
      margin-bottom: 8px; /* Small margin between paragraphs */
      font-size: 14px; /* Default font size for these paragraphs */
      color: #555; /* Slightly darker grey for readability */
    }
    .grey-background-div .contact-email {
      color: #00AA55; /* Green color for the email address */
      text-decoration: none;
      font-weight: bold;
    }
    .grey-background-div .copyright {
      font-size: 12px; /* Smaller font for copyright */
      color: #777;
      margin-top: 15px; /* More space above copyright */
    }
    /* Social Icons */
    .social-icons {
      text-align: center;
      padding: 20px 0;
      margin-top: 10px;
    }
    .social-icons a {
      display: inline-block;
      margin: 0 10px;
    }
    .social-icons svg {
      width: 24px;
      height: 24px;
      fill: #00AA55; /* Green color for social icons */
    }
    /* Media Queries for smaller screens */
    @media only screen and (max-width: 480px) {
      body {
        padding: 10px;
      }
      .container {
        border-radius: 0; /* Remove border-radius on very small screens */
        box-shadow: none; /* Remove shadow on very small screens */
      }
      .header-content, .grey-background-div {
        padding: 20px 15px; /* Adjust padding for smaller screens */
      }
      h2 {
        font-size: 20px !important; /* Slightly smaller header on mobile */
      }
      .button {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-content">
      <!-- Increased max-width and max-height for the logo for better visibility -->
      <img src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1751285511/armIcon_pj56l1.png" alt="Nigeria Immigration Logo" style="max-width: 80px; max-height: 70px; margin-bottom: 20px; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">
      <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1752659301/bro_m3ijow.png" alt="Illustration" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px auto;">

      <h2 style="font-size: 24px; color: #00AA55; margin-top: 0; margin-bottom: 10px;"><strong>Hi, ${name}!</strong></h2>
      <p style="font-size: 16px; color: #333; margin-top: 0;">Need to reset password? No problem, just click the button below.</p>
    </div>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 20px auto;">
      <tr>
        <td style="border-radius: 5px; background: #00AA55; text-align: center;">
          <a href="${resetUrl}" target="_blank" style="background: #00AA55; border: 1px solid #00AA55; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 5px; font-weight: bold; padding: 12px 25px; color: #ffffff;" clicktracking="off">
            Reset Password
          </a>
        </td>
      </tr>
    </table>

    <div class="grey-background-div">
      <!-- Added inline style text-align: left; to each paragraph within the grey div -->
      <p style="text-align: left;">If you did not initiate this request, please contact us at <a href="mailto:support@immigration.gov.ng" class="contact-email">support@immigration.gov.ng</a></p>
      <p style="text-align: left;">Thanks</p>
      <p style="text-align: left;">Nigeria Immigration Service</p>
      <p class="copyright" style="text-align: left;">Copyright Nigeria Immigration Service 2024 All rights reserved</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/NigeriaImmigrationService/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.5c-.828 0-1.5.672-1.5 1.5v2.5h3l-.5 3h-2.5v7h-3v-7h-2v-3h2V8.5c0-1.933 1.567-3.5 3.5-3.5H15V8z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/nigeriaimmigrationservice/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.01 7.02.07C5.714.13 5.021.29 4.37.54C3.723.79 3.144 1.12 2.654 1.61C2.164 2.1 1.834 2.677 1.584 3.32C1.334 3.97 1.174 4.66 1.114 5.97C1.054 7.28 1.044 7.67 1.044 12s.01 4.72.07 6.03c.06 1.31.22 1.99.47 2.64c.25 0.643.58 1.22.99 1.61c.41.39.99.72 1.63.97c.65.25 1.33.41 2.64.47c1.31.06 1.7.07 6.03.07s4.72-.01 6.03-.07c1.31-.06 1.99-.22 2.64-.47c.64-.25 1.22-.58 1.61-.99c.39-.41.72-.99.97-1.63c.25-.65.41-1.33.47-2.64c.06-1.31.07-1.7.07-6.03s-.01-4.72-.07-6.03c-.06-1.31-.22-1.99-.47-2.64c-.25-.64-.58-1.22-.97-1.61c-.4-.39-.99-.72-1.63-.97c-.65-.25-1.33-.41-2.64-.47C15.28 0 14.89 0 12 0zm0 2.16c3.2 0 3.58.01 4.85.07c1.1.05 1.62.21 1.95.34c.34.13.56.29.76.49c.2.2.36.42.49.76c.13.33.29.85.34 1.95c.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.1-.21 1.62-.34 1.95c-.13.34-.29.56-.49.76c-.2.2-.42.36-.76.49c-.33.13-.85.29-1.95.34c-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.1-.05-1.62-.21-1.95-.34c-.34-.13-.56-.29-.76-.49c-.2-.2-.36-.42-.49-.76c-.13-.33-.29-.85-.34-1.95c-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.1.21-1.62.34-1.95c.13-.34.29-.56.49-.76c.2-.2.42-.36.76-.49c.33-.13.85-.29 1.95-.34C8.42 2.17 8.79 2.16 12 2.16zm0 3.63c-3.45 0-6.24 2.79-6.24 6.24s2.79 6.24 6.24 6.24s6.24-2.79 6.24-6.24s-2.79-6.24-6.24-6.24zm0 10.32c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08s4.08 1.83 4.08 4.08s-1.83 4.08-4.08 4.08zm6.4-11.8c-.8.8-.8 2.09 0 2.89s2.09.8 2.89 0s.8-2.09 0-2.89s-2.09-.8-2.89 0z"/>
          </svg>
        </a>
        <a href="https://twitter.com/nigimmigration" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.908-6.492 6.492 0 .509.058 1.007.165 1.487-5.392-.27-10.188-2.859-13.402-6.795-.55.942-.867 2.03-.867 3.181 0 2.22 1.133 4.187 2.841 5.338-.265-.008-.516-.082-.732-.19v.072c0 3.15 2.37 5.786 5.493 6.393-.56.153-1.162.23-1.77.23-.434 0-.853-.041-1.26-.121.872 2.716 3.397 4.706 6.393 4.706 0-.008.008-.016.016-.024C16.14 21.16 18.995 22 22 22c3.67 0 5.67-3.03 5.67-5.67 0-.19-.008-.38-.024-.57.392-.288.766-.62 1.107-.996z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/nigeria-immigration-service/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.564c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.955v5.653H9.109V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.467v6.253zM5.78 7.92c-1.217 0-2.201-.984-2.201-2.201 0-1.217.984-2.201 2.201-2.201 1.217 0 2.202.984 2.202 2.201 0 1.217-.985 2.201-2.202 2.201zm1.756 12.532H4.024V9h3.512v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.209 24 24 23.227 24 22.271V1.729C24 .774 23.209 0 22.225 0z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</body>
</html>

  
  
  `;
}

export function welcomeEmailTemplate(name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Nigeria Immigration Service!</title>
      <style>
        /* Global Body Styles */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #F1F1F1; /* Light background for the whole body, matching reset template */
          -webkit-text-size-adjust: 100%; /* Prevent text resizing on iOS */
          -ms-text-size-adjust: 100%; /* Prevent text resizing on Windows Phone */
          width: 100% !important; /* Full width for email clients */
        }

        /* Main Container */
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff; /* White background for the main card, matching reset template */
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          overflow: hidden;
          text-align: center; /* Centralize all content in the main container */
        }

        /* Header Section */
        .header-content {
          background-color: #ffffff; /* No green background, matching reset template */
          padding: 30px 20px 20px 20px; /* Adjusted padding for top section */
          color: #333; /* Default text color as no green background */
          text-align: center; /* Center content within header */
        }

        /* Content Section */
        .content {
          padding: 30px;
          text-align: left; /* Align text content to the left */
        }

        /* Footer Section */
        .grey-background-div { /* Renamed from .footer-text to match reset template for consistency */
          background-color: #F1F1F1; /* Matching body background for seamless look */
          padding: 20px; /* Kept padding for content spacing */
          text-align: center; /* Center content within the footer */
          /* border-radius: 0 0 10px 10px; Removed border-radius as it blends with body */
        }

        /* Responsive Images */
        img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto; /* Center images */
        }

        /* Buttons */
        .button {
          display: inline-block;
          padding: 12px 25px;
          background-color: #00AA55; /* Green button background */
          color: #ffffff; /* Button text color */
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        /* Social Icons */
        .social-icons {
          text-align: center;
          padding: 20px 0;
          margin-top: 10px;
        }
        .social-icons a {
          display: inline-block;
          margin: 0 10px;
        }
        .social-icons svg {
          width: 24px;
          height: 24px;
          fill: #00AA55; /* Green color for social icons */
        }

        /* Media Queries for smaller screens */
        @media only screen and (max-width: 480px) {
          body {
            padding: 10px;
          }
          .container {
            border-radius: 0; /* Remove border-radius on very small screens */
            box-shadow: none; /* Remove shadow on very small screens */
          }
          .header-content, .content, .grey-background-div { /* Adjusted for renamed footer class */
            padding: 20px 15px; /* Adjust padding for smaller screens */
          }
          h2 { /* Changed from h1 to h2 for consistency with reset template */
            font-size: 20px !important; /* Slightly smaller header on mobile */
          }
          .button {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header Section -->
        <div class="header-content">
          <!-- Logo -->
          <img src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1751285511/armIcon_pj56l1.png" alt="Nigeria Immigration Logo" style="max-width: 80px; max-height: 70px; margin-bottom: 20px; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">
          <!-- New Illustration Image -->
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753048709/bro_je35hy.png" alt="Illustration" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px auto;">
          <!-- New Header Text -->
          <h2 style="font-size: 24px; color: #00AA55; margin-top: 0; margin-bottom: 10px;"><strong>One Portal. All Your Immigration Services</strong></h2>
        </div>

        <!-- Content Section -->
        <div class="content">
          <p style="font-size: 18px; color: #333;"><strong>Hi ${name},</strong></p>
          <p>We are pleased to welcome you as a valued member of the Nigerian Immigration Service. Your registration has been successfully received, and your journey with us officially begins today.</p>
          <p>As part of our commitment to serving both citizens and residents, we are here to provide you with the necessary support, guidance, and resources throughout your process.</p>
          
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 20px auto;">
            <tr>
              <td style="border-radius: 5px; background: #00AA55; text-align: center;">
                <a href="https://nigeria-immigration-service.vercel.app/" target="_blank" class="button" style="background: #00AA55; border: 1px solid #00AA55; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 5px; font-weight: bold; padding: 12px 25px; color: #ffffff;" clicktracking="off">
                  Explore Now
                </a>
              </td>
            </tr>
          </table>

          <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
          <p>Best regards,<br>The Nigeria Immigration Service Team</p>
        </div>

        <!-- Footer Section -->
        <div class="grey-background-div">
          <p style="text-align: center;">&copy; ${new Date().getFullYear()} Nigeria Immigration Service. All rights reserved.</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/NigeriaImmigrationService/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.5c-.828 0-1.5.672-1.5 1.5v2.5h3l-.5 3h-2.5v7h-3v-7h-2v-3h2V8.5c0-1.933 1.567-3.5 3.5-3.5H15V8z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/nigeriaimmigrationservice/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.01 7.02.07C5.714.13 5.021.29 4.37.54C3.723.79 3.144 1.12 2.654 1.61C2.164 2.1 1.834 2.677 1.584 3.32C1.334 3.97 1.174 4.66 1.114 5.97C1.054 7.28 1.044 7.67 1.044 12s.01 4.72.07 6.03c.06 1.31.22 1.99.47 2.64c.25 0.643.58 1.22.99 1.61c.41.39.99.72 1.63.97c.65.25 1.33.41 2.64.47c1.31.06 1.7.07 6.03.07s4.72-.01 6.03-.07c1.31-.06 1.99-.22 2.64-.47c.64-.25 1.22-.58 1.61-.99c.39-.41.72-.99.97-1.63c.25-.65.41-1.33.47-2.64c.06-1.31.07-1.7.07-6.03s-.01-4.72-.07-6.03c-.06-1.31-.22-1.99-.47-2.64c-.25-.64-.58-1.22-.97-1.61c-.4-.39-.99-.72-1.63-.97c-.65-.25-1.33-.41-2.64-.47C15.28 0 14.89 0 12 0zm0 2.16c3.2 0 3.58.01 4.85.07c1.1.05 1.62.21 1.95.34c.34.13.56.29.76.49c.2.2.36.42.49.76c.13.33.29.85.34 1.95c.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.05 1.1-.21 1.62-.34 1.95c-.13.34-.29.56-.49.76c-.2.2-.42.36-.76.49c-.33.13-.85.29-1.95.34c-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.1-.05-1.62-.21-1.95-.34c-.34-.13-.56-.29-.76-.49c-.2-.2-.36-.42-.49-.76c-.13-.33-.29-.85-.34-1.95c-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.05-1.1.21-1.62.34-1.95c.13-.34.29-.56.49-.76c.2-.2.42-.36.76-.49c.33-.13.85-.29 1.95-.34C8.42 2.17 8.79 2.16 12 2.16zm0 3.63c-3.45 0-6.24 2.79-6.24 6.24s2.79 6.24 6.24 6.24s6.24-2.79 6.24-6.24s-2.79-6.24-6.24-6.24zm0 10.32c-2.25 0-4.08-1.83-4.08-4.08s1.83-4.08 4.08-4.08s4.08 1.83 4.08 4.08s-1.83 4.08-4.08 4.08zm6.4-11.8c-.8.8-.8 2.09 0 2.89s2.09.8 2.89 0s.8-2.09 0-2.89s-2.09-.8-2.89 0z"/>
          </svg>
        </a>
        <a href="https://twitter.com/nigimmigration" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.908-6.492 6.492 0 .509.058 1.007.165 1.487-5.392-.27-10.188-2.859-13.402-6.795-.55.942-.867 2.03-.867 3.181 0 2.22 1.133 4.187 2.841 5.338-.265-.008-.516-.082-.732-.19v.072c0 3.15 2.37 5.786 5.493 6.393-.56.153-1.162.23-1.77.23-.434 0-.853-.041-1.26-.121.872 2.716 3.397 4.706 6.393 4.706 0-.008.008-.016.016-.024C16.14 21.16 18.995 22 22 22c3.67 0 5.67-3.03 5.67-5.67 0-.19-.008-.38-.024-.57.392-.288.766-.62 1.107-.996z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/nigeria-immigration-service/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.564c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.955v5.653H9.109V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.467v6.253zM5.78 7.92c-1.217 0-2.201-.984-2.201-2.201 0-1.217.984-2.201 2.201-2.201 1.217 0 2.202.984 2.202 2.201 0 1.217-.985 2.201-2.202 2.201zm1.756 12.532H4.024V9h3.512v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.209 24 24 23.227 24 22.271V1.729C24 .774 23.209 0 22.225 0z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}
