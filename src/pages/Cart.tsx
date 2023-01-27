import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { cartType } from "../utils/types/e-commerce";
import { useCookies } from "react-cookie";

export const Cart = () => {
  const [carts, setCarts] = useState<cartType[]>([]);
  const [refrash, setRefrash] = useState(false);

  useEffect(() => {
    fetchDataCart();
  }, [refrash]);

  const fetchDataCart = async () => {
    await axios
      .get(`https://bluepath.my.id/carts`)
      .then((res) => {
        setCarts(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleClearCart = () => {
    axios
      .delete(`https://bluepath.my.id/carts`)
      .then((res) => {
        alert(res.data.message);
        setRefrash(!refrash);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleIncCart = (id: number, quantity: number) => {
    let newQuantity = quantity;
    newQuantity++;
    axios
      .put(`https://bluepath.my.id/carts/${id}`, { quantity: newQuantity })
      .then((res) => {
        setRefrash(!refrash);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleDecCart = (id: number, quantity: number) => {
    let newQuantity = quantity;
    newQuantity--;
    axios
      .put(`https://bluepath.my.id/carts/${id}`, { quantity: newQuantity })
      .then((res) => {
        setRefrash(!refrash);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <Layout>
      <div className="relative h-full">
        <div>
          <h1 className="pt-14 text-3xl mb-5">MY CART</h1>
          {carts.length == 0 ? (
            <a href="">Empty</a>
          ) : (
            carts.map((cart) => (
              <div
                className="flex justify-between bg-[#F5F5F5] mx-3 p-2 h-full mb-4"
                key={cart.id}
              >
                <div className="flex gap-3">
                  <div className="w-40">
                    {cart.product_image === "" ? (
                      <img
                        src="https://www.planetsports.asia/media/catalog/product/cache/1384ea813c36abc3a773dd6494b9b881/0/3/03-CONVERSE-FFSSBCON0-CON568498C-White.jpg"
                        alt=""
                        className="aspect-square"
                      />
                    ) : (
                      <img
                        src={cart.product_image}
                        alt=""
                        className="aspect-square"
                      />
                    )}
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
                <div className="flex flex-col justify-center items-center">
                  <button
                    className="text-3xl w-12 bg-white rounded-xl border-4"
                    onClick={() => handleIncCart(cart.id, cart.quantity)}
                  >
                    +
                  </button>
                  <p>{cart.quantity}</p>
                  <button
                    className="text-3xl w-12 bg-white rounded-xl border-4"
                    onClick={() => handleDecCart(cart.id, cart.quantity)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
          {carts.length == 0 ? (
            <a></a>
          ) : (
            <div className="flex justify-between bg-[#F5F5F5] mx-3 p-4 mb-5 mt-20">
              <p>Total:</p>
              <p className="font-bold">
                Rp. {carts[0]?.price * carts[0]?.quantity}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <button
          className="btn rounded-none border-none font-normal h-16 w-full bg-[#CD0404] mb-1 text-xl"
          onClick={handleClearCart}
        >
          CLEAR CART
        </button>
        <Link to={"/summary"}>
          <button
            className="btn rounded-none font-normal h-16 w-full text-xl"
            onClick={(e) => (carts.length === 0 ? e.preventDefault() : null)}
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </Layout>
  );
};
