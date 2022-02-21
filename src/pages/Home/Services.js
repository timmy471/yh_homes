import React from "react";
import product1 from "../../assets/images/product1.jpeg";
import product2 from "../../assets/images/product2.jpeg";
import product3 from "../../assets/images/product3.jpeg";
import product4 from "../../assets/images/product4.jpeg";
import product5 from "../../assets/images/product5.jpeg";
import product6 from "../../assets/images/product6.jpeg";

const Services = () => {
  const productImages = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
  ];
  return (
    <div className="container">
      <div
        style={{ padding: "3rem 0 1rem", borderBottom: "3px solid #FFCC00" }}
      >
        <h4 className="blue-text font-weight-bold">Our Services</h4>
      </div>
      <div className="row" style={{ marginTop: "2rem" }}>
        {productImages.map((product, key) => (
          <div className="col-md-4" key={key}>
            <div className="product-img p-2">
              <img src={product} alt="" width="100%" height="100%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
