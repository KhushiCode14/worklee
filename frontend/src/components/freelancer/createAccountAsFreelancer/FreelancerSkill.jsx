8;
import Select from "react-select";
const skillsOptions = [
  { value: "Database", label: "Database" },
  { value: "Database Management", label: "Database Management" },
  { value: "Abaqus", label: "Abaqus" },
  { value: "Agavi", label: "Agavi" },
  { value: "Autodesk Revit", label: "Autodesk Revit" },
  { value: "Brewmaxx", label: "Brewmaxx" },
  { value: "Compliance", label: "Compliance" },
  {
    value: "Government Reporting Compliance",
    label: "Government Reporting Compliance",
  },
  { value: "Information Security", label: "Information Security" },
];

const FreelancerSkill = () => {
  const handleSkillChange = (selectedOptions) => {
    console.log("Selected Skills:", selectedOptions);
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <main className="flex flex-col items-center w-full max-w-4xl p-4">
        <div className="w-full">
          <p className="text-sm text-gray-500">3/10</p>
          <h1 className="mt-2 text-3xl font-semibold">
            Nearly there! What work are you here to do?
          </h1>
          <p className="mt-2 text-gray-700">
            Your skills show clients what you can offer, and help us choose
            which jobs to recommend to you. Add or remove the ones weve
            suggested, or start typing to pick more. Its up to you.
          </p>
          <a href="#" className="inline-block mt-2 text-green-600">
            Why choosing carefully matters
          </a>
        </div>
        <div className="w-full mt-6">
          <label className="block mb-2 text-gray-700">Your skills</label>
          <Select
            isMulti
            options={skillsOptions}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Enter skills here"
            onChange={handleSkillChange}
          />
          <p className="mt-1 text-sm text-gray-500">Max 15 skills</p>
        </div>
        <div className="flex items-center justify-between w-full mt-6">
          <button className="px-4 py-2 text-gray-700 border rounded hover:bg-gray-100">
            Back
          </button>
          <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Next, your profile title
          </button>
        </div>
      </main>
      {/* <aside className="w-full max-w-xs p-4 mt-6 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <img
            src="https://placehold.co/50x50?text=Profile+Pic"
            alt="Profile picture"
            className="w-12 h-12 rounded-full"
          />
          <p className="ml-4 text-gray-700">
            “Upwork’s algorithm will recommend specific job posts to you based
            on your skills. So choose them carefully to get the best match!”
          </p>
        </div>
        <p className="mt-2 text-gray-500">Upwork Pro Tip</p>
      </aside> */}
    </div>
  );
};

export default FreelancerSkill;
