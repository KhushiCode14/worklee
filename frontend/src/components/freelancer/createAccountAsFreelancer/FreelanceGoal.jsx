// import { BiCoinStack } from "react-icons/bi";
import { FaMobileScreenButton } from "react-icons/fa6";
import Card2 from "../../ui/Card2";
import { FaMoneyBillWave } from "react-icons/fa";

5;

const FreelanceGoal = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-auto gap-8 px-4 py-8">
      {/* Header Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
          What your biggest goal for freelancing?
        </h1>
        <p className="text-lg text-gray-600">
          Let&apos;s get started and understand your experience level.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card2
          text="I want to earn extra income"
          icon={FaMoneyBillWave}
          name="option"
        />
        <Card2
          text="To make money on the side"
          icon={FaMoneyBillWave}
          name="option"
        />
        <Card2
          text="To get experience, for full time job"
          icon={FaMoneyBillWave}
          name="option"
        />
        <Card2
          text="I don't have a goal in mind yet"
          icon={FaMobileScreenButton}
          name="option"
        />
      </div>
    </section>
  );
};

export default FreelanceGoal;
