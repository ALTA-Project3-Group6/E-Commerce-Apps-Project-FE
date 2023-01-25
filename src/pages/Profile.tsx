import React from "react";
import { LayoutNavigation } from "../components/Layout";

const Profile = () => {
  return (
    <LayoutNavigation>
      <div className="relative h-full">
        <div className="px-3 font-medium">
          <h1 className="pt-5 text-3xl mb-9 font-medium">PROFILE</h1>
          <img
            className="pt-5 mx-auto  w-20 rounded-full "
            src="/src/assets/photo1.jpg"
            alt=""
          />
          <div className="text-center mb-3 mt-5">
            <p className="font-bold mb-1">John Doe</p>
            <p className=" mb-1">USA</p>
            <p className=" mb-1">082189897676</p>
          </div>
          <div className="flex justify-around">
            <button className="btn rounded-none border-none w-40 font-normal mt-5  ">
              Edit Profile
            </button>
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
        <div className="absolute bottom-0 w-full">
          <button className="btn rounded-none border-none font-normal h-16 w-full  mb-1 text-xl">
            ADD PRODUCT
          </button>
          <button className="btn rounded-none font-normal h-16 w-full text-xl">
            TRANSACTION
          </button>
        </div>
      </div>
    </LayoutNavigation>
  );
};

export default Profile;
