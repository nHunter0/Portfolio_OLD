import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";

import prog1 from "../../images/prog1.jpg";
import prog2 from "../../images/prog2.jpg";
import prog3 from "../../images/prog3.jpg";
import prog4 from "../../images/prog4.jpg";
import prog5 from "../../images/prog7-text.jpg";
import prog6 from "../../images/prog6-nhcoin.jpg";
import prog7 from "../../images/prog5-news.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "News Search Engine ",
      description:
        "A simple news search engine that fetches top news articles using NewsAPI, scrapes content with BeautifulSoup, and performs sentiment analysis, ranking results based on TF-IDF relevance.",
      image: prog7,
      githubLink: "https://github.com/nHunter0/News-Search-Engine",
    },

    {
      id: 2,
      name: "Text Editor C++ ",
      description:
        "NHText is a text editor written in C++ with predictive text technology, improving typing efficiency and accuracy through NLP and machine learning.",
      image: prog5,
      githubLink: "https://github.com/nHunter0/TextEditorCpp",
    },

    {
      id: 3,
      name: "FileSystem CPP",
      description:
        "This repository hosts a simulated file system in C++, leveraging the MD5 algorithm for security.",
      image: prog2,
      githubLink: "https://github.com/nHunter0/FileSystem-Cpp",
    },
    {
      id: 4,
      name: "Block Chain Clicker Game ",
      description:
        "This repository This project is a fun, interactive game that combines the addictive nature of clicker games with the concept of mining cryptocurrency using a simple blockchain.",
      image: prog6,
      githubLink: "https://github.com/nHunter0/NHCoinMiningGame/",
      websitelink: "nhunter0.github.io/NHCoinMiningGame/",
    },

    {
      id: 5,
      name: "Resistor Detector ",
      description:
        "This repository contains the code necessary to train and utilize a Convolutional Neural Network (CNN) for resistor recognition from images. The trained model classifies 37 different resistor types with high accuracy. It is then used to detect and classify resistors in new, unseen images.",
      image: prog4,
      githubLink: "https://github.com/nHunter0/Resistor-Detector-",
    },
    {
      id: 6,
      name: "Portfolio",
      description:
        "This repository showcases my dynamic and interactive portfolio, crafted using the power and flexibility of React.",
      image: prog3,
      githubLink: "https://github.com/nHunter0/Portfolio",
    },

    {
      id: 7,
      name: "TFIDF NLP",
      description:
        "This TF-IDF calculator processes text from .txt and .pdf files, featuring a drag-and-drop Tkinter GUI.",
      image: prog1,
      githubLink:
        "https://github.com/nHunter0/TF.IDF-Natural-Language-Processor-",
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
