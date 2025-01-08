import React, { useState } from "react";
import "../styles/EM_Form.css";

const PhaseForm = ({ phaseNumber, onPhaseDataChange }) => {
    const [phaseData, setPhaseData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedPhaseData = { ...phaseData, [name]: value };

         if (updatedPhaseData.startDate && updatedPhaseData.endDate) {
        const startDate = new Date(updatedPhaseData.startDate);
        const endDate = new Date(updatedPhaseData.endDate);
        if (startDate > endDate) {
            alert('Start date must be before end date');
            return;
        }
    }

        setPhaseData(updatedPhaseData);
        onPhaseDataChange(phaseNumber, updatedPhaseData);
   
        console.log(`Phase ${phaseNumber} data updated:`, updatedPhaseData);
    };

    return (
        <>
            <h3 className="pageSubTitle" style={{ marginTop: '10px', marginBottom: '-10px' }}>
                Phase {phaseNumber}
            </h3>
            <div className="row" id="row2">
                <div className="col">
                    <p>Phase Title</p>
                    <input
                        type="text"
                        name="title"
                        value={phaseData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <p>Duration (Start Date and End Date)</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input
                            type="date"
                            name="startDate"
                            value={phaseData.startDate}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="endDate"
                            value={phaseData.endDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Description</p>
                    <textarea
                        name="description"
                        value={phaseData.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
};

export default PhaseForm;
