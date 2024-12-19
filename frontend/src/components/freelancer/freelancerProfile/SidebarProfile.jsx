import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

const SidebarProfile = () => {
  return (
    <div className="h-auto p-6 m-0 border-gray-500 border-t border-r w-full rounded-md">
      <div>
        {/* view profile */}
        <div className="flex justify-between h-auto text-black items-center border-b border-gray-600 w-full p-5">
          <p className="text-xl"> View Profile</p>
          <div className="flex gap-2 ">
            <FaPlus
              size={30}
              color="green"
              className="rounded-full border border-green-600 p-2"
            />
            <GoPencil
              size={30}
              color="green"
              className="rounded-full border border-green-600 p-2"
            />
          </div>
        </div>
        {/* earning hours */}
        <div className="fl   border-gray-600 w-full p-5 border-b">
          <div className="text-xl text-black">Total earning</div>
          <div className="text-xl text-black">total jobs</div>
          <div className="text-xl text-black">total hours</div>
        </div>
        {/* connects related */}
        <div className="flex   border-gray-600 w-full p-5 border-b flex-col gap-2">
          <div className="text-xl text-black">Connects 5</div>
          <div>
            <button className="py-2 font-bold text-green-600">Connect</button>
            <button className="py-2 font-bold text-green-600 ">
              Buy connects
            </button>
          </div>
        </div>
      </div>
      {/* hour */}
      <div className="flex justify-between h-auto  border-gray-600 w-full p-5 border-b">
        <p className="text-black text-xl"> Hour per week</p>
        <div className="flex gap-2 ">
          <FaPlus
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <GoPencil
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      {/* language */}
      <div className="flex justify-between h-auto   border-gray-600 w-full p-5 border-b">
        <p className="text-black text-xl"> Languages</p>
        <div className="flex gap-2 ">
          <FaPlus
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <GoPencil
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      {/* verification */}
      <div className="flex justify-between h-auto   border-gray-600 w-full p-5 border-b">
        <p className="text-black text-xl"> Verification</p>
        <div className="flex gap-2 ">
          <FaPlus
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <GoPencil
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      {/* education */}
      <div className="flex justify-between h-auto   border-gray-600 w-full p-5 border-b">
        <p className="text-black text-xl"> Education</p>
        <div className="flex gap-2 ">
          <FaPlus
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <GoPencil
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      {/* links */}
      <div className="flex justify-between h-auto   border-gray-600 w-full p-5 border-b">
        <p className="text-black text-xl">Linked accounts </p>
        <div className="flex gap-2 ">
          <FaPlus
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <GoPencil
            size={30}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
