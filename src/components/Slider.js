import React from "react";
import PropTypes from "prop-types";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "../assets/styles/componentStyles/slider.scss";

const Slider = ({
  component,
  index,
  dataLength,
  handleNext,
  handlePrevious,
}) => {
  const length = dataLength - 1;
  return (
    <div className="slider">
      <>{component}</>
      <div className="controls d-flex">
        <div
          className={`arrow-container mr-4 d-flex justify-content-center align-items-center ${
            !index ? "arrow-container--disabled" : ""
          }`}
        >
          <BiChevronLeft
            size="28px"
            color="#FFFFFF"
            onClick={index ? handlePrevious : undefined}
          />
        </div>
        <div
          className={`arrow-container d-flex justify-content-center align-items-center ${
            index === length || index > length
              ? "arrow-container--disabled"
              : ""
          }`}
        >
          <BiChevronRight
            size="28px"
            color="#FFFFFF"
            onClick={index < length ? handleNext : undefined}
          />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  component: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  dataLength: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
};

export default Slider;
