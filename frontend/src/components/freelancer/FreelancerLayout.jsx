import { Outlet } from "react-router-dom";
import FreelancerNav from "./FreelancerNav";

const FreelancerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FreelancerNav />
      <header className="flex-grow pl-10 pr-10 md:pl-40 md:pr-[8.25rem]">
        {/* <Carousel /> */}
      </header>
      <aside className="absolute top-0 left-0 hidden md:block">
        {/* Sidebar content can go here */}
      </aside>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default FreelancerLayout;
