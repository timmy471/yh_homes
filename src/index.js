import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init(
  {
      duration: 600,
      easing: 'ease-in',
  }
);


ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
