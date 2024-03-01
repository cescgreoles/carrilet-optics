import React from "react";
import "../styles/LaOptica.scss";
import QuienSomos from "../components/QuienSomos-1";
import NavigationInformation from "../components/NavigationInformation";
import ImageGallery from "../components/ImageGallery";
import NavigationBar from "../components/NavigationBar";
import Carousel from "../components/Carousel";
import carousel1 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carousel2.jpeg";
import carousel3 from "../assets/carousel3.jpeg";
import carousel4 from "../assets/carousel4.jpeg";
import carousel5 from "../assets/carousel5.jpeg";
import carousel6 from "../assets/carousel6.jpeg";
import carousel7 from "../assets/carousel7.jpeg";
import carousel8 from "../assets/carousel8.jpeg";

const LaOptica = () => {
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
  ];
  return (
    <div className="laOptica">
      <NavigationInformation />
      <NavigationBar />
      <QuienSomos />
      <Carousel images={images} />
      <ImageGallery />
    </div>
  );
};

export default LaOptica;
