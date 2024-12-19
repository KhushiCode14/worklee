import HeaderProfile from "./freelancerProfile/HeaderProfile";
import SidebarProfile from "./freelancerProfile/SidebarProfile";

const FreelancerProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4  m-10  rounded-md md:grid-cols-4 border border-gray-700">
      <header className="col-span-1 md:col-span-4    p-5 ">
        <HeaderProfile />
      </header>
      <aside className=" col-span-1  md:block">
        <SidebarProfile />
      </aside>
      <main className="col-span-1 md:col-span-3">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default FreelancerProfile;
