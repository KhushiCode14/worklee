import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  setExperience,
  setGoal,
  setCategory,
  setSubcategories,
  setDescription,
  setTitle,
  setSkills,
  setLanguages,
  setHourlyRate,
  setYouGet,
} from "../../../redux/slices/freelancerSlice";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PreviewFreelancerProfile = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  const token = localStorage.getItem("token"); // Get JWT token from local storage
  const decode = jwtDecode(token);
  console.log(token);
  const id = decode.id;
  // const id = "6776a335dde122d5675ab6eb"; //freelancer user id from register;
  // Fetching values from Redux store
  const freelancer = useSelector((state) => state.freelancer);

  const [formValues, setFormValues] = useState({
    experience: freelancer?.experience || "",
    goal: freelancer?.goal || "",
    category: freelancer?.category || "",
    subcategories: freelancer?.subcategories || [],
    description: freelancer?.description || "",
    title: freelancer?.title || "",
    skills: freelancer?.skills || [],
    languages: freelancer?.languages || [],
    hourlyRate: freelancer?.hourlyRate || 0,
    youget: freelancer?.youget || 0,
  });

  useEffect(() => {
    setFormValues({
      experience: freelancer?.experience || "",
      goal: freelancer?.goal || "",
      category: freelancer?.category || "",
      subcategories: freelancer?.subcategories || [],
      description: freelancer?.description || "",
      title: freelancer?.title || "",
      skills: freelancer?.skills || [],
      languages: freelancer?.languages || [],
      hourlyRate: freelancer?.hourlyRate || 0,
      youget: freelancer?.youget || 0,
    });
  }, [freelancer]);

  // Handling change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Dispatch each change to Redux immediately
    switch (name) {
      case "experience":
        dispatch(setExperience(value));
        break;
      case "goal":
        dispatch(setGoal(value));
        break;
      case "category":
        dispatch(setCategory(value));
        break;
      case "subcategories":
        dispatch(setSubcategories(value.split(", ")));
        break;
      case "description":
        dispatch(setDescription(value));
        break;
      case "title":
        dispatch(setTitle(value));
        break;
      case "skills":
        dispatch(setSkills(value.split(", ")));
        break;
      case "languages":
        dispatch(setLanguages(value.split(", ")));
        break;
      case "hourlyRate":
        dispatch(setHourlyRate(value));
        break;
      case "youget":
        dispatch(setYouGet(value));
        break;
      default:
        break;
    }
  };

  const url = `${import.meta.env.VITE_BACKEND_INTEGRATION}/freelancer/${id}`;

  // Submit form
  const handleSubmit = async () => {
    try {
      const response = await axios.post(url, formValues);
      console.log(response.data);
      // Handle successful response, e.g., show a success message
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <section className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-8 text-3xl font-semibold text-center">
        Freelancer Profile Preview
      </h2>

      <form className="space-y-6">
        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={formValues.experience}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="new">New</option>
            <option value="some-experience">Some Experience</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        {/* Goal */}
        <div>
          <label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-700"
          >
            Goal
          </label>
          <select
            id="goal"
            name="goal"
            value={formValues.goal}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="extra money">Extra Money</option>
            <option value="side money">Side Money</option>
            <option value="experience">Experience</option>
            <option value="no goal">No Goal</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            value={formValues.category}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subcategories */}
        <div>
          <label
            htmlFor="subcategories"
            className="block text-sm font-medium text-gray-700"
          >
            Subcategories
          </label>
          <input
            id="subcategories"
            name="subcategories"
            type="text"
            value={formValues.subcategories.join(", ")}
            onChange={(e) => handleInputChange(e)}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formValues.title}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Skills */}
        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <input
            id="skills"
            name="skills"
            type="text"
            value={formValues.skills.join(", ")}
            onChange={(e) => handleInputChange(e)}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Languages */}
        <div>
          <label
            htmlFor="languages"
            className="block text-sm font-medium text-gray-700"
          >
            Languages
          </label>
          <input
            id="languages"
            name="languages"
            type="text"
            value={formValues.languages.join(", ")}
            onChange={(e) => handleInputChange(e)}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <label
            htmlFor="hourlyRate"
            className="block text-sm font-medium text-gray-700"
          >
            Hourly Rate
          </label>
          <input
            id="hourlyRate"
            name="hourlyRate"
            type="number"
            value={formValues.hourlyRate}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* You Get */}
        <div>
          <label
            htmlFor="youget"
            className="block text-sm font-medium text-gray-700"
          >
            You Get
          </label>
          <input
            id="youget"
            name="youget"
            type="number"
            value={formValues.youget}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-1 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Save Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default PreviewFreelancerProfile;
