import Contact from "../components/Home/Contact/Contact";
import Experience from "../components/Home/Experience/Experience";
import Feedback from "../components/Home/Feedback/Feedback";
import HeroSection from "../components/Home/Hero/HeroSection";
import LatestProject from "../components/Home/LatestProject/LatestProject";
import CardContainer from "../components/Home/Projects/CardContainer";
import Projects from "../components/Home/Projects/Projects";
import Services from "../components/Home/Services/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Experience/>
      {/* <CardContainer /> */}
      <Projects />
      <Services />
      <Feedback />
      <LatestProject />
      <Contact />
    </>
  );
};

export default Home;
