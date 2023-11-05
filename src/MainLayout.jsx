import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
