import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import Footer from "../../pages/Footer";

const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
