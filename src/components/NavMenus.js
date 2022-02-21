import React from "react";
import PropTypes from "prop-types";

const NavMenus = ({ mobile, ...rest }) => {

  return (
    <div {...rest}>
      <ul className={`nav d-flex nav-items ${mobile ? "flex-column" : ""}`}>
        <a href="#about">
          <li
            className={`nav-item header-item `}
          >
            About Us
          </li>
        </a>

        <a href="#contact">
          <li
            className={`nav-item  header-item `}
          >
            Contact Us
          </li>
        </a>
      </ul>
    </div>
  );
};
NavMenus.propTypes = {
  mobile: PropTypes.bool,
};

export default NavMenus;
