const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required
      trim: true, // Removes whitespace from both sides
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true, // Ensures email is unique
      trim: true,
      lowercase: true, // Converts email to lowercase
      match: [/.+\@.+\..+/, "Please use a valid email address"], // Basic email format validation
    },
    password: {
      type: String,
      required: true, // Password is required
      minlength: 6, // Enforces minimum length of 6 characters
    },
    age: {
      type: Number,
      min: 0, // Age must be a positive number
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` timestamps
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
