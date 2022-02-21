import React from "react";
import partner1 from "../../assets/images/partner_1.png";
import partner2 from "../../assets/images/partner_2.png";
import partner3 from "../../assets/images/partner_3.png";
import partner4 from "../../assets/images/partner_4.png";
import partner5 from "../../assets/images/partner_5.png";
import partner6 from "../../assets/images/partner_6.png";
import partner7 from "../../assets/images/partner_7.png";
import partner8 from "../../assets/images/partner_8.png";

const Partners = () => {
  const partnerImages = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
  ];
  return (
    <div style={{ padding: "4rem 0" }} className="partners">
      <div className="container text-center">
        <h2 className="blue-text"> Our Partners </h2>
        <div style={{ marginTop: "6rem" }} className="row">
          {partnerImages.map((partner, key) => (
            <div className="col-4 col-md-3 space-bottom-3" key={key}>
              <img src={partner} width="100%" height="55rem" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
