import React from "react";
// import NewsLetter from "./NewsLetter";
import { Link } from "react-router-dom";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

import "../assets/styles/componentStyles/footer.scss";
import yjLogo from "../assets/images/logo-img.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer" id="contact">
        <div className="container">
          {/* <NewsLetter /> */}
          <div className="footer--one space-top-2 ">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-2">
                  <Link to="/" aria-label="Front">
                    <img
                      src={yjLogo}
                      className="vigilearn-logo img-fluid"
                      alt="Vigilearn"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-md-3 space-top">
                <h6>CONTACT US</h6>
                <ul className="flex-column nav">
                  <li>
                    <a href="tel:+2347048792911" className="footer-link">
                      <span className="footer-link"> +234 704 879 2911</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+2349023904598" className="footer-link">
                      <span className="footer-link"> +234 902 390 4598</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@vigilearn.com"
                      className="footer-link"
                    >
                      <span className="footer-link">
                        yjhomesreality@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 space-top">
                <h6>Corporate Headquaters</h6>
                <ul
                  className="flex-column nav"
                  style={{ marginBottom: "2rem" }}
                >
                  <li className="footer-item">
                    B24 Cherub Mall, Lekki, <br />
                    Lagos, Nigeria <br />
                  </li>
                </ul>
              </div>

              <div className="col-md-3 space-top">
                <h6>Connect with us</h6>
                <ul className="flex-column nav">
                  <li>
                    <div className="icons">
                      {/* <a
                        href="https://twitter.com/VigiLearn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiTwitterFill />
                      </a> */}

                      <a
                        href="https://m.facebook.com/YJHomesRealty/?__tn__=C-R"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiFacebookBoxFill />
                      </a>
                      <a
                        href="https://www.instagram.com/yj_homes_realty/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiInstagramLine />
                      </a>
                      {/* <a
                        href="https://www.linkedin.com/company/vigilearn/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <RiLinkedinFill />
                      </a> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer--two d-none">
            <p className="footer-item">
              © {new Date().getFullYear()} Vigilearn. All Rights Reserved.
            </p>
            <p className="footer-policy">
              <a
                style={{ color: "#FFFFFF" }}
                href="https://edutech.global/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-link">Privacy Policy</span>
              </a>
              {/* <Link to="/terms-conditions">
                <span className="footer-link">Terms &amp; conditions</span>
              </Link> */}
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
