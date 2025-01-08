import React, { useState } from "react";
import PhaseForm from "../components/PhaseForm";
import axios from 'axios'; 
import "../styles/EM_Form.css";

const EM_Home = () => {

    const [phaseCount, setPhaseCount] = useState(1);
    
    const [formData, setFormData] = useState({
        editProjectTitle: '',
        editDomain: '',
        editDesc: '',
        editRule: '',
        editCriteria: '',
        editAward: '',
        editSkill: '',
        editNo: '',
        editCGPA: '',
        editLevel: '',
        editYear: '',
        phaseCount: 1,
        phases: [] 
    });

    const handlePhaseChange = (e) => {
        const count = parseInt(e.target.value, 10);
        setPhaseCount(count);
        setFormData((prev) => ({
            ...prev,
            phases: Array.from({ length: count }, (_, i) => prev.phases[i] || { title: '', startDate: '', endDate: '', description: '' }),
        }));
    };

    const handlePhaseDataChange = (phaseNumber, phaseData) => {
        setFormData((prev) => {
            const updatedPhases = [...prev.phases];
            updatedPhases[phaseNumber - 1] = phaseData;
            return { ...prev, phases: updatedPhases };
        });
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        console.log("Form data before validation:", formData);
    
        if (formData.phases.some((phase) => !phase.title || !phase.startDate || !phase.endDate || !phase.description)) {
            alert("All phases must have a title, start date, end date, and description.");
            return;
        }
    
        console.log("Validated form data:", formData);
    
        try {
            const response = await axios.post('http://localhost:5000/api/employers/EM_AddForm', {
                title: formData.editProjectTitle,
                domain: formData.editDomain,
                skills: [formData.editSkill],
                description: formData.editDesc,
                rules: [formData.editRule],
                criteria: [formData.editCriteria],
                award: formData.editAward,
                minCGPA: formData.editCGPA,
                educationLevel: formData.editLevel,
                graduationYear: formData.editYear,
                taskPhase: formData.phaseCount,
                phases: formData.phases,
                noParticipants: formData.editNo,
            });
            console.log("Response from server:", response.data);
        } catch (error) {
            console.error("Error saving the project!", error);
            if (error.response) {
                console.error("Error response from server:", error.response.data);
            }
        }
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
                            value={formData.editProjectTitle}
                            onChange={handleChange}

                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editProjectTitle && <span>{errors.editProjectTitle}</span>} */}
                        </div>
                    </div>
                    <div className="col">
                        <p>Domain</p>
                        <select  name="editDomain"  id="editDomain"  value={formData.editDomain}  onChange={handleChange}>
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
                            value={formData.editDesc}
                            onChange={handleChange}
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
                            value={formData.editRule}
                            onChange={handleChange}
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
                            value={formData.editCriteria}
                            onChange={handleChange}
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
                            value={formData.editAward}
                            onChange={handleChange}
                        />
                        <div className="displayErrorEditMessage">
                            {/* {errors.editAward && <span>{errors.editAward}</span>} */}
                        </div>
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Skills</p>
                        <select id="editSkill" name="editSkill"   value={formData.editSkill} onChange={handleChange}>
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
                            value={formData.editNo}
                            onChange={handleChange}
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
                            value={formData.editCGPA}
                            onChange={handleChange}
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
                            value={formData.editLevel}
                            onChange={handleChange}
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
                            value={formData.editYear}
                            onChange={handleChange}
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
                    <PhaseForm key={index} phaseNumber={index + 1} onPhaseDataChange={handlePhaseDataChange}/>
                ))}
            </div>
            <button
                className="view-button"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default EM_Home