import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import { MdEmail, MdLock } from "react-icons/md";
import { useCookies } from "react-cookie";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (event: any) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "id_user",
    "name",
  ]);

  useEffect(() => {
    if (formLogin.email === "" || formLogin.password === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    console.log(formLogin);
  }, [formLogin]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .postForm("https://bluepath.my.id/login", formLogin)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        setCookie("token", response.data.data.token);
        setCookie("id_user", response.data.data.id);
        setCookie("name", response.data.data.name);
        console.log(response.data, "aaa");
        console.log(formLogin);

        alert("Success Login");
        navigate("/");
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
          className="font-black text-4xl tracking-widest mb-28"
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
              value={formLogin.email}
            ></input>
          </div>
          <div className="flex gap-7 items-center">
            <MdLock className="w-9 h-9" />
            <input
              type="password"
              name="password"
              className="w-full bg-[#F5F5F5] p-4"
              placeholder="Password"
              onChange={handleChange}
              value={formLogin.password}
            ></input>
          </div>
          <button className="btn rounded-none w-44 font-normal mt-28 mb-24">
            Sign in
          </button>
        </form>
        <p>Don’t have an account?</p>
        <button className="font-bold">Sign up</button>
        <p>using your email address</p>
      </div>
    </LayoutPlain>
  );
};
