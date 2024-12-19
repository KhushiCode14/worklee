import { MdOutlineDiscount } from "react-icons/md";
// import {Tb24Hours} from "react-icons/tb";
// import { Button } from "../../ui/Button";
import { BiUserCheck } from "react-icons/bi";
import { Input } from "../../ui/Input";
import BackNext from "./BackNext";
import { Link } from "react-router-dom";
// import { RiUserReceivedLine } from "react-icons/ri";

const JobBudget = () => {
  const backLink = "/job-post/duration";
  const nextLink = "/job-post/add-description";
  return (
    <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
      <div className="container flex flex-wrap items-center justify-center max-w-6xl gap-16 px-4 py-10 mx-auto">
        <div className="flex flex-col max-w-md space-y-4 ">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Tell us about your budget.
          </h2>
          <p className="text-gray-800 text-wrap">
            This will help us match you to talent within your range.
          </p>
        </div>
        <div className="max-w-xl space-y-6">
          <div className="flex w-full gap-6 max-lg:flex-col">
            <div className="w-full p-6 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600 hover:border-2 ">
              <div className="flex items-center justify-between w-full mb-6">
                <BiUserCheck className="text-gray-800" size={40} />
                <label className="relative flex items-center cursor-pointer">
                  <Input
                    type="radio"
                    name="options"
                    id="Hourly rate"
                    className="hidden peer"
                  />
                  <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span>
                </label>
              </div>
              <span className="block p-3 text-xl font-semibold text-gray-800">
                Hourly rate
              </span>
            </div>
            {/* Freelancer Card */}
            <div className="w-full p-6 transition-all duration-300 bg-white border-2 border-gray-300 rounded-lg hover:border-green-600 hover:border-2 ">
              <div className="flex items-center justify-between mb-6">
                <MdOutlineDiscount className="text-gray-800" size={40} />
                <label className="relative flex items-center cursor-pointer">
                  <Input
                    type="radio"
                    name="options"
                    id="Fixed price"
                    className="hidden peer"
                  />
                  <span className="flex items-center justify-center w-6 h-6 transition-colors border-2 border-gray-400 rounded-full peer-checked:border-4 peer-checked:border-green-500 peer-checked:bg-green peer-checked:ring-2 peer-checked:ring-white"></span>
                </label>
              </div>
              <span className="block p-3 text-xl font-semibold text-gray-800">
                Fixed price
              </span>
            </div>
          </div>
          <p>
            Set a price for the project and pay at the end, or you can divide
            the project into milestones and pay as each milestone is completed.
          </p>
          <p className="text-black">
            What is the best cost estimate for your project?
          </p>
          <p>
            You can negotiate this cost and create milestones when you chat with
            your freelancer.
          </p>
          <Input type="number" />
          <div className="mt-7">
            <Link
              to="/"
              className="mt-5 font-medium text-green-600 hover:underline"
            >
              Not ready to set a budget?
            </Link>
          </div>
          {/* <label
            htmlFor="job-title"
            className="text-[#181818] block font-medium mb-2"
          >
            Write a title for your job post
            <Input type="text" id="job-title" className="w-full"></Input>
          </label>
          <div className="flex flex-col space-y-4">
            <p className="text-black">Example titles</p>
            <ul className="list-disc text-[#181818] pl-4">
              {[
                "Build responsive WordPress site with booking/payment functionality",
                "Graphic designer needed to design ad creative for multiple campaigns",
                "Facebook ad specialist needed for product launch",
              ].map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      <BackNext value={64} backLink={backLink} nextLink={nextLink} />
    </div>
  );
};

export default JobBudget;
