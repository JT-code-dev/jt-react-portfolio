import React from "react";
import "../styles/Project.css"; // Adjusted import path

const Project = ({ title, image, deployLink, repoLink }) => {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="project-overlay">
        <h3>{title}</h3>
        <div className="project-links">
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;