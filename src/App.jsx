import React from "react";
import Navbar from "./Component/Navbar";

import Hero from "./Component/Hero";
import KeyProblem from "./Component/KeyProblem";
import Moving from "./Component/moving/moving";
import Suggest from "./Component/suggest/Suggest";
import Spreadsheet from "./Component/spreadsheet/Spreadsheet";
import GetCrest from "./Component/getCreast/GetCrest";
import Slider from "./Component/Slider/Slider";
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <div className="w-full min-h-screen relative  bg-cover">
      <Navbar />
      <Hero />

      <div className="bg-white">
        <KeyProblem />
        <Moving />
        <Suggest />
        <Spreadsheet />
        <GetCrest />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
