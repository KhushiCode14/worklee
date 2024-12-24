import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Client from "../models/Client.js";
import mongoose from "mongoose";

const CreateClient = async (req, res) => {
  try {
    // destructuring id
    const { id } = req.params;

    // if id not provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check the user's role
    if (user.role !== "client") {
      return res.status(403).json({ message: "User is not a client" });
    }

    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({ message: "Company name is required" });
    }

    // Check if the company name already exists
    const existingClient = await Client.findOne({ companyName });
    if (existingClient) {
      return res.status(400).json({ message: "Company name already exists" });
    }

    // Create and save the new client
    const newClient = new Client({
      companyName,
      user: id,
    });

    await newClient.save();

    // Update the user with client details
    user.clientDetails = newClient._id;
    await user.save();

    res
      .status(200)
      .json({ message: "Client created successfully", client: newClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single client by user ID
const GetSingleClient = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has client details
    if (!user.clientDetails) {
      return res.status(404).json({ message: "Client details not found" });
    }

    // Find the client by client ID
    const client = await Client.findById(user.clientDetails);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
const UpdateClientProfile = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== "client") {
      return res.status(403).json({ message: "User is not a client" });
    }

    const clientId = user.clientDetails;
    if (!clientId) {
      return res.status(404).json({ message: "Client details not found" });
    }

    const { companyName, name, email, password, phone } = req.body;

    const updateData = {};
    if (companyName) updateData.companyName = companyName;
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const client = await Client.findByIdAndUpdate(clientId, updateData, {
      new: true,
    });
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client updated successfully", client });
  } catch (error) {
    console.error("Update error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const DeleteClientProfile = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Invalid client ID format" });
  }
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.role === "client") {
      const client = await Client.findByIdAndDelete(user.clientDetails);
      if (!client) {
        return res.status(404).json({ message: "Client not found" });
      }
      user.clientDetails = null;
      await user.save({ validate: false });
    }
    return res
      .status(200)
      .json({ message: "CLient profile deleted successfully", user: user });
  } catch (error) {
    console.log("error", error);
    res.json({ message: "this is error message", error: error });
  }
};
export {
  CreateClient,
  GetSingleClient,
  UpdateClientProfile,
  DeleteClientProfile,
};
