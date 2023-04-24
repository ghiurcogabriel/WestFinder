import React, { useEffect, useState, useContext } from "react";
import "./AllProductsStyle.css";
import SingleProduct from "./SingleProduct";
import { collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "../Firebase/Config";
import Loader from "../Components/Loader/Loader";

//context
import { CategoryContext } from "../ContextApi/category/CategoryContext";

const AllProducts = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { category } = useContext(CategoryContext);
  // console.log(category);
  // console.log(changeCategory, 'state:', state)

  useEffect(() => {
    setIsPending(true);

    const products = collection(db, category);
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
  }, [category]);

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <div className="product-carousel">
          <div className="all-products-container">
            {error && <div>{error}</div>}
            <SingleProduct products={data} key={uuidv4} />
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
