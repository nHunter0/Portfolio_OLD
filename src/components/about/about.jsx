/*
TODO: Need to add logos to links
      Center links with the FIND ME ON heading BRUH (: 
      DONE!
*/
import "./about.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
            Hello! I'm Nathan Hunter, a distinguished graduate in Computer
            Science with a major in Cyber Security from the University of
            Wollongong, based in Wollongong, NSW, Australia. My academic journey
            also includes a foundational year in Cell/Cellular and Molecular
            Biology at the same university and a Certificate in Intermediate
            Python 3 from Codecademy. My passion for technology is matched by my
            diverse educational background and a solid track record of practical
            experience in the tech industry.
          </p>

          <p>
            Currently, I'm applying my skills as a Freelance Application
            Developer, where I'm developing a secure and user-friendly
            full-stack mobile application for enhancing patient care. This role
            capitalizes on my expertise in React Native, allowing for
            cross-platform compatibility and direct impact in the health sector.
            Previously, I honed my software engineering skills as an intern at
            GetData Software Development Company in Sydney, where I focused on
            software maintenance, bug fixes, and creating virtual testing
            environments.
          </p>

          <p>
            My project portfolio includes leading the frontend development of
            "Social Stories," a React.js-based application designed to support
            children with Autism by generating personalized social stories. This
            project not only secured third place in the UOW ICT trade show but
            is also transitioning into a startup, showcasing my ability to
            contribute to meaningful tech solutions with societal impact.
            Additionally, I've developed a Machine Learning-Based Resistor
            Identification System using Python, Keras, and TensorFlow,
            demonstrating my capability in applying advanced technologies to
            practical applications.
          </p>

          <p>
            I'm proficient in multiple programming languages, including Python,
            JavaScript (React, React Native), C++, and Java, with extensive
            experience in full-stack web development and machine learning. My
            technical skills are complemented by a commitment to cybersecurity,
            virtualization, and agile methodologies, alongside expertise in
            database management, version control, and system administration.
          </p>

          <p>
            Beyond my technical endeavors, I'm actively involved in volunteer
            work and have a passion for sports, contributing to my community
            through involvement in local church initiatives and competitive
            soccer.
          </p>

          <p>
            Let's connect and explore how we can collaborate on future tech
            innovations. Feel free to reach out to me on{" "}
            <a href="https://www.linkedin.com/in/h-nathan/">LinkedIn</a> or view
            my projects on my{" "}
            <a href="https://nhunter0.github.io/Portfolio/">Portfolio</a>. If
            you're interested in discussing potential opportunities or
            innovative projects, please don't hesitate to{" "}
            <a href="#contact">contact</a> me. References are available upon
            request.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
