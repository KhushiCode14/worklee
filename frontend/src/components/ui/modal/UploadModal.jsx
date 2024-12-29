// import { FaRProject } from "react-icons/fa";
import { RiTreasureMapFill } from "react-icons/ri";

const UploadModal = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen ">
      <div className="z-50 w-full bg-white opacity-100 min-h-1.5 max-h-full  modal-box flex flex-col gap-y-10 text-black ">
        <div className="flex flex-col text-white gap-y-4">
          <div>
            <RiTreasureMapFill size={160} />
          </div>
          <div>
            <h2 className="text-white">Add you resume</h2>
          </div>
          <div>
            <p>
              use PDF , Word doc or rich text file - make sure it&apos;s 5Mb or
              less
            </p>
          </div>
          <div>
            <progress
              value={21}
              max={100}
              className="progress progress-success"
            ></progress>
          </div>
        </div>
        <div>
          <button className="flex items-end p-2 text-white bg-green-600 rounded-md saturate-50">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadModal;
