import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ThreeImage.scss";
import Glasses1 from "../assets/carousel1.webp";
import Glasses2 from "../assets/carousel2.webp";
import Glasses3 from "../assets/carousel3.webp";
import Glasses4 from "../assets/carousel4.webp";
import Glasses5 from "../assets/carousel5.webp";
import Glasses6 from "../assets/carousel6.webp";
import Glasses7 from "../assets/carousel7.webp";
import Glasses8 from "../assets/carousel8.webp";

const ThreeImage = () => {
  const imageNames = [
    Glasses1,
    Glasses2,
    Glasses3,
    Glasses4,
    Glasses5,
    Glasses6,
    Glasses7,
    Glasses8,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 imágenes a la vez
    slidesToScroll: 1, // Pasar una imagen a la vez
    autoplay: true, // Activar el autoplay
    autoplaySpeed: 2500, // Intervalo de tiempo entre transiciones (2 segundos)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {imageNames.map((imageName, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={imageName}
            alt={`Imagen ${index + 1}`}
            className="imagen-1"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ThreeImage;
