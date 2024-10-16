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
      <Link to="home">
        <img
          class="logo"
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728997075/Group_20_tjxcet.svg"
          alt="logo"
        />
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li className="nav-links-li">
          <Link
            activeClass="active"
            spy={true}
            to="features"
            smooth={true}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li className="nav-links-li">
          <Link
            activeClass="active"
            spy={true}
            to="about"
            smooth={true}
            duration={500}
          >
            Why Us
          </Link>
        </li>
        <li className="nav-links-li">
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
        <li className="nav-links-li">
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
      </ul>
      <div className="login-btns">
        <button className="login-btn">Login In</button>
        <button className="paper-btn">Whitepaper</button>
      </div>
    </nav>
  );
};

export default Navbar;
