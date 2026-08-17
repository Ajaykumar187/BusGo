import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";

// GET all users (Admin)
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    users,
  });
});

// DELETE a user (Admin)
export const deleteUser = asyncHandler(async (req, res) => {
  if (req.params.id === req.user.id) {
    return res.status(400).json({
      success: false,
      message: "You cannot delete your own account",
    });
  }

  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.json({
    success: true,
    message: "User deleted successfully",
  });
});
