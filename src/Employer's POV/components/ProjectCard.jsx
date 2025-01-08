import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectCard.css";

const ProjectCard = ({ projectData, status }) => {

    const nav = useNavigate();

    const handleViewClick = () => {
        console.log("nav")
        nav(`/EM_ViewProject/${1}`);
    };

    return (
        <div className="card">
            <div className="card-category">{projectData.category}</div>
            <h2 className="card-title">{projectData.title}</h2>
            <p className="card-description">{projectData.description}</p>
            <div className="card-footer">
                <span>{projectData.participants}</span>
                <button className="view-button" onClick={handleViewClick}>View</button>
            </div>
        </div>
    );
};

export default ProjectCard;