import express from "express";
import { createFreelancer } from "./freelancerController.js";

const FreelancerRoutes = express.Router();

FreelancerRoutes.post("/:id", createFreelancer);

export default FreelancerRoutes;
