import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ThreeImage.scss";
import Glasses1 from "../assets/carousel1.jpeg";
import Glasses2 from "../assets/carousel2.jpeg";
import Glasses3 from "../assets/carousel3.jpeg";
import Glasses4 from "../assets/carousel4.jpeg";
import Glasses5 from "../assets/carousel5.jpeg";
import Glasses6 from "../assets/carousel6.jpeg";
import Glasses7 from "../assets/carousel7.jpeg";
import Glasses8 from "../assets/carousel8.jpeg";

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
            className="carousel-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ThreeImage;
