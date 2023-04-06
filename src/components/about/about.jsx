/*
TODO: Need to add logos to links
      Center links with the FIND ME ON heading BRUH (: 
*/
import "./about.css";
import React from "react";

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
            DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
          </p>
        </div>
        <div className="about-find-me-section">
          <div className="about-text">
            <p> FIND ME ON </p>
          </div>
          <div class="about-find-me-links">
            <a href="https://github.com/">Github</a>
            <a href="https://www.linkedin.com/in/">LinkedIn</a>
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
