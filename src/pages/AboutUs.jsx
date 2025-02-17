import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import dataPartners from "../assets/fake-data/data-partners";
import dataPortfolio from "../assets/fake-data/data-portfolio";
import dataTeam from "../assets/fake-data/data-team";
import img from "../assets/images/items/snake1.png";
import About from "../components/layouts/About";
import Action from "../components/layouts/Action";
import Counter from "../components/layouts/Counter";
import Partners from "../components/layouts/Partners";
import Portfolio from "../components/layouts/Portfolio";
import Team2 from "../components/layouts/Team2";

const AboutUs = () => {
  return (
    <div className="about">
      <Header />
      <section className="tf-section page-title">
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
      {/* <About /> */}
      {/* <Counter /> */}
      <Partners data={dataPartners} />
      <Footer />
    </div>
  );
};

export default AboutUs;
