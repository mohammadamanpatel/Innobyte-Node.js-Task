// Import express instance for router
import express from "express";

// Importing controllers for functionality
import {
  confirmEmail,
  create_user,
  login_user,
  Profile,
} from "../controllers/user.controller.js";

// Import middleware to verify token
import { verifyToken } from "../middlewares/verify_token.js";

// Create a new router instance
const router = express.Router();

// Route for user signup
router.post("/signup", create_user);

// Route for user login
router.post("/login", login_user);

// Route for email confirmation
router.post("/confirm-email", confirmEmail);

// Route for accessing user profile (requires token verification)
router.get("/Profile", verifyToken, Profile);

// Export the router
export default router;
