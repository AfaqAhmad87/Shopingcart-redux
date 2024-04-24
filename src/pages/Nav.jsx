import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import store from "../redux-toolkit/Store";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
function Nav() {
  const select = useSelector((state) => state.add.array);
  console.log(select);
  console.log(select.length);
  return (
    <nav className="flex flex-row justify-around items-center  text-3xl h-24 bg-white fixed w-[100vw]">
      <div className="font-[1000] tracking-widest text-cyan-600 ">
        {" "}
        <NavLink to={"/"}>Products</NavLink>
      </div>

      <div className="font-[1000]  text-cyan-700">
        <NavLink to={"/items"}>
          {" "}
          <ShoppingCartOutlined />
          <span className="relative bottom-4 text-sm">{select.length}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
