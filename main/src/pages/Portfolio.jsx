import React from "react";
import Project from "./../components/Project"; // Correct import path
import "./Portfolio.css"; // Portfolio-specific styles

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        <Project
          title="GAME: Wake Up in a FLASH!"
          image="/src/assets/game-nap.png"
          deployLink="https://findmysunnyday.github.io/Wake-Up-In-A-Flash"
          repoLink="https://github.com/findmysunnyday/Wake-Up-In-A-Flash"
        />
        <Project
          title="Employee Tracker: POSTGRESQL + Node.js"
          image="src/assets/employee_tracker.png"
          repoLink="https://github.com/JT-code-dev/employee_tracker"
        />
        <Project
          title="Command Line Automated README.md Generator"
          image="src/assets/ReadMeGenJen2.png"
          repoLink="https://github.com/JT-code-dev/ReadMeJenGen"
        />
        <Project
          title="Weather Dashboard API Search Tool"
          image="src/assets/WeatherDash.png"
          deployLink="https://jt-weather-dash.onrender.com"
          repoLink="https://github.com/JT-code-dev/JT-weather-dash"
        />
        {/* Add more <Project /> components for additional projects */}
      </div>
    </section>
  );
};

export default Portfolio;
