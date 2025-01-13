//importing mongoose for schema creation
import mongoose from "mongoose";

//creating the user schema with the hlep of mongoose.schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
    },
    codeExpiration: {
      type: Date,
    },
  },
  {
    timestamps: true, // It will Automatically adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
