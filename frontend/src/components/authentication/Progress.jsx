import { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Progress = () => {
  const { pathname } = useLocation();
  const isFirstStep = pathname === "/";
  const isSecondStep = pathname === "/second";
  const isThirdStep = pathname === "/third";

  return (
    <Fragment>
      <div className="flex items-center justify-between w-full space-x-4">
        {/* Step 1 */}
        <div
          className={`flex flex-col items-center justify-center text-sm p-2 border-2 rounded-full transition-all duration-300 ${
            isFirstStep
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black border-gray-400"
          }`}
        >
          <div className="text-2xl">1</div>
          <div>Step 1</div>
        </div>

        {/* Step 2 */}
        <div
          className={`flex flex-col items-center justify-center text-sm p-2 border-2 rounded-full transition-all duration-300 ${
            isSecondStep
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black border-gray-400"
          }`}
        >
          <div className="text-2xl">2</div>
          <div>Step 2</div>
        </div>

        {/* Step 3 */}
        <div
          className={`flex flex-col items-center justify-center text-sm p-2 border-2 rounded-full transition-all duration-300 ${
            isThirdStep
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-black border-gray-400"
          }`}
        >
          <div className="text-2xl">3</div>
          <div>Step 3</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Progress;
