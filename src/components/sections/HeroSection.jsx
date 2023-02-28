import React from "react";
import "./HeroSection.css";
import ContainerComponent from "../architectureComponents/ContainerComponent";
import SectionComponent from "../architectureComponents/SectionComponent";
import hero_img from "../../assets/hero-section-img.png";

function HeroSection() {
  return (
    <SectionComponent extraClass="hero-section" id="home">
      <ContainerComponent extraClass="hero-container">
        <h1 className="hero-section__title">
          Take your expenses under control
        </h1>
        <p className="big-para-text hero-section__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          sequi id maiores fugit saepe est dolores nihil magni ut
          totam tempora blanditiis aut aliquam voluptates, optio
          eius?
        </p>
        <div className="hero-section__email-btn">
            <input type="email" name="" id="" className="global-input" placeholder="Your email" />
            <button className="global-btn">Join the waitlist</button>
        </div>
        <img src={hero_img} alt="" className="hero-section__img"/>
      </ContainerComponent>
    </SectionComponent>
  );
}

export default HeroSection;
