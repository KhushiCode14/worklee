import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HomeLayout from "../components/layout/HomeLayout";
import Login from "../components/authentication/Login/Login";
import Password from "../components/authentication/Login/Password";
import RoleSelection from "../components/authentication/register/RoleSelection";
import PersonalInfo from "../components/authentication/register/PersonalInfo";
import ContactInfo from "../components/authentication/register/ContactInfo";
import PostMain from "../components/post/PostMain";
import FreelancerLayout from "../components/freelancer/FreelancerLayout";
import FreelancerProfile from "../components/freelancer/FreelancerProfile";
import PostDetail from "../components/post/PostDetail";
import Dashboard from "../components/client/ClientDashboard";
import CreateClientAccount from "../components/client/CreateClient";
import JobTitle from "../components/post/job/JobTitle";
import JobSkill from "../components/post/job/JobSkill";
import JobDuration from "../components/post/job/JobDuration";
import JobBudget from "../components/post/job/JobBudget";
import JobDescription from "../components/post/job/JobDescription";
import JobReview from "../components/post/job/JobReview";
import JobLayout from "../components/layout/JobLayout";
import DynamicInput from "../components/project/DynamicInput";
import ReactSelect from "../components/project/ReactSelect";
import Counter from "../components/project/store/Counter";
import FormHandle from "../components/project/formik/FormHandle";
import Register from "../components/authentication/register/Register";
import ViewProfile from "../components/authentication/ViewProfile";
import AuthLayout from "../components/layout/AuthLayout";
import Greeting from "../components/freelancer/createAccountAsFreelancer/Greeting";
// import { IdCard, IdCardIcon } from "lucide-react";
import { BiAdjust, BiAlarm } from "react-icons/bi";
import GetStarted from "../components/freelancer/createAccountAsFreelancer/GetStarted";
import FreelanceExperience from "../components/freelancer/createAccountAsFreelancer/FreelanceExperience";
import FreelanceGoal from "../components/freelancer/createAccountAsFreelancer/FreelanceGoal";
import UploadResumeAndLinks from "../components/freelancer/createAccountAsFreelancer/UploadResumeAndLinks";
import FreelancerSkill from "../components/freelancer/createAccountAsFreelancer/FreelancerSkill";
import Category from "../components/freelancer/createAccountAsFreelancer/Category";
import UploadModal from "../components/ui/modal/UploadModal";
import FreelancerTitle from "../components/freelancer/createAccountAsFreelancer/FreelancerTitle";
import WorkExperienceFreelancer from "../components/freelancer/createAccountAsFreelancer/WorkExperienceFreelancer";
import FreelancerLanguage from "../components/freelancer/createAccountAsFreelancer/FreelancerLanguage";
import FreelancerDescription from "../components/freelancer/createAccountAsFreelancer/FreelancerDescription";
import FreelancerHourlyRate from "../components/freelancer/createAccountAsFreelancer/FreelancerHourlyRate";
import PreviewFreelancerProfile from "../components/freelancer/createAccountAsFreelancer/PreviewFreelancerProfile";
import ExperienceComponent from "../components/project/FreelancerExperi";

// Create the route configuration
const router = createBrowserRouter([
  // home and public routes
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // auth routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "password",
        element: <Password />,
      },
      {
        path: "role",
        element: <RoleSelection />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "personalInfo",
        element: <PersonalInfo />,
      },
      {
        path: "contactInfo",
        element: <ContactInfo />,
      },
      {
        path: "viewprofile",
        element: <ViewProfile />,
      },
      {
        path: "jobsearch",
        element: <PostMain />,
      },
    ],
  },
  // freelancer routes
  {
    path: "/freelancer",
    element: <FreelancerLayout />,
    children: [
      {
        path: "jobsearch",
        element: <PostMain />,
      },
      {
        path: "profile",
        element: <FreelancerProfile />,
      },
      {
        path: "step1",
        element: (
          <Greeting
            icon={BiAlarm}
            text="Congratulations, your account is created!"
            links="/freelancer/step2"
            nextLink="/freelancer/step2"
            backLink="/freelancer/"
          />
        ),
      },
      {
        path: "step2",
        element: <GetStarted />,
      },
      {
        path: "step3",
        element: (
          <Greeting
            icon={BiAdjust}
            text={`Congratulations! your account is verified.\nRedirecting...`}
            links="/freelancer/step4"
            nextLink="/freelancer/step4"
            backLink="/freelancer/step2"
          />
        ),
      },
      {
        path: "step4",
        element: <FreelanceExperience />,
      },
      {
        path: "step5",
        element: <FreelanceGoal />,
      },
      {
        path: "step6",
        element: <UploadResumeAndLinks />,
      },
      {
        path: "step7",
        element: <Category />,
      },
      // skills
      {
        path: "step8",
        element: <FreelancerSkill />,
      },
      // title
      {
        path: "step9",
        element: <FreelancerTitle />,
      },
      // experiecnce
      {
        path: "step10",
        element: <WorkExperienceFreelancer />,
      },
      // language
      {
        path: "step11",
        element: <FreelancerLanguage />,
      },
      // description
      {
        path: "step12",
        element: <FreelancerDescription />,
      },
      // hourly rate
      {
        path: "step13",
        element: <FreelancerHourlyRate />,
      },
      // preview profile
      {
        path: "previewProfile",
        element: <PreviewFreelancerProfile />,
      },
    ],
  },
  // jobs routes
  {
    path: "/job",
    children: [{ path: "jobdetail", element: <PostDetail /> }],
  },
  // client routes
  {
    path: "/client",
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "createAccount", element: <CreateClientAccount /> },
    ],
  },
  // job post routes
  {
    path: "job-post",
    element: <JobLayout />,
    children: [
      { path: "title", element: <JobTitle /> },
      { path: "skills", element: <JobSkill /> },
      { path: "duration", element: <JobDuration /> },
      { path: "budget", element: <JobBudget /> },
      { path: "add-description", element: <JobDescription /> },
      { path: "review", element: <JobReview /> },
    ],
  },
  // some miscellaneous routes
  { path: "/dynamic", element: <DynamicInput /> },
  { path: "/input", element: <ReactSelect /> },
  { path: "/count", element: <Counter /> },
  { path: "/formik", element: <FormHandle /> },
  { path: "/modal", element: <UploadModal /> },
  // if route not found
  { path: "/expe", element: <ExperienceComponent /> },
  {
    path: "*",
    element: <h1 className="text-blue-600">Route not found</h1>,
  },
]);

// Main Route component
export default router;
