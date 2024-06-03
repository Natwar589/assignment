import React from "react";
import home from "../../public/keyhome.svg";
import stock from "../../public/stock.svg";
import cart from "../../public/cart.svg";
import checklist from "../../public/checklist.svg";
const KeyProblem = () => (
  <div className="pt-[10px] mx-[30px] mt-[120px]">
    <h1 className="text-[40px] font-bold mb-8 text-center">
      Four key questions answered by Crest
    </h1>
    <div className="grid grid-cols-4">
      <div className="bg-gray-200 shadow-md rounded-[30px] px-7 py-9 m-4 h-[320px] ">
        <img src={checklist} width={40} className="mb-5" />
        <h2 className="text-[22px] font-semibold mb-2">What to order</h2>
        <p className="text-black">
          Get accurate demand and days to stock out. Automate purchase planning
          so you can always have what you need for your next sales cycle.
        </p>
      </div>

      <div className="bg-gray-200 shadow-md rounded-[30px] px-7 py-9 m-4 ">
        <img src={cart} width={40} className="mb-5" />
        <h2 className="text-[22px] font-semibold mb-2">When to order</h2>
        <p className="text-black">
          Have up-to-date inventory, storage, sales velocity, and demand. Get
          timely order suggestions so you’re never left guessing.
        </p>
      </div>

      <div className="bg-gray-200 shadow-md rounded-[30px] px-7 py-9 m-4 ">
        <img src={stock} width={40} className="mb-5" />
        <h2 className="text-[22px] font-semibold mb-2">How much to stock</h2>
        <p className="text-black">
          Get inventory requirements for every node, for every SKU. So you avoid
          out-of-stock situations, even during demand spikes.
        </p>
      </div>

      <div className="bg-gray-200 shadow-md rounded-[30px] px-7 py-9 m-4 ">
        <img src={home} width={40} className="mb-5" />
        <h2 className="text-[22px] font-semibold mb-2">Where to place</h2>
        <p className="text-black">
          Our tool suggests how to move stock within your supply chain. So
          you’ll always have products available across cities.
        </p>
      </div>
    </div>
  </div>
);

export default KeyProblem;
