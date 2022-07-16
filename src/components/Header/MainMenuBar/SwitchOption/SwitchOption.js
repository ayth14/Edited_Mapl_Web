import React, { useState } from "react";
import "./switchOption.css";
import { FiShoppingCart } from "react-icons/fi";
import iconTruck from "@assets/images/truck.png";
import redTruck from "@assets/images/truckRed.png";

const SwitchOption = (props) => {
  const [isOn, setIsOn] = useState(false);
  const handleClickFalse = () => {
    setIsOn(false);
  };
  const handleClickTrue = () => {
    setIsOn(true);
  };
  return (
    <label className={`react-switch ${props.switchClass}`}>
      <div className="react-switch-labels">
        <span
          className={isOn ? "base" : "switch-button-active"}
          onClick={handleClickFalse}
        >
          <div className="maplNowIcon">
            <FiShoppingCart />
          </div>
          maplNow
        </span>
        <span
          className={isOn ? "switch-button-active" : "base"}
          onClick={handleClickTrue}
        >
          <div className="truckIcon">
            <img src={isOn ? redTruck : iconTruck} alt="" />
          </div>
          maplLATER
        </span>
      </div>
    </label>
  );
};

export default SwitchOption;
