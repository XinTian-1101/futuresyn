import React from "react";
import "../styles/FG_Home.css";
import Cards from "../components/FG_Home_ProjectCards";

const FG_Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the E_Home Page</h1>
      <p className="home-description">
        This is the landing page for the E_Home platform, where you can explore
        various features and resources tailored for fresh graduates.
      </p>
      <button className="home-button">Get Started</button>

      <div className="home-project-cards">
        <Cards />
      </div>
    </div>
  );
};

export default FG_Home;
