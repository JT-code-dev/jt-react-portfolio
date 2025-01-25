import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>

      {/* Resume Download Card */}
      <div className="card resume-download">
        <a href="/path-to-your-resume.pdf" download>Download My Resume</a>
      </div>

      {/* Proficiency Cards Section */}
      <h3>Front-End and Back-End Programming</h3>
      <div className="proficiency-container">
        {/* Left Card */}
        <div className="card small-card">
          <h4>Other Related Experience</h4>
          <ul>
            <li>Project Management</li>
            <li>Geographic Information Systems</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>

        {/* Center Large Card */}
        <div className="card large-card">
          <h4>Front-end and Back-end Programming</h4>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript, React</li>
            <li>PostgreSQL, Node.js</li>
            <li>Express, REST APIs</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="card small-card">
          <h4>Other Related Experience</h4>
          <ul>
            <li>Published Scientific Researcher</li>
            <li>Client Relations, Sales & Marketing</li>
            <li>Global Team Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
