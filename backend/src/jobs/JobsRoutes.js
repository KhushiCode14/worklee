import express from "express";
import mongoose from "mongoose";
import {
  PostJob,
  GetAllJobs,
  GetJobById,
  UpdateJob,
  DeleteJob,
} from "./JobController.js";

const JobRoutes = express.Router();
const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  next();
};
// Route to create a new job post
// :id represents the client ID from the URL
JobRoutes.post("/:id", validateObjectId, PostJob);

// Route to get all job posts
JobRoutes.get("/", validateObjectId, GetAllJobs);

// Route to get a specific job post by its ID
JobRoutes.get("/:id", validateObjectId, GetJobById);

// Route to update a job post by its ID
JobRoutes.put("/:id", validateObjectId, UpdateJob);

// Route to delete a job post by its ID
JobRoutes.delete("/:id", validateObjectId, DeleteJob);

export default JobRoutes;
