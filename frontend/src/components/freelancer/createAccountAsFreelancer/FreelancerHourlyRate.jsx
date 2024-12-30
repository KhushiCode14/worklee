import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const FreelancerHourlyRate = () => {
  return (
    <section className="w-full p-6 bg-white dark:bg-gray-900">
      {/* Progress Bar */}
      <ProgressBar
        backButtonText="Go Back"
        nextButtonText="Proceed"
        backLink="/freelancer/step12"
        nextLink="/freelancer/previewProfile"
      >
        <Card />
      </ProgressBar>
    </section>
  );
};

export default FreelancerHourlyRate;

const Card = () => {
  const [hourlyRate, setHourlyRate] = useState("");
  const [serviceRate, setServiceRate] = useState("");
  const [amountYouGet, setAmountYouGet] = useState("");

  const calculateAmountYouGet = () => {
    if (hourlyRate && serviceRate) {
      const amount = parseFloat(hourlyRate) - parseFloat(serviceRate);
      setAmountYouGet(amount.toFixed(2));
    }
  };

  useEffect(() => {
    calculateAmountYouGet();
  }, [hourlyRate, serviceRate]);

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {/* Hourly Rate */}
      <div className="flex justify-between w-full p-4 mb-4 bg-white rounded-md ">
        <div className="flex flex-col">
          <span className="text-2xl text-black dark:text-white">
            Hourly rate
          </span>
          <span className="text-gray-400 dark:text-gray-300">
            Total amount the client will see.
          </span>
        </div>
        <div>
          <label htmlFor="hourly-rate">
            <input
              id="hourly-rate"
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="$00.00/hr"
              className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </label>
        </div>
      </div>

      {/* Service Rate */}
      <div className="flex justify-between w-full p-4 mb-4 bg-white rounded-md dark:bg-gray-800">
        <div className="flex flex-col">
          <span className="text-2xl text-black dark:text-white">
            Service rate
          </span>
          <span className="text-gray-400 dark:text-gray-300">
            This helps us run the platform and provide services like payment and
            customer support.
          </span>
        </div>
        <div>
          <label htmlFor="service-rate">
            <input
              id="service-rate"
              type="number"
              value={serviceRate}
              onChange={(e) => setServiceRate(e.target.value)}
              placeholder="$00.00/hr"
              className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </label>
        </div>
      </div>

      {/* Amount You'll Get */}
      <div className="flex justify-between w-full p-4 bg-white rounded-md dark:bg-gray-800">
        <div className="flex flex-col">
          <span className="text-2xl text-black dark:text-white">Youll get</span>
          <span className="text-gray-400 dark:text-gray-300">
            This is the estimated amount you’ll receive after service fees.
          </span>
        </div>
        <div>
          <label htmlFor="youget" className="text-white bg-green-100 ">
            <input
              id="youget"
              type="number"
              value={amountYouGet}
              readOnly
              placeholder="$00.00/hr"
              className="p-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
