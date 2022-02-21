import React from "react";
import "../../assets/styles/pageStyles/home.scss";
import HomeBanner from "./HomeBanner";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
// import PopUpVideo from "../../components/popUpVideo";

const Home = () => {
  // const [popUpOpen, setPopUpOpen] = useState(false);
  return (
    <>
      <HomeBanner />
      <About />
      <Services />
      <Testimonials />
      <Partners />
      {/* <PopUpVideo
        open={popUpOpen}
        channel="vimeo"
        videoId="573921250"
        onClose={() => setPopUpOpen(false)}
      /> */}
    </>
  );
};

export default Home;
