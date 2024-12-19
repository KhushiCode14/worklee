import BackNext from "./BackNext";
import ProjectScope from "./ProjectScope";
const JobDuration = () => {
  const backLink = "/job-post/skills";
  const nextLink = "/job-post/budget";
  return (
    <div className="flex flex-col justify-between w-full h-screen p-6 lg:p-10">
      <div className="container flex flex-wrap items-center justify-center w-full max-w-6xl gap-24 px-4 py-10 mx-auto">
        <div className="flex flex-col max-w-md space-y-4 ">
          <h2 className="text-5xl font-bold leading-tight text-black">
            Next, estimate the scope of your work.
          </h2>
          <p className="text-gray-800 text-wrap">
            Consider the size of your project and the time it will take.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-black">Popular skills</p>
          <ProjectScope />
        </div>
      </div>
      <BackNext value={48} backLink={backLink} nextLink={nextLink} />
    </div>
  );
};

export default JobDuration;
