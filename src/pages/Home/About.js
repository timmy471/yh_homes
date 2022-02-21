import React from "react";
import aboutImg from "../../assets/images/body-img-intro.png";
import aboutImg2 from "../../assets/images/body-img.png";

const About = () => {
  return (
    <div className="container about-section">
      <div className="text-center" id="about" data-aos="zoom-in-right">
        <img src={aboutImg} alt="YJ Homes" />
      </div>
      <div
        style={{ padding: "3rem 0 1rem", borderBottom: "3px solid #FFCC00" }}
      >
        <h4 className="blue-text font-weight-bold">About YJ Reality</h4>
      </div>

      <div className="row about-text">
        <div className="col-md-6">
          <p
            className="blue-text my-md-4 "
            style={{ fontSize: "30px", lineHeight: "40px" }}
          >
            We are your partner in owning something timeless
          </p>
        </div>

        <div className="col-md-6 blue-text">
          <p>
            YJ Realty is a Lagos based real estate development and landed
            property investment expert company founded in 2021. We are
            particular about providing our clients top notch real estate
            investment opportunities.
          </p>
        </div>
      </div>
      <div className="text-center" data-aos="zoom-in-right">
        <img src={aboutImg2} alt="YJ Homes" />
      </div>
      <div
        className="row about-text"
        // style={{ borderBottom: "3px solid #FFCC00", paddingBottom: "8rem" }}
      >
        <div className="col-md-6">
          <p
            className="blue-text my-md-4 "
            style={{ fontSize: "30px", lineHeight: "40px" }}
          >
            Where care meets value
          </p>
        </div>

        <div className="col-md-6 blue-text">
          <p>
            YJ Homes Realty cares about making you a homeowner. We are a real
            estate brokerage that provides you with the most amazing properties
            to ensure that we bring you value
          </p>
        </div>
      </div>
      {/* <h2>VIDEO</h2> */}
    </div>
  );
};

export default About;
