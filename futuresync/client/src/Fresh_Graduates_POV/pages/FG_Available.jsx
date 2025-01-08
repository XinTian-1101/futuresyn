import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectCards.css";

const cardsData = [
  {
    id: 1, 
    category: "MySQL Database",
    title: "Dell database",
    description:
      "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    id: 2,
    category: "Data Analyst",
    title: "Predictive Analytics for Customer Retention",
    description:
      "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    id: 3,
    category: "Data Structure",
    title: "Cloud Infrastructure Cost Optimization",
    description:
      "Analyze Dell's cloud usage data and propose cost-saving measures. The task involves identifying inefficiencies in cloud resource allocation and suggesting optimizations for better cost management.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    id: 4,
    category: "Web Development",
    title: "Interactive Dashboard for Sales Performance Monitoring",
    description:
      "Design and develop an interactive dashboard to visualize Dell's sales performance data. The dashboard should include KPIs like revenue, sales growth, and regional performance trends.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
];

const FG_Available = () => {
  const navigate = useNavigate();

  const GoToProjectDetails = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-category">{card.category}</div>
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          <p className="card-uploaded-by">Uploaded By {card.uploadedBy}</p>
          <p className="card-participants">{card.participants}</p>
          <div className="card-footer">
            <button
              className="view-button"
              onClick={() => GoToProjectDetails(card.id)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FG_Available;