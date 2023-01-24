import React from "react";
import { Layout } from "../components/Layout";

export const AddProduct = () => {
  return (
    <Layout>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1 className="pt-5 text-3xl mb-9 font-medium">ADD PRODUCT</h1>
          <div className="text-left mb-3">
            <p className="font-bold mb-1">Product Name</p>
            <input
              type="text"
              name="product-name"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Product Name"
            ></input>
          </div>
          <div className="text-left mb-3">
            <p className="font-bold mb-1">Descriprion</p>
            <textarea
              name="product-name"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="..."
              rows={9}
            ></textarea>
          </div>
          <div className="flex  items-center text-left mb-3">
            <p className="font-bold w-[15%]">Price:</p>
            <input
              type="number"
              name="price"
              className="w-full bg-[#F5F5F5] p-4 text-right"
              placeholder="Price"
            ></input>
          </div>
          <div className="flex  items-center text-left mb-6">
            <p className="font-bold w-[13%]">Stock:</p>
            <input
              type="number"
              name="price"
              className="bg-[#F5F5F5] p-4 text-center w-[20%]"
              placeholder="Stock"
            ></input>
          </div>
          <label className="label">
            <span className="label-text font-bold">Add Product Image</span>
          </label>
          <input type="file" className="file-input flex" />
        </div>
        <div className="flex  absolute bottom-0 w-full">
          <button className="btn rounded-none font-normal h-16 w-full text-xl rou">
            CREATE PRODUCT
          </button>
        </div>
      </div>
    </Layout>
  );
};
