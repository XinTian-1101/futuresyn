import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/Logo.png";

import "../styles/EM_NavBar.css"

const EM_Navbar = () => {

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Learning & Project ");
  
  useEffect(() => {
    const determineActiveItem = () => {
      const path = location.pathname;
      if (path.includes("/EM_Home") || path.includes("/EM_ViewParticipants") || path.includes("/EM_AddForm") || path.includes("/EM_ViewProject")) {
        return "Project Board";
      } else if (path.includes("/EM_MentoredProject")) {
        return "Mentored Project";
      } else {
        return "";
      }
    };

    setActiveItem(determineActiveItem());
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
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
              <ul className={`nav-item ${activeItem === "Project Board" ? "active" : ""}`}>
                <Link
                  className="nav-link"
                  to="/EM_Home"
                  onClick={() => handleItemClick("Project Board")}>
                  Project Board
                </Link>
              </ul>

              <ul
                className={`nav-item ${activeItem === "Mentored Project" ? "active" : ""}`}>
                <Link
                  className="nav-link"
                   to="/EM_MentoredProject"
                  onClick={() => handleItemClick("Mentored Project")}>
                  Mentored Project
                </Link>
              </ul>

              <ul
                className={`nav-item ${activeItem === "Event" ? "active" : ""}`}>
                <Link
                  className="nav-link"
                   to="/EM_Event"
                  onClick={() => handleItemClick("Event")}>
                  Event
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

export default EM_Navbar;