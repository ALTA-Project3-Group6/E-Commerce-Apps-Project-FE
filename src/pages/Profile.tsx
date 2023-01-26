import { Link } from "react-router-dom";
import { LayoutNavigation } from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { userType } from "../utils/types/e-commerce";
import { useNavigate } from "react-router-dom";
import { useCookies, Cookies, withCookies } from "react-cookie";
import { instanceOf } from "prop-types";

const Profile = () => {
  const [users, setUsers] = useState<userType>();
  const navigate = useNavigate();
  const [cookie, , removeCookie] = useCookies(["token", "id_user", "name"]);

  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  useEffect(() => {
    fetchDataUser();
  }, [cookie.id_user]);

  function fetchDataUser() {
    axios
      .get("https://bluepath.my.id/users")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const handleDeleteUser = () => {
    axios
      .delete(`https://bluepath.my.id/users`)
      .then((res) => {
        alert("Account Deleted");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleLogout = () => {
    alert("Log Out");
    removeCookie("token", { path: "/" });
    removeCookie("id_user", { path: "/" });
    removeCookie("name", { path: "/" });
    removeCookie("token", { path: "/profile" });
    removeCookie("id_user", { path: "/profile" });
    removeCookie("name", { path: "/profile" });
    // window.location.reload();
    navigate("/login");
  };

  return (
    <LayoutNavigation>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1
            className="pt-11 text-3xl  font-bold bg-[#CD0404] mx-[-0.75rem] h-48 text-[#FFFFFF] "
            style={{ fontFamily: "Lato" }}
          >
            PROFILE
          </h1>
          {users?.profile_photo == "" ? (
            <img
              className=" mx-auto  w-20 rounded-full relative top-[-2.5rem] mb-[-2rem]"
              src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
              alt=""
            />
          ) : (
            <img
              className=" mx-auto h-32 w-32 rounded-full relative top-[-4rem] mb-[-3rem]"
              src={users?.profile_photo}
              alt=""
            />
          )}
          <div className="text-center mb-3 ">
            <p className="font-bold mb-1">{users?.name}</p>
            <p className=" mb-1">{users?.address}</p>
            <p className=" mb-1">{users?.phone_number}</p>
          </div>
          <div className="flex justify-around">
            <Link to={`/edit-profile/${users?.id}`}>
              <button className="btn rounded-none border-none w-40 font-normal mt-5  ">
                Edit Profile
              </button>
            </Link>
            <button
              className="btn  border-none rounded-none w-40 font-normal mt-5"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
          <div className="flex justify-around">
            <button
              className="btn rounded-none bg-[#CD0404] text-white border-none w-40 font-normal mx-auto mt-5 "
              onClick={handleDeleteUser}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Link to={"/add-product"}>
          <button className="btn rounded-none border-none font-normal h-16 w-full  mb-1 text-xl">
            ADD PRODUCT
          </button>
        </Link>
        <Link to={"/transaction-buy"}>
          <button className="btn rounded-none font-normal h-16 w-full text-xl">
            TRANSACTION
          </button>
        </Link>
      </div>
    </LayoutNavigation>
  );
};

export default withCookies(Profile);
