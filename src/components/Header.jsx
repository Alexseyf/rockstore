import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center justify-around py-2">
      <div className="flex flex-row items-center gap-4">
        <img className="w-12" src="./logo.png" alt="" />
        <h1 className="font-cinematografica-extrabold text-4xl">RockStore Records</h1>
      </div>
      <div>
        <input
          className="border-2 border-slate-400 hover:border-slate-900 border-solid rounded-md w-96 p-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <FiShoppingCart className="size-9 text-slate-500" />
        <div className=" w-6 h-6 bg-amber-300 rounded-full">
          <p className="text-center">2</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
