import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="flex justify-around py-5  shadow-inner ">
      <Link to={"/"}>
        <FaHome className="w-9 h-9 text-[#A0A0A0]" />
      </Link>
      <Link to={"/cart"}>
        <BsCart className="w-9 h-9 text-[#A0A0A0]" />
      </Link>
      <Link to={"/profile/:id_user"}>
        <FaUser className="w-9 h-9 text-[#A0A0A0]" />
      </Link>
    </div>
  );
};
