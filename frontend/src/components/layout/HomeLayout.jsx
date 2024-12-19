import { Outlet } from "react-router-dom";
import Header from "../../pages/Header";
import Navbar from "../../pages/Navbar";

const HomeLayout = () => {
  // const scrollYProgress = useScroll();
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
