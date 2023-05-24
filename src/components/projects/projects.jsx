import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Project 1",
      description: "This is the first project description.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/nhunter0",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is the second project description.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/nhunter0",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is the third project description.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/nhunter0",
    },
  ];

  const [colorMap, setColorMap] = useState(new Map());

  const handleLetterHover = (letter) => {
    const newColorMap = new Map(colorMap);
    if (newColorMap.has(letter)) {
      newColorMap.delete(letter);
    } else {
      newColorMap.set(letter, true);
    }
    setColorMap(newColorMap);
  };

  const renderLetter = (letter, index) => {
    const color = colorMap.has(letter) ? "#af5def" : "#fff";
    return (
      <span
        key={index}
        onMouseEnter={() => handleLetterHover(letter)}
        onMouseLeave={() => handleLetterHover("")}
        style={{ color: color }}
      >
        {letter}
      </span>
    );
  };
  const progStr = "PROJECT";

  return (
    <div id="projects">
      <div className="projects-container">
        <div className="projects-text">
          {progStr
            .split("")
            .map((letter, index) => renderLetter(letter, index))}
          <div className="projects-text-disc">
            <p>Here are a few recent projects I've work on</p>
            <p>*Section still under development*</p>
          </div>
        </div>

        {projectList.map((project) => (
          <div key={project.id} className="project-box">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </a>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-button" href={project.githubLink}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
