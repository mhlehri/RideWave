import OurApp from "../../Components/App/OurApp";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Features from "../../Components/Features/Features";
import { ServicesHome } from "../../Components/ServicesHome/ServicesHome";
import { FAQ } from "./../../Components/FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesHome></ServicesHome>
      <Features></Features>
      <OurApp></OurApp>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
};

export default Home;
