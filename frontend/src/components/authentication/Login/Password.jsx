import { FaLock } from "react-icons/fa6";
import Nav from "../../ui/Nav";
import { Input } from "../../ui/Input";
const buttonStyles =
  "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";
const Password = () => {
  return (
    <section className="text-black">
      <nav>
        <Nav />
      </nav>

      <div className="flex flex-col items-center justify-center h-full max-w-md gap-5 p-10 mx-auto mt-10 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center">Welcome</h2>

        <div className="flex items-center w-full overflow-hidden border border-gray-300 rounded-lg">
          <span className="flex items-center justify-center p-2 bg-gray-200">
            <FaLock className="text-gray-600" />
          </span>
          <Input
            type="password"
            name="password"
            id="password"
            className="flex-1 p-2 bg-gray-200 border-none outline-none text-wrap"
            placeholder="password"
          />
        </div>
        <div className="flex items-center justify-between w-full text-wrap">
          <span className="flex items-center justify-center p-2 max-sm:text-sm text-nowrap">
            <Input
              type="checkbox"
              name=""
              className="m-2 checkbox outline-slate-300 outline "
              id=""
            />
            Keep logged in
          </span>
          <span className="text-green-600 max-sm:text-[14px] text-nowrap">
            Forgot Password?
          </span>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden bg-green-600 rounded-lg outline-none">
          <button
            className={`${buttonStyles}  text-white font-medium hover:text-green-600 hover:bg-gray-200 border px-10`}
          >
            Log in
          </button>
        </div>
        <div className="text-green-600">Not you ?</div>
      </div>
    </section>
  );
};

export default Password;
