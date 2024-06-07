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
            As a dedicated Software Engineer with a passion for cybersecurity
            and full-stack development, I thrive on solving complex technical
            challenges and enhancing user experiences. My diverse background,
            including a Bachelor of Computer Science with a major in Cyber
            Security and extensive hands-on experience, equips me with the
            skills needed to excel in today's fast-paced tech environment. Key
            Highlights:
          </p>
          <p>
            🔒 𝗖𝘆𝗯𝗲𝗿𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗘𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲: Graduated with distinction, majoring in
            Cyber Security. Proven experience in developing secure decryption
            solutions for iOS/Android backups, WeChat, and web browsers,
            ensuring data integrity and protection.
          </p>
          <p>
            💻 𝗙𝘂𝗹𝗹-𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁: Proficient in JavaScript (React, React
            Native), Node.js, Express.js, SQL, and MongoDB. Successfully
            developed a cross-platform mobile application enhancing personal
            assistant disability patient care, integrating robust backend
            services using Firebase.{" "}
          </p>
          <p>
            🤖 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴: Created a Machine Learning-Based Resistor
            Identification System with 90% accuracy using Python, Keras, and
            TensorFlow. Skilled in implementing data augmentation and
            preprocessing techniques.
          </p>
          <p>
            🔧 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗣𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆: Expertise in Python, C++, Java, and
            Delphi, with strong OOP principles. Experienced in Agile & DevOps
            methodologies, utilizing tools like Jira and Git for efficient
            project management.
          </p>
          <p>
            I get excited about opportunities that challenge me to leverage my
            technical skills in Python, JavaScript, C++, and Java for innovative
            projects, especially those that make a meaningful impact on society
            or specific communities. I love connecting with new people and
            exploring potential collaborations.
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
