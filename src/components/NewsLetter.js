import React from "react";
// import Button from "./Button";
import "../assets/styles/componentStyles/news-letter.scss";

const NewsLetter = () => {
  return (
      <div className="news-letter-container">
        <h1>
          Subscribe To Our Newsletter To Stay Updated On All Our Latest Products
        </h1>
        <form>
          <div className="form-group news-letter-form">
            <>
              <input
                type="email"
                className="form-control input-field"
                name="email"
                size="large"
                id="email"
                placeholder="Email"
              />
              <small className="">
                {/* {Response.message && Response.message} */}
              </small>
            </>
            {/* <div className="newsletter-cta">
              <Button type="submit" label="Submit" />
            </div> */}
          </div>
        </form>
      </div>
  );
};

export default NewsLetter;
