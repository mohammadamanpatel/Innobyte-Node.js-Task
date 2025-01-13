import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateConfirmationCode from "../utils/Confirm_Code_Generate.js";
import { sendConfirmationEmail } from "../utils/mail.sender.js";

//Controller for user creation
export const create_user = async (req, res) => {
  try {
    //getting inputs from req.body
    const { username, email, password } = req.body;

    //checking the inputs if they are available or not
    if (!username || !email || !password) {
      res.status(400).json({
        message: "plz fill all the credentials",
      });
    }

    //checking if the user still exists or not
    const isUserExists = await User.findOne({ email: email });
    if (isUserExists) {
      res.status(400).json({
        message: "user already exists",
      });
    }

    //hashing the password using bcrypt.hash
    const hashedPassword = await bcrypt.hash(password, 10);

    //creating the entry of the user into the database
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    // Generate confirmation code
    const confirmationCode = generateConfirmationCode();

    // Set code expiration (e.g., 10 minutes from now)
    const codeExpiration = new Date();
    codeExpiration.setMinutes(codeExpiration.getMinutes() + 10);

    // Save the confirmation code and expiration time
    newUser.confirmationCode = confirmationCode;
    newUser.codeExpiration = codeExpiration;

    await newUser.save();

    // Send the confirmation email with the code
    await sendConfirmationEmail(email, confirmationCode);
    //returning the response to the client
    return res.status(200).json({
      newUser,
      message: "user created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      messsage: "insternal server error",
      error: error.message,
    });
  }
};
// Controller for email confirmation
export const confirmEmail = async (req, res) => {
  try {
    const { email, confirmationCode } = req.body;

    // Validating inputs for confirming the mail
    if (!email || !confirmationCode) {
      return res
        .status(400)
        .json({ message: "Please provide email and confirmation code." });
    }

    // Finding the user by email wheather existes or not in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Checking if the confirmation code matches and is not expired
    if (user.confirmationCode !== confirmationCode) {
      return res.status(400).json({ message: "Invalid confirmation code." });
    }

    if (new Date() > user.codeExpiration) {
      return res
        .status(400)
        .json({ message: "Confirmation code has expired." });
    }

    // Mark the user as verified
    user.isVerified = true;
    user.confirmationCode = null; // Clear the confirmation code
    user.codeExpiration = null; // Clear the expiration time

    await user.save();

    res
      .status(200)
      .json({ message: "Email confirmed successfully. You can now log in." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong.", error: error.message });
  }
};

export const login_user = async (req, res) => {
  try {
    //taking email and passwords as an input from req.body
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "plz fill the credentials",
      });
    }

    //checking the user if existes or not in the database
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({
        message: "user does't exist plz register",
      });
    }

    //comparing the password by using brcypt.compare
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    //creating jwt token payload object
    const payload = {
      id: user._id,
    };

    //creating token using jwt.sign
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    user.token = token;
    user.password = null;

    //creating cookie options for cookie creation
    const cookie_options = {
      MaxAge: process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    };
    //creating cookie using above jwt token
    res.cookie("token", token, cookie_options);
    res.status(200).json({ message: "User Loggedin Successfully", user ,token:token});
  } catch (error) {
    //sending error and message in response if any internal server error comes
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
export const Profile = async (req, res) => {
  try {
    //extracting id from req.user which comes because of Jwt Token
    const id = req.user.id;

    //Checking wheather user id is present or not
    if (!id) {
      res.status(400).json({
        message: "user id not found",
      });
    }
    
    //finding the user in the database
    const user = await User.findById(id);

    //checking wheather user exists or not
    if (!user) {
      res.status(400).json({
        message: "user dont exists",
      });
    }

    //returning the response if user exists
    return res.status(200).json({
      message: "user profile found",
      user,
    });
  } catch (error) {
    //sending error and message in response if any internal server error comes
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
