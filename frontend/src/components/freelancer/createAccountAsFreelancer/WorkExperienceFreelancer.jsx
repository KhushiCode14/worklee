10;

const WorkExperienceFreelancer = () => {
  return (
    <section className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/2 dark:bg-gray-800">
      <div>
        <h1 className="mb-8 text-3xl font-semibold text-black dark:text-white">
          Got it. Now, add a title to tell the world what you do
        </h1>
      </div>
      <div className="p-6 border-2 border-gray-400 border-dashed rounded-md shadow-md outline-dashed outline-slate-200 bg-gray-50 dark:bg-gray-700">
        <button className="px-6 py-3 font-bold text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700">
          <span className="text-3xl">+</span>
        </button>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Add experience</p>
      </div>
    </section>
  );
};

export default WorkExperienceFreelancer;
