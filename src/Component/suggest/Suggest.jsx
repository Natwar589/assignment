import React, { useState, useEffect } from "react";
import pitalsideimage from "/public/pitalsideimage.webp";
import ptal from "/ptal.svg";
import samosabucket from "/samosabucket.webp";
import samosaparty from "/moving/somosaparty.svg";
import hr from "/user/hr.webp";
import founder from "/user/founder.jpeg";
import "./Suggest.css";
import rightSlider from "/rightslider.svg";
function Suggest() {
  const [isTrue, setIsTrue] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTrue(!isTrue);
      setIsTransitioning(false);
    }, 200); // Duration matches the CSS transition duration
  };

  useEffect(() => {
    if (isTransitioning) {
      // Additional logic during transition if needed
    }
  }, [isTransitioning]);

  return (
    <div className="grid grid-cols-[1.3fr,0.7fr] bg-white p-[40px] gap-[30px]">
      <div>
        <h2
          className={`text-[18px] mb-4 text-gray-600 transition-opacity duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {isTrue ? (
            <div>
              D2C brands face issues with supply chain management and high
              growth startups are not equipped to run their demand forecast
              manually. Crest automates all the workflows and helps brands
              predict high demand periods and be ready to cater to customer
              demands. It has a direct impact on the revenue readiness of a
              company and that's the value we see Crest unlocking for many
              companies in the future. Rahul and team have built a robust
              product with years of their experience distilled into the
              workflows.
            </div>
          ) : (
            <div>
              As Co-founders, we had zero clue on the real time stock levels in
              our warehouse. It felt like a battle to manually update invoices
              from EE to Zoho, so that at least some data points can be tracked.
              While we had already implemented Crest I had no clue that they
              could make this API integration work for us and exactly the way we
              wanted it to work. Thank you team Rahul Vishwakarma & Yogesh
              Byahatti for identifying the problem and being so quick with the
              solution, kudos to the amazing team you have.
            </div>
          )}
        </h2>
        <div
          className={`flex justify-between items-center py-[40px] transition-opacity duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex items-center">
            {isTrue ? (
              <img
                src={hr}
                alt="Diksha Pande"
                className="rounded-full w-12 h-12 mr-4 object-cover object-[7%,93%] transition-transform duration-500 ease-in-out"
              />
            ) : (
              <img
                src={founder}
                alt="Kirit Goyel"
                className="rounded-full w-12 h-12 mr-4 object-cover object-[7%,93%] transition-transform duration-500 ease-in-out"
              />
            )}
            <div>
              <h3 className="font-bold transition-opacity duration-500 ease-in-out">
                {isTrue ? "Diksha Pande" : "Kirit Goyel"}
              </h3>
              <p className="text-gray-500 transition-opacity duration-500 ease-in-out">
                {isTrue ? "Co-founder, Samosa Party" : "Co-founder, P-TAL"}
              </p>
            </div>
          </div>
          <div>
            {isTrue ? (
              <img
                src={samosaparty}
                width={150}
                height={200}
                alt="Samosa Party"
                className="transition-opacity duration-500 ease-in-out"
              />
            ) : (
              <img
                src={ptal}
                width={50}
                height={40}
                alt="P-TAL"
                className="transition-opacity duration-500 ease-in-out"
              />
            )}
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            className={`rotate-180 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleToggle}
          >
            <img src={rightSlider} />
          </button>
          <button
            className={`${isTransitioning ? "opacity-0" : "opacity-100"}`}
            onClick={handleToggle}
          >
            <img src={rightSlider} />
          </button>
        </div>
        <div>
          {isTrue ? (
            <div
              className={`flex justify-evenly items-center gap-[20px] pt-[120px] transition-opacity duration-500 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-purple-100 rounded-[25px] p-4 text-center w-1/4">
                <h3 className="text-[25px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  upto 95%
                </h3>
                <p className="text-gray-500">Demand Fulfilment</p>
              </div>
              <div className="bg-purple-100 rounded-[25px] p-4 text-center w-1/4">
                <h3 className="text-[25px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  <span> {"<"}</span> 3%
                </h3>
                <p className="text-gray-500">Daily Stock-out</p>
              </div>
              <button class=" read-button rounded-[30px] border-2  bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold inline-flex items-center justify-center w-1/4 p-4">
                <span className="text-lg">
                  Read story
                  <br />
                  <span className="text-3xl">→</span>
                </span>
              </button>
            </div>
          ) : (
            <div
              className={`flex justify-start items-center gap-[20px] pt-[120px] transition-opacity duration-500 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-purple-100 rounded-[25px] p-4 text-center w-1/3">
                <h3 className="text-[20px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Automated Invoice Reconciliation
                </h3>
              </div>
              <div className="bg-purple-100 rounded-[25px] p-4 text-center w-1/3">
                <h3 className="text-[20px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Channel wise Sales Classification
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`suggest max-w-[405px] transition-opacity duration-500 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {isTrue ? (
          <img
            src={samosabucket}
            alt="Samosa Party"
            className="rounded-lg border-2 border-gray-200 w-[405px] h-[582px] object-cover object-[85%,15%] transition-opacity duration-500 ease-in-out"
          />
        ) : (
          <img
            src={pitalsideimage}
            alt="P-TAL"
            className="rounded-lg border-2 border-gray-200 w-[405px] h-[582px] object-cover object-[85%,15%] transition-opacity duration-500 ease-in-out"
          />
        )}
      </div>
    </div>
  );
}

export default Suggest;
