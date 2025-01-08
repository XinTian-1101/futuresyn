import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Images/Logo.png";
import "../styles/Navbar.css";

const FG_Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Learning & Project");

  useEffect(() => {
    const determineActiveItem = () => {
      const path = location.pathname;
      if (path === "/FG_IndustryTrend") {
        return "Industry Trend";
      } else if (path === "/FG_Home") {
        return "Home";
      }
      return "";
    };

    setActiveItem(determineActiveItem());
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={Logo} alt="FutureSync Logo" width="150" height="130" />
        </div>
        <div className="navbar-links">
          <ul className={`nav-item ${activeItem === "Home" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/FG_Home"
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
          </ul>

          <ul className={`nav-item ${activeItem === "Learning & Project" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/FG_LearningProject"
              onClick={() => handleItemClick("Learning & Project")}
            >
              Learning & Project
            </Link>
          </ul>

          <ul className={`nav-item ${activeItem === "Industry Trend" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/FG_IndustryTrend"
              onClick={() => handleItemClick("Industry Trend")}
            >
              Industry Trend
            </Link>
          </ul>
        </div>

        <div className="logout">
          <button className="logout-button">Log Out</button>
        </div>
      </nav>
    </div>
  );
};

export default FG_Navbar;
