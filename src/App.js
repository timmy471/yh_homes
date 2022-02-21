import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </>
  );
};

export default App;
