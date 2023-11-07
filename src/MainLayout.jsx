import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import { Lo } from "./Components/Lottie/Lottie";

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
      <Lo></Lo>
    </div>
  );
};

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  const [num, setNum] = useState(3000);
  useEffect(() => {
    if (sessionStorage.getItem("initialLoadDone")) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("initialLoadDone", "true");
        setNum(0);
      }, num);
    }
    console.log(num);
  }, []);

  if (loading) {
    return <Welcome></Welcome>;
  }
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
