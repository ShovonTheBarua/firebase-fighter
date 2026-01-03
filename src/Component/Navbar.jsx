import React from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import logo from "../assets/icons8-firebase-48.png";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      {/* <div className="flex items-center justify-between"> */}
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"} className="">
              Home
            </MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"} className="">
              About us
            </MyLink>
          </li>
          <li>
            <MyLink to={"/profile"} className="">
              Profile
            </MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
