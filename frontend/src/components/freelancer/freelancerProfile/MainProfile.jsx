import Portfolio from "./mainSection/Portfolio";
import Skills from "./mainSection/Skills";
import TitleDescr from "./mainSection/TitleDescr";
import WorkHistory from "./mainSection/WorkHistory";

const MainProfile = () => {
  return (
    <div className="p-5">
      <TitleDescr className="py-3" />
      <Portfolio />
      <WorkHistory />
      <Skills />
    </div>
  );
};

export default MainProfile;
