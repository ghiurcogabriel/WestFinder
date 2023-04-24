import React, { useEffect, useState, useContext } from "react";
// import CartContext from "../../ContextApi/cart/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CartContext from "../../ContextApi/cart/CartContext";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Config";

import { Swiper, SwiperSlide } from "swiper/react";

import { CategoryContext } from "../../ContextApi/category/CategoryContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper";

import "./ProductPage.css";
import {
  Colors,
  Description,
  MainDesc,
  SelectDropdown,
  TabsData,
} from "./MuiComponents";
import Loader from "../../Components/Loader/Loader";

const ProductPage = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  console.log(data);
  const {category} = useContext(CategoryContext);

  const { addToCart} = useContext(CartContext);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [error, navigate]);

  useEffect(() => {
    setIsPending(true);

    getDoc(doc(db, `${category}/${id}`))
      .then((snap) => {
        // console.log(snap);
        if (snap.exists) {
          // console.log("good");
          setTimeout(() => {
            setIsPending(false);
          }, 1000);
          setData(snap.data());
        } else {
          // console.log("error");
          setTimeout(() => {
            setIsPending(false);
          }, 1000);
          setError(`Could not find that data`);
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setIsPending(false);
        }, 1000);
      });
  }, [category,id]);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <div className="bread">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="black" href="/">
                Home
              </Link>
              <Link underline="hover" color="black" href={`/${category}`}>
                {category}
              </Link>
              <Link underline="hover" color="text.primary" aria-current="page">
                {data?.title}
              </Link>
            </Breadcrumbs>
          </div>

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
                  {data?.photo?.map((ph, i) => (
                    <SwiperSlide className="swiper-product">
                      <div key={i} className="swiper-zoom-container">
                        <img src={ph} alt="ski" className="img-pr-carousel" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="title-pr-container">
                <div className="title-price-box">
                  <h1>{data?.title}</h1>
                  <p className="pr-price">{data?.price} RON</p>
                  <SelectDropdown id={data?.id} sizes={data} />
                  <Colors color={data} />
                  <TabsData tabs={data} />
                </div>
                <button onClick={() => addToCart(data)} className="button4">Add to cart</button>
              </div>
            </div>
            <MainDesc maindesc={data} />
            <Description description={data} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
