import React from "react";
import "../styles/EM_Form.css";

const PhaseForm = ({ phaseNumber, phaseData, handlePhaseChange }) => {
    return (
        <>
            <h3 className="pageSubTitle" style={{ marginTop: "10px", marginBottom: "-10px" }}>Phase {phaseNumber}</h3>
            <div className="row">
                <div className="col">
                    <p>Phase Title</p>
                    <input
                        type="text"
                        name="phaseTitle"
                        value={phaseData.phaseTitle}
                        onChange={(e) => handlePhaseChange("phaseTitle", e.target.value)}
                    />
                </div>
                <div className="col">
                    <p>Duration (Start Date and End Date)</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input
                            id="date"
                            type="date"
                            name="phaseStartDate"
                            value={phaseData.phaseStartDate}
                            onChange={(e) => handlePhaseChange("phaseStartDate", e.target.value)}
                        />
                        <input
                            id="date"
                            type="date"
                            name="phaseEndDate"
                            value={phaseData.phaseEndDate}
                            onChange={(e) => handlePhaseChange("phaseEndDate", e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Description</p>
                    <textarea
                        name="phaseDescription"
                        value={phaseData.phaseDescription}
                        onChange={(e) => handlePhaseChange("phaseDescription", e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default PhaseForm;