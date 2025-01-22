import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-card">
        <img
          src="src/assets/JTimage.png" // Replace with the actual image name
          alt="Jen Thompson"
          className="about-me-image"
        />
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Jen Thompson, a web developer passionate about building dynamic,
            user-friendly applications. I look forward to diving into technical
            challenges and working enthusiastically with team members. I strive to find the best and most
            streamlined way to interact with your clients, employees, and manage both the front-end and back-end ofyour
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
