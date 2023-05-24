import React from "react";
import "./home.css";
import Type from "../Type";
import Particle from "../Particle";

function Home() {
  return (
    <div id="home">
      <Particle />
      <div className="home-container">
        <div className="home-text">
          <p>
            Hi,
            <br />
            I'M <span className="home-text-name">NATHAN HUNTER</span>
          </p>
          <div className="home-text-type">
            <Type />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
