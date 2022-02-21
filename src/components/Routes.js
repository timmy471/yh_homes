import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import ScrollToTop from "./ScrollToTop";

const Routes = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "",
      component: NotFound,
    },
  ];
  return (
    <div style={{ marginTop: "40px" }}>
      <ScrollToTop />
      <Switch>
        {routes.map(({ path, component }, key) => (
          <Route path={path} component={component} exact key={key} />
        ))}
      </Switch>
    </div>
  );
};

export default Routes;
