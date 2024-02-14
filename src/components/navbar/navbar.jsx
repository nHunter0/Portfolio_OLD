import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const navbarHeight = document.getElementById("navbar").clientHeight;
    const element = document.getElementById(id);
    const position = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    setIsOpen(false); // Close the menu after clicking an item on mobile
  };

  return (
    <nav id="navbar">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
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

export default Navbar;
