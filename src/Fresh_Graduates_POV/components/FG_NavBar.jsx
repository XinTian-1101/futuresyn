import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Images/Logo.png";

import "../styles/FG_Narbar.css"

const FG_Navbar = () => {

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const determineActiveItem = () => {
      const path = location.pathname;
      if (path.includes("/FG_Home")) {
        return "Learning & Project";
      } else if (path.includes("/FG_IndustryTrend")) {
        return "Industry Trend";
      } else if (path === "/FG_Available") {
        return "Available";
      } else if (path === "/FG_Completed") {
        return "Completed";
      } else if (path === "/FG_InProgress") {
        return "In-Progress";
      } else if (path === "/FG_Workshop") {
        return "Workshop";
      }
    };

    setActiveItem(determineActiveItem());
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setDropdownVisible(false); // Close dropdown after clicking an item
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false); // Hide dropdown when mouse leaves
  };

  return (
 
    <div className="navbarContainer">

      <div className = "ImageContainer">
            <img src={Logo} alt="FutureSync Logo" width="200" height="125" />
      </div>

      <nav className="navbar">

        <div className="navbar-brand">
          <img src={Logo} alt="FutureSync Logo" width="150" height="130" />
        </div>

        <div className="navbar-links">
          <ul
            className={`nav-item ${
              activeItem === "Learning & Project" ? "active" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link">Learning & Project</div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <Link
                  to="/FG_Available"
                  className="dropdown-item"
                  onClick={() => handleItemClick("Available")}
                >
                  Available
                </Link>
                <Link
                  to="/FG_InProgress"
                  className="dropdown-item"
                  onClick={() => handleItemClick("In-Progress")}
                >
                  In-Progress
                </Link>
                <Link
                  to="/FG_Completed"
                  className="dropdown-item"
                  onClick={() => handleItemClick("Completed")}
                >
                  Completed
                </Link>
              </div>
            )}
          </ul>

          <ul
            className={`nav-item ${
              activeItem === "Industry Trend" ? "active" : ""
            }`}
          >
            <Link
              className="nav-link"
              to="/FG_IndustryTrend"
              onClick={() => handleItemClick("Industry Trend")}
            >
              Industry Trend
            </Link>
          </ul>

          <ul
            className={`nav-item ${
              activeItem === "Workshop" ? "active" : ""
            }`}
          >
            <Link
              className="nav-link"
              to="/FG_Workshop"
              onClick={() => handleItemClick("Workshop")}
            >
              Workshop
            </Link>
          </ul>
        </div>

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