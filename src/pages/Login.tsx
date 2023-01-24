import React from "react";
import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import { MdEmail, MdLock } from "react-icons/md";

export const Login = () => {
  return (
    <LayoutPlain>
      <div className="px-7 py-16">
        <ImArrowLeft2 className="mb-7 h-7 w-7 cursor-pointer" />
        <h1
          style={{ fontFamily: "Montserrat Alternates" }}
          className="font-black text-4xl tracking-widest mb-28"
        >
          YSHOP
        </h1>
        <div className="flex gap-7 items-center mb-6">
          <MdEmail className="w-9 h-9" />
          <input
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Email"
          ></input>
        </div>
        <div className="flex gap-7 items-center">
          <MdLock className="w-9 h-9" />
          <input
            className="w-full bg-[#F5F5F5] p-4"
            placeholder="Password"
          ></input>
        </div>
        <button className="btn rounded-none w-44 font-normal mt-28 mb-24">
          Sign in
        </button>
        <p>Don’t have an account?</p>
        <button className="font-bold">Sign up</button>
        <p>using your email address</p>
      </div>
    </LayoutPlain>
  );
};
