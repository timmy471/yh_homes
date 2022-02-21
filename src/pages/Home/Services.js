import React from "react";
import product1 from "../../assets/images/product1.jpeg";
import product2 from "../../assets/images/product2.jpeg";
import product3 from "../../assets/images/product3.jpeg";
import product4 from "../../assets/images/product4.jpeg";
import product5 from "../../assets/images/product5.jpeg";
import product6 from "../../assets/images/product6.jpeg";

const Services = () => {
  const productImages = [
    {
      link: "https://www.instagram.com/p/CZl2ngyNuUe/?utm_medium=share_sheet",
      img: product1,
    },
    {
      link: "https://www.instagram.com/p/CaK7Yvotb6Z/?utm_medium=share_sheet",
      img: product2,
    },
    {
      link: "https://www.instagram.com/p/CaK6Ev2N15Z/?utm_medium=copy_link",
      img: product3,
    },
    {
      link: "https://www.instagram.com/p/CaK70U7t9P_/?utm_medium=copy_link",
      img: product4,
    },
    {
      link: "https://www.instagram.com/p/CaK5CfPtLaM/?utm_medium=copy_link",
      img: product5,
    },
    {
      // link: "https://www.instagram.com/p/CaK5CfPtLaM/?utm_medium=copy_link",
      img: product6,
    },
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
          <div className="col-md-4" key={key} data-aos="fade-up">
            <a
              href={product.link || "#"}
              target={product.link ? "_blank" : ""}
              rel="noreferrer"
            >
              <div className="product-img p-2">
                <img src={product.img} alt="" width="100%" height="100%" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
