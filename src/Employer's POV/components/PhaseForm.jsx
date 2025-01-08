import React from "react";
import "../styles/EM_Form.css";

const PhaseForm = ({ phaseNumber }) => {

    return (
        <>
            <h3 className="pageSubTitle" style={{ marginTop: '10px', marginBottom: '-10px' }}>Phase {phaseNumber}</h3>
            <div className="row" id="row2">
                <div className="col">
                    <p>Phase Title</p>
                    <input
                        type="text"
                        name="editPhaseTitle"
                        id="editPhaseTitle"
                    />
                    <div className="displayErrorEditMessage">
                        {/* {errors.editPhaseTitle && <span>{errors.editPhaseTitle}</span>} */}
                    </div>
                </div>
                <div className="col">
                    <p>Duration (Start Date and End Date)</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input type="date" id="date" name="date"/>
                        <input type="date" id="date" name="date"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Description</p>
                    <textarea
                        type="text"
                        name="editDesc"
                        id="editDesc"
                    />
                    <div className="displayErrorEditMessage">
                        {/* {errors.editDesc && <span>{errors.editDesc}</span>} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhaseForm;