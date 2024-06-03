import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import navbarlogo from "/navbarlogo.png";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#151218] mt-[100px] ">
      <div></div>
      <div className="App text-white grid grid-cols-[1.5fr,0.5fr,0.5fr,1.5fr] mx-auto gap-[30px] justify-center p-[80px]">
        <div className="flex flex-col gap-[100px]">
          <div className="logo flex flex-col gap-[20px]">
            <img className="w-[240px]" src={navbarlogo} />
            <p className="text-xs space-x-3">
              Crest is an AI-powered supply chain software that provides
              companies tools for demand forecasting, inventory planning and
              more. This helps them have the right amount of stock, optimise
              space and fulfil every order.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-xs flex gap-[30px]">
              <p>Copyright 2024 Crest</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>

            <div className="text-xs">
              <p>Conifer Innovations Private Limited</p>
              <p>CIN: U72900KA2022PTC163144</p>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <h2 className="mb-[20px]">Explore</h2>
          <ul className="flex flex-col gap-[20px] text-gray-400">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="mb-[20px]">Learn</h2>
          <ul className="flex flex-col gap-[20px] text-gray-400">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="flex flex-col gap-[20px] text-sm">
              <h2>Contact Crest</h2>
              <p className="text-gray-400">
                <a href="mailto:sales@getcrest.ai">sales@getcrest.ai</a>
              </p>
              <div>
                <h3>Registered Office:</h3>
                <address className="text-gray-400">
                  1507, Incubex, 11th cross road, 19th Main Road, Bengaluru,
                  India. 560102
                </address>
              </div>
              <div>
                <h3>Corporate Office:</h3>
                <address className="text-gray-400">
                  291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
                  Layout, Bengaluru, India. 560102
                </address>
              </div>
              <ul className="social-media">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
