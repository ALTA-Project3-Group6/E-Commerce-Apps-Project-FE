import { Link } from "react-router-dom";
import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import {
  MdEmail,
  MdLock,
  MdPhone,
  MdLocationOn,
  MdPhoto,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { userType } from "../utils/types/e-commerce";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState<userType>();
  const fileInputRef: any = React.createRef();

  const [formUser, setFormUser] = useState({
    address: "",
    email: "",
    id: -0,
    name: "",
    phone_number: 0,
    profile_photo: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (users) {
      setFormUser({
        address: users.address,
        email: users.email,
        id: users.id,
        name: users.name,
        phone_number: users.phone_number,
        profile_photo: users.profile_photo,
        password: "",
      });
    }
  }, [users]);

  useEffect(() => {
    fetchDataProducts();
  }, []);

  function fetchDataProducts() {
    axios
      .get("https://bluepath.my.id/users")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        alert.toString();
      });
  }

  const handleChange = (event: any) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event: any) => {
    const file = fileInputRef.current.files[0];
    setFormUser({
      ...formUser,
      profile_photo: file,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: any = new FormData();
    formData.append("profile_photo", fileInputRef.current.files[0]);
    formData.append("name", formUser.name);
    formData.append("email", formUser.email);
    formData.append("address", formUser.address);
    formData.append("phone_number", formUser.phone_number);
    if (formUser.password != "") {
      formData.append("password", formUser.password);
    }
    axios
      .put(`https://bluepath.my.id/users`, formData)
      .then((response) => {
        // console.log(response);

        alert("Success change Profile");
        navigate(`/profile/${users?.id}`);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutPlain>
      <div className="px-7 py-16">
        <Link to={`/profile/${users?.id}`}>
          <ImArrowLeft2 className="mb-7 h-7 w-7 cursor-pointer" />
        </Link>
        <h4
          style={{ fontFamily: "Lato" }}
          className="font-black text-4xl tracking-widest mb-20"
        >
          EDIT PROFILE
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-7 items-center mb-6">
            <MdEmail className="w-9 h-9" />
            <input
              type="email"
              name="email"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Email"
              onChange={handleChange}
              value={formUser.email}
            ></input>
          </div>
          <div className="flex gap-7 items-center mb-6">
            <FaUserAlt className="w-9 h-9" />
            <input
              type="text"
              name="name"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Name"
              onChange={handleChange}
              value={formUser.name}
            ></input>
          </div>
          <div className="flex gap-7 items-center mb-6">
            <MdLocationOn className="w-9 h-9" />
            <input
              type="text"
              name="address"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Address"
              onChange={handleChange}
              value={formUser.address}
            ></input>
          </div>
          <div className="flex gap-7 items-center mb-6">
            <MdPhone className="w-9 h-9" />
            <input
              type="number"
              name="phone_number"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formUser.phone_number}
            ></input>
          </div>
          <div className="flex gap-7 items-center mb-20">
            <MdPhoto className="w-9 h-9" />
            <input
              type="file"
              className="file-input w-full max-w-xs"
              ref={fileInputRef}
              onChange={handleFileChange}
              defaultValue={formUser.profile_photo}
            />
          </div>
          <div className="flex gap-7 items-center mb-6">
            <MdLock className="w-9 h-9" />
            <input
              type="password"
              name="password"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Password"
              onChange={handleChange}
              value={formUser.password}
            ></input>
          </div>{" "}
          <div className="flex justify-around">
            <Link to={`/profile/${users?.id}`}>
              <button
                type="button"
                className="btn rounded-none border-none w-40 font-normal mt-20 "
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="btn bg-[#1F8A70] border-none rounded-none w-40 font-normal mt-20 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </LayoutPlain>
  );
};

export default Profile;
