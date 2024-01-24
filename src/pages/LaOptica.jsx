import React from "react";
import BackButton from "../components/BackButton";
import QuienSomos from "../components/QuienSomos-1";
import NavigationInformation from "../components/NavigationInformation";
import ImageGallery from "../components/ImageGallery";
import NavigationBar from "../components/NavigationBar";

const LaOptica = () => {
  return (
    <div>
      <BackButton />
      <NavigationInformation />
      <NavigationBar />
      <QuienSomos />
      <ImageGallery />
    </div>
  );
};

export default LaOptica;
