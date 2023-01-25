import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import { MdEmail, MdLock, MdPhone, MdLocationOn } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formSignup, setFormSignup] = useState({
    email: "",
    name: "",
    address: "",
    phone_number: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const [rePassword, setRePassword] = useState("");

  const handleChange = (event: any) => {
    setFormSignup({
      ...formSignup,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      formSignup.email === "" ||
      formSignup.name === "" ||
      formSignup.address === "" ||
      formSignup.phone_number === "" ||
      formSignup.password === ""
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    console.log(formSignup);
  }, [formSignup]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rePassword != formSignup.password) {
      alert("Password not match");
      return;
    }
    axios
      .post("https://bluepath.my.id/register", formSignup)
      .then((response) => {
        console.log(response);

        alert("Success signup");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutPlain>
      <div className="px-7 py-16">
        <ImArrowLeft2 className="mb-7 h-7 w-7 cursor-pointer" />
        <h1
          style={{ fontFamily: "Montserrat Alternates" }}
          className="font-black text-4xl tracking-widest mb-20"
        >
          YSHOP
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-7 items-center mb-6">
            <MdEmail className="w-9 h-9" />
            <input
              type="email"
              name="email"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Email"
              onChange={handleChange}
              value={formSignup.email}
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
              value={formSignup.name}
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
              value={formSignup.address}
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
              value={formSignup.phone_number}
            ></input>
          </div>
          <div className="flex gap-7 items-center mb-6">
            <MdLock className="w-9 h-9" />
            <input
              type="password"
              name="password"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Password"
              onChange={handleChange}
              value={formSignup.password}
            ></input>
          </div>
          <div className="flex gap-7 items-center">
            <MdLock className="w-9 h-9" />
            <input
              type="password"
              name="rePassword"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Confirm Password"
              onChange={(e) => setRePassword(e.target.value)}
              value={rePassword}
            ></input>
          </div>
          <button
            className="btn rounded-none w-44 font-normal mt-20"
            disabled={isDisable}
          >
            Sign up
          </button>
        </form>
      </div>
    </LayoutPlain>
  );
};
