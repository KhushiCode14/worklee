import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import {
  FaExternalLinkAlt,
  FaHeart,
  FaFlag,
  FaCheckCircle,
  FaStar,
  FaCopy,
} from "react-icons/fa";

const ClientDetailSidebar = () => {
  return (
    <div className="p-4 mx-auto md:p-6">
      {/* Job Link Section */}
      <div className="flex items-center gap-2 mb-4 text-sm text-green-600">
        <FaExternalLinkAlt /> Open job in a new window
      </div>

      {/* Buttons Section */}
      <button className="w-full mb-2 btn btn-success">Apply now</button>
      <button className="flex items-center justify-center w-full gap-2 mb-4 btn btn-outline btn-success">
        <FaHeart /> Save job
      </button>

      <div className="flex items-center gap-2 mb-4 text-sm text-green-600">
        <FaFlag /> Flag as inappropriate
      </div>

      {/* Proposal Info Section */}
      <div className="mb-4 text-sm">
        <p>
          Send a proposal for: <span className="font-bold">14 Connects</span>
        </p>
        <p>
          Available Connects: <span className="font-bold">5</span>
        </p>
      </div>

      {/* Client Info Section */}
      <div className="mb-4 text-sm">
        <h2 className="mb-2 text-lg font-bold">About the client</h2>
        <div className="flex items-center gap-2 mb-2">
          <FaCheckCircle className="text-green-600" />
          <span>Payment method verified</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaStar className="text-yellow-500" />
          <span>4.8</span>
          <span className="ml-1">4.76 of 33 reviews</span>
        </div>
        <p>United Kingdom</p>
        <p>London 10:40 AM</p>
        <p>107 jobs posted</p>
        <p>44% hire rate, 3 open jobs</p>
        <p>$29K total spent</p>
        <p>52 hires, 6 active</p>
        <p>$23.32 /hr avg hourly rate paid</p>
        <p>737 hours</p>
        <p>Education</p>
        <p>Individual client</p>
        <p>Member since Feb 4, 2021</p>
      </div>

      {/* Job Link Section */}
      <div className="text-sm">
        <h2 className="mb-2 text-lg font-bold">Job link</h2>
        <div className="p-3 mb-2 overflow-auto bg-gray-200 rounded-lg">
          <p className="break-words">https://www.upwork.com/jobs/</p>
        </div>
        <button className="flex items-center gap-2 text-green-600 btn btn-link">
          <FaCopy /> Copy link
        </button>
      </div>
    </div>
  );
};

export default ClientDetailSidebar;
