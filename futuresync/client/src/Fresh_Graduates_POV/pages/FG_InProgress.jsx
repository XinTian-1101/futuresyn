import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inProgress.css";

const cardsData = [
  {
    id: 1,
    category: "MySQL Database",
    title: "Dell database",
    description:
      "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
    uploadedBy: "Dell Company",
    progress: "33%",
  },
  {
    id: 2,
    category: "Data Structure",
    title: "Predictive Analytics for Customer Retention",
    description:
      "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
    uploadedBy: "Dell Company",
    progress: "50%",
  },
];

const FG_InProgress = () => {
  const navigate = useNavigate();

  const GoToInProgressProjectDetails = (id) => {
    navigate(`/InprogressProject/${id}`);
  };

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-header">
            <div>
              <div className="card-category">{card.category}</div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <p className="card-uploaded-by">Uploaded By {card.uploadedBy}</p>
            </div>
            <div className="card-progress">{card.progress}</div>
          </div>
          <div className="card-footer">
            <button
              className="view-button"
              onClick={() => GoToInProgressProjectDetails(card.id)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FG_InProgress;