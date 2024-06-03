import React from "react";
import Navbar from "./Component/Navbar";
import background from "../public/heromain.svg";
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
    <div className=" w-svw h-svh ">
      <div
        className="w-full h-full bg-cover "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <Hero />
      </div>

      <KeyProblem />
      <Moving />
      <Suggest />
      <Spreadsheet />
      <GetCrest />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
