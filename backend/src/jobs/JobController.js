import Client from "../models/Client.js";
import Job from "../models/Jobs.js";

// Create a new job post
const PostJob = async (req, res) => {
  const { id } = req.params; // Client ID from URL params
  try {
    const {
      title,
      skills,
      scope,
      duration,
      levelOfExperience,
      contractToHire,
      budget,
      description,
      attachments,
      location,
      connectionRequired,
      status,
      proposals_count,
      tags,
      applicants,
      visibility,
      deadline,
    } = req.body;

    // Check if the client exists
    const clientExist = await Client.findById(id);
    if (!clientExist) {
      return res.status(404).json({ message: "Client not found" });
    }

    const clientId = clientExist._id;

    // Prepare the post details
    const postDetail = {
      title,
      skills,
      scope,
      duration,
      levelOfExperience,
      contractToHire,
      budget,
      description,
      attachments,
      location,
      connectionRequired,
      status,
      proposals_count,
      tags,
      applicants,
      visibility,
      deadline,
      client: clientId,
    };

    // Check if post already exists
    const existingPost = await Job.findOne({ client: clientId, title });
    if (existingPost) {
      return res.status(400).json({ message: "Post already exists" });
    }

    // Create and save the new post
    const newPost = new Job(postDetail);
    await newPost.save();

    res.status(201).json({ message: "Job posted successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message || "An error occurred while posting the job",
    });
  }
};

// Read all job posts
const GetAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("client");
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      error: error.message || "An error occurred while retrieving jobs",
    });
  }
};

// Read a single job post by ID
const GetJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id).populate("client");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({
      error: error.message || "An error occurred while retrieving the job",
    });
  }
};

// Update a job post
const UpdateJob = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("client");
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res
      .status(200)
      .json({ message: "Job updated successfully", job: updatedJob });
  } catch (error) {
    res.status(500).json({
      error: error.message || "An error occurred while updating the job",
    });
  }
};

// Delete a job post
const DeleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message || "An error occurred while deleting the job",
    });
  }
};

export { PostJob, GetAllJobs, GetJobById, UpdateJob, DeleteJob };
