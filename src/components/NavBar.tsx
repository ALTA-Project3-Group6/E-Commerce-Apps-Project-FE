import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { useCookies } from "react-cookie";

export const NavBar = () => {
  const [cookie, , removeCookie] = useCookies(["token", "id_user", "name"]);
  const checkToken = cookie.token;
  return (
    <div className="flex justify-around py-5  shadow-inner ">
      <Link to={"/"}>
        <FaHome className="w-9 h-9 text-[#A0A0A0]" />
      </Link>
      <Link to={"/cart"}>
        <BsCart className="w-9 h-9 text-[#A0A0A0]" />
      </Link>
      {cookie.token ? (
        <Link to={"/profile/me"}>
          <FaUser className="w-9 h-9 text-[#A0A0A0]" />
        </Link>
      ) : (
        <Link to={"/login"}>
          <FaUser className="w-9 h-9 text-[#A0A0A0]" />
        </Link>
      )}
    </div>
  );
};
