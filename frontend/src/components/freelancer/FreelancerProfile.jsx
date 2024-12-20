import HeaderProfile from "./freelancerProfile/HeaderProfile";
import MainProfile from "./freelancerProfile/MainProfile";
import Certifications from "./freelancerProfile/mainSection/Certifications";
import EmploymentHistory from "./freelancerProfile/mainSection/EmploymentHistory";
import OtherExperience from "./freelancerProfile/mainSection/OtherExperience";
import Testimonials from "./freelancerProfile/mainSection/Testimonials";
import SidebarProfile from "./freelancerProfile/SidebarProfile";

const FreelancerProfile = () => {
  return (
    <div className="grid grid-cols-1 gap-4 m-10 rounded-md sm:border sm:border-gray-700 max-sm:m-0 md:grid-cols-3">
      {/* Header spanning all columns */}
      <header className="col-span-1 p-5 md:col-span-3">
        <HeaderProfile />
      </header>

      {/* Sidebar and MainProfile in the same row */}
      <aside className="col-span-1 md:col-span-1">
        <SidebarProfile />
      </aside>
      <main className="col-span-1 md:col-span-2">
        <MainProfile />
      </main>

      {/* Bottom sections in a full-width row on smaller screens */}
      <div className="col-span-1 md:col-span-3">
        <Testimonials />
        <Certifications />
        <EmploymentHistory />
        <OtherExperience />
      </div>
    </div>
  );
};

export default FreelancerProfile;
