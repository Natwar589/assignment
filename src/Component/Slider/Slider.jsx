import React, { useState } from "react";
import rightSlider from "/rightslider.svg";
import img1 from "/slider2/img1.jpeg";
import img2 from "/slider2/img2.webp";
import img3 from "/slider2/img3.webp";
import img4 from "/slider2/img4.png";
import img5 from "/slider2/img5.png";
import img6 from "/slider2/img6.jpeg";
import img7 from "/slider2/img7.png";
import img8 from "/slider2/img8.png";
import img9 from "/slider2/img9.webp";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const cardsData = [
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img1,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img2,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img3,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img4,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img5,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img6,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img7,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img8,
    },
    {
      title: "Importance of RPA(Robotic Process Automation) in supply chain",
      date: "15 October 2023",
      imageUrl: img9,
    },
  ];

  return (
    <div className="grid grid-cols-[0.5fr,1.5fr] mt-[150px] ml-[150px] ">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">Delivered: The Crest blog</h1>
          <p className="text-lg mb-6">
            Insights from years of working in various supply-chain roles (and an
            itch to write). We hope you find these posts interesting!
          </p>
          <div className="flex space-x-4">
            <button onClick={handlePrevious}>
              <img
                width={40}
                className="rotate-180"
                src={rightSlider}
                alt="Previous"
              />
            </button>
            <button onClick={handleNext}>
              <img width={40} src={rightSlider} alt="Next" />
            </button>
          </div>
        </div>
        <div className="text-center">
          <button className="font-bold py-2 px-4 rounded-full border-2 border-red-400 hover:bg-gradient-to-r from-red-400 to-pink-600 transition-all ease-in-out duration-300">
            <span className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white">
              View all blogs
            </span>
          </button>
        </div>
      </div>
      <div className="cards-container overflow-hidden relative w-full h-full">
        <div
          className="cards flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${cardsData.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / cardsData.length)
            }%)`,
          }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col card w-[440px] mx-auto p-4 bg-gray-200 rounded-[25px]"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="rounded-lg mb-4 p-8"
              />
              <h1 className="text-lg font-semibold mb-4">{card.title}</h1>
              <div className="flex items-end justify-between w-full h-auto">
                <h1 className="text-sm text-gray-600">{card.date}</h1>
                <div className="text-[30px] text-gray-600">↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
