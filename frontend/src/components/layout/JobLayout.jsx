import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar";

const JobLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default JobLayout;
