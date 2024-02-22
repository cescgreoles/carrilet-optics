import React from "react";
import QuienSomos from "../components/QuienSomos-1";
import NavigationInformation from "../components/NavigationInformation";
import ImageGallery from "../components/ImageGallery";
import NavigationBar from "../components/NavigationBar";

const LaOptica = () => {
  return (
    <div>
      <NavigationInformation />
      <NavigationBar />
      <QuienSomos />
      <ImageGallery />
    </div>
  );
};

export default LaOptica;
