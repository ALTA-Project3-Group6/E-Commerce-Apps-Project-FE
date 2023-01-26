import React from "react";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { cartType } from "../utils/types/e-commerce";
import { useNavigate } from "react-router-dom";
import { useCookies, Cookies, withCookies } from "react-cookie";

export const Summary = () => {
  const [carts, setCarts] = useState<cartType[]>([]);
  const [formOrder, setFormOrder] = useState({
    total_price: 0,
  });
  const [urlRedirect, setUrlRedirect] = useState("");
  const navigate = useNavigate();
  const [cookie, , removeCookie] = useCookies(["address"]);

  useEffect(() => {
    fetchDataCart();
    // console.log(formOrder);
    setFormOrder({ total_price: carts[0]?.price * carts[0]?.quantity });
    // setFormOrder({
    //   total_price: carts.reduce((a, b) => a + b.price * b.quantity, 0),
    // });
  }, [formOrder.total_price]);

  useEffect(() => {
    setFormOrder({
      total_price: carts[0]?.price * carts[0]?.quantity,
    });
  }, [carts]);

  useEffect(() => {
    // console.log(urlRedirect);
  }, [urlRedirect]);

  // useEffect(() => {
  //   if (carts.length > 0)
  // }, [carts]);

  const fetchDataCart = async () => {
    await axios
      .get(`https://bluepath.my.id/carts`)
      .then((res) => {
        setCarts(res.data.data);
        // console.log(res.data.data);
        // setFormOrder({ total_price: carts[0]?.price * carts[0]?.quantity });
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleSubmit = () => {
    axios
      .post("https://bluepath.my.id/orders", formOrder)
      .then((response) => {
        // console.log(response);
        // setUrlRedirect(response.data.data.redirect_url);
        // alert("Success signup");
        window.open(response.data.data.redirect_url);
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };
  return (
    <Layout>
      <div className="relative h-full">
        <div>
          <h1 className="pt-14 text-3xl mb-5">SUMMARY</h1>
          {carts.map((cart) => (
            <div
              className="flex justify-between bg-[#F5F5F5] mx-3 p-2 h-full mb-4"
              key={cart.id}
            >
              <div className="flex gap-3">
                <div className="w-40">
                  <img
                    src={cart.product_image}
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
                      {cart.seller.user_name}
                    </p>
                    <p className="text-sm font-semibold">
                      {cart.product.product_name}
                    </p>
                  </div>
                  <div>
                    <p className="mr-1 font-bold mb-1  ">Rp. {cart.price}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="px-4">{cart.quantity}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between bg-[#F5F5F5] mx-3 p-4 mb-5">
            <p>Total:</p>
            <p className="font-bold">
              Rp. {carts[0]?.price * carts[0]?.quantity}
            </p>
          </div>
          <div className="text-left px-5">
            <p className="font-bold">Address:</p>
            <p className="bg-[#F5F5F5] p-3">{cookie.address}</p>
          </div>
        </div>
        <div className=" absolute bottom-0 w-full">
          <button
            className="btn rounded-none font-normal h-16 w-full text-xl"
            onClick={handleSubmit}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </Layout>
  );
};
