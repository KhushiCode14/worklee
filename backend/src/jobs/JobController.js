import Job from "../models/Jobs.js";
const PostJobController = async (req, res) => {
  const {
    title,
    description,
    location,
    projectType,
    company,
    skills,
    category,
    connectionRequired,
    status,
    proposals_count,
    attachments,
    tags,
    client,
    duration,
    budget,
    amount,
    hourly_rate,
    visibility,
  } = req.body;

  // Check if required fields are provided

  try {
    // Assuming you have a Job model
    const newJob = new Job({
      title,
      description,
      location,
      projectType,
      company,
      skills,
      category,
      connectionRequired,
      status,
      proposals_count,
      attachments,
      tags,
      client,
      duration,
      budget,
      amount,
      hourly_rate,
      visibility,
    });

    // Save the new job to the database
    await newJob.save();

    return res
      .status(201)
      .json({ message: "New job posted successfully", job: newJob });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { PostJobController };
