import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* HEADER */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* PROGRAMS INFORMATION */}
      <div className="programs-catagories">
        {programsData.map((programs) => (
          <div className="category">
            {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details}</span>

            {/* JOIN NOW BUTTON */}
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
