import { useDispatch } from "react-redux";
import { setExperience } from "../../redux/slices/freelancerSlice";

const ExperienceComponent = () => {
  const dispatch = useDispatch();

  const updateExperience = (newExperience) => {
    dispatch(setExperience(newExperience));
    console.log("not export");
    console.log(newExperience);
  };

  return (
    <div>
      <button className="text-black" onClick={() => updateExperience("expert")}>
        Set as Expert
      </button>
    </div>
  );
};

export default ExperienceComponent;
