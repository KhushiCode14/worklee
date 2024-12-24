import express from "express";
import {
  createFreelancer,
  GetSingleFreelancer,
  UpdateFreelancerProfile,
  DeleteFreelancerProfile,
} from "./freelancerController.js";

const FreelancerRoutes = express.Router();

FreelancerRoutes.post("/:id", createFreelancer);
FreelancerRoutes.get("/:id", GetSingleFreelancer);
FreelancerRoutes.patch("/:id", UpdateFreelancerProfile);
FreelancerRoutes.delete("/:id", DeleteFreelancerProfile);

export default FreelancerRoutes;
