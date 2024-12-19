// import User from "../models/User";
import express from "express";
import { RegisterController, LoginController } from "./AuthController.js";
const AuthRoutes = express.Router();

// register routes
AuthRoutes.post("/register", RegisterController);

// login routes
AuthRoutes.post("/login", LoginController);
export default AuthRoutes;
