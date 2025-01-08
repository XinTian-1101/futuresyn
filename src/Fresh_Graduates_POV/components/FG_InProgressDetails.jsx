import React from "react";
import "../styles/InProgressDetail.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const cardsDataDetails = [
  {
    id: 1,
    category: "MySQL Database",
    title: "Dell database",
    description:
      "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
    participants: "10 Participants",
    requirements: [
      "Proficiency in SQL (PostgreSQL/MySQL preferred).",
      "Familiarity with database normalization and indexing.",
      "Knowledge of ERD (Entity-Relationship Diagram) design.",
    ],
    award: "E-certificate and a potential mentorship opportunity at Dell.",
    duration: "10/01/2023 - 10/02/2025",
    mentor: "John Doe (john.doe@dell.com)",
    progress: "33%",
  },{
    id: 2,
    category: "Data Structure",
    title: "Predictive Analytics for Customer Retention",
    description:
      "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
    participants: "40 Participants",
    requirements: [
      "Proficiency in SQL (PostgreSQL/MySQL preferred).",
      "Familiarity with database normalization and indexing.",
      "Knowledge of ERD (Entity-Relationship Diagram) design.",
    ],
    award: "E-certificate and a potential mentorship opportunity at Dell.",
    duration: "20/01/2023 - 10/02/2025",
    mentor: "Ali (Ali@dell.com)",
    progress: "50%",
  }
];

const InProgressCardDetails = () => {
  const navigate = useNavigate();

  const GoToUploadPage = () => {
    navigate(`/UploadProjectPage`);
  };

  const { id } = useParams();
  const tasks = cardsDataDetails.find(
    (card) => card.id === parseInt(id, 10)
  );

  if (!tasks) {
    return <h2>Tasks not found</h2>;
  }

  return (
    <div className="card-details-container">
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-category">{tasks.category}</div>
            <h2 className="card-title">{tasks.title}</h2>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: tasks.progress }}
              ></div>
            </div>
            <span className="progress-text">{tasks.progress}</span>
          </div>
        </div>

        <div className="card-content">
          <h3>Description</h3>
          <p className="card-description">{tasks.description}</p>

          <h3>Requirements</h3>
          <ul className="card-requirements">
            {tasks.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h3>Award</h3>
          <p className="card-award">{tasks.award}</p>

          <h3>Mentor</h3>
          <p className="card-mentor">{tasks.mentor}</p>

          <h3>Duration</h3>
          <p className="card-duration">{tasks.duration}</p>
        </div>

        <div className="card-footer">
          <button className="submit-button" onClick={GoToUploadPage}>
            Add Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default InProgressCardDetails;
