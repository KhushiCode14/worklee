10;

const WorkExperienceFreelancer = () => {
  return (
    <section className="w-full p-4 rounded-lg md:w-1/2 ">
      <div>
        <h1 className="mb-8 text-3xl font-semibold text-black dark:text-black">
          Got it. Now, add a title to tell the world what you do
        </h1>
      </div>
      <div className="p-6 border-gray-400 border-dashed rounded-md shadow-md outline-dashed outline-slate-200">
        <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700">
          <span className="text-2xl">+</span>
        </button>
        <p className="mt-2 text-gray-700">Add experience</p>
      </div>
    </section>
  );
};

export default WorkExperienceFreelancer;
