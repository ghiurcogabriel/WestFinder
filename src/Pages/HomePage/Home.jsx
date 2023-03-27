import React from "react";
import Loader from "../../Components/Loader/Loader";

//pages
import Banner from "../Banner/Banner";
import SkiEquip from "../SkiEquip";

const Home = () => {
  return (
    <>
      {<Loader /> && (
        <div>
          <Banner />
          <SkiEquip />
        </div>
      )}
    </>
  );
};

export default Home;
