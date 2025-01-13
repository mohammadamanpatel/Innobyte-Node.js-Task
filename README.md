---
#Innobyte Task

This is a Node.js, Express.js, and MongoDB-based User Authentication System, with user signup, email confirmation, JWT-based authentication, and profile management. It also features secure token handling, dynamic email templates, and clean modular structure that make the application very maintainable and friendly to use.
---

---
## **📜 Table of Contents**
1. [Features](#-features)  
2. [Technologies Used](#-technologies-used)  
3. [Project Structure](#-project-structure)  
4. [API Endpoints](#-api-endpoints)  
5. [API Documentation](#-api-documentation)  
6. [Video Demonstration](#-video-demonstration)  

---

## **🚀 Features**
This project includes the following functionalities:
- **User Signup**: Users can create an account with their email and password.
- **Email Confirmation**: A confirmation email with a unique code is sent to verify the user's email address.
- **User Login**: Secure user authentication with token-based validation.
- **Profile Management**: Users can view their profile after logging in.
- **JWT Authentication**: Secure access to protected routes using JSON Web Tokens (JWT).
- **Token in Cookies**: The token is securely stored in cookies for session management.
- **Dynamic Email Templates**: Emails are sent with beautifully designed templates.

---

## **💻 Technologies Used**

### **Backend**
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated, and minimalist web framework.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.

### **Email System**
- **Nodemailer**: For sending emails to users.
- **Dynamic Email Templates**: Predefined email designs for sending confirmation codes.

### **Authentication**
- **JSON Web Tokens (JWT)**: For secure user authentication and session management.
- **Token Verification Middleware**: Custom middleware to verify user tokens.

### **Utilities**
- **Custom Code Generator**: Generates unique confirmation codes for email verification.
- **Environment Variables**: Securely managing sensitive data with `.env`.

---

## **📂 Project Structure**

The project follows a clean and modular structure for maintainability:

```plaintext
config/
  └── DB.Connect.js           # Database connection setup
controllers/
  └── user.controller.js      # User-related logic
MailTemplate/
  └── Email.Template.js       # Dynamic email template for verification
middlewares/
  └── verify_token.js         # Middleware for token validation
models/
  └── user.model.js           # MongoDB schema for the User
routes/
  └── user.routes.js          # API routes for user functionalities
utils/
  ├── Confirm_Code_Generate.js # Utility for generating confirmation codes
  └── mail.sender.js          # Utility for sending emails
.env                          # Environment variables
app.js                        # Application entry point
package.json                  # Project dependencies and scripts
```

---

## **🌐 API Endpoints**

Here are the key API endpoints available in this project:

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| POST   | `/signup`           | User registration            |
| POST   | `/login`            | User login                   |
| POST   | `/confirm-email`    | Email confirmation           |
| GET    | `/profile`          | Get logged-in user profile   |

---

## **📘 API Documentation**
For a detailed description of the API, including request and response formats, refer to the full **API Documentation** here:  
[📄 API Documentation (Postman)](https://www.postman.com/joint-operations-cosmologist-64352344/workspace/innobyte-node-js-task-apis/collection/30730048-25f93c71-fbb4-49e0-9ec8-c2ca5b52dc79?action=share&creator=30730048)

---

## **🎥 Video Demonstration**
Watch the **video demonstration** of this project in action here:  
[🎬 Video File (Google Drive)](https://www.postman.com/joint-operations-cosmologist-64352344/workspace/innobyte-node-js-task-apis/collection/30730048-25f93c71-fbb4-49e0-9ec8-c2ca5b52dc79?action=share&creator=30730048)

---
