import React from "react";
import Carousel from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.scss"; // Archivo SCSS para estilos adicionales si es necesario
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner.jpg";
import banner3 from "../assets/banner.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showArrows
      showThumbs={false}
    >
      <div>
        <img src={banner1} alt="Banner 1" />
      </div>
      <div>
        <img src={banner2} alt="Banner 2" />
      </div>
      <div>
        <img src={banner3} alt="Banner 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
