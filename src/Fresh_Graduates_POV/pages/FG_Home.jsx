import React from "react";
import "../styles/FG_Home.css";
import Cards from "../components/FG_Home_ProjectCards";
import FGHomePhoto from "../../Images/FGHomePhoto.png";

const FG_Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the FutureSync Page</h1>

      <img
        src={FGHomePhoto}
        alt="FutureSync Banner"
        className="home-banner"
      />

      <div className="home-project-cards">
        <Cards />
      </div>
    </div>
  );
};

export default FG_Home;
