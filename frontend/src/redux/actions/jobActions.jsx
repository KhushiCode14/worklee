import axios from "axios";

export const fetchJobs = () => async (dispatch) => {
  dispatch(fetchJobsStart());
  try {
    const response = await axios.get("/api/jobs");
    dispatch(fetchJobsSuccess(response.data));
  } catch (error) {
    dispatch(fetchJobsFailure(error.response.data));
  }
};
