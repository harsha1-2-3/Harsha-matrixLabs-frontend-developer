import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";

import "./index.css";
const Footer = () => {
  return (
    <div className="fo-cont">
      <div className="fo-logo-icon-cont">
        <div className="fo-logo-cont">
          <img
            className="fo-logo"
            alt="logo"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1728997075/Group_20_tjxcet.svg"
          />
          <h1 className="fo-head">EthAi</h1>
        </div>
        <div className="fo-icons-cont">
          <FaTelegramPlane className="fo-icon" />
          <FaInstagram className="fo-icon" />
          <FaXTwitter className="fo-icon" />
          <FaFacebookF className="fo-icon" />
          <GiBinoculars className="fo-icon" />
        </div>
      </div>
      <div className="fo-designer-cont">
        <h1 className="fo-designer-head">
          "Designed for Traders of today, Just like you."
        </h1>
        <div className="fo-email-cont">
          <input
            placeholder="What's Your Work Email?"
            className="fo-input"
            type="email"
          />
          <button className="fo-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
