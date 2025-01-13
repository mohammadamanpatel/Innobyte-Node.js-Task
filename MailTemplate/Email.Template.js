export const emailConfirmationTemplate = (confirmationCode, hostemail) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Confirmation</title>
        <style>
          /* General Styles */
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            color: #333;
          }
  
          .email-wrapper {
            width: 100%;
            padding: 40px 0;
          }
  
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }
  
          .header {
            background: linear-gradient(135deg, #2575fc, #6a11cb);
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
  
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
  
          .content {
            padding: 30px;
          }
  
          .content h2 {
            font-size: 22px;
            color: #4CAF50;
            margin-bottom: 15px;
          }
  
          .message {
            font-size: 16px;
            color: #555;
            line-height: 1.8;
            margin-bottom: 20px;
          }
  
          .confirmation-code {
            display: inline-block;
            font-size: 28px;
            font-weight: bold;
            color: #ffffff;
            background: #4CAF50;
            padding: 10px 20px;
            border-radius: 6px;
            margin: 20px 0;
            text-align: center;
          }
  
          .cta-button {
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            background: linear-gradient(135deg,rgb(30, 24, 37),rgb(45, 89, 164));
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.3s ease;
          }
  
          .cta-button:hover {
            background: linear-gradient(135deg, #2575fc, #6a11cb);
          }
  
          .footer {
            font-size: 12px;
            color: #aaa;
            text-align: center;
            padding: 20px;
            background: #f9f9f9;
            border-top: 1px solid #ddd;
          }
  
          .footer a {
            color: #6a11cb;
            text-decoration: none;
          }
  
          .footer a:hover {
            text-decoration: underline;
          }
  
          /* Responsive Styles */
          @media screen and (max-width: 600px) {
            .content {
              padding: 20px;
            }
  
            .cta-button {
              display: block;
              width: 100%;
              text-align: center;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="header">
              <h1>Welcome to Our Platform!</h1>
            </div>
            <div class="content">
              <h2>Email Confirmation</h2>
              <p class="message">
                Hello, <br><br>
                Thank you for registering with us! To complete your registration, please use the confirmation code below:
              </p>
              <div class="confirmation-code">
                ${confirmationCode}
              </div>
              <p class="message">
                If you did not register for this account, please ignore this email or contact us for support.
              </p>
              <a href="mailto:${hostemail}" class="cta-button">Contact Support</a>
            </div>
            <div class="footer">
              If you have any questions, feel free to <a href="mailto:${hostemail}">reach out to us</a>. <br>
              &copy; ${new Date().getFullYear()} Our Platform. All rights reserved.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  };
  