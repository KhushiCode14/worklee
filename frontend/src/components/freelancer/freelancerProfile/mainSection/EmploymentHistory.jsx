import { FaPencil, FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const EmploymentHistory = () => {
  return (
    <div className="w-full p-5 border-gray-300 border-y">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-4xl font-semibold text-gray-800">
          Employment History
        </h2>
        <FaPlus
          size={40}
          color="green"
          className="p-2 transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-100"
        />
      </div>

      {/* Employment Item Section */}
      <div className="flex items-center gap-5 pb-5 border-b border-gray-200">
        {/* Role & Company Info */}
        <div className="flex flex-col gap-3 text-gray-900">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
            <h3 className="text-2xl font-medium text-gray-900 sm:text-3xl sm:w-3/4">
              Tech Lead | MERN Stack Developer | Fixelr Innovatives
            </h3>
            <div className="flex justify-center gap-3 mt-4 sm:w-1/4 sm:justify-end sm:mt-0">
              {/* Edit and Delete Buttons */}
              <FaPencil
                size={30}
                color="green"
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                className="p-2 transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-100 "
              />
              <RiDeleteBinLine
                size={30}
                color="green"
                className="p-2 text-4xl transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-100 sm:text-5xl md:text-6xl lg:text-7xl"
              />
            </div>
          </div>

          {/* Date and Description */}
          <p className="text-gray-700">March 2020 - Present</p>
          <p className="text-gray-700">
            As Team Leader at Fixelr Innovatives, I championed innovation and
            excellence within our MERN stack development environment. By
            cultivating a collaborative culture and offering strategic
            mentorship, I empowered my team to deliver cutting-edge web
            solutions. We navigated challenges and consistently exceeded client
            expectations, demonstrating my dedication to leadership and
            transformative results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentHistory;
