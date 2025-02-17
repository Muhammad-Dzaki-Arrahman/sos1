import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";

const Blog = (props) => {
  const [data] = useState({
    // heading: "About",
    subtitle: "About Us",
  });

  const item = props.data;

  return (
    <section className="tf-section blog" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              {/* <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span>{data.heading}</span>
              </h1> */}
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.subtitle}
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Whats is
                <br />
                Snake on Solana
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-51">
          <div className="col-12">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {item.slice(0, 5).map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="blog__box"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="blog-img">
                      <Link to="#">
                        <img
                          src={data.img}
                          alt="Monteno"
                          width={500}
                          height={500}
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <Link to="#" className="h6 title">
                        {data.desc}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
