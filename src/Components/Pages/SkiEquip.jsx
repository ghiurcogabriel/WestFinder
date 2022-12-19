import React from "react";

import "./SkiEquip.css";
import "./Buttons.scss";
import ski from "../assets/ski.jpg";
import clothes from "../assets/clothes.jpg";

const SkiEquip = () => {
  return (
    <>
      <div className="ski-container">
        <h1>Get ready for winter</h1>
        <div className="ski-box">
          <div className="equipmentt">
            <div className="equip-container">
              <img src={ski} alt="ski" />
              <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                See More Ski Equipments
              </div>
            </div>
            <div className="equip-container">
              <img src={clothes} alt="ski" />
              <div class="button2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                See More Winter Clothes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkiEquip;
