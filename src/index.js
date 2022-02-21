import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EnvVariables } from "./env/Env";
import TagManager from "react-gtm-module";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(
  {
      duration: 600,
      easing: 'ease-in',
  }
);

const gtmId =
  EnvVariables?.REACT_APP_GOOGLE_ANALYTICS_ID ||
  process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
const tagManagerArgs = {
  gtmId,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
