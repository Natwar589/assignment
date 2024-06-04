import React, { useState, useEffect } from "react";
import forecasting from "/sheet/forecasting.webp";
import automation from "/sheet/automation.webp";
import dashboard from "/sheet/dashboard.webp";
import distribution from "/sheet/distribution.webp";
import integration from "/sheet/integration.webp";
import planning from "/sheet/planning.png";
import purchase from "/sheet/purchase.webp";
import "./Spreadsheet.css";
function Spreadsheet() {
  const [state, setState] = useState("forecasting");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 160); // Duration of the transition
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const handleStateChange = (newState) => {
    setTransitioning(true);
    setTimeout(() => setState(newState), 50); // Delay to allow for the fade-out effect
  };

  return (
    <div>
      <div className="text-center my-[120px]">
        <h1 className="text-5xl font-bold text-black mb-4">
          Things your spreadsheet wishes it could do
        </h1>
      </div>
      <div className="grid grid-cols-2 ml-[20px]">
        <div className="sheet flex flex-col justify-center items-start mx-[50px]">
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("forecasting")}
          >
            <h2
              className={
                state === "forecasting"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Accurate Demand Forecasting
            </h2>
            {state === "forecasting" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("automation")}
          >
            <h2
              className={
                state === "automation"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              HELIX: Workflow Automation
            </h2>
            {state === "automation" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("purchase")}
          >
            <h2
              className={
                state === "purchase"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Automated Purchase Planning
            </h2>
            {state === "purchase" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("distribution")}
          >
            <h2
              className={
                state === "distribution"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Automated Distribution Planning
            </h2>
            {state === "distribution" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("integration")}
          >
            <h2
              className={
                state === "integration"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Easy Integration
            </h2>
            {state === "integration" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("dashboard")}
          >
            <h2
              className={
                state === "dashboard"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Custom Dashboards
            </h2>
            {state === "dashboard" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
          <div
            className="cursor-pointer"
            onClick={() => handleStateChange("planning")}
          >
            <h2
              className={
                state === "planning"
                  ? "text-[25px] font-semibold mb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  : "text-[25px] font-semibold"
              }
            >
              Consensus Planning
            </h2>
            {state === "planning" ? (
              <div>
                <p className="text-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  accumsan, metus ultrices eleifend gravida, nulla nunc varius
                  lectus, nec rutrum justo nibh eu lectus. Ut vulputate.
                </p>
                <button className="mt-[20px] text-[20px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Learn More →
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <hr className="w-full h-[1.5px] my-[20px] bg-gray-300" />
        </div>
        <div className="flex justify-center items-center rounded-[25px] bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen py-12 px-4">
          {state === "forecasting" && (
            <img
              src={forecasting}
              alt="Forecasting"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "automation" && (
            <img
              src={automation}
              alt="Automation"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "purchase" && (
            <img
              src={purchase}
              alt="Purchase"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "distribution" && (
            <img
              src={distribution}
              alt="Distribution"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "integration" && (
            <img
              src={integration}
              alt="Integration"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "dashboard" && (
            <img
              src={dashboard}
              alt="Dashboard"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {state === "planning" && (
            <img
              src={planning}
              alt="Planning"
              className={`rounded-lg shadow-md transition-opacity duration-500 ease-in-out ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </div>
      </div>
      <div className="mt-[80px] text-center flex items-center justify-center">
        <button className="font-bold py-2 px-4 rounded-full border-2 border-red-400 hover:bg-gradient-to-r from-red-400 to-pink-600 transition-all ease-in-out duration-300">
          <span className="font-semibold text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white ">
            View all features
          </span>
        </button>
      </div>
    </div>
  );
}

export default Spreadsheet;
