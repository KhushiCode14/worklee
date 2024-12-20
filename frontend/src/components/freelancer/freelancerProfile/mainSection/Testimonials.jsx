import { FaPlus } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="w-full p-5 border-gray-300 border-y">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Testimonials</h2>
          <p className="text-gray-600">Endorsements from past clients</p>
        </div>
        <div>
          <FaPlus
            size={40}
            color="green"
            className="p-2 transition duration-200 border border-green-600 rounded-full cursor-pointer hover:bg-green-50"
          />
        </div>
      </div>

      {/* Testimonial Showcase Section */}
      <div className="flex flex-col items-center justify-center gap-5 my-6">
        <img
          src="/testimonials.png"
          alt="testimonial"
          className="w-32 h-32 text-green-600 transition-transform duration-300 rounded-full filter invert-100 sepia-100 saturate-100 hue-rotate-90 hover:scale-110"
        />

        <div className="flex flex-col items-center justify-center gap-3 text-center text-gray-800">
          <p className="text-xl font-medium">
            Showcase your skills with non-Upwork client testimonials
          </p>
          <button
            className="text-lg font-medium text-green-600 transition-all duration-200 hover:underline"
            onClick={() => alert("Request a testimonial")}
          >
            Request a testimonial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
