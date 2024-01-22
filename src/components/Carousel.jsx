import React from "react";
import "../styles/Carousel.scss";
import Glasses1 from "../assets/glasses1.png";
import Glasses2 from "../assets/glasses2.png";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="slide">
        <img src={Glasses1} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={Glasses2} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="image3.jpg" alt="Slide 3" />
      </div>
    </div>
  );
};

export default Carousel;
