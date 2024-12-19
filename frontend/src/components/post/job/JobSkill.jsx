// import { Button } from "../../ui/Button";

import BackNext from "./BackNext";
import ReactSelect from "../../project/ReactSelect";

const JobSkill = () => {
  const backLink = "/job-post/title";
  const nextLink = "/job-post/duration";
  return (
    <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
      <div className="container flex flex-wrap items-center justify-center w-full max-w-6xl gap-24 px-4 py-10 mx-auto">
        <div className="flex flex-col max-w-md space-y-4 ">
          <h2 className="text-5xl font-bold leading-tight text-black">
            What are the main skills required for your work?
          </h2>
          {/* <p className="text-gray-800 text-wrap">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p> */}
        </div>
        <div className="max-w-xl space-y-6">
          <label
            htmlFor="job-title"
            className="text-[#181818] block font-medium mb-2"
          >
            Search skills or add your own
            <div className="flex flex-col w-full space-y-4">
              <ReactSelect />
            </div>
          </label>
        </div>
      </div>
      <BackNext value={32} backLink={backLink} nextLink={nextLink} />
    </div>
  );
};

export default JobSkill;
