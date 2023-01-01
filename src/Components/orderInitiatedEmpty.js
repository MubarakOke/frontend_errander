import React from "react";
import Wall from "../Assets/image/wall.png";

const OrderInitiatedEmpty = ({title1, title2}) => {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-28">
      <img src={Wall} alt="wall" />
      <div className="flex flex-col mt-12 mb-12 text-[#AAAAAA] text-[21px] items-center font-bold">
        <span>{title1}</span>
        <span>{title2}</span>
      </div>
    </div>
  );
};

export default OrderInitiatedEmpty;
