import React from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "../utils/types/e-commerce";
import { useNavigate } from "react-router-dom";

export const EditProduct = () => {
  const [product, setProduct] = useState<ProductType>();
  const [formProduct, setFormProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    product_image: "",
  });
  const { id_product } = useParams();
  const navigate = useNavigate();
  const fileInputRef: any = React.createRef();

  useEffect(() => {
    fetchDataProduct();
  }, []);

  useEffect(() => {
    if (product) {
      setFormProduct({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        product_image: product.product_image,
      });
      // fileInputRef.current.value = product.product_image;
    }
  }, [product]);

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

  const handleDeleteProduct = () => {
    axios
      .delete(`https://bluepath.my.id/products/${id_product}`)
      .then((res) => {
        alert("Product Deleted");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();
    formData.append("product_image", fileInputRef.current.files[0]);
    formData.append("name", formProduct.name);
    formData.append("description", formProduct.description);
    formData.append("price", formProduct.price);
    formData.append("stock", formProduct.stock);
    axios
      .put(`https://bluepath.my.id/products/${id_product}`, formData)
      .then((response) => {
        console.log(response);

        alert("Success change Product");
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
            <h1 className="pt-5 text-3xl mb-9 font-medium">EDIT PRODUCT</h1>
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
              // onChange={(e) => handleFileChange(e)}
              ref={fileInputRef}
              onChange={handleFileChange}
              // ref={formProduct.product_image}
              // ref={fileInputRef}
              // value={formProduct.product_image}
              defaultValue={formProduct.product_image}
            />
            <div className="justify-end  flex mt-10">
              <button
                type="button"
                className="btn rounded-none border-none font-normal h-16 w-32 bg-[#CD0404] mb-1  "
                onClick={handleDeleteProduct}
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
        <div className="flex sticky bottom-0 w-full">
          <button
            type="submit"
            className="btn rounded-none font-normal h-16 w-full text-xl"
          >
            SAVE
          </button>
        </div>
      </form>
    </Layout>
  );
};
