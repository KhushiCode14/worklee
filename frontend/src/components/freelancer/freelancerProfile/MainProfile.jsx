import Portfolio from "./mainSection/Portfolio";
import TitleDescr from "./mainSection/TitleDescr";
import WorkHistory from "./mainSection/WorkHistory";

const MainProfile = () => {
  return (
    <div className="p-5">
      <TitleDescr />
      <Portfolio />
      <WorkHistory />
    </div>
  );
};

export default MainProfile;
