import Contact from "../components/Home/Contact/Contact";
import Experience from "../components/Home/Experience/Test";
import Test from "../components/Home/Experience/Test";
import Feedback from "../components/Home/Feedback/Feedback";
import HeroSection from "../components/Home/Hero/HeroSection";
import LatestProject from "../components/Home/LatestProject/LatestProject";
import Projects from "../components/Home/Projects/Projects";
import Services from "../components/Home/Services/Services";

const Home = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <Experience />
      {/* <Test /> */}
      {/* <CardContainer /> */}
      <Projects />
      <Feedback />
      <Services />
      <LatestProject />
      <Contact />
    </div>
  );
};

export default Home;
