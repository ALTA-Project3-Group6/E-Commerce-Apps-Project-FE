import { LayoutPlain } from "../components/Layout";
import { ImArrowLeft2 } from "react-icons/im";
import { MdEmail, MdLock } from "react-icons/md";
import { useCookies } from "react-cookie";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [submitClicked, setSubmitClicked] = useState(false);
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
    // if (submitClicked) {
    //   window.location.reload();
    // }
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .postForm("https://bluepath.my.id/login", formLogin)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        removeCookie("token", { path: "/" });
        removeCookie("id_user", { path: "/" });
        removeCookie("name", { path: "/" });
        setCookie("token", response.data.data.token, { path: "/" });
        setCookie("id_user", response.data.data.id, { path: "/" });
        setCookie("name", response.data.data.name, { path: "/" });
        console.log(response.data, "aaa");
        console.log(formLogin);

        alert("Success Login");
        // setSubmitClicked(true);
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutPlain>
      <div className="px-7 py-16">
        <Link to={"/"}>
          <ImArrowLeft2 className="mb-7 h-7 w-7 cursor-pointer" />
        </Link>
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
        <Link to={"/signup"}>
          <button className="font-bold">Sign up</button>
        </Link>
        <p>using your email address</p>
      </div>
    </LayoutPlain>
  );
};
