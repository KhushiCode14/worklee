import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ProgressBar({
  backButtonText = "Back", // Default text for back button
  nextButtonText = "Next", // Default text for next button
  backLink, // Path to navigate back
  nextLink, // Path to navigate forward
  children, // Additional content to display above the sticky footer
}) {
  const navigate = useNavigate();

  // Handle navigation when clicking "Back"
  const handleBack = () => {
    if (backLink) {
      navigate(backLink);
    }
  };

  // Handle navigation when clicking "Next"
  const handleNext = () => {
    if (nextLink) {
      navigate(nextLink);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Content Section */}
      {children && <div className="flex-grow">{children}</div>}

      {/* Sticky Footer Buttons */}
      <div className="sticky bottom-0 z-10 flex items-center justify-between px-4 py-4 bg-white border-t-2 border-gray-300">
        {/* Back Button */}
        <button
          className="w-full px-4 py-2 text-green-600 transition duration-300 border border-gray-300 rounded sm:w-auto hover:bg-gray-100"
          onClick={handleBack}
        >
          {backButtonText}
        </button>

        {/* Next Button */}
        <button
          className="w-full px-4 py-2 text-white transition duration-300 bg-green-600 rounded sm:w-auto hover:bg-green-700"
          onClick={handleNext}
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  backButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  backLink: PropTypes.string,
  nextLink: PropTypes.string,
  children: PropTypes.node, // Allows passing any React nodes for the content section
};

ProgressBar.defaultProps = {
  backButtonText: "Back",
  nextButtonText: "Next",
  backLink: null,
  nextLink: null,
  children: null,
};

export default ProgressBar;
