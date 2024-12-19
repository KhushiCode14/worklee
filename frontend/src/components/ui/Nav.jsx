import { FaUpwork } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="flex items-center justify-start p-5 ">
      <div className="flex items-center justify-center">
        <FaUpwork size={40} className="text-black" />
        <span className="p-0 m-0 text-3xl font-bold text-black ">work</span>
      </div>
    </div>
  );
};

export default Nav;
