import img1 from "../../assets/men/men1.jpg";
import img2 from "../../assets/men/men2.jpg";
import img3 from "../../assets/men/men3.jpg";
import img4 from "../../assets/men/men4.jpg";
import img5 from "../../assets/men/men5.jpg";
import img6 from "../../assets/men/men6.jpg";
import img7 from "../../assets/men/men7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "./ProductsStyle.css";

const NewMensProducts = () => {
  return (
    <>
      <div>
        <div className="pr-page">
          <div className="pr-container2">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="img1" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="img2" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="img3" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="img4" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="img5" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="img6" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="img7" className="men-category-main-page" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMensProducts;


export const NewWomensProducts = () => {
  return (
    <>
      <div>
        <div className="pr-page">
          <div className="pr-container2">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="img1" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="img2" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="img3" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="img4" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="img5" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="img6" className="men-category-main-page" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="img7" className="men-category-main-page" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
