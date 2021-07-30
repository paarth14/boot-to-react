import React from "react";
import "./StartBootstrap.css";
import profileImagepath from "./images/avataaars-removebg.png";
import frame from "./images/frame.jpg";

const StartBootstrap = () => {
  return (
    <div>
      <div className="home-content" id="startbootstrap">
        <img
          className="avatarwalascene"
          src={profileImagepath}
          alt="person avatar"
        />
        <h1 className="heading-uppercase">START BOOTSTRAP</h1>
        <img className="framewalascene" src={frame} alt="frame line" />
        <p className="home-title">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
};

export default StartBootstrap;
