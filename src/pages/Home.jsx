import React from "react";
import "../styles/Home.scss";
import NavigationInformation from "../components/NavigationInformation";
import NavigationBar from "../components/NavigationBar";
import ImagenIn from "../components/ImagenIn";

import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container">
      <NavigationInformation />
      <NavigationBar />
      <ImagenIn />
      <Carousel />
    </div>
  );
};

export default Home;
