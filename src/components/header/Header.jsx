import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menus from "../../pages/menu";

import "./header.scss";

import logo from "../../assets/images/logo/sos-logo1.png";
import ButtonOne from "../button/ButtonOne";

const Header = () => {
  const { pathname } = useLocation();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header
      id="header_main"
      className={`header js-header ${scroll ? "is-fixed" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__body d-flex justify-content-between">
              <div className="header__logo">
                <a href="#">
                  <img
                    id="site-logo"
                    src={logo}
                    alt="Snek on Solana"
                    width={120}
                    height={100}
                  />
                </a>
              </div>

              <div className="header__right">
                <nav
                  id="main-nav"
                  className={`main-nav ${menuActive ? "active" : ""}`}
                >
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleDropdown(index)}
                        className={`menu-item ${
                          data.namesub ? "menu-item-has-children" : ""
                        } ${activeIndex === index ? "active" : ""} ${
                          pathname === data.links ? "active" : ""
                        } `}
                      >
                        <a href={data.links}>{data.name}</a>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li
                                key={submenu.id}
                                className={
                                  pathname === submenu.links
                                    ? "menu-item current-item"
                                    : "menu-item"
                                }
                              >
                                <Link to={submenu.links}>{submenu.sub}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="button">
                  <ButtonOne />
                </div>

                <div
                  className={`mobile-button ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
