import React from "react";
import { FaRegShareSquare } from "react-icons/fa";

import "./SkiEquip.css";
import "./Buttons.scss";
import NewMensProducts from "./HomePages/NewProducts";
import { NewWomensProducts } from "./HomePages/NewProducts";
// import { Link } from "@mui/material";

const SkiEquip = () => {
  return (
    <>
      <div className="ski-container">
        <div className="div-1">
          <a href="./mens">
            <h1>
              New items in mens collection <FaRegShareSquare />
            </h1>
          </a>
          <NewMensProducts />
        </div>

        <div className="div-2">
          <a href="./womens">
            <h1>
              New items in womens collection <FaRegShareSquare />
            </h1>
          </a>
          <NewWomensProducts />
        </div>
      </div>
    </>
  );
};

export default SkiEquip;
