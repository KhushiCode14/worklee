import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const HeaderProfile = () => {
  const [data, setData] = useState();
  const token = useSelector((state) => state.auth.token);
  //  const token = localStorage.getItem("token"); // Get JWT token from local storage
  const decode = jwtDecode(token);
  console.log(token);
  const id = decode.id;
  // const id = "6776a335dde122d5675ab6eb";
  // const firstName = token.firstName;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/freelancer/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // JWT token in Authorization header
        },
      });

      const data = await response.json();
      setData(data); // Update state with fetched data
      console.log(data); // Display data from backend
    };

    if (token) {
      fetchData();
    }
  }, [token]);
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
              {data?.firstName} {data?.lastName}
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
