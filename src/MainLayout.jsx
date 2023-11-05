import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
