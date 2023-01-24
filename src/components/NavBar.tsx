import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="flex justify-around py-5  shadow-inner ">
      <FaHome className="w-9 h-9 text-[#A0A0A0]" />
      <BsCart className="w-9 h-9 text-[#A0A0A0]" />
      <FaUser className="w-9 h-9 text-[#A0A0A0]" />
    </div>
  );
};
