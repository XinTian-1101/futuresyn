import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ParticipantCard.css";

const ParticipantCard = ({a,b,c,d}) => {

    const nav = useNavigate();
    
    const handleViewClick = () => {
        nav('/EM_ViewParticipants');
    };

    return (
        <div className="card">
            <div className="card-category">{a}</div>
            <h2 className="card-title">{b}</h2>
            <p className="card-description">{c}</p>
            <div className="card-footer">
                <span>{d}</span>
                <button className="view-button" onClick={handleViewClick}>Review</button>
            </div>
        </div>
    );
};

export default ParticipantCard;