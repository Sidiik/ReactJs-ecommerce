import React from "react";
import heroImg from "./imgs/hero.jfif";

function HeroSection() {
  return (
    <div className="hero">
      <img src={heroImg} className="hero-img" alt="" />
      <div className="typography text-light text-right">
        <h1 className="display-1">Tech Things..</h1>
        <p className="lead">30% of summer vacation</p>
        <button className="shop rounded"> SHOP NOW</button>
      </div>
    </div>
  );
}

export default HeroSection;
