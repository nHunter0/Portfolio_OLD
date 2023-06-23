import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";
import prog1 from "../../images/prog1.jpg";
import prog2 from "../../images/prog2.jpg";
import prog3 from "../../images/prog3.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "TFIDF NLP",
      description:
        "This TF-IDF calculator processes text from .txt and .pdf files, featuring a drag-and-drop Tkinter GUI.",
      image: prog1,
      githubLink:
        "https://github.com/nHunter0/TF.IDF-Natural-Language-Processor-",
    },
    {
      id: 2,
      name: "FileSystem CPP",
      description:
        "This repository hosts a simulated file system in C++, leveraging the MD5 algorithm for security.",
      image: prog2,
      githubLink: "https://github.com/nHunter0/FileSystem-Cpp",
    },
    {
      id: 3,
      name: "Portfolio",
      description:
        "This repository showcases my dynamic and interactive portfolio, crafted using the power and flexibility of React.",
      image: prog3,
      githubLink: "https://github.com/nHunter0/Portfolio",
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

              <a className="project-button" href={project.githubLink}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
