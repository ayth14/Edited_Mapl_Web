import React, { useState } from "react";
import "./switchOption.css";
import { FiShoppingCart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const SwitchOption = (props) => {

  const {switchClass} = props;

  const [isOn, setIsOn] = useState(false);

  const handleClickFalse = () => {
    setIsOn(false);
  };

  const handleClickTrue = () => {
    setIsOn(true);
  };
  
  return (
    <label className={`react-switch ${switchClass}`}>
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
             <TbTruckDelivery size={24}/>
          </div>
          maplLATER
        </span>
      </div>
    </label>
  );
};

export default SwitchOption;
