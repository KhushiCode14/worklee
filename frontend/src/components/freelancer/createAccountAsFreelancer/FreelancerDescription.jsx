import ProgressBar from "./ProgressBar";

13;

const FreelancerDescription = () => {
  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step11"
      nextLink="/freelancer/step13"
    >
      <section className="w-full p-6 md:w-1/2">
        <div>
          <h1 className="mb-8 text-3xl text-black dark:text-white">
            Great, Now write a bio to tell the world about yourself
          </h1>
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            cols={60}
            className="flex flex-wrap w-full p-4 mb-4 text-gray-700 bg-gray-100 border-2 border-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:border-green-500"
            rows={10}
            placeholder="Write your bio here..."
          ></textarea>
        </div>
      </section>
    </ProgressBar>
  );
};

export default FreelancerDescription;
