import React from "react"
import HeroImage from "../images/hero.png"

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--image" src={HeroImage} alt="Hero" />

      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind host-all without leaving home.</p>
    </section>
  );
}