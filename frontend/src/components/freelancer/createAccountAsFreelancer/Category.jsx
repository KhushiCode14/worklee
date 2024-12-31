import { useState } from "react";
// import ProgressBar from "./ProgressBar";
import { Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setSubcategories,
} from "../../../redux/slices/freelancerSlice";

7;

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  // const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const categories = [
    "Accounting & Consulting",
    "Admin Support",
    "Customer Service",
    "Data Science & Analytics",
    "Design & Creative",
    "Engineering & Architecture",
    "IT & Networking",
    "Legal",
    "Sales & Marketing",
    "Translation",
    "Web, Mobile & Software Dev",
    "Writing",
  ];

  const subcategories = {
    "Web, Mobile & Software Dev": [
      "Frontend Development",
      "Backend Development",
      "Mobile Apps",
    ],
    "Design & Creative": ["Graphic Design", "UI/UX Design", "Animation"],
    // Add more subcategories for other categories if needed
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    dispatch(setCategory(category)); // Set category in redux state
    setSelectedSubcategories([]); // Reset subcategories
    dispatch(setSubcategories([])); // Reset subcategories in redux state
  };

  const handleSubcategoryToggle = (subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
    dispatch(setSubcategories(selectedSubcategories)); // Set subcategories in redux state
  };

  const handleSubmit = (values) => {
    dispatch(setCategory(values.category)); // Set category in redux state)
    console.log("Form Data:", values);
    navigate("/freelancer/step8");
  };

  return (
    <Formik
      initialValues={{
        category: selectedCategory,
        subcategories: selectedSubcategories,
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between min-h-screen">
            <main className="flex flex-col items-center flex-grow p-6">
              <div className="w-full max-w-4xl">
                <div className="mb-2 text-sm text-gray-500">2/10</div>
                <h1 className="mb-2 text-3xl font-semibold">
                  What kind of work are you here to do?
                </h1>
                <p className="mb-6 text-gray-500">
                  Don&apos;t worry, you can change these choices later.
                </p>
                <div className="mb-6 border-t border-gray-300"></div>
                <div className="flex">
                  {/* Categories Section */}
                  <div className="w-1/2 pr-4">
                    <p className="mb-2 text-gray-500">Select 1 category</p>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li
                          key={category}
                          className={`cursor-pointer p-2 rounded ${
                            selectedCategory === category
                              ? "bg-green-100 font-semibold"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subcategories Section */}
                  <div className="w-1/2 pl-4">
                    <p className="mb-2 text-gray-500">
                      Now, select 1 to 3 subcategories
                    </p>
                    {selectedCategory && subcategories[selectedCategory] ? (
                      <ul className="space-y-2">
                        {subcategories[selectedCategory].map((subcategory) => (
                          <li
                            key={subcategory}
                            className={`cursor-pointer p-2 rounded ${
                              selectedSubcategories.includes(subcategory)
                                ? "bg-green-100 font-semibold"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => handleSubcategoryToggle(subcategory)}
                          >
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">
                        Select a category to see subcategories
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </main>
            <button
              type="submit"
              className="p-3 mt-4 text-white bg-blue-500 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Category;
