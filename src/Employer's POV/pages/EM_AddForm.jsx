import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import axios from "axios";
import PhaseForm from "../components/PhaseForm";
import "../styles/EM_Form.css";

const EM_AddForm = () => {

    const nav = useNavigate();

    const [phaseCount, setPhaseCount] = useState(1);

    const [formData, setFormData] = useState({
        editProjectTitle: "",
        editDomain: "",
        editDesc: "",
        editRule: "",
        editCriteria: "",
        editAward: "",
        editSkill: "",
        editNo: "",
        editCGPA: "",
        editLevel: "",
        editYear: "",
        phases: Array.from({ length: phaseCount }, () => ({
            phaseTitle: "",
            phaseStartDate: "",
            phaseEndDate: "",
            phaseDescription: ""
        })),
    });

    const handlePhaseCountChange = (event) => {
        const count = parseInt(event.target.value);
        setPhaseCount(count);
        setFormData((prevData) => ({
            ...prevData,
            phases: Array.from({ length: count }, (_, i) => prevData.phases[i] || {
                phaseTitle: "",
                phaseStartDate: "",
                phaseEndDate: "",
                phaseDescription: ""
            }),
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePhaseChange = (index, field, value) => {
        setFormData((prevData) => {
            const updatedPhases = [...prevData.phases];
            updatedPhases[index][field] = value;
            return { ...prevData, phases: updatedPhases };
        });
    };

    const handleSubmit = async () => {
        // try {
        //     const response = await axios.post(
        //         `/api/employer/project/post`,
        //         {
        //             projectTitle: formData.editProjectTitle,
        //             domain: formData.editDomain,
        //             description: formData.editDesc,
        //             rules: formData.editRule,
        //             criteria: formData.editCriteria,
        //             award: formData.editAward,
        //             skill: formData.editSkill,
        //             teamSize: formData.editNo,
        //             cgpaRequirement: formData.editCGPA,
        //             level: formData.editLevel,
        //             year: formData.editYear,
        //             phases: formData.phases.map(phase => ({
        //                 title: phase.phaseTitle,
        //                 startDate: phase.phaseStartDate,
        //                 endDate: phase.phaseEndDate,
        //                 description: phase.phaseDescription,
        //             })),
        //         },
        //         {
        //             headers: { Authorization: `Bearer ${token}` },
        //         }
        //     );

        //     if (response.status === 201) {
        //         nav(`/EM_Home`);
        //         window.scrollTo({ top: 0, behavior: 'smooth' });
        //     }
        // } catch (error) {
        //     console.error("Error uploading project:", error);
        // }
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
                    </div>
                    <div className="col">
                        <p>Domain</p>
                        <select
                            name="editDomain"
                            id="editDomain"
                            value={formData.editDomain}
                            onChange={handleChange}
                        >
                            <option value="">-- Please Select --</option>
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
                            name="editDesc"
                            id="editDesc"
                            value={formData.editDesc}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Rules</p>
                        <textarea
                            name="editRule"
                            id="editRule"
                            value={formData.editRule}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Participant Criteria</p>
                        <textarea
                            name="editCriteria"
                            id="editCriteria"
                            value={formData.editCriteria}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Award</p>
                        <textarea
                            name="editAward"
                            id="editAward"
                            value={formData.editAward}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Skills</p>
                        <select
                            name="editSkill"
                            id="editSkill"
                            value={formData.editSkill}
                            onChange={handleChange}
                        >
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
                    </div>
                </div>
                <h3 className="pageSubTitle" style={{ marginTop: '50px' }}>Project Phases</h3>
                <div className="row" id="row2">
                    <div className="col">
                        <p>Project Phase Count</p>
                        <select
                            id="editPhase"
                            name="editPhase"
                            onChange={handlePhaseCountChange}
                            value={phaseCount}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                {formData.phases.map((phase, index) => (
                    <PhaseForm
                        key={index}
                        phaseNumber={index + 1}
                        phaseData={phase}
                        handlePhaseChange={(field, value) => handlePhaseChange(index, field, value)}
                    />
                ))}
                <div className="righButtonContainer">
                    <button
                        className="view-button"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EM_AddForm;