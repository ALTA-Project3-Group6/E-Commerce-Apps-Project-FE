import React from "react";
import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import { MdEmail, MdLock, MdPhone, MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export const Signup = () => {
  return (
    <LayoutPlain>
      <div className="px-7 py-16">
        <ImArrowLeft2 className="mb-7 h-7 w-7 cursor-pointer" />
        <h1
          style={{ fontFamily: "Montserrat Alternates" }}
          className="font-black text-4xl tracking-widest mb-20"
        >
          YSHOP
        </h1>
        <div className="flex gap-7 items-center mb-6">
          <MdEmail className="w-9 h-9" />
          <input
            type="email"
            name="email"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Email"
          ></input>
        </div>
        <div className="flex gap-7 items-center mb-6">
          <FaUserAlt className="w-9 h-9" />
          <input
            type="text"
            name="name"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Name"
          ></input>
        </div>
        <div className="flex gap-7 items-center mb-6">
          <MdLocationOn className="w-9 h-9" />
          <input
            type="text"
            name="address"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Address"
          ></input>
        </div>
        <div className="flex gap-7 items-center mb-6">
          <MdPhone className="w-9 h-9" />
          <input
            type="number"
            name="phoneNumber"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Phone Number"
          ></input>
        </div>
        <div className="flex gap-7 items-center mb-6">
          <MdLock className="w-9 h-9" />
          <input
            type="password"
            name="password"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Password"
          ></input>
        </div>
        <div className="flex gap-7 items-center">
          <MdLock className="w-9 h-9" />
          <input
            type="password"
            name="ConfirmPassword"
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Confirm Password"
          ></input>
        </div>
        <button className="btn rounded-none w-44 font-normal mt-20">
          Sign up
        </button>
      </div>
    </LayoutPlain>
  );
};
