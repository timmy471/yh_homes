import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { RiCloseFill } from "react-icons/ri";
// import vigilearnLogo from "../assets/images/vigilearn-logo.svg";
import NavMenus from "./NavMenus";

const MobileNav = (props) => {
  const { open, toggleMobileNav, isLight, ...rest } = props;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 960;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return (
    <Drawer
      anchor="left"
      onClose={toggleMobileNav}
      open={open && width <= breakpoint}
      variant="temporary"
      classes={{ paper: "drawer" }}
      transitionDuration={300}
      {...rest}
    >
      <div {...rest} className="mobile-nav-root">
        <div className="mobile-nav-header">
          <div className="d-flex justify-content-between d-flex align-items-center">
            <div>
              <Link to="/">
                {/* <img
                  src={vigilearnLogo}
                  alt="Vigilearn"
                  className="vigilearn-logo"
                /> */}
              </Link>
            </div>
            <div>
              <RiCloseFill
                className="icon"
                size="25px"
                color="black"
                onClick={toggleMobileNav}
              />
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <NavMenus mobile />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

MobileNav.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
  isLight: PropTypes.bool,
};

export default MobileNav;
