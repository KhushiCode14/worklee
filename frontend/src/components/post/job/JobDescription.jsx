import { AiOutlineLink } from "react-icons/ai";
// import { Button } from "../../ui/Button";
import { Button } from "../../ui/Button";
// import { Input } from "../../ui/Input";
import BackNext from "./BackNext";

const JobDescription = () => {
  const backLink = "/job-post/budget";
  const nextLink = "/job-post/review";
  return (
    <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
      <div className="container flex flex-wrap items-center justify-center max-w-6xl gap-16 px-4 py-10 mx-auto">
        <div className="flex flex-col max-w-md space-y-4 ">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Start the conversation.
          </h2>
          <p className="text-gray-800 text-wrap">Talent are looking for:</p>
          <ul className="text-gray-900 list-disc">
            <li>Clear expectations about your task or deliverables</li>
            <li>The skills required for your work</li>
            <li>Good communication</li>
            <li>Details about how you or your team like to work</li>
          </ul>
        </div>
        <div className="max-w-xl space-y-6">
          <label
            htmlFor="job-title"
            className="text-[#181818] block font-medium mb-2"
          >
            Describe what you need
            <textarea
              rows={10}
              placeholder="Already have a description? Paste it here!"
              aria-describedby="description-countdown"
              aria-label="Work Description"
              className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            ></textarea>
          </label>
          <div className="flex flex-col space-y-4">
            <p className="text-black">Need help?</p>
            <p className="text-green-600 underline">
              See examples of effective descriptions
            </p>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 outline outline-green-600"
            >
              <AiOutlineLink /> Attach File
            </Button>
            <p>Max file size: 100MB</p>
          </div>
        </div>
      </div>
      <BackNext value={80} backLink={backLink} nextLink={nextLink} />
    </div>
  );
};

export default JobDescription;
