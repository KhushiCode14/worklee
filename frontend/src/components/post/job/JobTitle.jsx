// import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import BackNext from "./BackNext";

const JobTitle = () => {
  const backLink = "/client";
  const nextLink = "/job-post/skills";
  return (
    <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
      <div className="container flex flex-wrap items-center justify-center max-w-6xl gap-16 px-4 py-10 mx-auto">
        <div className="flex flex-col max-w-md space-y-4 ">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Let&apos;s start with a strong title.
          </h2>
          <p className="text-gray-800 text-wrap">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>
        <div className="max-w-xl space-y-6">
          <label
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
          </div>
        </div>
      </div>
      <BackNext value={16} backLink={backLink} nextLink={nextLink} />
    </div>
  );
};

export default JobTitle;
