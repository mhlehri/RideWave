import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Headroom from "react-headroom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import create from "../src/assets/xGjdeAdNU0.json";

const Create = () => {
  return <Lottie style={{}} animationData={create} />;
};

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
      <h1 className="text-9xl">Welcome to RideWave!</h1>
      <Create></Create>
    </div>
  );
};

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = sessionStorage.getItem("loadingDone");
    if (done) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
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
