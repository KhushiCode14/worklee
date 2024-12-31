import ProgressBar from "./ProgressBar";

10;

const WorkExperienceFreelancer = () => {
  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step9"
      nextLink="/freelancer/step11"
    >
      <section className="w-full p-4 bg-white rounded-lg shadow-lg md:w-1/2 dark:bg-gray-800">
        <div>
          <h1 className="mb-8 text-3xl font-semibold text-black dark:text-white">
            Got it. Now, add a title to tell the world what you do
          </h1>
        </div>
        <div className="p-6 border-2 border-gray-400 border-dashed rounded-md shadow-md outline-dashed outline-slate-200 bg-gray-50 dark:bg-gray-700">
          <button className="px-6 py-3 font-bold text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700">
            <span
              className="text-3xl"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              +
            </span>
          </button>
          <p
            className="mt-4 text-gray-700 cursor-pointer dark:text-gray-300"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add experience
          </p>
          {/* <button
            className=""
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add experience
          </button> */}
          <div className="text-black bg-white dark:bg-gray-800 dark:text-white">
            This div has a white background and black text in light mode, and a
            gray background and white text in dark mode.
          </div>
        </div>
        <dialog id="my_modal_1" className="text-black bg-white modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </ProgressBar>
  );
};

export default WorkExperienceFreelancer;
