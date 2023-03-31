import React from "react";
import "./Banner.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//import banner photos
import mountain1 from "../../assets/mountain1.jpg";
import mountain2 from "../../assets/mountain2.jpg";
import mountain3 from "../../assets/mountain3.jpg";
import mountain4 from "../../assets/mountain4.jpg";
import mountain6 from "../../assets/mountain6.jpg";

const Banner = () => {
  // const styleImg = {
  //   width: "100%",
  //   height: "100%",
  // };
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            autoplay={true}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img className="banner-img" src={mountain1} alt="mountain" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={mountain2} alt="alt munte" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={mountain3} alt="altu" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={mountain4} alt="munte" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={mountain6} alt="muntes" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
