import React from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "../utils/types/e-commerce";

export const EditProduct = () => {
  const [product, setProduct] = useState<ProductType>();
  const { id_product } = useParams();

  useEffect(() => {
    fetchDataProduct();
  }, []);

  function fetchDataProduct() {
    axios
      .get(`https://bluepath.my.id/products/${id_product}`)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1 className="pt-5 text-3xl mb-9 font-medium">EDIT PRODUCT</h1>
          <div className="text-left mb-3">
            <p className="font-bold mb-1">Product Name</p>
            <input
              type="text"
              name="product-name"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Product Name"
              value="Nike Air Jordan"
            ></input>
          </div>
          <div className="text-left mb-3">
            <p className="font-bold mb-1">Descriprion</p>
            <textarea
              name="product-name"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="..."
              rows={9}
              value="Size: 45 Color: Black Nike Best quality, comfort"
            ></textarea>
          </div>
          <div className="flex  items-center text-left mb-3">
            <p className="font-bold w-[15%]">Price:</p>
            <input
              type="number"
              name="price"
              className="w-full bg-[#F5F5F5] p-4 text-right"
              placeholder="Price"
              value="50.000"
            ></input>
          </div>
          <div className="flex  items-center text-left mb-6">
            <p className="font-bold w-[13%]">Stock:</p>
            <input
              type="number"
              name="price"
              className="bg-[#F5F5F5] p-4 text-center w-[20%]"
              placeholder="Stock"
              value="2"
            ></input>
          </div>
          <label className="label">
            <span className="label-text font-bold">Change Product Image</span>
          </label>
          <input type="file" className="file-input flex" />
          <div className="justify-end  flex mt-10">
            <button className="btn rounded-none border-none font-normal h-16 w-32 bg-[#CD0404] mb-1  ">
              DELETE PRODUCT
            </button>
          </div>
        </div>
        <div className="flex  absolute bottom-0 w-full">
          <button className="btn rounded-none font-normal h-16 w-full text-xl rou">
            SAVE PRODUCT
          </button>
        </div>
      </div>
    </Layout>
  );
};
