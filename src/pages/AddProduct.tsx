import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [formProduct, setFormProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    product_image: null,
  });
  // const fileInputRef = useRef(null);
  const fileInputRef = React.createRef();

  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (event: any) => {
    setFormProduct({
      ...formProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event: any) => {
    const file = fileInputRef.current.files[0];
    setFormProduct({
      ...formProduct,
      product_image: file,
    });
  };

  useEffect(() => {
    if (
      formProduct.name === "" ||
      formProduct.description === "" ||
      formProduct.price === 0 ||
      formProduct.stock === 0 ||
      formProduct.product_image === null
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    console.log(formProduct);
  }, [formProduct]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("product_image", formProduct.product_image);
    // formData.append("name", formProduct.name);
    // formData.append("description", formProduct.description);
    // formData.append("price", formProduct.price);
    // formData.append("stock", formProduct.stock);
    axios
      .post("https://shirayuki.site/products", formProduct)
      .then((response) => {
        console.log(response);

        alert("Success Add Product");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit} className="relative h-full">
        <div className="relative h-full">
          <div className="px-3 font-medium">
            <h1 className="pt-5 text-3xl mb-9 font-medium">ADD PRODUCT</h1>
            <div className="text-left mb-3">
              <p className="font-bold mb-1">Product Name</p>
              <input
                type="text"
                name="name"
                className="w-full bg-[#F5F5F5] p-4"
                placeholder="Product Name"
                onChange={handleChange}
                value={formProduct.name}
              ></input>
            </div>
            <div className="text-left mb-3">
              <p className="font-bold mb-1">Descriprion</p>
              <textarea
                name="description"
                className="w-full bg-[#F5F5F5] p-4"
                placeholder="..."
                rows={9}
                onChange={handleChange}
                value={formProduct.description}
              ></textarea>
            </div>
            <div className="flex  items-center text-left mb-3">
              <p className="font-bold w-[15%]">Price:</p>
              <input
                type="number"
                name="price"
                className="w-full bg-[#F5F5F5] p-4 text-right"
                placeholder="Price"
                onChange={(e) =>
                  setFormProduct({
                    ...formProduct,
                    price: Number(e.target.value),
                  })
                }
                value={formProduct.price}
              ></input>
            </div>
            <div className="flex  items-center text-left mb-6">
              <p className="font-bold w-[13%]">Stock:</p>
              <input
                type="number"
                name="price"
                className="bg-[#F5F5F5] p-4 text-center w-[20%]"
                placeholder="Stock"
                // onChange={handleChange}
                onChange={(e) =>
                  setFormProduct({
                    ...formProduct,
                    stock: parseInt(e.target.value),
                  })
                }
                value={formProduct.stock}
              ></input>
            </div>
            <label className="label">
              <span className="label-text font-bold">Add Product Image</span>
            </label>
            <input
              type="file"
              name="product_image"
              className="file-input flex"
              // onChange={(e) =>
              //   setFormProduct({
              //     ...formProduct,
              //     product_image: e.target.files[0],
              //   })
              // }
              // onChange={handleChange}
              onChange={(e) => handleFileChange(e)}
              // ref={formProduct.product_image}
              // ref={fileInputRef}
              ref={fileInputRef}
            />
          </div>
        </div>
        <div className="flex sticky bottom-0 w-full">
          <button
            className="btn rounded-none font-normal h-16 w-full text-xl"
            disabled={isDisable}
          >
            CREATE PRODUCT
          </button>
        </div>
      </form>
    </Layout>
  );
};
