import React from "react";
// import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";
import Button from "../../components/Button";

// import homeHeroImage from "../../assets/images/home-hero.png";

const HomeBanner = () => {
  return (
    <div className="home-banner d-flex align-items-center justify-content-center text-center">
      <div >
        <section data-aos="fade-in" data-aos-duration="600">
        <h1 className="blue-text">OWN A</h1>
        <h1 className="yellow-text">PROPERTY</h1>
        </section>
        
        <p>
          {/* <Typewriter
          options={{
            strings: [
              "Buying Real Estate is not only the Best Way, The Quickest way, the Safest way but the only way to become Wealthy",
            ],
            autoStart: true,
            loop: true,
          }}
        /> */}
        </p>
        <section data-aos="fade-up" data-aos-duration="700">
        <p >
          Buying Real Estate is not only the Best Way, The Quickest way, the
          Safest way but the only way to become Wealthy
        </p>
        <p>-Marsha Field</p>
        <a href="#contact">
          <Button label="Contact Us" />
        </a>
        </section>
       
      </div>
    </div>
  );
};

export default HomeBanner;
