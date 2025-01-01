import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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

const PreviewFreelancerProfile = () => {
  const dispatch = useDispatch();
  const id = "6774fb2c6a69936882e258f0"; //freelancer user id from register;
  // Fetching values from Redux store
  const freelancer = useSelector((state) => state.freelancer);

  const [formValues, setFormValues] = useState({
    experience: freelancer.experience,
    goal: freelancer.goal,
    category: freelancer.category,
    subcategories: freelancer.subcategories,
    description: freelancer.description,
    title: freelancer.title,
    skills: freelancer.skills,
    languages: freelancer.languages,
    hourlyRate: freelancer.hourlyRate,
    youget: freelancer.youget,
  });

  // Handling change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const url = `${import.meta.env.VITE_BACKEND_INTEGRATION}/freelancer/${id}`;
  // Submit form
  const handleSubmit = async () => {
    try {
      const response = await axios.post(url, formValues);
      console.log(response.data);
      console.log(response.data);
      // Dispatch updated form data to Redux
      dispatch(setExperience(formValues.experience));
      dispatch(setGoal(formValues.goal));
      dispatch(setCategory(formValues.category));
      dispatch(setSubcategories(formValues.subcategories));
      dispatch(setDescription(formValues.description));
      dispatch(setTitle(formValues.title));
      dispatch(setSkills(formValues.skills));
      dispatch(setLanguages(formValues.languages));
      dispatch(setHourlyRate(formValues.hourlyRate));
      dispatch(setYouGet(formValues.youget));
      // Handle the response here
    } catch (error) {
      console.error("Error submitting form", error);
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
            onChange={(e) =>
              setFormValues({
                ...formValues,
                subcategories: e.target.value.split(", "),
              })
            }
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
            onChange={(e) =>
              setFormValues({
                ...formValues,
                skills: e.target.value.split(", "),
              })
            }
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
            onChange={(e) =>
              setFormValues({
                ...formValues,
                languages: e.target.value.split(", "),
              })
            }
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
        <div className="text-center">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Profile
          </button>
        </div>
      </form>
    </section>
  );
};

export default PreviewFreelancerProfile;
