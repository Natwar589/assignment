import React from "react";

import main from "/navbarlogo.png";
const Navbar = () => {
  return (
    <header className="header flex justify-between items-center pt-5 mx-5 ">
      <div className="logo flex items-center">
        <img src={main} width={120} height={120} />
      </div>
      <nav className="nav flex justify-between items-center">
        <ul className="flex justify-between items-center gap-4">
          <li className="mr-4">
            <a href="#" className=" text-white hover:text-orange-400">
              Product
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" text-white hover:text-orange-400">
              Pricing
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" text-white hover:text-orange-400">
              Industry
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" text-white hover:text-orange-400">
              Customer Stories
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" text-white hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className=" text-white hover:text-orange-400">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="actions flex justify-between items-center gap-4">
        <button className="button  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Login
        </button>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full ml-2 transition ease-in-out duration-300  border-transparent hover:text-orange-400 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
          Talk to Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
