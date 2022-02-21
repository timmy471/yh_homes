import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const NotFound = () => (
  <div className="bg-pink">
    <div
      className="container light-blue-text text-center d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h2>
            Oops!
            <br />
            PAGE NOT FOUND
          </h2>
          <p className="mb-4">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button label="Back Home" variant="secondary" size="md" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
