import { Button } from "../../ui/button";
import ProgressBar from "./ProgressBar";

6;
// linkedin resume manual
// also add modal
// pop

const UploadResumeAndLinks = () => {
  return (
    <ProgressBar
      backButtonText="Go Back"
      nextButtonText="Proceed"
      backLink="/freelancer/step5"
      nextLink="/freelancer/step7"
    >
      <section className="items-center justify-center h-auto ">
        <div className="container flex flex-col p-4 pt-6 mx-auto md:flex-row md:p-6 lg:p-8 sm:flex gap-9">
          {/* Left Div - Get Started and Freelance Text */}
          <div className="flex flex-col items-start justify-center w-full p-4 space-y-4 md:w-1/2">
            <h2 className="text-2xl font-bold">
              How would you like to tell us about yourself?
            </h2>
            <p className="text-gray-700">
              we need to get sense of your education
            </p>
            <div className="flex flex-col justify-center w-full px-5 space-y-4 text-center">
              <Button links={"/"}>Import from linkedin profile</Button>
              <Button links={"/"}>Upload resume</Button>
              <Button>Add your resume manually</Button>
            </div>
          </div>

          {/* Right Div - Carousel Section */}
          <div className="flex flex-col items-start justify-center w-full p-4 space-y-4 md:w-1/2">
            <h3 className="text-2xl font-semibold">What Our Users Say</h3>

            {/* Carousel for testimonials */}
          </div>
        </div>
      </section>
    </ProgressBar>
  );
};

export default UploadResumeAndLinks;
