import HeaderProfile from "./freelancerProfile/HeaderProfile";
import MainProfile from "./freelancerProfile/MainProfile";
import SidebarProfile from "./freelancerProfile/SidebarProfile";

const FreelancerProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4 m-10 rounded-md md:grid-cols-3 border border-gray-700">
      <header className="col-span-1 md:col-span-3 p-5">
        <HeaderProfile />
      </header>
      <aside className="col-span-1 md:col-span-1">
        <SidebarProfile />
      </aside>
      <main className="col-span-1 md:col-span-2">
        {/* Main content goes here */}
        <MainProfile />
      </main>
    </div>
  );
};

export default FreelancerProfile;
