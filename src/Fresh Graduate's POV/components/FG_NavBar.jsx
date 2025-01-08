import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Images/Logo.png";

import "../styles/FG_Narbar.css"

const FG_Navbar = () => {

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Learning & Project ");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  useEffect(() => {
    const determineActiveItem = () => {
      const path = location.pathname;
      if (path.includes("/FG_learningProject")) {
        return "Learning & Project";
      } else if (path.includes("/FG_IndustryTrend")) {
        return "Industry Trend";
      } else {
        return "";
      }
    };

    setActiveItem(determineActiveItem());
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
 
    <div className="navbarContainer">

      <div className = "ImageContainer">
            <img src={Logo} alt="FutureSync Logo" width="200" height="125" />
      </div>

      <nav className="navbar">

        <div className="navbar-brand">

          <div className = "MenuItem">
            <div className="navbar-links">
              <ul className={`nav-item ${activeItem === "Learning & Project" ? "active" : ""}`}>
                <Link
                  className="nav-link"
                  to="/FG_LearningProject"
                  onClick={() => handleItemClick("Learning & Project")}>
                  Learning & Project
                </Link>
              </ul>

              <ul
                className={`nav-item ${activeItem === "Industry Trend" ? "active" : ""}`}>
                <Link
                  className="nav-link"
                   to="/FG_IndustryTrend"
                  onClick={() => handleItemClick("Industry Trend")}>
                  Industry Trend
                </Link>
              </ul>
          

              <div className="logout">
                <button className="logout-button">Log Out</button>
              </div>   
              
            </div>
          </div>  
        </div>  
      </nav>
    </div>
  );
};

export default FG_Navbar;