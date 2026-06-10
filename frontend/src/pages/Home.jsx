import Hero from "../components/Hero";
import AboutPlatform from "../components/AboutPlatform";
import HowItWorks from "../components/HowItWorks";
import Trends from "../components/Trends";
import Future from "../components/Future";


function Home() {
  return (
    <>
      <Hero />
      <AboutPlatform />
      <HowItWorks/>
      <Trends/>
      <Future/>
    </>
  );
}

export default Home;