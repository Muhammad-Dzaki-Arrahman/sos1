import React from "react";
import { Link } from "react-router-dom";

const Partners = (props) => {
  const data = props.data;

  return (
    <section id="socials" className="tf-section partners">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              {/* <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span>Socials</span>
              </h1> */}
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Socials
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Follow Us <br /> ON{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="partners__body" data-aos="fade-up">
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`box-partner border-r ${data.border}`}
                >
                  <a href={data.src}>
                    <img src={data.img} alt="Socials" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
