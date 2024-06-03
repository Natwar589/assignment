import React, { useState } from "react";
import img1 from "/slider/img1.png";
import img2 from "/slider/img2.svg";
import img3 from "/slider/img3.svg";
import rightSlider from "/rightslider.svg";

const imageTextData = [
  {
    imgSrc: img1,
    text1: "Deep domain expertise",
    text2:
      "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
  },
  {
    imgSrc: img2,
    text1: "A Focus on KPIs that matters",
    text2:
      "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
  },
  {
    imgSrc: img3,
    text1: "Purpose built and ever-improving tech",
    text2:
      "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
  },
];

function GetCrest() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageTextData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageTextData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-[40px] w-full h-[800px] bg-gray-300">
      <h3 className="pt-[80px] text-[32px] font-bold text-center mb-[40px]">
        Get Crest and get...
      </h3>
      <div className="grid grid-cols-[0.2fr,1.6fr,0.2fr] items-center">
        <button
          onClick={handlePrevious}
          className="flex justify-end items-center"
        >
          <img
            className="rotate-180"
            width={50}
            src={rightSlider}
            alt="Previous"
          />
        </button>

        <div className="relative overflow-hidden w-[80%] h-[550px] mx-auto bg-white rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out pt-[70px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageTextData.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full grid grid-cols-2 items-center p-8"
              >
                <img
                  src={data.imgSrc}
                  alt={`Slide ${index}`}
                  className="object-cover mb-4"
                />
                <div className="p-4 flex flex-col justify-evenly">
                  <h1 className="text-xl font-bold mb-2">{data.text1}</h1>
                  <p className="text-gray-600">{data.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="">
          <img width={50} src={rightSlider} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default GetCrest;
