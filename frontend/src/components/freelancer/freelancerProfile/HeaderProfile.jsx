import { IoLocationOutline } from "react-icons/io5";

const HeaderProfile = () => {
  return (
    <header className="w-full py-6 sm:px-8">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8">
        {/* Profile Section */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 avatar sm:w-32 sm:h-32">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="John Doe's Profile Picture"
              className="object-cover rounded-full"
            />
          </div>

          {/* Profile Information */}
          <div className="flex flex-col">
            <h1 className="mb-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
              John Doe
            </h1>
            <p className="flex items-center justify-center text-sm text-gray-600 sm:text-base">
              <IoLocationOutline className="mr-2" />
              Patna, India – 8:16 pm local time
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 max-sm:hidden">
          <button
            className="px-6 py-2 text-sm text-white transition bg-blue-500 btn rounded-xl sm:text-base hover:bg-blue-600"
            aria-label="See public view"
          >
            See public view
          </button>
          <button
            className="px-6 py-2 text-sm text-black transition bg-gray-300 btn rounded-xl sm:text-base hover:bg-gray-400"
            aria-label="Profile settings"
          >
            Profile settings
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
