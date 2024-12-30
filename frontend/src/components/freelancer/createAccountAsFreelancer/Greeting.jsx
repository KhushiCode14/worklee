// 1 and 3

import PropTypes from "prop-types";
// import { Card } from "../../ui/Card";
import Icon from "../../ui/Icon";
import { Button } from "../../ui/button";
import ProgressBar from "./ProgressBar";
const Greeting = ({ icon, text, links, backLink, nextLink }) => {
  console.log("icon", icon);
  return (
    <section className="relative flex flex-col h-screen">
      <div className="absolute bottom-0 w-full">
        <ProgressBar
          backButtonText="Go Back"
          nextButtonText="Proceed"
          backLink={backLink}
          nextLink={nextLink}
        >
          <div className="flex flex-col items-center justify-center flex-grow space-y-4">
            <Icon icon={icon} className="text-green-600 text-9xl sm:text-8xl" />
            <p className="text-3xl font-semibold text-wrap sm:text-5xl">
              {text}
            </p>
            <Button links={links}>Next Step</Button>
          </div>
        </ProgressBar>
      </div>
    </section>
  );
};
Greeting.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  text: PropTypes.string.isRequired,
  links: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  backLink: PropTypes.string,
  nextLink: PropTypes.string,
};

Greeting.defaultProps = {
  links: "#",
  backLink: "#",
  nextLink: "#",
};
export default Greeting;
