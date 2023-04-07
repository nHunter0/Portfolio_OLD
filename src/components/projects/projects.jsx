import React from "react";
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
      githubLink: "https://github.com/example1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is the second project description.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/example2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is the third project description.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/example3",
    },
  ];

  return (
    <div id="projects">
      <div className="projects-container">
        <div className="projects-text">
          <p>PROJECTS</p>
          <span className="projects-text-disc">
            Here are a few recent projects I've work on
          </span>
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
