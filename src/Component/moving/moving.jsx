import React, { useState } from "react";
import "./moving.css"; // Import CSS module for styling

// Import all images

import ajantashoes from "../../../public/moving/ajantashoes.svg";
import aroka from "../../../public/moving/aroka.svg";
import athlos from "../../../public/moving/athlos.svg";
import bluetribe from "../../../public/moving/bluetribe.svg";
import dilip from "../../../public/moving/dilip.svg";
import dilight from "../../../public/moving/dlight.svg";
import dripproject from "../../../public/moving/dripproject.svg";
import everbloom from "../../../public/moving/everbloom.svg";
import furlenso from "../../../public/moving/furlenso.svg";
import happilo from "../../../public/moving/happilo.svg";
import manisha from "../../../public/moving/manisha.svg";
import manohar from "../../../public/moving/manohar.svg";
import plix from "../../../public/moving/plix.svg";
import rrkabel from "../../../public/moving/rrkabel.svg";
import somosaparty from "../../../public/moving/somosaparty.svg";
import sylvi from "../../../public/moving/sylvi.svg";
import tahliya from "../../../public/moving/tahliya.svg";
import thebarkerdozen from "../../../public/moving/therbarkerdozen.svg";
import truth from "../../../public/moving/truth.svg";
import uncover from "../../../public/moving/uncover.svg";
import whitewillow from "../../../public/moving/whitewillow.svg";
import zavya from "../../../public/moving/zavya.svg";

const Moving = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    ajantashoes,
    aroka,
    athlos,
    bluetribe,
    dilip,
    dilight,
    dripproject,
    everbloom,
    furlenso,
    happilo,
    manisha,
    manohar,
    plix,
    rrkabel,
    somosaparty,
    sylvi,
    tahliya,
    thebarkerdozen,
    truth,
    uncover,
    whitewillow,
    zavya,
  ];

  return (
    <div
      className={`container ${isPaused ? "paused" : ""} `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="image"
          alt={`Moving Image ${index}`}
        />
      ))}
    </div>
  );
};

export default Moving;
