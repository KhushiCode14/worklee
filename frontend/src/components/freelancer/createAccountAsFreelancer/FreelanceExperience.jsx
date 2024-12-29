import Card2 from "../../ui/Card2";
import { FaRocket } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
// import { Card } from "daisyui";
const FreelanceExperience = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto gap-8 px-4 py-8 ">
      {/* Header Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
          A Few Quick Questions: Have You Freelanced Before?
        </h1>
        <p className="text-lg text-gray-600">
          Let&apos;s get started and understand your experience level.
        </p>
      </div>
      <div className="flex gap-2 max-sm:flex-wrap sm:flex max-sm:gap-4">
        <Card2 text="I have new to this brand" icon={FaRocket} name="option" />
        <Card2
          text="I have some experience"
          icon={IoGitCompareSharp}
          name="option"
        />
        <Card2 text="I am an expert " icon={MdOutlineExplore} name="option" />
      </div>
    </section>
  );
};

export default FreelanceExperience;
