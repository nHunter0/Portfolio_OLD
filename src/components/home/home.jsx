import React from "react";
import "./home.css";
import Type from "../Type";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <p>
          Hi,
          <p>
            I'M <span className="home-text-name">NATHAN HUNTER</span>
          </p>
        </p>
        <div className="home-text-type">
          <Type />
        </div>
      </div>
    </div>
  );
}

export default Home;
