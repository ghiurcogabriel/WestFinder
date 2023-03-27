import React, { useEffect, useState } from "react";
// import CartContext from "../../ContextApi/cart/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Config";

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
  // console.log(data);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [error, navigate]);

  useEffect(() => {
    setIsPending(true);

    getDoc(doc(db, `jackets/${id}`))
      .then((snap) => {
        // console.log(snap);
        if (snap.exists) {
          // console.log("good");
          setTimeout(() => {
            setIsPending(false);
         }, 1000)
          setData(snap.data());
        } else {
          // console.log("error");
          setTimeout(() => {
            setIsPending(false);
         }, 1000)
          setError(`Could not find that data`);
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setIsPending(false);
       }, 1000)
      });
  }, [id]);

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
              <Link underline="hover" color="black" href="/jackets">
                Jackets
              </Link>
              <Link underline="hover" color="text.primary" aria-current="page">
                {data?.title}
              </Link>
            </Breadcrumbs>
          </div>

          <div>
            <div className="pr-page">
              <div className="pr-container">
                <Carousel autoPlay centerMode infiniteLoop interval={3000}>
                  {data?.photo?.map((ph, i) => (
                    <div key={i}>
                      <img src={ph} alt="ski" className="img-pr-carousel" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="title-pr-container">
                <div className="title-price-box">
                  <h1>{data?.title}</h1>
                  <p className="pr-price">{data?.price} RON</p>
                  <SelectDropdown id={data?.id} sizes={data} />
                  <Colors color={data} />
                  <TabsData tabs={data} />
                </div>
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
