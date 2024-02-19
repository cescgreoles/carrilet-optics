import React from "react";
import "../styles/ImageGallery.scss";
import Post2 from "../assets/silla.jpeg";

const ImageGallery = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={Post2} alt="Card" />
        </div>
        <div className="card-text">
          <h3 className="card-title">titulo</h3>
          <p>text-description</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card-image">
          <img src={Post2} alt="Card" />
        </div>
        <div className="card-text">
          <h3 className="card-title">titulo</h3>
          <p>text-description</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card-image">
          <img src={Post2} alt="Card" />
        </div>
        <div className="card-text">
          <h3 className="card-title">titulo</h3>
          <p>text-description</p>
        </div>
      </div>
      <div className="card-content">
        <div className="card-image">
          <img src={Post2} alt="Card" />
        </div>
        <div className="card-text">
          <h3 className="card-title">titulo</h3>
          <p>text-description</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
