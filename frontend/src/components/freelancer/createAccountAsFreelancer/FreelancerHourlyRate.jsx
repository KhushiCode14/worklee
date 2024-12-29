14;

const FreelancerHourlyRate = () => {
  return (
    <section>
      <div className="flex flex-col justify-center w-full p-4 bg-gray-100">
        <Card />
      </div>
    </section>
  );
};

export default FreelancerHourlyRate;
const Card = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full p-4 bg-gray-100">
        <div className="flex justify-between w-full p-4 bg-gray-100">
          <div className="flex flex-col ">
            <span className="text-2xl">Hourly rate</span>
            <span className="text-gray-400">
              Total amount the client will see.
            </span>
          </div>
          <div>
            <label htmlFor="hourly-rate " className="input">
              <input placeholder="$00.00/hr"></input>
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full p-4 bg-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl">Service rate</span>
            <span className="text-gray-400">
              This helps us run the platform and provide the services like
              payment and customer support
            </span>
          </div>
          <div>
            <label htmlFor="hourly-rate " className="input">
              <input placeholder="$00.00/hr"></input>
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full p-4 bg-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl">You&apos;ll get</span>
            <span className="text-gray-400">
              This estimated amount you&apos; receive after service fees
            </span>
          </div>
          <div>
            <label htmlFor="youget" className="text-white bg-green-100 input">
              <input placeholder="$00.00/hr" className=""></input>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
