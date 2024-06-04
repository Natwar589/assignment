import React, { useState } from "react";
import "./moving.css"; // Import CSS module for styling

// Import all images

import ajantashoes from "/moving/ajantashoes.svg";
import aroka from "/moving/aroka.svg";
import athlos from "/moving/athlos.svg";
import bluetribe from "/moving/bluetribe.svg";
import dilip from "/moving/dilip.svg";
import dilight from "/moving/dlight.svg";
import dripproject from "/moving/dripproject.svg";
import everbloom from "/moving/everbloom.svg";
import furlenso from "/moving/furlenso.svg";
import happilo from "/moving/happilo.svg";
import manisha from "/moving/manisha.svg";
import manohar from "/moving/manohar.svg";
import plix from "/moving/plix.svg";
import rrkabel from "/moving/rrkabel.svg";
import somosaparty from "/moving/somosaparty.svg";
import sylvi from "/moving/sylvi.svg";
import tahliya from "/moving/tahliya.svg";
import thebarkerdozen from "/moving/therbarkerdozen.svg";
import truth from "/moving/truth.svg";
import uncover from "/moving/uncover.svg";
import whitewillow from "/moving/whitewillow.svg";
import zavya from "/moving/zavya.svg";

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
