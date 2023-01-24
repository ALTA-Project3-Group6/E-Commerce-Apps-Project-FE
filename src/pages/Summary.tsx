import React from "react";
import { Layout } from "../components/Layout";

export const Summary = () => {
  return (
    <Layout>
      <div className="relative h-full">
        <div>
          <h1 className="pt-14 text-3xl mb-5">SUMMARY</h1>
          <div className="flex justify-between bg-[#F5F5F5] mx-3 p-2 h-full mb-4">
            <div className="flex gap-3">
              <div className="w-40">
                <img
                  src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="aspect-square"
                />
              </div>
              <div className=" text-left flex flex-col justify-between h-full ">
                <div>
                  <p
                    className="text-[#6F7F8A] text-xs"
                    style={{ fontFamily: "Lato" }}
                  >
                    Briyan
                  </p>
                  <p className="text-sm font-semibold">
                    REID Lace-Up Shoes Multi
                  </p>
                </div>
                <div>
                  <p className="mr-1 font-bold mb-1  ">Rp. 100.000</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="px-4">2</p>
            </div>
          </div>
          <div className="flex justify-between bg-[#F5F5F5] mx-3 p-2 h-full mb-4">
            <div className="flex gap-3">
              <div className="w-40">
                <img
                  src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="aspect-square"
                />
              </div>
              <div className=" text-left flex flex-col justify-between h-full ">
                <div>
                  <p
                    className="text-[#6F7F8A] text-xs"
                    style={{ fontFamily: "Lato" }}
                  >
                    Briyan
                  </p>
                  <p className="text-sm font-semibold">
                    REID Lace-Up Shoes Multi
                  </p>
                </div>
                <div>
                  <p className="mr-1 font-bold mb-1  ">Rp. 50.000</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="px-4">1</p>
            </div>
          </div>
          <div className="flex justify-between bg-[#F5F5F5] mx-3 p-4 mb-5">
            <p>Total:</p>
            <p className="font-bold">Rp. 150.000</p>
          </div>
          <div className="text-left px-5">
            <p className="font-bold">Address:</p>
            <p className="bg-[#F5F5F5] p-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis{" "}
            </p>
          </div>
        </div>
        <div className=" absolute bottom-0 w-full">
          <button className="btn rounded-none font-normal h-16 w-full text-xl">
            CONFIRM
          </button>
        </div>
      </div>
    </Layout>
  );
};
