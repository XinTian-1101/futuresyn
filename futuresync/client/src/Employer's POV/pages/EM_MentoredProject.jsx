import React from "react";
import "../styles/EM_Form.css";
import ParticipantCard from "../components/ParticipantCard";

const EM_MentoredProject = () => {
    return (
        <div className="pageMainContainer">
            <h1 className="pageMainTitle">Project Details</h1>
            <ParticipantCard a={'a'} b={2} c={3} d={4} />
        </div>
    );
};

export default EM_MentoredProject;