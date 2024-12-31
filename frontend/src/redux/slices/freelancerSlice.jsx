import { createSlice } from "@reduxjs/toolkit";
// import { Languages } from "lucide-react";

const freelancerSlice = createSlice({
  name: "freelancer",
  initialState: {
    experience: "",
    goal: "",
    category: "",
    title: "",
    subcategories: [],
    skills: [],
    languages: [],
    description: "",
    hourlyRate: 0,
    youget: 0,
  },
  reducers: {
    setExperience(state, action) {
      state.experience = action.payload;
    },
    setGoal(state, action) {
      state.goal = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload; // Set category (it can be an empty string too)
      state.subcategories = []; // Reset subcategories when category changes
    },
    setSubcategories(state, action) {
      state.subcategories = action.payload; // Set subcategories (it can be an empty array too)
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    setHourlyRate(state, action) {
      state.hourlyRate = action.payload;
    },
    setYouGet(state, action) {
      state.youget = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setExperience,
  setGoal,
  setSkills,
  setLanguages,
  setCategory,
  setSubcategories,
  setHourlyRate,
  setDescription,
  setTitle,
  setYouGet,
} = freelancerSlice.actions;

export default freelancerSlice.reducer;
// experience: ["new", "some-experience", "expert"]
// goal:["extra money", "side money", "experience", "no goal"]
