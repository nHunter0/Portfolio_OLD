import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/nhunter0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https:/www.linkedin.com/in/h-nathan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Nathan Hunter</p>
      </div>
    </footer>
  );
};

export default footer;
