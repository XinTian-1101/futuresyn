import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = (category, title, description, uploadedBy, participants) => {
    return (
        <div className="card">
            <div className="card-category">{category}</div>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-uploaded-by">Uploaded By {uploadedBy}</p>
            <div className="card-footer">
                <span>{participants}</span>
                <button className="view-button">View</button>
            </div>
        </div>
    );
};

export default ProjectCard;