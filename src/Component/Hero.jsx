import React from "react";
import heroimg from "/main.svg";
import herotext from "/herotext.svg";
import background from "/heromain.svg";

const Hero = () => {
  return (
    <div
      className="pt-[60px] grid grid-cols-1 md:grid-cols-2 gap-5"
      style={{ backgroundImage: `url(${background})` }}
    >
      <main className="main">
        <div className="flex flex-col md:flex-row-reverse items-center justify-start h-screen mx-5 md:mx-10">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Every order
              <br />
              fulfilled,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                on time.
              </span>
            </h1>
            <p className="text-xs md:text-sm mb-8 text-white">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <div className="flex items-center space-x-4">
              <div className="group flex flex-col md:flex-row items-center">
                <div>
                  <button className="text-white font-bold py-2 px-4 rounded-full border-2 border-red-400 hover:bg-gradient-to-r from-red-400 to-pink-600 transition-all ease-in-out duration-300">
                    Get started with Crest
                  </button>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
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
      <div className="flex justify-center items-center">
        <img
          className="w-[80%] md:w-[94%] mt-4 md:mt-9 ml-4 md:ml-9"
          src={heroimg}
        />
      </div>
    </div>
  );
};

export default Hero;
