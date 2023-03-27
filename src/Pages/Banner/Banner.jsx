import React from "react";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import ski from "../../assets/skiimg.jpg";
import jacket from "../../assets/jacket.jpg";
import equipment from "../../assets/equipment.jpg";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <Carousel autoPlay infiniteLoop interval={3000}>
            <div>
              <img src={ski} alt="ski" className="img-carousel" />
              <Link to="">
                <p className="legend">See more products</p>
              </Link>
            </div>
            <div>
              <img src={jacket} alt="jacket" className="img-carousel" />
              <Link to="">
                <p className="legend">See more products</p>
              </Link>
            </div>
            <div>
              <img src={equipment} alt="ski" className="img-carousel" />
              <Link to="">
                <p className="legend">See more products</p>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Banner;
