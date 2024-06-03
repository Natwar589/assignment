import React from "react";
import heroimg from "../../public/main.svg";
import herotext from "../../public/herotext.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <main className="main">
        <div className="flex items-center justify-start h-screen mx-5">
          <div className="">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Every order
              <br />
              fulfilled,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                on time.
              </span>
            </h1>
            <p className="text-sm mb-8 text-white">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <div className="flex items-center space-x-4">
              {" "}
              {/* Using space-x-4 to add space between button and image */}
              <div className="group flex">
                {" "}
                {/* Using group to enable group-hover */}
                <div>
                  <button className="text-white font-bold py-2 px-4 rounded-full border-2 border-red-400 hover:bg-gradient-to-r from-red-400 to-pink-600 transition-all ease-in-out duration-300">
                    Get started with Crest
                  </button>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Adjust spacing if needed */}
                  <img
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-90"
                    src={herotext}
                    alt="Hero text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <img className="w-[94%] mt-9 ml-9 " src={heroimg} />
    </div>
  );
};

export default Hero;
