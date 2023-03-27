import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Config";

import { SelectDropdown } from "../Pages/ProductPage/MuiComponents";
import ProductPage from "../Pages/ProductPage/ProductPage";

const CustomData = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const products = collection(db, "jackets");
    getDocs(products)
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("no data found");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          console.log(results);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {/* <SelectDropdown sizes={data} error={error} /> */}
      {/* <ProductPage datas={data} /> */}
    </div>
  );
};

export default CustomData;
