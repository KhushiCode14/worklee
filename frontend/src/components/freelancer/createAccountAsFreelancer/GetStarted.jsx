import { Button } from "../../ui/button";

const GetStarted = () => {
  return (
    <section className="items-center justify-center h-screen ">
      <div className="container flex flex-col p-4 pt-6 mx-auto md:flex-row md:p-6 lg:p-8 sm:flex gap-9">
        {/* Left Div - Get Started and Freelance Text */}
        <div className="flex flex-col items-start justify-center w-full p-4 space-y-4 md:w-1/2">
          <h2 className="text-2xl font-bold">
            Start Your Freelance Journey Today!
          </h2>
          <p className="text-gray-700">
            Becoming a freelancer is easier than you think. Get started now and
            unlock the potential to work on exciting projects.
          </p>
          <Button links={"/freelancer/step3"} variant="default">
            Get Started
          </Button>
        </div>

        {/* Right Div - Carousel Section */}
        <div className="flex flex-col items-start justify-center w-full p-4 space-y-4 md:w-1/2">
          <h3 className="text-2xl font-semibold">What Our Users Say</h3>

          {/* Carousel for testimonials */}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
