import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import jobPosts from "./JobApi.json";
import PostDetail from "./PostDetail";
// import ClientDetailSidebar from "./ClientDetailSidebar";

const PostMain = () => {
  const [isExpanded, setIsExpanded] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleClickTitle = (job) => {
    setSidebar(true);
    setSelectedJob(job);
  };

  const charLimit = 100;

  return (
    <div className="relative flex flex-col w-full lg:flex-row">
      <div
        className={`${
          sidebar ? "lg:w-1/2" : "lg:w-full"
        } w-full grid grid-cols-1 gap-5 px-4 sm:px-8  `}
      >
        {/* Job Posts */}
        <div className="flex flex-col items-start justify-start w-full gap-5 px-4 sm:px-8 md:px-16 ">
          {jobPosts.map((job) => (
            <div
              className="flex flex-col w-full gap-3 p-3 rounded-lg shadow-md hover:bg-gray-200"
              key={job.id}
            >
              <div className="mb-2 text-sm text-gray-600">{job.postedTime}</div>

              <div>
                <h2
                  className="mb-2 text-xl font-semibold text-black cursor-pointer hover:underline"
                  onClick={() => handleClickTitle(job)}
                >
                  {job.title}
                </h2>
              </div>

              <div className="flex gap-2 mb-2 text-gray-600">
                <div>{job.pricing.type}</div>
                <div>${job.pricing.amount}</div>
                <div>{job.pricing.duration}</div>
              </div>

              <div>
                <p className="max-w-full mb-2 text-gray-600 break-words">
                  {isExpanded === job.id
                    ? job.description
                    : `${job.description.substring(0, charLimit)}...`}
                  {job.description.length > charLimit && (
                    <button
                      onClick={() =>
                        setIsExpanded(isExpanded === job.id ? null : job.id)
                      }
                      className="ml-1 text-green-600 hover:underline"
                    >
                      {isExpanded === job.id ? "Read less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="p-2 text-sm text-gray-800 bg-gray-400 rounded-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm md:text-base">
                <div className="flex items-center gap-1">
                  {[...Array(job.rating.stars)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </div>
                <div>User total spent: {job.rating.userTotalSpent}</div>
                <div className="flex items-center gap-1">
                  <CiLocationOn />
                  {job.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`relative ${
          sidebar ? "max-lg:translate-y-0" : "translate-y-full"
        }  right-0 top-0 h-full transition-transform duration-300  max-lg:w-full w-1/2 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } ${sidebar ? "max-lg:w-full" : "w-0"}`}
        style={{ zIndex: 1000 }}
      >
        {sidebar && (
          <PostDetail
            job={selectedJob}
            setSidebar={setSidebar}
            className="z-50 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default PostMain;
