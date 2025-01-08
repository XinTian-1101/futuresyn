import React from "react";
import "../styles/ProjectCards.css";

const cardsData = [
  {
    category: "MySQL Database",
    title: "Dell database",
    description:
      "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    category: "Data Analyst",
    title: "Predictive Analytics for Customer Retention",
    description:
      "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    category: "Data Structure",
    title: "Cloud Infrastructure Cost Optimization",
    description:
      "Analyze Dell's cloud usage data and propose cost-saving measures. The task involves identifying inefficiencies in cloud resource allocation and suggesting optimizations for better cost management.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
  {
    category: "Web Development",
    title: "Interactive Dashboard for Sales Performance Monitoring",
    description:
      "Design and develop an interactive dashboard to visualize Dell's sales performance data. The dashboard should include KPIs like revenue, sales growth, and regional performance trends.",
    uploadedBy: "Dell Company",
    participants: "10 Participants",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-category">{card.category}</div>
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
          <p className="card-uploaded-by">Uploaded By {card.uploadedBy}</p>
          <div className="card-footer">
            <span>{card.participants}</span>
            <button className="view-button">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
