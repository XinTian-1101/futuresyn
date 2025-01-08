import React, { useState } from "react";
import PhaseForm from "../components/PhaseForm";
import "../styles/EM_Form.css";

const EM_Home = () => {

    const [phaseCount, setPhaseCount] = useState(1);

    const handlePhaseChange = (event) => {
        setPhaseCount(parseInt(event.target.value));
    };

    return (
        <div className="pageMainContainer">
            <h1 className="pageMainTitle">Project Details</h1>
            <div className="formContainer">
                <div className="row" id="row2">
                    <div className="col">
                        <p>Project Title</p>
                        <input
                            type="text"
                            name="editProjectTitle"
                            id="editProjectTitle"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editProjectTitle && <span>{errors.editProjectTitle}</span>} */}
                        </div>
                    </div>
                    <div className="col">
                        <p>Domain</p>
                        <select>
                            <option value="">-- Plase Select --</option>
                            <option value="Database Management and Development">Database Management and Development</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                            <option value="DevOps and Systems Engineering">DevOps and Systems Engineering</option>
                            <option value="Internet of Things (IoT)">Internet of Things (IoT)</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Data Science and Analytics">Data Science and Analytics</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Project Description</p>
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
                <div className="row">
                    <div className="col">
                        <p>Rules</p>
                        <textarea
                            type="text"
                            name="editRule"
                            id="editRule"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editRule && <span>{errors.editRule}</span>} */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Participant Criteria</p>
                        <textarea
                            type="text"
                            name="editCriteria"
                            id="editCriteria"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editCriteria && <span>{errors.editCriteria}</span>} */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Award</p>
                        <textarea
                            type="text"
                            name="editAward"
                            id="editAward"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editAward && <span>{errors.editAward}</span>} */}
                        </div>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Skills</p>
                        <select id="editSkill" name="editSkill">
                            <option value="JavaScript">JavaScript</option>
                            <option value="C++">C++</option>
                            <option value="Python">Python</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Express.js">Express.js</option>
                            <option value="Spring Boot">Spring Boot</option>
                            <option value="Ruby on Rails">Ruby on Rails</option>
                            <option value="Tableau">Tableau</option>
                            <option value="Power BI">Power BI</option>
                        </select>
                        <div className="displayErrorEditMessage">
                            {/* {errors.editSkill && <span>{errors.editSkill}</span>} */}
                        </div>
                    </div>
                    <div className="col">
                        <p>Number of Participants</p>
                        <input
                            type="number"
                            name="editNo"
                            id="editNo"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editNo && <span>{errors.editNo}</span>} */}
                        </div>
                    </div>
                </div>
                <h3 className="pageSubTitle" style={{ marginTop: '50px' }}>Filter Participants</h3>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Minimum CGPA</p>
                        <input
                            type="text"
                            name="editCGPA"
                            id="editCGPA"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editCGPA && <span>{errors.editCGPA}</span>} */}
                        </div>
                    </div>
                    <div className="col">
                        <p>Education Level</p>
                        <input
                            type="text"
                            name="editLevel"
                            id="editLevel"
                        />
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Graduation Year</p>
                        <input
                            type="text"
                            name="editYear"
                            id="editYear"
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editYear && <span>{errors.editYear}</span>} */}
                        </div>
                    </div>
                </div>
                <h3 className="pageSubTitle" style={{ marginTop: '50px' }}>Project Phases</h3>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Project Phase Count</p>
                        <select id="editPhase" name="editPhase" onChange={handlePhaseChange} value={phaseCount}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <div className="displayErrorEditMessage">
                            {/* {errors.editYear && <span>{errors.editYear}</span>} */}
                        </div>
                    </div>
                </div>
                {Array.from({ length: phaseCount }).map((_, index) => (
                    <PhaseForm key={index} phaseNumber={index + 1} />
                ))}
            </div>
        </div>
    );
};

export default EM_Home