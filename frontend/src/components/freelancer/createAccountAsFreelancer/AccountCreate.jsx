import { useState } from "react";
import Greeting from "./Greeting";
import GetStarted from "./GetStarted";
import FreelanceExperience from "./FreelanceExperience";
import FreelanceGoal from "./FreelanceGoal";
import { BiAdjust } from "react-icons/bi";
import UploadResumeAndLinks from "./UploadResumeAndLinks";
import Category from "./Category";
import FreelancerSkill from "./FreelancerSkill";
import FreelancerTitle from "./FreelancerTitle";
import WorkExperienceFreelancer from "./WorkExperienceFreelancer";
import FreelancerLanguage from "./FreelancerLanguage";
import FreelancerDescription from "./FreelancerDescription";
import FreelancerHourlyRate from "./FreelancerHourlyRate";
import PreviewFreelancerProfile from "./PreviewFreelancerProfile";
import { useDispatch, useSelector } from "react-redux";
import {
  setExperience,
  setGoal,
  setHourlyRate,
  setLanguages,
  setSkills,
} from "../../../redux/slices/freelancerSlice";

const AccountCreate = () => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  switch (step) {
    case 1:
      return (
        <Greeting
          text="Congratulations, your account is created!"
          links="/freelancer/step2"
          nextLink="/freelancer/step2"
          backLink="/freelancer/"
        />
      );
    case 2:
      return <GetStarted />;
    case 3:
      return (
        <Greeting
          icon={BiAdjust}
          text={`Congratulations! your account is verified.\nRedirecting...`}
          links="/freelancer/step4"
          nextLink="/freelancer/step4"
          backLink="/freelancer/step2"
        />
      );
    case 4:
      return <FreelanceExperience />;
    case 5:
      return <FreelanceGoal />;
    case 6:
      return <UploadResumeAndLinks />;
    case 7:
      return <Category />;
    case 8:
      return <FreelancerSkill />;
    case 9:
      return <FreelancerTitle />;
    case 10:
      return <WorkExperienceFreelancer />;
    case 11:
      return <FreelancerLanguage />;
    case 12:
      return <FreelancerDescription />;
    case 13:
      return <FreelancerHourlyRate />;
    case 14:
      return <PreviewFreelancerProfile />;
    default:
      return <div>Invalid Step</div>;
  }
};
export default AccountCreate;
