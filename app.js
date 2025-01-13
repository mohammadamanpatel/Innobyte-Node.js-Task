// Importing the required modules
import express from "express"; // Express framework for building APIs

// For loading environment variables
import { config } from "dotenv"; 

// Initializing dotenv to access variables from .env file
config(); 
import cookieParser from "cookie-parser"; // Middleware to parse cookies

// Importing the database connection and user routes
import DBConnection from "./config/DB.Connect.js"; // Function to connect to MongoDB
import UserRoutes from "./routes/user.routes.js"; // User-related API routes

// Initializing the Express app
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Middleware to handle cookies in requests
app.use(cookieParser());

// Route handler for user-related endpoints
app.use("/api", UserRoutes);

// Starting the server
app.listen(process.env.PORT, async () => {
  console.log("Our App is working on " + process.env.PORT); // Log the port the app is running on
  // Establish database connection
  await DBConnection();
});
