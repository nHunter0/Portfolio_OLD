/*
TODO: Need to add logos to links
      Center links with the FIND ME ON heading BRUH (: 
*/
import "./about.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const about = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-text">
          <p>
            ABOUT <span className="about-text-me">ME</span>
          </p>
        </div>
        <div className="about-text-body">
          <p>
            Hi there! I'm Nathan, an enthusiastic Computer Science undergraduate
            at the University of Wollongong. My academic focus lies in data
            science, web development, and cybersecurity, with a constant
            curiosity towards new facets of computing. I'm proficient in C++,
            Python, MySQL, front-end development, including React. Currently,
            I'm intensifying my skills in JavaScript and React to broaden my
            technical repertoire. I'm always on the lookout for innovative
            projects and collaborations that challenge me and fuel my growth. I
            bring a unique mix of technical knowledge, creativity, and a desire
            to make a difference. Ready to shape the future of tech together! If
            you have an intriguing opportunity or would like to connect, reach
            out to me here on my <a href="#contact">contact</a> section.
          </p>
        </div>
        <div className="about-find-me-section">
          <div className="about-text">
            <p> FIND ME ON </p>
          </div>
          <div className="about-find-me-links">
            <a
              href="https://github.com/nHunter0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/h-nathan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
