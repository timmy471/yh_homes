import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import yjLogo from "../assets/images/logo-img.png";
import NavMenus from "./NavMenus";


const Header = (props) => {
  const { toggleMobileNav, open, isLight, isBlueHeader, ...rest } = props;
  return (
    <AppBar
      position="fixed"
      className={`root ${
        isLight ? "root--light" : isBlueHeader ? "root--blue-bg" : ""
      }`}
      {...rest}
    >
      <Toolbar disableGutters className="h-100">
        <div className="container d-flex justify-content-between d-flex align-items-center">
          <div>
            <Link to="/">
              <img
                src={yjLogo}
                height={"50px"}
                alt="Vigilearn"
                className="YJ Homes"
              />
            </Link>
          </div>

          <NavMenus />
        </div>
      </Toolbar>
    </AppBar>
    // </HideOnScroll>
  );
};

Header.propTypes = {
  toggleMobileNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  isLight: PropTypes.bool,
};

export default Header;
