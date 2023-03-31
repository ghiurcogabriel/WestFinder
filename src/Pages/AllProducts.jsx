import React, { useEffect, useState } from "react";
import "./AllProductsStyle.css";
import SingleProduct from "./SingleProduct";
import { collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "../Firebase/Config";
import Loader from "../Components/Loader/Loader";

const AllProducts = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const products = collection(db, "womens");
    getDocs(products)
      .then((snapshot) => {
        if (snapshot.empty) {
          setTimeout(() => {
            setIsPending(false);
          }, 1500);
          setError("no data found");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setTimeout(() => {
            setIsPending(false);
          }, 1500);
          // console.log(results);
        }
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
            setIsPending(false);
          }, 1500);
      });
  }, []);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="product-carousel">
          {error && <div>{error}</div>}
          <div style={{width: '20%', height: '100%', textAlign:'center'}}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro eius deleniti, dolores itaque quia dolorum ad iusto pariatur rem?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro eius deleniti, dolores itaque quia dolorum ad iusto pariatur rem?</p>
          </div>
          <SingleProduct products={data} key={uuidv4} />
        </div>
      )}
    </>
  );
};

export default AllProducts;
