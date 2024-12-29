12;
import { useState } from "react";
const FreelancerLanguage = () => {
  const [proficiencies, setProficiencies] = useState([
    { language: "English", proficiency: "Basic" },
  ]);

  const levels = ["Beginner", "Intermediate", "Advanced", "Native"];

  const handleProficiencyChange = (index, newLevel) => {
    const updatedProficiencies = [...proficiencies];
    updatedProficiencies[index].proficiency = newLevel;
    setProficiencies(updatedProficiencies);
  };

  const handleAddLanguage = () => {
    setProficiencies([
      ...proficiencies,
      { language: "", proficiency: "Basic" },
    ]);
  };

  const handleLanguageChange = (index, newLanguage) => {
    const updatedProficiencies = [...proficiencies];
    updatedProficiencies[index].language = newLanguage;
    setProficiencies(updatedProficiencies);
  };
  return (
    <section>
      <div>
        <h1 className="mb-8 text-3xl font-semibold text-black dark:text-black">
          Looking good. Next tell us which languages you speak
        </h1>
        <span>
          Upwork is global, so clients are often interested in freelancers who
          speak multiple languages. English is a must, but do you speak any
          other languages?
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">Language</th>
              <th className="px-4 py-2 border border-gray-300">Proficiency</th>
            </tr>
          </thead>
          <tbody>
            {proficiencies.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border border-gray-300">
                  <input
                    type="text"
                    value={item.language}
                    onChange={(e) =>
                      handleLanguageChange(index, e.target.value)
                    }
                    className="w-full px-2 py-1 text-gray-700 bg-white border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter language"
                  />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <select
                    value={item.proficiency}
                    onChange={(e) =>
                      handleProficiencyChange(index, e.target.value)
                    }
                    className="w-full px-2 py-1 text-gray-700 bg-white border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleAddLanguage}
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Add Language
        </button>
      </div>
    </section>
  );
};

export default FreelancerLanguage;
