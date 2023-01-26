import { ImArrowLeft2 } from "react-icons/im";
import { DropDown } from "../components/DropDown";
import { Layout } from "../components/Layout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "../utils/types/e-commerce";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const DetailProduct = () => {
  const [product, setProduct] = useState<ProductType>();
  const { id_product } = useParams();
  const [stock, setStock] = useState(1);
  const [cookie, , removeCookie] = useCookies(["token", "id_user", "name"]);
  const [formCart, setCart] = useState({
    id_product: Number(id_product),
    quantity: 1,
  });
  // const coookieUser = cookie.id_user;

  useEffect(() => {
    fetchDataProduct();
    // console.log(formCart);
  }, [formCart]);

  const fetchDataProduct = async () => {
    await axios
      .get(`https://bluepath.my.id/products/${id_product}`)
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };
  const navigate = useNavigate();

  const onClickDetail = (index: number) => {
    navigate(`/edit-product/${index}`);
  };

  const handleAddCart = (event: React.FormEvent<HTMLFormElement>) => {
    // const data = { id_product: product?.id, quantity: stock };
    event.preventDefault();
    axios
      .post(`https://bluepath.my.id/carts`, formCart)
      .then((res) => {
        alert(res.data.message);
        // console.log(res);

        // navigate("/cart");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };
  const handleChange = (event: any) => {
    setCart({
      ...formCart,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (rePassword != formSignup.password) {
  //     alert("Password not match");
  //     return;
  //   }
  //   axios
  //     .post("https://bluepath.my.id/register", formSignup)
  //     .then((response) => {
  //       console.log(response);

  //       alert("Success signup");
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       alert(err.toString());
  //     });
  // };

  return (
    <Layout>
      <div className="relative h-full">
        <div className="relative">
          <img src={product?.product_image} alt="" className="w-full" />
          <Link to={"/"}>
            <ImArrowLeft2 className="absolute top-3 left-3 w-7 h-7 shadow-2xl cursor-pointer" />
          </Link>
          <div className="absolute top-3 right-2">
            {/* <DropDown editDetail={product?.id} /> */}
            {cookie.id_user == product?.user.user_id && (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="cursor-pointer">
                  <BsThreeDots className="w-7 h-7 shadow-2xl" />
                </label>

                {product?.id && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        onClick={() => {
                          onClickDetail(product.id);
                        }}
                      >
                        Edit Product
                      </a>
                    </li>
                    <li>
                      <a>Delete Product</a>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="text-left p-5 border-b-1 border">
          <p className="text-[#6F7F8A] " style={{ fontFamily: "Lato" }}>
            {product?.user.user_name}
          </p>
          <p className="text-2xl">{product?.name}</p>
          <div className="flex justify-between mt-3">
            <p className="text-sm">stock: {product?.stock}</p>
            <p className="font-bold text-xl">Rp. {product?.price}</p>
          </div>
        </div>
        <p className="text-left p-5">{product?.description}</p>
        <form onSubmit={handleAddCart}>
          <div className="flex  sticky  bottom-0 h-16">
            <input
              type="number"
              name="quantity"
              defaultValue={formCart.quantity}
              onChange={handleChange}
              className="bg-[#F5F5F5] w-[15%] text-3xl font-bold px-4 text-center text-[#67686E] h-full"
            />
            <button
              type="submit"
              className="btn rounded-none w-[85%] font-normal h-full text-xl"
            >
              ADD TO CART
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
