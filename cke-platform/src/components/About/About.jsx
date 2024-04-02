import React from "react";
import "./About.css";
import Header from "./Header/Header";
import Mission from "./Mission/Mission";
import Teamdata from "./Teamdata/Teamdata"; 

export default function About() {
  return (
    <div className="about-container">
      <div className="section"><Header /></div>
      <div className="section"><Mission /></div>
      <div className="section"><Teamdata /></div>
    </div>
  );
}
