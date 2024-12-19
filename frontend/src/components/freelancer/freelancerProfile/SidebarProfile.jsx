import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

const SidebarProfile = () => {
  return (
    <div className="h-auto ">
      <div>
        <div className="flex justify-between h-auto">
          View Profile
          <div className="flex gap-2 ">
            <FaPlus />
            <GoPencil />
          </div>
        </div>
        <div className="flex gap-5">
          <div>total earning</div>
          <div>total jobs</div>
          <div>total hours</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Connects 5</div>
          <div>
            <button className="py-2 font-bold text-green-600">Connect</button>
            <button className="py-2 font-bold text-green-600 ">
              Buy connects
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarProfile;
