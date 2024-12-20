import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

const SidebarProfile = () => {
  return (
    <div className="w-full p-6 bg-white rounded-md shadow-lg md:w-full lg:w-full xl:w-full">
      {/* Profile Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700">View Profile</h2>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>

      {/* Earnings Section */}
      <div className="py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Total Earnings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Details about your earnings, jobs, and hours worked.
        </p>
      </div>

      {/* Connects Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Connects</h3>
        <div className="flex gap-2">
          <button className="text-sm font-medium text-green-600 hover:underline">
            Connect
          </button>
          <button className="text-sm font-medium text-green-600 hover:underline">
            Buy Connects
          </button>
        </div>
      </div>

      {/* Hourly Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Hours Per Week</h3>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>

      {/* Languages Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Languages</h3>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>

      {/* Verification Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Verification</h3>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-700">Education</h3>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>

      {/* Linked Accounts Section */}
      <div className="flex items-center justify-between py-4">
        <h3 className="text-xl font-medium text-gray-700">Linked Accounts</h3>
        <div className="flex items-center gap-2">
          <FaPlus
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
          <GoPencil
            size={30}
            className="p-2 text-green-600 bg-green-100 rounded-full cursor-pointer hover:bg-green-200"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
