import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link
            activeClass="active"
            offset={-50}
            spy={true}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="features"
            smooth={true}
            duration={500}
          >
            Our Features
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="tokenomics"
            smooth={true}
            duration={500}
          >
            Tokenomics
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="roadmap"
            smooth={true}
            duration={500}
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            to="footer"
            smooth={true}
            duration={500}
          >
            Footer
          </Link>
        </li>
      </ul>
      <div className="login-btns">
        <button>Login In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
