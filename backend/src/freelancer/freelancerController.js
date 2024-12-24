import mongoose from "mongoose";
import Freelancer from "../models/Freelancer.js";
import User from "../models/User.js";

const createFreelancer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has the role of 'freelancer'
    if (user.role !== "freelancer") {
      return res.status(403).json({
        message:
          "Only users with role 'freelancer' can create a freelancer profile",
      });
    }

    // Destructure body for freelancer details
    const { title, skills, language } = req.body;
    if (!title || !skills || !language) {
      return res
        .status(400)
        .json({ message: "title, skills, and language are required" });
    }

    // Check if a freelancer profile already exists for this user
    const existingFreelancer = await Freelancer.findOne({ user: user._id });
    if (existingFreelancer) {
      return res
        .status(400)
        .json({ message: "Freelancer profile already exists" });
    }

    // Create a new Freelancer profile
    const freelancer = new Freelancer({
      user: user._id,
      title,
      skills,
      language,
    });

    await freelancer.save();

    // Optional: Update user document with the freelancer profile reference
    user.freelancerDetails = freelancer._id;
    await user.save();

    return res.status(201).json({ freelancer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const GetSingleFreelancer = async (req, res) => {
  // user id
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }
    // find user
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // find freelancer profile
    const freelancer = await Freelancer.findOne({ user: user._id });
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }
    return res.status(200).json({ freelancer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const UpdateFreelancerProfile = async (req, res) => {
  // user id
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }
    // find user
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // find freelancer profile
    const freelancer = await Freelancer.findOne({ user: user._id });
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }
    // update freelancer profile
    const { title, skills, language } = req.body;
    if (title) freelancer.title = title;
    if (skills) freelancer.skills = skills;
    if (language) freelancer.language = language;
    await freelancer.save();
    return res.status(200).json({ freelancer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const DeleteFreelancerProfile = async (req, res) => {
  const { id } = req.params;
  try {
    // Find user by ID
    const user = await User.findById(id);
    console.log("user", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is a freelancer
    if (user.role === "freelancer") {
      // Delete freelancer profile
      const freelancer = await Freelancer.findByIdAndDelete(
        user.freelancerDetails
      );
      if (!freelancer) {
        return res
          .status(404)
          .json({ message: "Freelancer profile not found" });
      }

      // Clear freelancerDetails reference in the user
      user.freelancerDetails = undefined;
      console.log("freelancer details:", user.freelancerDetails);
      await user.save({ validate: false });
    }

    return res
      .status(200)
      .json({ message: "Freelancer profile deleted", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export {
  createFreelancer,
  GetSingleFreelancer,
  UpdateFreelancerProfile,
  DeleteFreelancerProfile,
};
