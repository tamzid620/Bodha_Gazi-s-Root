import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  //   const location = useLocation();

  //   const noHeaderFooter = location.pathname.includes("");

  return (
    <div>
      {/* {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />} */}

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
