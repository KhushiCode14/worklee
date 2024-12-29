// 1 and 3

import PropTypes from "prop-types";
// import { Card } from "../../ui/Card";
import Icon from "../../ui/Icon";
import { Button } from "../../ui/button";
const Greeting = ({ icon, text }) => {
  console.log("icon", icon);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Icon icon={icon} className="text-green-600 text-9xl sm:text-8xl" />
      <p className="text-3xl font-semibold text-wrap sm:text-5xl">{text}</p>
      <Button links={"/freelancer/step4"}>Next Step</Button>
    </div>
  );
};
Greeting.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
export default Greeting;
