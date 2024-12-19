import HeaderProfile from "./freelancerProfile/HeaderProfile";
import SidebarProfile from "./freelancerProfile/SidebarProfile";

const FreelancerProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-5 m-10 border-2 rounded-md md:grid-cols-4">
      <header className="col-span-1 md:col-span-4">
        <HeaderProfile />
      </header>
      <aside className="hidden col-span-1 border border-gray-700 md:block">
        <SidebarProfile />
      </aside>
      <main className="col-span-1 md:col-span-3">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default FreelancerProfile;
