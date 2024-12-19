// import { FaMapLocation } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const HeaderProfile = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-5">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-col ">
          <h2 className="mb-2 text-5xl text-black">John Doe</h2>
          <p className="flex items-center justify-center text-gray-600">
            <IoLocationOutline /> Patna, India – 8:16 pm local time
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="btn rounded-xl">See public view</button>
        <button className="btn rounded-xl">Profile settings</button>
      </div>
    </div>
  );
};

export default HeaderProfile;
