import React from "react";
import ayodele from "../../assets/images/ayodele.png";
import sikemi from "../../assets/images/sikemi.png";
import fatimah from "../../assets/images/fatimah.png";

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "I was impressed with their honesty they’re open to price negotiations and you get good value for your money",
      image: sikemi,
      name: "Sikemi",
    },
    {
      message:
        "I have been having trust issues with real estate agents around lagos , but my experience with YJ homes and their manner of approach and good locations of their properties without any stress or headaches i can truly say they are the best when it comes to real estate agents you can trust !!! Their properties are always top notch and the best you can get!!!",
      image: ayodele,
      name: "Ayodele",
    },
    {
      message:
        "YJ Homes Realty has proven to be a trustworthy and reliable real estate agent. They’ve made it a seamless process for me to invest in real estate.",
      image: fatimah,
      name: "Fatimah",
    },
  ];

  return (
    <div className="container">
      <div className="testimonial-section">
        <h3 className="text-center blue-text">
          Here is what people have to say about us
        </h3>
        <div className="mt-4 row">
          {testimonials.map(({ message, name, image }, key) => (
            <div className="col-md-4 px-4" key={key} data-aos="fade-up">
              <div className="testimonial-card pt-4 pb-2 px-3">
                <p>{message}</p>

                <div className="testimonial-person d-flex align-items-center">
                  <div
                    style={{
                      borderRadius: "50%",
                      height: "4rem",
                      width: "4rem",
                    }}
                  >
                    <img src={image} alt={name} width="100%" />
                  </div>{" "}
                  &nbsp; &nbsp;
                  <p
                    className="blue-text"
                    style={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    {name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
