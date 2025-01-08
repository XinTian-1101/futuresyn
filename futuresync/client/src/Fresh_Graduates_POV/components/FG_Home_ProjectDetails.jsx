import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/ProjectCards.css";

const cardsDataDetails = [
  {
    id: 1,
    category: "MySQL Database",
    title: "Dell database",
    description:
      "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
    requirements: [
      "Proficiency in SQL (PostgreSQL/MySQL preferred).",
      "Familiarity with database normalization and indexing.",
      "Knowledge of ERD (Entity-Relationship Diagram) design.",
    ],
    award: "E-certificate and a potential mentorship opportunity at Dell.",
    minimumRequirements: [
      "SQL proficiency score of 80%+ on Skill Gap Analysis Tool.",
      "Participation in at least one prior project.",
    ],
    duration: "10/01/2023 - 10/02/2025",
  },
  {
    id: 2,
    category: "Data Analyst",
    title: "Predictive Analytics for Customer Retention",
    description:
      "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
    uploadedBy: "Dell Company",
    participants: "15 Participants",
    requirements: [
      "Knowledge of machine learning and predictive analytics.",
      "Experience in Python/R programming.",
      "Familiarity with customer churn models.",
    ],
    award: "Certification and a Dell workshop invitation.",
    minimumRequirements: [
      "Basic knowledge of statistics.",
      "Completed at least 2 data-related projects.",
    ],
    duration: "01/05/2024 - 01/06/2025",
  },
];

const CardDetails = () => {
  const { id } = useParams();
  const project = cardsDataDetails.find(
    (card) => card.id === parseInt(id, 10)
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const handleRegisterClick = () => {
    Swal.fire({
      title: "Do you confirm participation?",
      text: "You must be responsible to complete the task you participated in.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "swal-popup",
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registered!",
          text: "You have successfully registered.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div className="card-details-container">
      <div className="card">
        <div className="card-category">{project.category}</div>
        <h2 className="card-title">{project.title}</h2>
        <p className="card-description">{project.description}</p>
        <p className="card-uploaded-by">Uploaded By {project.uploadedBy}</p>
        <p className="card-participants">{project.participants}</p>

        <h3>Requirements</h3>
        <ul className="card-requirements">
          {project.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3>Award</h3>
        <p className="card-award">{project.award}</p>

        <h3>Minimum Requirements</h3>
        <ul className="card-minimum-requirements">
          {project.minimumRequirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3>Duration</h3>
        <p className="card-duration">{project.duration}</p>

        <div className="card-footer">
          <button className="view-button" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;