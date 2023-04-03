import React, {useState, useEffect} from "react";
import Loader from "../../Components/Loader/Loader";

//pages
import Banner from "../Banner/Banner";
import SkiEquip from "../SkiEquip";

const Home = () => {
  const [loadingDelay, setLoadingDelay] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <>
      {loadingDelay ? <Loader /> : (
        <div>
          <Banner />
          <SkiEquip />
        </div>
      )}
    </>
  );
};

export default Home;
