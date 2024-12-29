import { useState } from "react";

7;

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

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

  const specialties = {
    "Web, Mobile & Software Dev": [
      "Frontend Development",
      "Backend Development",
      "Mobile Apps",
    ],
    "Design & Creative": ["Graphic Design", "UI/UX Design", "Animation"],
    // Add more specialties for other categories if needed
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSpecialties([]); // Reset specialties on category change
  };

  const handleSpecialtyToggle = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((item) => item !== specialty)
        : prev.length < 3
        ? [...prev, specialty]
        : prev
    );
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex flex-col items-center flex-grow p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-2 text-sm text-gray-500">2/10</div>
          <h1 className="mb-2 text-3xl font-semibold">
            Great, so what kind of work are you here to do?
          </h1>
          <p className="mb-6 text-gray-500">
            Don&apos;t worry, you can change these choices later on.
          </p>
          <div className="mb-6 border-t border-gray-300"></div>
          <div className="flex">
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
            <div className="w-1/2 pl-4">
              <p className="mb-2 text-gray-500">
                Now, select 1 to 3 specialties
              </p>
              {selectedCategory && specialties[selectedCategory] ? (
                <ul className="space-y-2">
                  {specialties[selectedCategory].map((specialty) => (
                    <li
                      key={specialty}
                      className={`cursor-pointer p-2 rounded ${
                        selectedSpecialties.includes(specialty)
                          ? "bg-green-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSpecialtyToggle(specialty)}
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">
                  Select a category to see options
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Category;
