import { FaApple, FaGoogle, FaUser } from "react-icons/fa6";
import Nav from "../../ui/Nav";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/Input";
import Icon from "../../ui/Icon";
const buttonStyles =
  "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";
const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="text-black">
      <nav>
        <Nav />
      </nav>

      <div className="flex flex-col items-center justify-center h-full max-w-md gap-5 p-10 mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center">Log in to Upwork</h2>

        <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
          <span className="flex items-center justify-center p-2 bg-gray-200">
            <FaUser className="text-gray-600" />
          </span>
          <Input
            type="email"
            name="email"
            id="email"
            className="flex-1 p-2 bg-gray-200 border-none outline-none"
            placeholder="Email"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
            <button
              className={`${buttonStyles} bg-green-600 text-white hover:bg-green-700 active:bg-green-800`}
              onClick={() => navigate("/auth/password")}
            >
              Continue
            </button>
          </div>
        </div>
        <div className="divider text-neutral-content divider-neutral ">or</div>
        <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
          <button
            className={`${buttonStyles} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 flex items-center justify-center sm:py-2 sm:px-4 py-3 px-6 rounded-lg`}
          >
            <Icon
              icon={FaGoogle}
              variant="solid"
              className=""
              // Any other props supported by the icon component can also be passed
            />
            <span className="text-sm sm:text-base">Continue with Google</span>
          </button>
        </div>

        <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
          <button
            className={`${buttonStyles} flex items-center justify-center border border-black text-black hover:bg-gray-200`}
          >
            <FaApple className="text-gray-600" /> Continue with Apple
          </button>
        </div>
        <span> Dont have an Upwork account? </span>
        <div className="flex items-center overflow-hidden border-2 border-green-600 rounded-lg outline-none w-fit">
          <button
            className={`${buttonStyles} text-green-600 hover:bg-green-600 hover:text-white border  px-10`}
          >
            Signup
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
