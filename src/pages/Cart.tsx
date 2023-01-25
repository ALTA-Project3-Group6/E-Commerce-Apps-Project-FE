import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export const Cart = () => {
  return (
    <Layout>
      <div className="relative h-full">
        <div>
          <h1 className="pt-14 text-3xl mb-5">MY CART</h1>
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
            <div className="flex flex-col justify-center items-center">
              <button className="text-3xl w-12 bg-white rounded-xl border-4">
                +
              </button>
              <p>2</p>
              <button className="text-3xl w-12 bg-white rounded-xl border-4">
                -
              </button>
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
            <div className="flex flex-col justify-center items-center">
              <button className="text-3xl w-12 bg-white rounded-xl border-4">
                +
              </button>
              <p>1</p>
              <button className="text-3xl w-12 bg-white rounded-xl border-4">
                -
              </button>
            </div>
          </div>
          <div className="flex justify-between bg-[#F5F5F5] mx-3 p-4 mb-5 mt-20">
            <p>Total:</p>
            <p className="font-bold">Rp. 150.000</p>
          </div>
          <div className="absolute bottom-0 w-full">
            <button className="btn rounded-none border-none font-normal h-16 w-full bg-[#CD0404] mb-1 text-xl">
              CLEAR CART
            </button>
            <Link to={"/summary"}>
              <button className="btn rounded-none font-normal h-16 w-full text-xl">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
