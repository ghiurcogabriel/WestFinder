import React from "react";

import "./PagesStyles.css";
import "./Buttons.scss";
import ski from "../assets/ski.jpg";
import clothes from "../assets/clothes.jpg";
import thenorthface from "../assets/thenorthface.jpg";
import salomon from "../assets/salomon.jpg";
import NewProducts from "./HomePages/NewProducts";

const SkiEquip = () => {
  return (
    <>
      <div className="ski-container">
        <h1>See what's new in our store</h1>
          <NewProducts />
        

        <h1>Similar products</h1>
        <div className="ski-box">
          <div className="equipmentt">
            <div className="equip-container recommended-down">
              <img src={thenorthface} alt="ski" />
              <div className="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                The North Face
              </div>
            </div>
            <div className="equip-container recommended-up">
              <img src={salomon} alt="ski" />
              <div className="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="title">Salomon</p> 
              </div>
            </div>
          </div>
        </div>

        <h1>See all products</h1>
        <div className="ski-box">
          <div className="equipmentt">
            <div className="equip-container recommended-down">
              <img src={thenorthface} alt="ski" />
              <div className="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                The North Face
              </div>
            </div>
            <div className="equip-container recommended-up">
              <img src={salomon} alt="ski" />
              <div className="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p className="title">Salomon</p> 
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SkiEquip;
