import { FaPencil, FaPlus } from "react-icons/fa6";
import { NotepadText } from "lucide-react";
import { RiDeleteBinLine } from "react-icons/ri";

const Certifications = () => {
  return (
    <div className="w-full p-5 border-gray-300 border-y">
      {/* Header Section */}
      <div className="flex flex-col pb-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl sm:mb-0">
          Certifications
        </h2>
        <div>
          <FaPlus
            size={30} // Default size for small screens
            color="green"
            className="p-2 transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-100"
          />
        </div>
      </div>

      {/* Certification Item Section */}
      <div className="flex flex-col items-center w-full gap-5 pb-5 border-b border-gray-200 sm:flex-row">
        {/* Icon Section */}
        <div className="flex justify-center w-full mb-4 sm:w-1/6 sm:justify-start sm:mb-0">
          <NotepadText size={60} className="p-1 text-gray-700" />
        </div>

        {/* Certification Details Section */}
        <div className="flex flex-col w-full gap-3 text-gray-900 sm:w-5/6">
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

          {/* Certification Details */}
          <p>Provider: Patliputra University</p>
          <p>Issued: July 2024</p>
          <p>Certification ID: PPU-4353SD789</p>
          <p className="text-green-600 cursor-pointer hover:underline">
            Show description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
