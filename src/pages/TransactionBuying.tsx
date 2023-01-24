import React from "react";
import { Layout } from "../components/Layout";

export const TransactionBuying = () => {
  return (
    <Layout>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1 className="pt-5 text-3xl mb-9 font-medium">TRANSACTION</h1>
          <div className="mb-9">
            <button className="btn rounded-none w-32 font-normal ">BUY</button>
            <button className="btn rounded-none w-32 font-normal bg-[#EEEEEE] border-none text-[#000000]">
              SELL
            </button>
          </div>
          <div className="border-2 bg-[#F0F0F0] p-3 text-left border-[#D9D9D9]">
            <p className="border-b-2 pb-5 border-[#D9D9D9]">
              ID Transaction: 1
            </p>
            <div className="flex justify-between py-5">
              <p>Total Transaction:</p>
              <p className="font-bold">Rp.150.000</p>
            </div>
            <p className="pb-5">Status:</p>
            <p className="font-bold text-right">Waiting payment</p>
          </div>
          <div className="flex justify-end">
            <button className="btn rounded-none border-none font-normal h-12 w-20 bg-[#CD0404] text-xs mb-14">
              CANCEL ORDER
            </button>
          </div>
          <div className="border-2 bg-[#F0F0F0] p-3 text-left border-[#D9D9D9]">
            <p className="border-b-2 pb-5 border-[#D9D9D9]">
              ID Transaction: 2
            </p>
            <div className="flex justify-between py-5">
              <p>Total Transaction:</p>
              <p className="font-bold">Rp.250.000</p>
            </div>
            <p className="pb-5">Status:</p>
            <p className="font-bold text-right">Canceled</p>
          </div>
          <div className="flex justify-end">
            <button className="btn rounded-none border-none font-normal h-12 w-20 bg-[#F0F0F0] text-xs mb-14 text-[#0F0F0F] btn-disabled ">
              CANCEL ORDER
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
