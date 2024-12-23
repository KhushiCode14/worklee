import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config.js";
const RegisterController = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await user.save();
    console.log({ message: "User registered successfully" });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error: " + error.message });
  }
};

const LoginController = async (req, res) => {
  const { email, password, role } = req.body;
  // if (!email || !password || !role) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    // if (!user.comparePassword(password)) {
    //   return res.status(400).json({ message: "Invalid password" });
    // }
    // match password
    // const token = jwt.sign(user);
    const payload = { id: user._id, name: user.name, role: user.role }; // Add user information in the payload
    const token = jwt.sign(payload, config.jwt_secret, {
      expiresIn: "1h",
    }); // Token expires in 1 hour
    console.log("login");
    res.json({ message: "Logged in successfully", token });
    if (role === "freelancer") {
      await User.findOne({ email, password, role: "freelancer" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export { RegisterController, LoginController };
