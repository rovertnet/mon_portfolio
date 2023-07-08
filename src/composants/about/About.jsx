import React from 'react';
import "./about.css";
import aboutImg from "../../assets/moi.png";
import CV from "../../assets/CV_Robert.pdf";

const About = () => {
  return (
    <div className="about section" id="about">
        <h2 className="section_title">A propos de moi</h2>
        <span className="section_subtitle">mon introduction</span>
        <div className="about_container container grid">
            <img src={aboutImg} alt="" className="about_img" />
            <div className="about_data">
                
            </div>
        </div>
    </div>
  )
}

export default About