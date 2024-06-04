import React, { useState, useEffect } from "react";
import main from "/navbarlogo.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
    setAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header flex justify-between items-center w-full h-[80px] fixed top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-transparent" : "bg-black bg-opacity-60 shadow-md"}`}
    >
      <div className="logo flex items-center pl-4 sm:pl-[50px]">
        <img
          src={main}
          alt="Logo"
          className="w-auto h-[40px] sm:w-[auto] sm:h-[20px] lg:w-[auto] lg:h-[40px]"
        />
      </div>
      <nav className="nav hidden sm:flex justify-between items-center">
        <ul className="flex justify-between items-center gap-4 font-semibold text-[16px] ">
          <li className="mr-4">
            <a href="#" className="text-white hover:text-orange-400">
              Product
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-orange-400">
              Pricing
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-orange-400">
              Industry
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-orange-400">
              Customer Stories
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-white hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="actions hidden sm:flex justify-center items-center gap-[40px] pr-[16px]">
        <button className="button text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition duration-300 ease-in-out py-[6px] px-[25px] rounded-full hover:border-2 border-red-400 border-dotted">
          Login
        </button>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:text-gray-700">
          Talk to Us
        </button>
      </div>
      <div className="sm:hidden pr-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden absolute top-[80px] left-0 right-0 bg-black bg-opacity-60 p-4">
          <ul className="flex flex-col items-center gap-4 font-semibold text-[16px] ">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-orange-400">
                Product
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-orange-400">
                Pricing
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-orange-400">
                Industry
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-orange-400">
                Customer Stories
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-orange-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-orange-400">
                Blog
              </a>
            </li>
            <li className="mr-4">
              <button className="button text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition duration-300 ease-in-out py-[6px] px-[25px] rounded-full hover:border-2 border-red-400 border-dotted">
                Login
              </button>
            </li>
            <li className="mr-4">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:text-gray-700">
                Talk to Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
