import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        {/* HEADER */}
        <Header />

        {/* ADD SECTION */}
        <div className="best-add">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* HERO HEADING */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* EXPERIENCE FIGURES */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>

      {/* HEADER RIGHT */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* HERO IMAGES */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* CALORIES */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>240 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
