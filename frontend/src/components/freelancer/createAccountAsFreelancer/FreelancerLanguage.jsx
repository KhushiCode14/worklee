import { useState } from "react";
import ProgressBar from "./ProgressBar";

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
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step10"
      nextLink="/freelancer/step12"
    >
      <section className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-black dark:text-green-500">
            Looking good. Next tell us which languages you speak
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Upwork is global, so clients are often interested in freelancers who
            speak multiple languages. English is a must, but do you speak any
            other languages?
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto ">
            <thead>
              <tr className="text-gray-700 ">
                <th className="px-4 py-2 ">Language</th>
                <th className="px-4 py-2 ">Proficiency</th>
              </tr>
            </thead>
            <tbody>
              {proficiencies.map((item, index) => (
                <tr key={index} className="p-2 text-center ">
                  <td className="p-4 border-b border-gray-300 dark:border-gray-700">
                    <input
                      type="text"
                      value={item.language}
                      onChange={(e) =>
                        handleLanguageChange(index, e.target.value)
                      }
                      className="w-full px-2 py-1 text-gray-700 bg-white border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
                      placeholder="Enter language"
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
                    <select
                      value={item.proficiency}
                      onChange={(e) =>
                        handleProficiencyChange(index, e.target.value)
                      }
                      className="w-full px-2 py-1 text-gray-700 bg-white border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
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
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Add Language
          </button>
        </div>
      </section>
    </ProgressBar>
  );
};

export default FreelancerLanguage;
