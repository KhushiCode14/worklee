import { Button } from "../../ui/Button";
import { LuPencil } from "react-icons/lu";

const JobReview = () => {
  const Dashboard = "/client/dashboard";
  const uploadJobPost = "/";
  return (
    <div className="flex flex-col justify-between w-full h-auto p-6 lg:p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-medium text-black ">Job details</h2>
        <Button links={uploadJobPost}>Post this job</Button>
      </div>
      <div className="h-auto text-black border border-gray-800 rounded-lg shadow-md">
        <div className="flex justify-between h-full p-6 border-b border-gray-600">
          <p className="text-2xl">Job Title</p>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex justify-between h-full p-6 border-b border-gray-600 ">
          <p className="w-2/3 text-2xl text-wrap">Job Description</p>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex justify-between h-full p-6 border-b border-gray-600">
          <div className="w-2/3 text-wrap">
            <p className="text-2xl ">Category</p>
            <p>Category Name</p>
          </div>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex justify-between h-full p-6 border-b border-gray-600">
          <div className="w-2/3 text-wrap">
            <p className="text-2xl">Skills</p>
            <p className="text-wrap">Skills Name</p>
          </div>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex justify-between h-full p-6 border-b border-gray-600">
          <div className="w-2/3 text-wrap">
            <p className="text-2xl">Scope</p>
            <p className="text-wrap">Scope Duration Level Contract </p>
          </div>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex justify-between h-full p-6 border-b border-gray-600">
          <div className="w-2/3 text-wrap">
            <p className="text-2xl">Budget</p>
            <p className="text-wrap">$45.00</p>
          </div>
          <LuPencil className="text-green-700" />
        </div>
        <div className="flex items-center justify-between p-3">
          <div>
            <Button variant="outline">Back</Button>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Save as draft</Button>
            <Button links={Dashboard}>Post this job</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReview;
