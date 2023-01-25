import { Link } from "react-router-dom";
import { LayoutNavigation } from "../components/Layout";

const Profile = () => {
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
          <img
            className=" mx-auto  w-20 rounded-full relative top-[-2.5rem] mb-[-2rem]"
            src="/src/assets/photo1.jpg"
            alt=""
          />
          <div className="text-center mb-3 ">
            <p className="font-bold mb-1">John Doe</p>
            <p className=" mb-1">USA</p>
            <p className=" mb-1">082189897676</p>
          </div>
          <div className="flex justify-around">
            <Link to={"/edit-profile/:id_user"}>
              <button className="btn rounded-none border-none w-40 font-normal mt-5  ">
                Edit Profile
              </button>
            </Link>
            <button className="btn  border-none rounded-none w-40 font-normal mt-5 ">
              Log Out
            </button>
          </div>
          <div className="flex justify-around">
            <button className="btn rounded-none bg-[#CD0404] text-white border-none w-40 font-normal mx-auto mt-5 ">
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
        <Link to={"/transaction-buy/:id_user"}>
          <button className="btn rounded-none font-normal h-16 w-full text-xl">
            TRANSACTION
          </button>
        </Link>
      </div>
    </LayoutNavigation>
  );
};

export default Profile;
