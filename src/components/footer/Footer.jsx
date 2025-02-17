import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import logo from "../../assets/fake-data/logo";
import dex from "../../assets/images/partners/dex.png";
import telegram from "../../assets/images/partners/telegram.png";
import x from "../../assets/images/partners/x.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer__body">
              {/* <Link to="/">
                <img src={logo} alt="Monteno" data-aos="fade-down" />
              </Link> */}
              <h1 data-aos="fade-up">Snake on Solana</h1>

              <p className="desc fs-18" data-aos="fade-up">
                Snake on Solana is a meme coin; no intrinsic value, no promises
                of profit, just pure entertainment. No formal team or roadmap,
                just a community having fun on Solana. Grab your tokens, join
                the chaos, and enjoy the ride!
              </p>
              {/* <ul className="social">
                <li data-aos="fade-up" data-aos-duration="1000">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1200">
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1400">
                  <Link to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-duration="1600">
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul> */}
            </div>
            <div className="footer_bottom">
              <p className="fs-16">Copyright © 2025, All rights reserved.</p>
              <ul>
                <li>
                  <a href="https://dexscreener.com" target="_blank">
                    <img src={dex} alt="dexscreener" />
                  </a>
                </li>
                <li>
                  <a href="https://telegram.org" target="_blank">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank">
                    <img src={x} alt="x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </>
  );
};

export default Footer;
