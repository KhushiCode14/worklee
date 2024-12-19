import { FaApple, FaEye, FaGoogle } from "react-icons/fa6";
import Nav from "../../ui/Nav";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/Input";
const buttonStyles =
  "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";
const PersonalInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen ">
      <nav>
        <Nav />
      </nav>
      <main className="flex flex-col items-center justify-center h-full max-w-3xl gap-8 px-20 mx-auto mt-10 max-sm:px-5">
        <h1 className="text-3xl font-medium text-gray-900 text-nowrap max-md:text-base">
          Sign up to find work you love
        </h1>

        <div className="flex w-full gap-3">
          <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
            <button
              className={`${buttonStyles} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 flex items-center justify-center sm:py-2 sm:px-4 py-3 px-6 rounded-lg`}
            >
              <FaGoogle className="mr-2 text-gray-600 sm:mr-4 max-sm:hidden" />
              <span className="text-sm sm:text-base max-sm:text-sm">
                Continue with Google
              </span>
            </button>
          </div>

          <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
            <button
              className={`${buttonStyles} flex items-center justify-center border border-black text-black hover:bg-gray-200`}
            >
              <FaApple className="text-gray-600" /> Continue with Apple
            </button>
          </div>
        </div>
        <div className="divider text-neutral-content divider-neutral ">or</div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full gap-3">
            <div>
              <label htmlFor="Name" className="text-black">
                First Name
              </label>
              <Input
                type="text"
                className="w-full bg-white border-2 border-gray-300 label Input"
              />
            </div>
            <div>
              <label htmlFor="Name" className="text-black">
                Last Name
              </label>
              <Input
                type="text"
                className="w-full bg-white border-2 border-gray-300 label Input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <Input
              type="email"
              className="w-full bg-white border-2 border-gray-300 label Input"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-black">
              Password
            </label>
            <label
              htmlFor=""
              className="w-full bg-white border-2 border-gray-300 label Input"
            >
              <Input type="email" />
              <FaEye color="black" />
            </label>
          </div>
          {/* dropdown */}
          <div>
            <label htmlFor="email" className="text-black">
              Password
            </label>
            <label
              htmlFor=""
              className="w-full bg-white border-2 border-gray-300 label Input"
            >
              <Input type="email" />
              <IoIosArrowDown color="black" />
            </label>
          </div>
        </div>
        <div>
          <button
            className={`${buttonStyles} w-full text-white bg-green-600 hover:bg-green-700 active:bg-green-800`}
            onClick={() => navigate("/auth/contactInfo")}
          >
            Create an Account
          </button>
        </div>
        <div>
          <p className="text-center text-gray-600">
            Already have an Upwork account?{" "}
            <a href="/auth/login" className="text-green-600 underline">
              Log in
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default PersonalInfo;
