import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state with const keyword
const initialState = {
  title: "",
  skills: [], // Initial skills as an empty array
  scope: "", // Default scope
  duration: "", // Default duration
  levelOfExperience: "", // Default level of experience
  contractToHire: false, // Default contract-to-hire value
  budget: {
    type: null, // Default budget type (Hourly or Fixed)
    amount: null, // No initial amount
    hourly_rate: {
      min: null, // Min hourly rate
      max: null, // Max hourly rate
    },
  },
  description: "", // Empty description initially
  attachments: [], // Empty array for attachments
  location: "", // Empty location
  connectionRequired: false, // Default for connectionRequired
  status: "open", // Default status for the job
  proposals_count: 0, // Default proposals count
  tags: [], // Initial empty tags array
  client: null, // Client reference will be set when creating a job
  applicants: [], // Empty applicants array
  visibility: "", // Default visibility (Public, Private, Invite-only)
  deadline: null, // No deadline initially
  loading: false, // Loading state for async actions
  error: null, // Error state to capture any errors
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // Action to set loading state
    setLoading: (state) => {
      state.loading = true;
    },
    // Action to set job details
    setJobDetails: (state, action) => {
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
        client,
        applicants,
        visibility,
        deadline,
      } = action.payload;

      state.title = title || state.title;
      state.skills = skills || state.skills;
      state.scope = scope || state.scope;
      state.duration = duration || state.duration;
      state.levelOfExperience = levelOfExperience || state.levelOfExperience;
      state.contractToHire = contractToHire || state.contractToHire;
      state.budget = budget || state.budget;
      state.description = description || state.description;
      state.attachments = attachments || state.attachments;
      state.location = location || state.location;
      state.connectionRequired = connectionRequired || state.connectionRequired;
      state.status = status || state.status;
      state.proposals_count = proposals_count || state.proposals_count;
      state.tags = tags || state.tags;
      state.client = client || state.client;
      state.applicants = applicants || state.applicants;
      state.visibility = visibility || state.visibility;
      state.deadline = deadline || state.deadline;
      state.loading = false;
    },
    // Action to reset job details (clear job data)
    resetJobDetails: () => {
      // Reset the state to initial values
      return { ...initialState };
    },
    // Action to handle errors
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Exporting actions for use in components
export const { setLoading, setJobDetails, resetJobDetails, setError } =
  jobSlice.actions;

// Selector to get job details
export const selectJobDetails = (state) => state.jobs;

// Selector for loading state
export const selectLoading = (state) => state.jobs.loading;

// Selector for error state
export const selectError = (state) => state.jobs.error;

// Export the reducer
export default jobSlice.reducer;
