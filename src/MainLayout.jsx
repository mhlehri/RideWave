import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <NavbarWithMegaMenu></NavbarWithMegaMenu>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
