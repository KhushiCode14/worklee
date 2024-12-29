import { createSlice } from "@reduxjs/toolkit";
// import { Languages } from "lucide-react";

const freelancerSlice = createSlice({
  name: "freelancer",
  initialState: {
    experience: "",
    goal: "",
    skills: "",
    languages: [],
    hourly_Rate: "",
  },
  reducers: {
    setExperience(state, action) {
      state.experience = action.payload;
    },
    setGoal(state, action) {
      state.goal = action.payload;
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    setHourlyRate(state, action) {
      state.hourly_Rate = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setExperience,
  setGoal,
  setSkills,
  setLanguages,
  setHourlyRate,
} = freelancerSlice.actions;

export default freelancerSlice.reducer;
// experience: ["new", "some-experience", "expert"]
// goal:["extra money", "side money", "experience", "no goal"]
