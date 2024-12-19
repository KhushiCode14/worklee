import express from "express";
import { PostJobController } from "./JobController.js";

const JobRoutes = express.Router();

// add routes for job
JobRoutes.post("/job", PostJobController);
export default JobRoutes;
