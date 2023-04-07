import React from "react";
import "./navbar.css";

const navbar = () => {
  const scrollToSection = (id) => {
    const navbarHeight = document.getElementById("navbar").clientHeight;
    const element = document.getElementById(id);
    const position = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <nav id="navbar">
      <ul>
        <li>
          <span className="nav-item" onClick={() => scrollToSection("home")}>
            Home
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollToSection("about")}>
            About
          </span>
        </li>
        <li>
          <span
            className="nav-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollToSection("resume")}>
            Resume
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollToSection("contact")}>
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
