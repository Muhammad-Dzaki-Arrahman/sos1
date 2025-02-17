import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataPartners from "../assets/fake-data/data-partners";
import dataPortfolio from "../assets/fake-data/data-portfolio";
import img from "../assets/images/items/snake1.png";
import Partners from "../components/layouts/Partners";
import Portfolio from "../components/layouts/Portfolio";
import ImageFlips from "./ImageFlips";

const Home01 = () => {
  return (
    <div className="about">
      <Header />
      <div className="banner">
        <section id="banner" className="tf-section page-title">
          <div className="container">
            <div className="col-md-12">
              <div className="page-title__body ab">
                <div className="block-text pt-12">
                  <h2 className="sub-title mb-20">ZZZ!, Snake</h2>
                  <p className="fs-24 mb-33">
                    This Snake Has No Toxic, Just Meme!
                  </p>
                </div>
                <img src={img} alt="Snake" className="snake1" />
              </div>
            </div>
          </div>
        </section>
        <Portfolio data={dataPortfolio} />
      </div>
      {/* <About /> */}
      {/* <Counter /> */}
      <Partners data={dataPartners} />
      <Footer />
    </div>
  );
};

export default Home01;
