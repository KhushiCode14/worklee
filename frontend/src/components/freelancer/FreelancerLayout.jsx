import { Outlet } from "react-router-dom";
import FreelancerNav from "./FreelancerNav";

const FreelancerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FreelancerNav />
      {/* <header className="flex-grow pl-10 pr-10 md:pl-40 md:pr-[8.25rem]"></header> */}

      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default FreelancerLayout;
