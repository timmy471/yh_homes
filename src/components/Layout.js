import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import MobileNav from "./MobileNav";

import "../assets/styles/componentStyles/navigation.scss";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location?.pathname;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const pathsWithLightHeader = [
    "/products",
    "/student-information-system",
    "learning-management-system",
  ];

  const isLight = pathsWithLightHeader.includes(path);
  const isBlueHeader = path.includes("blog");
  
  const toggleMobileNav = () => setOpen(!open);
  return (
    <div>
      <Header
        toggleMobileNav={toggleMobileNav}
        open={open}
        isLight={isLight}
        isBlueHeader={isBlueHeader}
      />
      {/* <MobileNav open={open} toggleMobileNav={toggleMobileNav} /> */}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
