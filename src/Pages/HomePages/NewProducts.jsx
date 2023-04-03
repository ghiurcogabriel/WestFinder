import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase/Config";
import SingleProduct from '../SingleProduct';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper";

const NewProducts = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  console.log(data);

    useEffect(() => {
      if (error) {
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    }, [error, navigate]);

  useEffect(() => {
    setIsPending(true);

    const products = collection(db, `womens`);
    getDocs(products)
      .then((snapshot) => {
        if (snapshot.empty) {
            setIsPending(false);
          setError("no data found");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
            setIsPending(false);
          // console.log(results);
        }
      })
      .catch((err) => {
        setError(err.message);
          setIsPending(false);
      });
  }, [id]);

  return (
    <>
      {/* {isPending && ( */}
        <div>
          <div className="pr-page">
            <div className="pr-container">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000269",
                  "--swiper-pagination-color": "#635f5f",
                  height: "auto",
                }}
                zoom={true}
                loop={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
              >
                
                  <SwiperSlide className="swiper-product">
                    <SingleProduct products={data}/>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div> 
    {/* //   )} */}
    </>
  );
};

export default NewProducts;
