import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ projectData }) => {
    return (
        <div className="card">
            <div className="card-category">{projectData.category}</div>
            <h2 className="card-title">{projectData.title}</h2>
            <p className="card-description">{projectData.description}</p>
            <div className="card-footer">
                <span>{projectData.participants}</span>
                <button className="view-button">View</button>
            </div>
        </div>
    );
};

export default ProjectCard;