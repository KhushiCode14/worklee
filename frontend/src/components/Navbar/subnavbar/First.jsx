const First = () => {
  return (
    <div className="flex flex-col h-auto gap-6 p-6 lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Talent Marketplace
        </h1>
        <h3 className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <a href="#" className="mt-2 text-lg text-green-600 hover:underline">
          Hire on Talent Marketplace
        </a>
      </div>

      {/* Right Section (List of skills) */}
      <div className="flex-1 p-4 rounded-lg shadow-md bg-gray-50">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center">
            <span className="text-green-500">•</span> Web development
          </li>
          <li className="flex items-center">
            <span className="text-green-500">•</span> Design & Creative
          </li>
          <li className="flex items-center">
            <span className="text-green-500">•</span> Admin & Customer Support
          </li>
          <li className="flex items-center">
            <span className="text-green-500">•</span> Finance & Accounting
          </li>
          <li className="flex items-center">
            <span className="text-green-500">•</span> HR & Training
          </li>
        </ul>
      </div>
    </div>
  );
};

export default First;
