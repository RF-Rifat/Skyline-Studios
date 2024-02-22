import Experience from "../components/Home/Experience/Experience";
import Feedback from "../components/Home/Feedback/Feedback";
import HeroSection from "../components/Home/Hero/HeroSection";
import CardContainer from "../components/Home/Projects/CardContainer";
import Services from "../components/Home/Services/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Experience />
      <CardContainer />
      <Services />
      <Feedback />
    </>
  );
};

export default Home;
