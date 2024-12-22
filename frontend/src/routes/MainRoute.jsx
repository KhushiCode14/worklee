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
        path: "signup",
        element: <RoleSelection />,
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
  // if route not found
  {
    path: "*",
    element: <h1 className="text-blue-600">Route not found</h1>,
  },
]);

// Main Route component
export default router;
