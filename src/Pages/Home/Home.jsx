import { useEffect } from "react";
import OurApp from "../../Components/App/OurApp";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Features from "../../Components/Features/Features";
import { ServicesHome } from "../../Components/ServicesHome/ServicesHome";

const Home = () => {
  useEffect(() => {
    document.title = "RideWave | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <ServicesHome></ServicesHome>
      <Features></Features>
      <OurApp></OurApp>

      <Contact></Contact>
    </div>
  );
};

export default Home;
