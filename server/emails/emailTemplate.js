export function resetPasswordEmailTemplate(firstName, resetUrl) {
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
      background-color: #ffffff; /* White background for the whole body */
    }
    .container {
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      text-align: center; /* Centralize all content in the main container */
    }
    .header-content {
      padding: 30px 20px 20px 20px; /* Adjusted padding for top section */
    }
    .grey-background-div {
      background-color: #f3f6f8; /* Grey background for this section */
      padding: 20px;
      text-align: center; /* This centers the div itself, but its content will be left-aligned below */
      border-radius: 0 0 10px 10px; /* Rounded corners only at bottom */
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
  </style>
</head>
<body>
  <div class="container">
    <div class="header-content">
      <!-- Increased max-width and max-height for the logo for better visibility -->
      <img src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1751285511/armIcon_pj56l1.png" alt="Nigeria Immigration Logo" style="max-width: 80px; max-height: 70px; margin-bottom: 20px; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">
      <img src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1752659301/bro_m3ijow.png" alt="Illustration" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px auto;">

      <h2 style="font-size: 24px; color: #00AA55; margin-top: 0; margin-bottom: 10px;"><strong>Hi, ${firstName}!</strong></h2>
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
    </div>
  </div>
</body>
</html>

  
  
  `;
}

export function welcomeEmailTemplate(firstName) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Welcome, ${name} 👋</h2>
      <p>Thank you for signing up for our app! We're thrilled to have you.</p>
      <p>Feel free to explore and reach out if you need anything.</p>
      <hr />
      <p style="font-size: 0.9em; color: #888;">This is an automated email, please do not reply.</p>
    </div>
  `;
}
