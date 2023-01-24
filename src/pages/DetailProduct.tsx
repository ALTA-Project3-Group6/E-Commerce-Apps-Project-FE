import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImArrowLeft2 } from "react-icons/im";
import { Layout } from "../components/Layout";

export const DetailProduct = () => {
  return (
    <Layout>
      <div className="relative h-full">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <ImArrowLeft2 className="absolute top-3 left-3 w-7 h-7 shadow-2xl" />
          <BsThreeDots className="absolute top-3 right-2 w-7 h-7 shadow-2xl" />
        </div>
        <div className="text-left p-5 border-b-1 border">
          <p className="text-[#6F7F8A] " style={{ fontFamily: "Lato" }}>
            Aldo
          </p>
          <p className="text-2xl">Almond Toe</p>
          <div className="flex justify-between mt-3">
            <p className="text-sm">stock: 5</p>
            <p className="font-bold text-xl">Rp.100.000</p>
          </div>
        </div>
        <p className="text-left p-5">
          Size: 45 Color: Black Nike Best quality, comfort
        </p>
        <div className="flex  absolute bottom-0">
          <input
            type="number"
            name="stock"
            className="bg-[#F5F5F5] w-[15%] text-3xl font-bold px-4 "
          />
          <button className="btn rounded-none w-[85%] font-normal h-16">
            ADD TO CART
          </button>
        </div>
      </div>
    </Layout>
  );
};
