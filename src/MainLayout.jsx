import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Headroom from "react-headroom";

const MainLayout = () => {
  return (
    <div>
      <Headroom
        style={{
          webkitTransition: "all .5s ease-in-out",
          mozTransition: "all .5s ease-in-out",
          oTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out",
        }}
      >
        <NavbarWithMegaMenu></NavbarWithMegaMenu>
      </Headroom>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
