import React, { useState } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-optic">
      <h2 className="carousel-optic-1">La Tienda</h2>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>

        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
