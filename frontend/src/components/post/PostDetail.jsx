import { useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import ClientProfile from "./ClientDetailSidebar";
import { FaLink } from "react-icons/fa";

const PostDetail = () => {
  const [isExpanded, setIsExpanded] = useState(null); // Track which job's description is expanded

  // Set a character limit for the description
  const charLimit = 500;
  const description =
    "This is a sample post description that might be quite long. You can choose to read more or less by clicking the button below.";
  return (
    <div className="relative top-0 right-0 flex justify-between h-full gap-3 p-3 bg-white max-sm:flex-col">
      <div className="grid h-auto p-3 border border-gray-700 grid-rows-9">
        <div className="flex items-center gap-3">
          <BiLocationPlus size={24} />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold">Post Title</h1>
          <span className="flex gap-3">
            {" "}
            <p className="text-nowrap">Posted 18 minutes ago</p>
            <span className="flex ">
              {" "}
              <BiLocationPlus />
              Worldwide
            </span>
          </span>
        </div>
        <div>
          <p className="max-w-full mb-2 text-gray-600 break-words">
            {isExpanded
              ? description
              : `${description.substring(0, charLimit)}...`}
            {description.length > charLimit && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-1 text-green-600 hover:underline"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
        <div className="grid grid-flow-col text-[#181818]">
          <div className="flex flex-col">
            <p>$900</p>
            <p>fixed price</p>
          </div>
          <div className="flex flex-col">
            <p>intermdiate</p>
            <p>I am looking for a mix of experience and value</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Attachment</p>
          <p className="flex items-center justify-start gap-1">
            <FaLink color="black" />
            <span className="text-green-600 underline">
              {" "}
              The Reading Club Sign Up Form .mp4 (7.4 MB)
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <p>project Type:One-time project</p>
        </div>
        <div className="flex flex-col">
          <p>Skills and Expertise</p>
          <div className="flex gap-2">
            <button className="p-2 text-gray-500 bg-gray-200 rounded-xl">
              Html
            </button>
            <button className="p-2 text-gray-500 bg-gray-200 rounded-xl">
              Css
            </button>
          </div>
        </div>
        <div>
          <p className="text-xl text-[#181818] font-medium leading-6">
            Activity on this job
          </p>
          <p className="text-sm text-[#181818]  leading-5">Propsals: 5 to 10</p>
          <p className="text-sm text-[#181818]  leading-5">Interviewing: 0</p>
          <p className="text-sm text-[#181818]  leading-5">Invites sent: 0</p>
          <p className="text-sm text-[#181818]  leading-5">
            Unanswered invites: 0
          </p>
        </div>
        {/* <div>hello world</div>
        <div>hello world</div> */}
      </div>
      <div className="w-1/3 h-auto max-md:w-full">
        <ClientProfile />
      </div>
    </div>
  );
};

export default PostDetail;
