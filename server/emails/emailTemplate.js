export function resetPasswordEmailTemplate(name, resetUrl) {
  return `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif; /* Poppins font for the whole body */
      line-height: 1.6;
      color: #333;
      margin: 0; /* Remove margin */
      padding: 0; /* Remove padding */
      background-color: #F1F1F1; /* Grey background for the whole body */
      -webkit-text-size-adjust: 100%; /* Prevent text resizing on iOS */
      -ms-text-size-adjust: 100%; /* Prevent text resizing on Windows Phone */
      width: 100% !important; /* Full width for email clients */
    }
    .container {
      max-width: 600px;
      margin: 0 auto; /* Center the container */
      background-color: #F1F1F1; /* Set container background to grey */
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      text-align: center; /* Centralize all content in the main container */
      padding: 20px; /* Overall padding for content inside the container */
    }
    .header-content {
      background-color: #F1F1F1; /* Changed to grey background */
      padding: 30px 20px 20px 20px; /* Adjusted padding for top section */
      color: #333; /* Default text color */
      text-align: center; /* Center content within header */
      border-radius: 10px 10px 0 0; /* Rounded top corners for header */
      margin-bottom: 20px; /* Space between header and content */
    }
    .content {
      background-color: #F1F1F1; /* Changed to grey background */
      padding: 30px;
      text-align: left; /* Align text content to the left */
      border-radius: 0 0 10px 10px; /* Rounded bottom corners for content */
      margin-bottom: 20px; /* Space between content and footer */
    }
    .footer-section { /* Renamed for clarity, no longer grey-background-div */
      background-color: #F1F1F1; /* Changed to grey background */
      padding: 20px; /* Consistent padding */
      text-align: center; /* Center content within the footer */
      border-radius: 0 0 10px 10px; /* Rounded bottom corners for the overall card */
      margin-top: 20px; /* Space between content and footer */
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
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    /* Added styles for the new text elements in the grey div */
    .footer-section p {
      margin-bottom: 8px; /* Small margin between paragraphs */
      font-size: 14px; /* Default font size for these paragraphs */
      color: #555; /* Slightly darker grey for readability */
      text-align: left; /* Ensure text is left-aligned in reset password footer */
    }
    .footer-section .contact-email {
      color: #00AA55; /* Green color for the email address */
      text-decoration: none;
      font-weight: bold;
    }
    .footer-section .copyright {
      font-size: 12px; /* Smaller font for copyright */
      color: #777;
      margin-top: 15px; /* More space above copyright */
    }
    /* Social Icons */
    .social-icons {
      text-align: left; /* Align social icons to the left for reset password */
      padding: 20px 0 0 0; /* Adjusted padding for content inside footer */
      margin-top: 10px;
    }
    .social-icons a {
      display: inline-block;
      margin: 0 10px;
    }
    /* Styling for image icons */
    .social-icons img {
      width: 24px;
      height: 24px;
      vertical-align: middle; /* Align images nicely */
    }
    /* Media Queries for smaller screens */
    @media only screen and (max-width: 480px) {
      body {
        padding: 0; /* Remove body padding on small screens */
      }
      .container {
        border-radius: 0; /* Remove border-radius on very small screens */
        box-shadow: none; /* Remove shadow on very small screens */
        padding: 10px; /* Adjust container padding for smaller screens */
      }
      .header-content, .content, .footer-section { /* Adjusted for renamed footer class */
        padding: 20px 15px; /* Adjust padding for smaller screens */
        border-radius: 0; /* Remove rounded corners on small screens */
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

      <h2 style="font-size: 24px; color: #212121; margin-top: 0; margin-bottom: 10px;"><strong>Hi, ${name}!</strong></h2>
      <p style="font-size: 16px; color: #333; margin-top: 0;">Need to reset password? No problem, just click the button below.</p>
    </div>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 20px auto;">
      <tr>
        <td style="border-radius: 5px; background: #00AA55; text-align: center;">
          <a href="${resetUrl}" target="_blank" style="background: #00AA55; border: 1px solid #00AA55; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 5px; font-weight: bold; padding: 12px 25px; color: #ffffff;" clicktracking="off">
            Reset Password &#8594; <!-- Added arrow icon here -->
          </a>
        </td>
      </tr>
    </table>

    <div class="footer-section">
      <!-- Content within grey div for reset password is left-aligned -->
      <p style="text-align: left;">If you did not initiate this request, please contact us at <a href="mailto:support@immigration.gov.ng" class="contact-email">support@immigration.gov.ng</a></p>
      <p style="text-align: left;">Thanks</p>
      <p style="text-align: left;">Nigeria Immigration Service</p>
       <p style="text-align: left; font-size: 14px; color: #666;">&copy; ${new Date().getFullYear()} Nigeria Immigration Service. All rights reserved.</p>
      <div class="social-icons" style="text-align: left;">
        <a href="https://www.facebook.com/NigeriaImmigrationService/" target="_blank">
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/facebook_whrbnd.png" alt="Facebook" width="24" height="24" style="display:inline-block;">
        </a>
        <a href="https://www.instagram.com/nigeriaimmigrationservice/" target="_blank">
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050700/instagram_n8vqxf.png" alt="Instagram" width="24" height="24" style="display:inline-block;">
        </a>
        <a href="https://twitter.com/nigimmigration" target="_blank">
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/Twitter_krzeqs.png" alt="Twitter" width="24" height="24" style="display:inline-block;">
        </a>
        <a href="https://www.linkedin.com/company/nigeria-immigration-service/" target="_blank">
          <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/Linkedin_zkkxfy.png" alt="LinkedIn" width="24" height="24" style="display:inline-block;">
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
          font-family: 'Poppins', sans-serif; /* Poppins font for the whole body */
          line-height: 1.6;
          color: #333;
          margin: 0; /* Remove margin */
          padding: 0; /* Remove padding */
          background-color: #F1F1F1; /* Grey background for the whole body */
          -webkit-text-size-adjust: 100%; /* Prevent text resizing on iOS */
          -ms-text-size-adjust: 100%; /* Prevent text resizing on Windows Phone */
          width: 100% !important; /* Full width for email clients */
        }

        /* Main Container */
        .container {
          max-width: 600px;
          margin: 0 auto; /* Center the container */
          background-color: #F1F1F1; /* Set container background to grey for consistent look */
          border-radius: 10px; /* Keep rounded corners for the overall card shape */
          box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Keep shadow for card effect */
          overflow: hidden;
          text-align: center; /* Centralize all content in the main container */
          padding: 20px; /* Add overall padding to the container */
        }

        /* Header Section */
        .header-content {
          background-color: #F1F1F1; /* Changed to grey background */
          padding: 30px 20px 20px 20px; /* Adjusted padding for top section */
          color: #333; /* Default text color */
          text-align: center; /* Center content within header */
          border-radius: 10px 10px 0 0; /* Rounded top corners for header */
          margin-bottom: 20px; /* Space between header and content */
        }

        /* Content Section */
        .content {
          background-color: #F1F1F1; /* Changed to grey background */
          padding: 30px;
          text-align: left; /* Align text content to the left */
          border-radius: 0 0 10px 10px; /* Rounded bottom corners for content */
          margin-bottom: 20px; /* Space between content and footer */
        }

        /* Footer Section */
        .footer-section { /* Renamed for clarity, no longer grey-background-div */
          background-color: #F1F1F1; /* Changed to grey background */
          padding: 20px; /* Consistent padding */
          text-align: center; /* Center content within the footer */
          border-radius: 0 0 10px 10px; /* Rounded bottom corners for the overall card */
          margin-top: 20px; /* Space between content and footer */
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
          padding: 12px 25px; /* Adjusted padding to match reset password button */
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
          text-align: center; /* Center social icons for welcome email */
          padding-top: 20px; /* Padding above icons */
          margin-top: 10px;
        }
        .social-icons a {
          display: inline-block;
          margin: 0 10px;
        }
        /* Styling for image icons */
        .social-icons img {
          width: 24px;
          height: 24px;
          vertical-align: middle; /* Align images nicely */
        }

        /* Media Queries for smaller screens */
        @media only screen and (max-width: 480px) {
          body {
            padding: 0; /* Remove body padding on small screens */
          }
          .container {
            border-radius: 0; /* Remove border-radius on very small screens */
            box-shadow: none; /* Remove shadow on very small screens */
            padding: 10px; /* Adjust container padding for smaller screens */
          }
          .header-content, .content, .footer-section { /* Adjusted for renamed footer class */
            padding: 20px 15px; /* Adjust padding for smaller screens */
            border-radius: 0; /* Remove rounded corners on small screens */
          }
          h2 {
            font-size: 20px !important; /* Slightly smaller header on mobile */
          }
          .button {
            padding: 10px 15px;
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
          <h2 style="color: #000000; margin: 0; font-size: 24px; font-weight: 600;">One Portal All Your <br> Immigration Services</h2>
        </div>

        <!-- Content Section -->
        <div class="content">
          <p>We are pleased to welcome you as a valued member of the Nigerian Immigration Service. Your registration has been successfully received, and your journey with us officially begins today.</p>
          <p>As part of our commitment to serving both citizens and residents, we are here to provide you with the necessary support, guidance, and resources throughout your process.</p>
          
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="width: 100%; margin: 20px auto;">
            <tr>
              <td style="text-align: center;">
                <a href="https://nigeria-immigration-service.vercel.app/" target="_blank" class="button" style="background: #00AA55; border: 1px solid #00AA55; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 1.1; text-align: center; text-decoration: none; display: block; width: 100%; max-width: 300px; margin: 0 auto; border-radius: 5px; font-weight: bold; padding: 12px 25px; color: #ffffff;" clicktracking="off">
                  Explore Now
                </a>
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer Section -->
        <div class="footer-section">
          <p style="text-align: center; font-size: 14px; color: #666;">&copy; ${new Date().getFullYear()} Nigeria Immigration Service. All rights reserved.</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/NigeriaImmigrationService/" target="_blank">
              <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/facebook_whrbnd.png" alt="Facebook" width="24" height="24" style="display:inline-block;">
            </a>
            <a href="https://www.instagram.com/nigeriaimmigrationservice/" target="_blank">
              <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050700/instagram_n8vqxf.png" alt="Instagram" width="24" height="24" style="display:inline-block;">
            </a>
            <a href="https://twitter.com/nigimmigration" target="_blank">
              <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/Twitter_krzeqs.png" alt="Twitter" width="24" height="24" style="display:inline-block;">
            </a>
            <a href="https://www.linkedin.com/company/nigeria-immigration-service/" target="_blank">
              <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753050701/Linkedin_zkkxfy.png" alt="LinkedIn" width="24" height="24" style="display:inline-block;">
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
