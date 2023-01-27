import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ProductsType } from "../utils/types/e-commerce";

export const Homepage = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataProducts();
  }, []);

  function fetchDataProducts() {
    axios
      .get("https://bluepath.my.id/products")
      .then((res) => {
        setProducts(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const onClickDetail = (index: number) => {
    navigate(`/detail-product/${index}`);
  };

  return (
    <Layout>
      <div className="grid grid-cols-2 divide-x divide-y border-b border-[#CCCCCC]">
        {products.map((product) => (
          <div key={product.id} className="border-[#CCCCCC] border-2">
            <img src={product.product_image} alt="" className="aspect-square" />
            <div
              className="text-left py-2 px-4 cursor-pointer"
              onClick={() => onClickDetail(product.id)}
            >
              <p
                className="text-[#6F7F8A] text-xs"
                style={{ fontFamily: "Lato" }}
              >
                {product.user.user_name}
              </p>
              <p className="text-sm ">{product.name}</p>
            </div>
            <p className="text-right mr-1 font-bold mb-1">Rp.{product.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
